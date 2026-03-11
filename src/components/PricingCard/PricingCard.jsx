import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {plan, price,features} =pricing;
    return (
        <div className='flex flex-col rounded-xl shadow p-4'>
            {/* Card Header */}
          <div className='text-center mb-2'>
              <h1 className="text-4xl">{plan}</h1>
            <h2 className='text-xl'>{price}</h2>
          </div>
          {/* Card Body */}
          <div className='flex-1'>
            {
                features.map((feature,index) => <PricingFeature key={index} feature = {feature}></PricingFeature>)
            }
          </div>
          <button className="btn w-full bg-green-600 text-white mt-4 text-center">Subscribe</button>

        </div>
    );
};

export default PricingCard;