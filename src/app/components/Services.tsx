import ServiceCard from "./ServiceCard/ServiceCard";

const services = [
  { name: "Fleet Management and Coordination", description: ["Professional management and coordination of transportation companies", "Optimization of routes and schedules for efficient delivery", "Real-time vehicle tracking"] },
  { name: "Referral to Leading Transportation Companies", description: ["Mediation and contract agreements with leading European transportation companies", "Ensuring continuous transport orders", "Improvement of company ratings and reputation"] },
  { name: "24/7 Support and Consulting", description: ["Available professional support around the clock", "Consulting for optimizing transport processes", "Solution of problems with documents and permits"] },
  { name: "Financial and Administrative Support", description: ["Assistance with invoicing and payment collections", "Management of documentation and logistical processes", "Reduction of administrative costs"] },
  { name: "Special Transport (ADR & Temperature-Controlled Transport)", description: ["Dangerous goods transport (ADR) according to European regulations", "Refrigerated and deep-frozen transport for fresh and frozen goods", "Temperature monitoring to ensure the quality of goods"] },
];

export default function Services() {
  return (
    <div className="w-[85%] mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-2">Services</h1>
      <div className="flex flex-wrap justify-between">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          name={service.name}
          description={service.description}
        />
      ))}
      </div>
      

      
    </div>
  );
}