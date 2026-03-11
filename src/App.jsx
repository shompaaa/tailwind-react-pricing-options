import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import DaisyPricing from "./components/DaisyPricing/DaisyPricing";

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-bars loading-lg mx-auto my-auto"></span>}
        >
          <PricingOptions
          pricingPromise = {pricingPromise}
          ></PricingOptions>
        </Suspense>

      </main>
    </>
  );
}

export default App;
