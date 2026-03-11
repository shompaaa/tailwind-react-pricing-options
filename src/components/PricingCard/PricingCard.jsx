import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {plan, price,features} =pricing;
    return (
        <div className='rounded-xl shadow p-4'>
            {/* Card Header */}
          <div className='text-center mb-2'>
              <h1 className="text-4xl">{plan}</h1>
            <h2 className='text-xl'>{price}</h2>
          </div>
          {/* Card Body */}
          <div>
            {
                features.map((feature,index) => <PricingFeature key={index} feature = {feature}></PricingFeature>)
            }
          </div>

        </div>
    );
};

export default PricingCard;