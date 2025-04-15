import { Truck } from "lucide-react";
import "./ServiceCard.css";


type ServiceCardProps = {
    name: string;
    description: string[];
}

const serviceListElement = "pl-3 my-1 flex gap-1"
const ServiceCard = ({ name, description }: ServiceCardProps) => {
    return (
        <div className="service-card lg:relative w-[90%] h-[400px] mx-auto lg:w-[47%]  mb-5 rounded-[8px] shadow-[8px_8px_24px_#bebebe,-8px_-8px_24px_#e2e2e2] lg:rounded-none lg:shadow-none" > 
            <div className="w-full h-1/2 lg:w-[60%] lg:h-[65%] rounded-[8px] lg:shadow-[8px_8px_24px_#bebebe,-8px_-8px_24px_#e2e2e2]">
            <img 
                    src="/images/hero-1.jpg" 
                    alt="Service image" 
                    className="w-full h-full object-cover rounded-t-[8px] lg:rounded-[8px]" 
                    loading="lazy" 
                />
                
            </div>
            <div className="w-full h-1/2 lg:absolute  lg:bottom-0 lg:right-0 lg:w-[60%] lg:h-[65%]  bg-[#B671AD] rounded-b-[8px] lg:rounded-[8px] lg:shadow-[8px_8px_24px_#bebebe,-8px_-8px_24px_#e2e2e2]">
                <h2 className="md:text-xl font-bold text-[#A2BC8D] text-center">{name}</h2>
                <div className="flex flex-col">
                    {description.map((el, index) => (
                        <div className={serviceListElement} key={index}><Truck className="w-5 h-5 flex-shrink-0"/>{el}</div>
                    ))}
                </div>
                </div>
            
        </div>
        /*Without shadows */

        /* <div className="service-card md:relative w-[90%] h-[300px] mx-auto md:w-[47%] md:h-[300px] mb-5 rounded-[8px] md:rounded-none" > 
            <div className="w-full h-1/2 md:w-[60%] md:h-[65%] rounded-[8px] ">
            <img 
                    src="/images/hero-1.jpg" 
                    alt="Service image" 
                    className="w-full h-full object-cover rounded-t-[8px] md:rounded-[8px]" 
                    loading="lazy" 
                />
                
            </div>
            <div className="w-full h-1/2 md:absolute  md:bottom-0 md:right-0 md:w-[60%] md:h-[65%] text-center bg-[#B671AD] rounded-b-[8px] md:rounded-[8px] ">
                <h2 className="text-2xl font-bold text-[#A2BC8D]">{name}</h2>
                <p className="text-gray-700">{description}</p>
                </div>
            
        </div> */
        
    );
}
export default ServiceCard;