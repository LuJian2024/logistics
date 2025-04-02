"use client";
import ContactForm from './Contact';
import SocialIcons from './SocialIcons';
import FooterInfoSection from './FooterInfoSection';


export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* Mobil */}
      <div className="block md:hidden">
        <div className="px-4 py-8">
          <ContactForm />
        </div>
        <SocialIcons />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <FooterInfoSection />
          </div>
        </div>
      </div>
    </footer>
  );
}