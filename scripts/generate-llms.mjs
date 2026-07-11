import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const CONTENT_DIR = path.join(ROOT, 'content');
const SITE_URL = 'https://www.earvinpiamonte.com';

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function readMdx(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  return matter(source);
}

function writeMd(outputPath, data, content) {
  ensureDir(outputPath);
  const output = matter.stringify(content.trim(), { ...data, generated: true });
  fs.writeFileSync(outputPath, output);
}

function isGeneratedMd(filePath) {
  try {
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);
    return data.generated === true;
  } catch {
    return false;
  }
}

function cleanGenerated() {
  const toRemove = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith('.md') && isGeneratedMd(fullPath)) {
        toRemove.push(fullPath);
      }
    }
  }

  walk(PUBLIC_DIR);

  const llmsPath = path.join(PUBLIC_DIR, 'llms.txt');
  if (fs.existsSync(llmsPath)) {
    toRemove.push(llmsPath);
  }

  for (const file of toRemove) {
    fs.unlinkSync(file);
  }

  removeEmptyDirs(PUBLIC_DIR);
}

function removeEmptyDirs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeEmptyDirs(fullPath);
      if (fs.readdirSync(fullPath).length === 0) {
        fs.rmdirSync(fullPath);
      }
    }
  }
}

function generateIndividualMd(type, slug, outputPath) {
  const filePath = path.join(CONTENT_DIR, type, slug, 'index.mdx');
  const { data, content } = readMdx(filePath);
  writeMd(outputPath, data, content);
  return { slug, ...data };
}

function writeListingMd(outputPath, { title, description, items }) {
  ensureDir(outputPath);
  const lines = [`# ${title}`, '', `> ${description}`, ''];
  for (const item of items) {
    const name = item.title || item.slug;
    const summary = item.summary || '';
    lines.push(`- [${name}](${SITE_URL}${item.path}.md): ${summary}`);
  }
  const output = matter.stringify(lines.join('\n') + '\n', { generated: true });
  fs.writeFileSync(outputPath, output);
}

function getSlugs(dir) {
  const fullPath = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath);
}

