import Header from "./components/Header";
import Services from "./components/Services";


export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600">Home</h1>
      <Header/>
      <Services />
      </div>
  );
}
