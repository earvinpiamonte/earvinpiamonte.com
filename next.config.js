module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Noel Earvin Piamonte',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.earvinpiamonte.com',
      title: 'Noel Earvin Piamonte | Software Engineer',
      description:
        'Noel Earvin Piamonte is a software engineer from Mandaluyong City, Philippines.',
      socialPreview: '/images/preview.png',
    },
    staticPages: [
      'pages/*.tsx',
      '!pages/_*.tsx',
      '!pages/api',
      '!pages/404.tsx',
      '!pages/[slug].tsx',
      '!pages/social-preview.tsx',
    ],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/daylight',
        destination: 'https://www.earvinpiamonte.com/daylight/',
        permanent: true,
      },
    ];
  },
};
