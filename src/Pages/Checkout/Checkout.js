import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, img, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(user);

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.LastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch(`https://genius-car-server-jade-pi.vercel.app/orders`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Order Placed Successfully")
                    form.reset();
                }
                console.log(data);
            })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <div>
                <h2 className='text-3xl text-center font-semibold mb-1'>Checkout {title}</h2>
                <h2 className='text-xl text-center font-semibold mb-3'>Price: <span className='text-error'>${price}</span></h2>
                <img src={img} className='w-full rounded-lg h-72' alt="" />
            </div>
            <form onSubmit={handlePlaceOrder} className='mt-10 mb-20 bg-base-200 p-24 rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="LastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="Number" placeholder="Phone Number" className="input input-bordered w-full" />
                    <input name="email" type="text" defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea my-6 w-full h-40 textarea-bordered" placeholder="Your Message"></textarea>
                <button className='btn btn-error w-full' type="submit">Confirm Order</button>
            </form>
        </div>
    );
};

export default Checkout;