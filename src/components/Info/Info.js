import React from 'react';
import {infoPage} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';

const Info = () => (
  <Container>
    <Hero titleText={infoPage.title} image={infoPage.image} />
    <p>{infoPage.content}</p>
  </Container>
);

export default Info;