import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';
import Project from './projects'
import MoniImage from '../../../../public/images/moni-pe.png'
import StoreImage from '../../../../public/images/store.png'
import WhiteboardImage from '../../../../public/images/whiteboard.png'
import MernStoreImage from '../../../../public/images/mern-store.png'
import ChessImage from '../../../../public/images/chess.png'
import DrawImage from '../../../../public/images/draw.png'
import CodinCalImage from '../../../../public/images/codin.webp'
import HigherImage from '../../../../public/images/higher.png'
import styled from 'styled-components'

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const projectList = [{  
    title: 'Book Store',
    img: MernStoreImage,
    desc: 'Book Store',
    tech: '',
    href:'http://13.201.102.4:5005/'
  },{  
    title: 'Moni.pe',
    img: MoniImage,
    desc: 'Crypto-currency exchange web site',
    tech: '',
    href:'https://moni-front.netlify.app/'
  },{  
    title: 'Draw Board',
    img: DrawImage,
    desc: 'Productivity whiteboard tool',
    tech: '',
    href:'https://draw-me-ten.vercel.app/'
  },{
    title: 'E-commerce store',
    img: StoreImage,
    desc: '',
    tech: '',
    href:'https://mern-store-template.herokuapp.com/'
  },{  
    title: 'Multiplayer Chess',
    img: ChessImage,
    desc: 'Multiplayer Chess',
    tech: '',
    href:'https://chess-pi-orpin.vercel.app/'
  },{
      title: 'High Low App',
      img: HigherImage,
      desc: '',
      tech: '',
      href:'https://play.google.com/store/apps/details?id=com.animesocial'
  },
  // {
  //     title: 'Collaborative Whiteboard',
  //     img: WhiteboardImage,
  //     desc: '',
  //     tech: '',
  //     href:'https://learn-in-fun.herokuapp.com/'
  // },
    // {
    //   title: 'Codin Cal',
    //   img: CodinCalImage,
    //   desc: '',
    //   tech: '',
    //   href:'https://play.google.com/store/apps/details?id=com.calapp'
    // },
  ]

  return (
    <Wrapper as={Container} id="projects">
      <H1>Projects</H1>
      <Grid>
        {projectList.map((data, index) => {
          return <Project key={data.title} title={data.title} img={data.img} href={data.href}/>
        })}        
      </Grid>
    </Wrapper>
  );
};

const H1 = styled.h1`
    text-align: center;
    font-size: 36pt;
`;

