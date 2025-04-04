
type ServiceCardProps = {
    name: string;  
    description: string;
}
const ServiceCard = ({name, description}: ServiceCardProps ) => {
    return (
        <div className=" w-1/4 p-4 m-4 rounded-[10px] bg-[#f5eaea] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <h2 className=" text-3xl border-b-2 border-b-amber-900 text-center">{name}</h2>
            <p>{description}</p>
            <a href="#">Link</a>
        </div>
    );
}
export default ServiceCard;