import React from 'react';
import ProjectCaseStudy from '../../components/ProjectCaseStudy';
import { projectsData } from '../../data/projectsData';

const ProjectPage = ({ projectId }) => {
  return <ProjectCaseStudy projectId={projectId} />;
};

export async function getStaticProps({ params }) {
  const { id } = params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectId: id,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ProjectPage;
