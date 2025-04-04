import Header from "./components/Header";

import Statistics from "./components/Statistics";
import Services from "./components/Services";



export default function Home() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold text-blue-600">Home</h1>  */}
      <Header/>

      <Statistics/>

      <Services />

      </div>
  );
}