function main() {
  cleanGenerated();

  // Individual pages
  const kit = generateIndividualMd('page', 'kit', path.join(PUBLIC_DIR, 'kit.md'));

  const blogPosts = getSlugs('blog')
    .map((slug) => ({
      ...generateIndividualMd('blog', slug, path.join(PUBLIC_DIR, 'post', `${slug}.md`)),
      path: `/post/${slug}`,
    }))
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());

  const crafts = getSlugs('craft').map((slug) => ({
    ...generateIndividualMd('craft', slug, path.join(PUBLIC_DIR, 'craft', `${slug}.md`)),
    path: `/craft/${slug}`,
  }));

  const projects = getSlugs('project')
    .map((slug) => ({
      ...generateIndividualMd('project', slug, path.join(PUBLIC_DIR, 'project', `${slug}.md`)),
      path: `/project/${slug}`,
    }))
    .sort((a, b) => (b.year || 0) - (a.year || 0));

  const wtfItems = getSlugs('wtf-is').map((slug) => ({
    ...generateIndividualMd('wtf-is', slug, path.join(PUBLIC_DIR, 'wtf-is', `${slug}.md`)),
    path: `/wtf-is/${slug}`,
  }));

  // Certifications (listing only)
  const certifications = getSlugs('certification')
    .map((slug) => {
      const filePath = path.join(CONTENT_DIR, 'certification', slug, 'index.mdx');
      const { data } = readMdx(filePath);
      return { ...data, slug, path: `/certification/${slug}` };
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  // Experience (for index.md)
  const experiences = fs
    .readdirSync(path.join(CONTENT_DIR, 'experience'))
    .map((file) => {
      const filePath = path.join(CONTENT_DIR, 'experience', file);
      const { data } = readMdx(filePath);
      return { ...data, slug: file.replace('.mdx', '') };
    })
    .sort((a, b) => {
      const aEnd = a.yearEnd ?? new Date().getFullYear();
      const bEnd = b.yearEnd ?? new Date().getFullYear();
      return bEnd - aEnd;
    });

  // Listing pages
  writeListingMd(path.join(PUBLIC_DIR, 'portfolio.md'), {
    title: 'Portfolio',
    description: 'Selected projects I built as an independent software developer.',
    items: projects,
  });

  writeListingMd(path.join(PUBLIC_DIR, 'crafts.md'), {
    title: 'Crafts',
    description: "Things I've built personally. Most of these are open source and available on GitHub.",
    items: crafts,
  });

  writeListingMd(path.join(PUBLIC_DIR, 'blog.md'), {
    title: 'Blog',
    description: 'The only personal space where I write about my work, life and everything in between.',
    items: blogPosts,
  });

  writeListingMd(path.join(PUBLIC_DIR, 'wtf-is.md'), {
    title: 'What the fuck is...?',
    description: 'Welcome to my personal glossary. Answers to wtf questions that I have asked myself.',
    items: wtfItems,
  });

  writeListingMd(path.join(PUBLIC_DIR, 'certifications.md'), {
    title: 'Certifications',
    description: "Professional certifications I've earned.",
    items: certifications,
  });

  // Home page
  generateIndexMd({ experiences, certifications });

  // llms.txt
  generateLlmsTxt({ kit, blogPosts, crafts, projects, wtfItems, certifications });
}

function generateIndexMd({ experiences, certifications }) {
  const lines = [
    '# Noel Earvin Piamonte',
    '',
    '> Personal website of Noel Earvin Piamonte, a software engineer from Baguio City, Philippines. Currently a Software Engineer at Infor, building the Infor MSCM mobile app for Mobile Supply Chain Management. Outside work, he builds things for the web with React, Next.js, TypeScript and Tailwind CSS.',
    '',
    '## Experience',
    '',
  ];

  for (const exp of experiences) {
    const years = exp.yearEnd ? `${exp.yearStart} — ${exp.yearEnd}` : `${exp.yearStart} — Present`;
    lines.push(`### ${exp.title} · ${exp.company}`);
    lines.push('');
    lines.push(`${years} · ${exp.location}`);
    if (exp.tools?.length) {
      lines.push('');
      lines.push(`Tools: ${exp.tools.join(', ')}`);
    }
    lines.push('');
  }

  lines.push('## Certifications');
  lines.push('');
  for (const cert of certifications) {
    lines.push(`- [${cert.title}](${cert.url}): ${cert.provider}, ${cert.date}.`);
  }
  lines.push('');

  ensureDir(path.join(PUBLIC_DIR, 'index.md'));
  fs.writeFileSync(path.join(PUBLIC_DIR, 'index.md'), lines.join('\n') + '\n');
}

function generateLlmsTxt({ kit, blogPosts, crafts, projects, wtfItems, certifications }) {
  const lines = [
    '# Noel Earvin Piamonte',
    '',
    '> Personal website of Noel Earvin Piamonte, a software engineer from Baguio City, Philippines. Currently a Software Engineer at Infor, building the Infor MSCM mobile app for Mobile Supply Chain Management. Outside work, he builds things for the web with React, Next.js, TypeScript and Tailwind CSS.',
    '',
    'This site is a living collection of professional work, personal projects, writing and curated interests. The content is mostly static, authored in MDX and generated with Next.js. Markdown versions of pages are available by appending `.md` to the page URL.',
    '',
    '## Pages',
    '',
    `- [Home](${SITE_URL}/index.md): Introduction, work experience, certifications and featured content.`,
    `- [Portfolio](${SITE_URL}/portfolio.md): Selected projects I built as an independent software developer.`,
    `- [Crafts](${SITE_URL}/crafts.md): Things I've built personally. Most of these are open source and available on GitHub.`,
    `- [Blog](${SITE_URL}/blog.md): Personal writing about work, life and everything in between.`,
    `- [Wtf-is](${SITE_URL}/wtf-is.md): Personal glossary answering technical questions in plain language.`,
    `- [Kit](${SITE_URL}/kit.md): ${kit.summary || 'Hardware, software and platforms used daily.'}`,
    `- [Playlist](${SITE_URL}/playlist): Top Spotify tracks and movies/TV shows enjoyed.`,
    `- [Certifications](${SITE_URL}/certifications.md): Professional certificates and credentials.`,
    '',
    '## Crafts',
    '',
  ];

  for (const craft of crafts) {
    lines.push(`- [${craft.title}](${SITE_URL}${craft.path}.md): ${craft.summary || ''}`);
  }

  lines.push('');
  lines.push('## Portfolio projects');
  lines.push('');

  for (const project of projects) {
    lines.push(`- [${project.title}](${SITE_URL}${project.path}.md): ${project.summary || ''}`);
  }

  lines.push('');
  lines.push('## Blog posts');
  lines.push('');

  for (const post of blogPosts) {
    lines.push(`- [${post.title}](${SITE_URL}${post.path}.md): ${post.summary || ''}`);
  }

  lines.push('');
  lines.push('## WTF is glossary');
  lines.push('');

  for (const item of wtfItems) {
    lines.push(`- [${item.title}](${SITE_URL}${item.path}.md): ${item.summary || ''}`);
  }

  lines.push('');
  lines.push('## Certifications');
  lines.push('');

  for (const cert of certifications) {
    lines.push(`- [${cert.title}](${cert.url}): ${cert.provider}, ${cert.date}.`);
  }

  lines.push('');
  lines.push('## Professional profiles');
  lines.push('');

  lines.push('- [GitHub](https://www.earv.in/git): Open source repositories and contributions.');
  lines.push('- [LinkedIn](https://www.linkedin.com/in/earvinpiamonte): Professional profile and work history.');
  lines.push('- [Bluesky](https://bsky.app/profile/earvinpiamonte.com): Social profile.');
  lines.push('- [Resume](https://drive.google.com/file/d/1_41WdbqpUCRkR3vhS5DnEU31Ao30kuyQ/view): PDF resume.');
  lines.push('- [Email](mailto:earvin.piamonte@gmail.com): Direct contact.');

  lines.push('');
  lines.push('## Optional');
  lines.push('');

  lines.push('- [Freelancer.com profile](https://www.earv.in/fl): Independent software development profile and history.');
  lines.push('- [Ko-fi](https://www.earv.in/kofi): Support page.');
  lines.push('- [CodePen](https://www.earv.in/cp): Front-end experiments.');
  lines.push('- [CodeSandbox](https://www.earv.in/csb): Live code experiments.');

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), lines.join('\n') + '\n');
}

main();
