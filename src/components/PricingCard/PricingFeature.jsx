import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <div>
           <ul className='flex'>
            <CircleCheckBig size={15} className='text-green-600'></CircleCheckBig>
            <li  className='ml-5'>{feature}</li>
            </ul> 
        </div>
    );
};

export default PricingFeature;