import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import Project from './projects'

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const projectList = [{  
    title: 'Moni.pe',
    img: require('./images/moni-pe.png'),
    desc: 'Crypto-currency exchange web site',
    tech: '',
    href:'https://moni-front.netlify.app/'
  },
    {
    title: 'E-commerce store',
    img: require('./images/store.png'),
    desc: '',
    tech: '',
    href:'https://mern-store-template.herokuapp.com/'
    },
    {
      title: 'Collaborative Whiteboard',
      img: require('./images/whiteboard.png'),
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
      <h2>Projects</h2>
      <Grid>
        {projectList.map((data, index) => {
          return <Project title={data.title} img={data.img} href={data.href}/>
        })}        
      </Grid>
    </Wrapper>
  );
};

