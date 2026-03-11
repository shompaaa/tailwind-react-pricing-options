import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h2 className="text-5xl mt-5 text-center text-amber-500">Get Our Membership</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-10 my-10">
        {/* {pricingData.map((pricing) => (
          <PricingCard 
          key={pricing.id}
          pricing = {pricing}
          ></PricingCard>
        ))} */}

        {
            pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing = {pricing}></DaisyPricing>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;
