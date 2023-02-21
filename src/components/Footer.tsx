import styled from 'styled-components';
import Link from 'next/link';
import { GitHub, Linkedin } from 'react-feather';
import { COLORS } from '@/constants';

const Footer = () => {
  return (
    <Wrapper>
      <Links>
        <Link href='https://github.com/Jacksonmills/portfolio'>
          <GitHub />
        </Link>
        <Link href='https://www.linkedin.com/in/jackson-mills-76776a4b/'>
          <Linkedin />
        </Link>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  background: ${COLORS.black};
  display: flex;
  row-gap: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 28px 24px;
  z-index: 99;
`;

const Links = styled.ul`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    color: ${COLORS.purpleSecondary};
    font-size: ${24 / 16}rem;
    font-weight: bold;
    text-decoration: none;
    transition: filter 200ms ease;

    &:hover {
      filter: brightness(0.75);
    }
  }
`;

export default Footer;
