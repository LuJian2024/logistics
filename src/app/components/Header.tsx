import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />

      {/* Banner Image */}
      <div className="h-screen relative">
        <Image
          src="/images/hero-1.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          Welcome to Our Logistic World
        </div>
      </div>

       {/* Rest of the page  */}
      <section className="p-10">
        <h1>Page content goes here...</h1>
        <p>Page content goes here...</p>
      </section>
    </div>
  );
}
