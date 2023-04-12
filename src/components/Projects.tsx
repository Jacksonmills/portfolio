import { COLORS } from '@/constants';
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
    name: 'Oki: Anonymous Chat App',
    description: 'Developed Oki, a web and mobile chat application inspired by the "Okizeme" concept from fighting games. Leveraged socket.io to create real-time, anonymous, temporary chat experiences for events like fighting game tournaments. The app fosters a lively and engaging environment where users can interact without revealing their identities, enhancing the overall event experience.',
    link: 'https://oki-chat.herokuapp.com/',
    image: {
      url: '/img/oki.png',
      width: 1551,
      height: 795,
      alt: 'A webapp for chatting with others at a real life event'
    },
  },
  {
    name: 'Product Catalog and Buy Section User Experience',
    description: 'I designed and developed engaging JavaScript components utilizing advanced CSS concepts, such as flexbox, grid, and animations. These interactive components allowed users to effortlessly browse, locate, and purchase the perfect products.',
    link: 'https://steelseries.com/gaming-mice/rival-gaming-mice?grip-style=claw-fingertip',
    image: {
      url: '/img/category_page.png',
      width: 1551,
      height: 795,
      alt: 'A webpage of a list of products to buy'
    },
  },
  {
    name: 'Customizable Gaming Mice Suite',
    description: 'Delivered an immersive user experience that enables users to personalize their gaming mouse using an interactive 3D model, which dynamically updates as they make their selections.',
    link: 'https://steelseries.com/gaming-mice/aerox-3-2022?cable-color=black&cable-length=long&cable-material=super-mesh&cable-usb-type=a-to-c&connectivity=wired&mouse-body-color=jade&mouse-feet-color=black&mouse-feet-material=ptfe',
    image: {
      url: '/img/custom_mice.png',
      width: 1551,
      height: 795,
      alt: 'A web page with a 3D mouse, with buttons and controls to update the look and feel of the mouse.'
    },
  },
  {
    name: 'ComboZ: Build, Share, and Practice Combos',
    description: 'This interactive web app is tailored for Dragon Ball FighterZ players, offering a platform to build, share, and practice character combos, fostering a collaborative and skill-enhancing experience.',
    link: 'https://www.combo-z.com',
    image: {
      url: '/img/comboz.png',
      width: 1906,
      height: 916,
      alt: 'Build and share combos from the hit fighting game Dragon Ball FighterZ'
    },
  },
  {
    name: 'Django CMS Expertise',
    description: 'Through maintaining and developing new features within Django CMS, I became proficient in Python and built numerous full-stack plugins with diverse functionalities, such as the innovative Hotspots plugin.',
    link: 'https://steelseries.com/',
    image: {
      url: '/img/cmsplugin_hotspots.png',
      width: 1554,
      height: 626,
      alt: 'A website with hotspots on top of a product photo that allows the user with mouse or keyboard to select and trigger info regarding the product.',
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