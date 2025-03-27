import React from 'react';
import { HeroContainer, HeroContent, Title, Description, CtaButton } from '../../styles/heroStyles/hero.styles'; // Importing from styles.ts

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Title variant="h3" component="h1">
          Shop the Latest Collection
        </Title>
        <Description variant="body1">
          Discover new arrivals, exclusive offers, and much more. Limited time only!
        </Description>
        <CtaButton variant="contained" color="primary">
          Shop Now
        </CtaButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
