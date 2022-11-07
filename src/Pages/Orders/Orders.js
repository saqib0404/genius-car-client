import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SingleOrder from './SingleOrder';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])
    console.log(orders);

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this order?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Item deleted")
                        const remaining = orders.filter(ord => ord._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div className='my-20'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Services</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(orders) &&
                            orders?.map(signleOrder => <SingleOrder
                                key={signleOrder._id}
                                signleOrder={signleOrder}
                                handleDelete={handleDelete}
                            ></SingleOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;