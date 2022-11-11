import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    useEffect(() => {
        fetch(`https://genius-car-server-jade-pi.vercel.app/services?search=${search}&sort=${isAsc ? 'asc' : 'dsc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    return (
        <div className='text-center mb-32'>
            <p className='text-orange-600 text-xl font-bold my-3'>Services</p>
            <h2 className='text-5xl font-bold'>Our Service Area</h2>
            <p className='mt-5 mb-5'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br /> Words Which Don't Look Even Slightly Believable.  </p>
            <input ref={searchRef} type="text" className='input input-sm input-bordered' placeholder='Search your service' />
            &nbsp;<button onClick={handleSearch} className='btn btn-sm'>Search</button><br /><br />
            <button className='mb-12 btn btn-xs' onClick={() => setIsAsc(!isAsc)}>Sort by {isAsc ? 'high Price' : "Low Price"}</button>
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