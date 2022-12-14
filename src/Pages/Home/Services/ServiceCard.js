import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl border border-zinc-200">
            <figure className="px-6 pt-6">
                <img src={img} alt="Not Found!" className="rounded-xl" />
            </figure>
            <div className="pt-6 px-6">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="flex justify-between my-3 items-center">
                    <p className='text-orange-600 font-semibold text-xl'>Price: $ {price}</p>
                    <Link to={`/services/${_id}`}>
                        <button>
                            <p className='text-orange-600 font-semibold text-xl'><FaArrowRight></FaArrowRight></p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;