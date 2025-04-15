import ServiceCard from "./ServiceCard/ServiceCard";

const services = [
  { name: "Premium Delivery", description: "Fast and reliable delivery service for your needs." },
  { name: "Logistics Planning", description: "Efficient planning to optimize your supply chain." },
  { name: "Warehouse Management", description: "Streamlined solutions for managing your inventory." },
  { name: "Freight Forwarding", description: "Comprehensive freight services for global shipping." },
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