import React from 'react'
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjFour } from '../HomePage/Data';

function Services() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjFour} /> 
        </>
    )
}      
export default Services;