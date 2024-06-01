import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';
import Project from './projects'
import MoniImage from '../../../../public/images/moni-pe.png'
import StoreImage from '../../../../public/images/store.png'
import WhiteboardImage from '../../../../public/images/whiteboard.png'

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const projectList = [{  
    title: 'Moni.pe',
    img: MoniImage,
    desc: 'Crypto-currency exchange web site',
    tech: '',
    href:'https://moni-front.netlify.app/'
  },
    {
    title: 'E-commerce store',
    img: StoreImage,
    desc: '',
    tech: '',
    href:'https://mern-store-template.herokuapp.com/'
    },
    {
      title: 'Collaborative Whiteboard',
      img: WhiteboardImage,
      desc: '',
      tech: '',
      href:'https://learn-in-fun.herokuapp.com/'
    },
    // {
    //   title: 'Codin Cal',
    //   img: require('./images/codin.webp'),
    //   desc: '',
    //   tech: '',
    //   href:'https://play.google.com/store/apps/details?id=com.calapp'
    // },
  ]


  return (
    <Wrapper as={Container} id="projects">
      <h1>Projects</h1>
      <Grid>
        {projectList.map((data, index) => {
          return <Project key={data.title} title={data.title} img={data.img} href={data.href}/>
        })}        
      </Grid>
    </Wrapper>
  );
};

