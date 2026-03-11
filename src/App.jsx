import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import DaisyPricing from "./components/DaisyPricing/DaisyPricing";
import { LineChart } from "recharts";
import ResultChart from "./components/ResultChart/ResultChart";

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
        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
