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

    // Delete
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

    // Update
    const handleUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id)
                    approving.status = "Approved";

                    const newOrder = [approving, ...remaining];
                    setOrders(newOrder);
                }
            })

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(orders) &&
                            orders?.map(signleOrder => <SingleOrder
                                key={signleOrder._id}
                                signleOrder={signleOrder}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></SingleOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;