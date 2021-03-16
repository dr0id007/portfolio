import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import styled from 'styled-components'
import Pdf from '../../../assets/resource/resume.pdf'

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  console.log('pdf: 123' , Pdf)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Dev Arora a Full Stack engineer and machine learning enthusiast !</h4>
          <Button>
            <A href={Pdf} target="_blank">
              Download CV
                 </A>
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} style={{fill: '#001F3F'}} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};


const A = styled.a`
  text-decoration: none;
  color: inherit;
`;