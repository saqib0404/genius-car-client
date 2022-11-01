import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.rest();
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div>
            <div className="hero mt-16 mb-20">
                <div className="hero-content flex-col lg:flex-row justify-between">
                    <div className="text-center lg:text-left">
                        <img className='w-4/5' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input name='name' type="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn border-0 bg-orange-600" type="submit" value="SIGN UP" />
                            </div>
                        </form>
                        <p className='text-center mb-16'>Already have an account? <Link className='text-orange-600 font-semibold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;