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
  link: string,
  image: ProjectImage;
};

const projectsData: Project[] = [
  {
    name: 'Product catalog and buy section user experience',
    description: 'I began writing JavaScript confidently creating interactive product tiles, listing filters, and buy sections. Mastered many important CSS concepts, including flexbox, grid, and animations.',
    link: 'https://steelseries.com/gaming-mice/rival-gaming-mice?grip-style=claw-fingertip',
    image: {
      url: '/img/category_page.png',
      width: 1551,
      height: 795,
      alt: 'A webpage of a list of products to buy'
    },
  },
  {
    name: 'Customizable gaming mice suite',
    description: 'We wanted to provide a user experience allowing the user to fully customize a gaming mouse with a 3D model that updates as the user creates their mouse.',
    link: 'https://steelseries.com/gaming-mice/aerox-3-2022?cable-color=black&cable-length=long&cable-material=super-mesh&cable-usb-type=a-to-c&connectivity=wired&mouse-body-color=jade&mouse-feet-color=black&mouse-feet-material=ptfe',
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
    link: 'https://www.combo-z.com',
    image: {
      url: '/img/comboz.png',
      width: 1906,
      height: 916,
      alt: 'Build and share combos from the hit fighting game Dragon Ball FighterZ'
    },
  },
  {
    name: 'Django CMS',
    description: 'While maintaining, building new features in Django CMS, I became self sufficient in Python. Eventually building mini full-stack plugins that span many different and exciting possibilities like this Hotspots plugin.',
    link: 'https://steelseries.com/',
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
        {projects.map((project, index) => (<ProjectCard key={index} name={project.name} description={project.description} link={project.link} image={project.image} />))}
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  margin-top: -84px;
  padding: 84px 0;

  ${MaxWidthWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 84px;
  }
`;

const Heading = styled.h2`
  font-size: ${36 / 16}rem;
`;

export default Projects;