import React from 'react'
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjTwo } from '../HomePage/Data';

function Products() {
    return (
        <>
            <HeroSection {...homeObjTwo} /> 
            <Pricing />
        </>
    )
}      
export default Products;