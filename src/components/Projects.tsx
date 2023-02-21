import { COLORS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';
import ProjectCard from './ProjectCard';

export type ProjectImage = {
  url: string,
  width: number,
  height: number,
  alt: string,
};

export type Project = {
  name: string,
  description: string,
  image: ProjectImage;
};

const projectsData: Project[] = [
  {
    name: 'Product catalog and buy section user experience',
    description: 'asda',
    image: {
      url: '/img/category_page.png',
      width: 1551,
      height: 795,
      alt: 'asdasd'
    },
  },
  {
    name: 'Customizable gaming mice suite',
    description: 'A web page with a 3D mouse, with buttons and controls to update the look and feel of the mouse.',
    image: {
      url: '/img/custom_mice.png',
      width: 1551,
      height: 795,
      alt: 'A web page with a 3D mouse, with buttons and controls to update the look and feel of the mouse.'
    },
  },
  {
    name: 'ComboZ: Build and share combos!',
    description: 'Build and share combos from the hit fighting game Dragon Ball FighterZ',
    image: {
      url: '/img/comboz.png',
      width: 1906,
      height: 916,
      alt: 'Build and share combos from the hit fighting game Dragon Ball FighterZ'
    },
  },
  {
    name: 'Django CMS',
    description: 'A CMS plugin with hotspots ontop of a product photo that allows the user with mouse or keyboard to select and trigger info regarding the product.',
    image: {
      url: '/img/cmsplugin_hotspots.png',
      width: 1554,
      height: 626,
      alt: 'A website with hotspots ontop of a product photo that allows the user with mouse or keyboard to select and trigger info regarding the product.',
    },
  }
];

function Projects() {
  const [projects, setProjects] = React.useState(projectsData);

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Heading>Projects</Heading>
        {projects.map((project, index) => (<ProjectCard key={index} name={project.name} description={project.description} image={project.image} />))}
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.offBlack};
  color: ${COLORS.white};
  margin-top: -84px;
  padding: 84px 0;

  ${MaxWidthWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const Heading = styled.h2`
  font-size: ${32 / 16}rem;
  font-family: 'firaCodeBold';
`;

export default Projects;