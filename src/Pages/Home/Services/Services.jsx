// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = useServices();
    // const[services, setServices] = useState([]);

    // useEffect(()=>{
    //     fetch('https://car-doctor-server-g9vu0xbx3-irfan-khans-projects.vercel.app/services')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])
    
    return (
        <div className="mt-5 mb-20">
            <div className="text-center">
                <h3 className="text-[#FF3811] pb-5 text-xl font-semibold ">Our Services</h3>
                <h2 className="text-5xl font-semibold pb-5">Our Service Area</h2>
                <p className="text-[#737373] pb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
               
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;