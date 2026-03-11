import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div>
      <h2 className="text-5xl mt-5 text-center text-amber-500">Get Our Membership</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-10 my-10">
        {pricingData.map((pricing) => (
          <PricingCard 
          key={pricing.id}
          pricing = {pricing}
          ></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
