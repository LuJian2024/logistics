import { useTranslations } from "next-intl";


import Header from "../components/Header";

import Statistics from "../components/Statistics";
import Services from "../components/Services";


export default function Home() {
  const t = useTranslations("home");
  return (
    <div>
      {/* <h1 className="text-4xl font-bold text-blue-600">Home</h1>  */}
      <h1>{t("welcomeMessage")}</h1>

     <Header/>

      <Statistics/>

      <Services />

      </div>
  );
}
