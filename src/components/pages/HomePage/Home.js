import React from 'react';
import HeroSection from '../../herosection/HeroSection';
import Figures from '../../figures/Figures';
import BlogSummary from '../../blogsummary/BlogSummary';
import Partners from '../../partners/Partners';
import Social from '../../social/Social';
import Newsfeed from '../../newsfeed/Newsfeed';
import Quicklinks from '../../quicklinks/Quicklinks';
import Footer from '../../footer/Footer';

function Home (){
    return(
        <>
            <HeroSection />
            <Figures />
            <BlogSummary />
            <Partners />
            <Social />
            <Newsfeed />
            <Quicklinks />
            <Footer />
        </>
    )
}

export default Home;