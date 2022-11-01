import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='text-center mb-32'>
            <p className='text-orange-700 text-xl font-bold my-3'>Services</p>
            <h2 className='text-5xl font-bold'>Our Service Area</h2>
            <p className='mt-5 mb-12'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br /> Words Which Don't Look Even Slightly Believable.  </p>
            <div className='grid gap-x-6 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <button className='btn btn-outline btn-error font-semibold mt-12 text-xl'>More Services</button>
        </div>
    );
};

export default Services;