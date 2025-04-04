"use client";
import { IonIcon } from '@ionic/react';
import { logoTwitter, logoInstagram, logoLinkedin, logoFacebook } from 'ionicons/icons';

export default function SocialIcons() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-black" aria-label="Twitter">
          <IonIcon icon={logoTwitter} className="text-2xl" />
        </a>
        <a href="#" className="text-gray-600 hover:text-black" aria-label="Instagram">
          <IonIcon icon={logoInstagram} className="text-2xl" />
        </a>
        <a href="#" className="text-gray-600 hover:text-black" aria-label="LinkedIn">
          <IonIcon icon={logoLinkedin} className="text-2xl" />
        </a>
        <a href="#" className="text-gray-600 hover:text-black" aria-label="Facebook">
          <IonIcon icon={logoFacebook} className="text-2xl" />
        </a>
      </div>
    </div>
  );
}