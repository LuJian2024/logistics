import Image from "next/image";
//import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      {/* <Navbar /> */}

      {/* Banner Image */}
      {/* <div className="h-screen relative"> 
        <Image
          src="/images/lkw-banner-1.png"
          alt="Banner"
          fill
          //className="object-contain w-full h-full"
           className="object-cover object-top"
          // width={1920}
          // height={1080}
          priority
        /> */}
        {/* <div className="relative w-full">
  <Image
    src="/images/lkw-banner-1.png"
    alt="Banner"
    layout="responsive"
    width={1600}
    height={900}
    className="object-contain"
    priority
  /> */}
  <div className="relative w-full h-screen" >
  <Image
    src="/images/lkw-hero.png"
    alt="Banner"
    fill
    className="object-cover"
    priority
  />
         <div className="absolute inset-0" /> 
        {/* <div className="absolute inset-0 bg-gray-900/20" /> */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          Welcome to Our Logistic World
        </div> */}
      </div>

       {/* Rest of the page  */}
      <section className="p-10">
        <h1>Page content goes here...</h1>
        <p>Page content goes here...</p>
      </section>
    </div>
  );
}
