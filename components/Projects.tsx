import { ProjectType } from '@/types/index';

import ProjectItem from '@/components/ProjectItem';

const Projects = ({ data }: { data?: ProjectType[] }) => {
  const projects = data ?? [];

  const sortedProjects = projects.sort(
    (currentProject, nextProject) => nextProject.year - currentProject.year
  );

  return (
    <>
      {projects.length > 0 && (
        <>
          <div className="mb-20">
            {sortedProjects.map((project, i) => (
              <ProjectItem key={i} {...project} />
            ))}
          </div>
          <div className="mb-0">{/* <Pagination /> */}</div>
        </>
      )}
    </>
  );
};

export default Projects;
