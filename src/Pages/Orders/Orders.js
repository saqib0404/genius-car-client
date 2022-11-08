import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SingleOrder from './SingleOrder';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-jade-pi.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [user?.email, logOut])
    // console.log(orders);

    // Delete
    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this order?')
        if (proceed) {
            fetch(`https://genius-car-server-jade-pi.vercel.app/orders/${id}`, {
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
        fetch(`https://genius-car-server-jade-pi.vercel.app/orders/${id}`, {
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
                            <th> </th>
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