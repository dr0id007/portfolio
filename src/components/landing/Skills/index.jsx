import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from '../../../assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import styled from 'styled-components'

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p style={{fontSize: '18px' , fontWeight: 'lighter'}}>
            I have been working as a Full stack developer for over a year now mainly using MERN stack but I love learning and using new technologies. As a freelancer I have worked with multiple clients on different projects. I have helped find solutions to challenging technical problems which have greatly helped with the growth of those organizations.
            I’m looking for an Organization that I could add value to and get to work with an engaged team.
          </p>
          <Button>
            <A href="https://www.freelancer.com/u/dar56db0bd144f33" target="_blank" rel="noopener noreferrer">
              Hire me
                 </A>
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;