import React from 'react';
import Hero from '../components/Home/Hero';

import Category from '../components/Categories/Category';

import BannerCarousel from '../components/BannerCarousel';
import FeaturedSection from '../components/Featured/FeaturedSection';
import FeaturedCard from '../components/Featured/FeaturedCard';





const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturedSection></FeaturedSection>
            <FeaturedCard></FeaturedCard>
          
            <BannerCarousel/>
            <Category></Category>
  
            
            
            
        </div>
    );
};

export default Home;