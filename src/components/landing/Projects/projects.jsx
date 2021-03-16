import React from 'react'
import styled from 'styled-components'

const projects = ({ title, desc, img , href }) => {
    console.log(img)
    return (
        <Project href={href} >
            <Title>{title}</Title>
            <Img src={img} alt={title} />
            <Desc>{desc}</Desc>
        </Project>
    )
}

const Project = styled.a`
    text-decoration: none;
    color: inherit;
`;


const Title = styled.h2`
    margin-top: 0px;
`;
const Desc = styled.span``;
const Img = styled.img`
max-height: 250px;
`;

export default projects
