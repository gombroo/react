import React from 'react';
import {faqPage} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';

const Faq = () => (
  <Container>
    <Hero titleText={faqPage.title} image={faqPage.image} />
    <p>{faqPage.content}</p>
  </Container>
);

export default Faq;