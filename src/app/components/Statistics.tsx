
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// interface Stat {
//   id: number;
//   value: string;
//   label: string;
//   icon: string;
// }

// const stats: Stat[] = [
//   { id: 1, value: "EUR 3,5 Mrd.", label: "Umsatz", icon: "📊" },
//   { id: 2, value: "243", label: "Satisfied Clients", icon: "👥" },
//   { id: 3, value: "57", label: "Länder", icon: "🌍" },
//   { id: 4, value: "20 Mio.", label: "Sendungen pro Jahr", icon: "📦" },
//   { id: 5, value: "12.237", label: "Mitarbeiter*innen", icon: "🏢" },
// ];

//////////////////////////////////////////////////////////////////////////////////////////////
//  const Stats: React.FC = () => {
//    return (
//      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-20 py-8">
//        {stats.map((stat) => (
//          <div key={stat.id} className="flex flex-col items-center text-center">
//            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-3xl">
//              {stat.icon}
//            </div>
//            <p className="text-xl md:text-2xl font-bold text-blue-700 mt-2">{stat.value}</p>
//            <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
//          </div>
//        ))}
//      </div>
//    );
//  };
///////////////////////////////////////////////////////////////////////////////////////////////
// const Stats: React.FC = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 md:gap-20 py-8">
//       {stats.map((stat) => (
//         <div key={stat.id} className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-auto">
//           <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-3xl">
//             {stat.icon}
//           </div>
//           <p className="text-xl md:text-2xl font-bold text-blue-700 mt-2">{stat.value}</p>
//           <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
////////////////////////////////////////////////////////////////////////////////////////////////////
// const Stats: React.FC = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 md:gap-26 py-8">
//       {stats.map((stat) => (
//         <div
//           key={stat.id}
//           className="group flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-auto transition-all duration-700 hover:scale-105"
//         >
//           {/* Ikonata */}
//           <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-3xl transition-all duration-700 group-hover:scale-75 group-hover:blur-[1px]">
//             {stat.icon}
//           </div>
//           {/* Value */}
//           <p className="text-xl md:text-2xl font-bold text-blue-700 mt-2 transition-all duration-700 group-hover:scale-150 group-hover:text-blue-900">
//             {stat.value}
//           </p>
//           {/* Label */}
//           <p className="text-gray-600 text-sm md:text-base transition-all duration-700 group-hover:scale-130 group-hover:text-gray-800">
//             {stat.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////
// const formatNumber = (num: number) => {
//   return new Intl.NumberFormat("de-DE").format(num); // Formatiran broj so točki
// };

// const Counter: React.FC<{ value: number }> = ({ value }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000; 
//     const increment = Math.ceil(value / (duration / 30)); // Broenje vo intervali od 30ms

//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(interval);
//       } else {
//         setCount(start);
//       }
//     }, 30);

//     return () => clearInterval(interval);
//   }, [value]);

//   return <span>{formatNumber(count)}</span>;
// };

// const Stats: React.FC = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 md:gap-20 py-8">
//       {stats.map((stat) => (
//         <div
//           key={stat.id}
//           className="group flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-auto transition-all duration-700 hover:scale-105"
//         >

//           <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-3xl transition-all duration-700 group-hover:scale-75 group-hover:blur-[1px]">
//             {stat.icon}
//           </div>

//           <motion.p
//             className="text-xl md:text-2xl font-bold text-blue-700 mt-2 transition-all duration-700 group-hover:scale-160 group-hover:text-blue-900"
//           >
//             <Counter value={parseInt(stat.value.replace(/\D/g, ""), 10)} /> {/* Samo brojki */}
//           </motion.p>

//           <p className="text-gray-600 text-sm md:text-base transition-all duration-700 group-hover:scale-130 group-hover:text-gray-800">
//             {stat.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stats;

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { IonIcon } from 'react-ion-icon';


const formatNumber = (num: number) => {
  return new Intl.NumberFormat("de-DE").format(num); // Formatiran broj so točki
};

const Counter: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const increment = Math.ceil(value / (duration / 30)); // Broenje vo intervali od 30ms

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{formatNumber(count)}</span>;
};

const stats = [
  { id: 1, value: "EUR 3.5 Mrd.", label: "Active Vehicles", icon: "📊" },
  { id: 2, value: "243", label: "Satisfied Clients", icon: "👥" },
  { id: 3, value: "57", label: "Countries", icon: "🌍" },
  //{ id: 3, value: "57", label: "Countries", icon: "earth" },
  { id: 4, value: "20 Mio.", label: "On-time Deliveries", icon: "📦" },
  { id: 5, value: "12.237", label: "Current Employees", icon: "🏢" },
];

const Stats: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-20 py-8">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className="group flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-auto transition-all duration-700 hover:scale-105"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }} // Ovde e trikot: ke se restartira pri sekoe vrakjanje na viewport
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-3xl transition-all duration-700 group-hover:scale-75 group-hover:blur-[1px]" style={{ color: "var(--green)" }}>
            {stat.icon}
            {/* <IonIcon name={stat.icon}></IonIcon> Ion Icon */}
          </div>

          <motion.p className="text-xl md:text-2xl font-bold text-blue-700 mt-2 transition-all duration-700 group-hover:scale-160 group-hover:text-blue-900">
            <Counter value={parseInt(stat.value.replace(/\D/g, ""), 10)} />
          </motion.p>

          <p className="text-gray-600 text-sm md:text-base transition-all duration-700 group-hover:scale-130 group-hover:text-gray-800">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;





