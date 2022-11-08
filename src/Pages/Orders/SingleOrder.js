import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SingleOrder = ({ signleOrder, handleDelete, handleUpdate }) => {
    const { serviceName, customer, phone, service, price, _id, status } = signleOrder;
    const [orderedService, setOrderedService] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-jade-pi.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderedService(data))
    }, [service])

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn rounded-full w-12'>X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded h-24">
                            <img src={orderedService.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
            </td>
            <td>
                {phone}
            </td>
            <td>
                ${price}
            </td>
            <td>
                <button onClick={() => handleUpdate(_id)} className={`btn ${status ? "btn-success" : "btn-error"}`}>{status ? status : "Pending"}</button>
            </td>
        </tr >
    );
};

export default SingleOrder;