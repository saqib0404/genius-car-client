import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="hero mt-16 mb-20">
                <div className="hero-content flex-col lg:flex-row justify-between">
                    <div className="text-center lg:text-left">
                        <img className='w-4/5' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-4xl font-semibold text-center">Login</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn border-0 bg-orange-600" type="submit" value="LOGIN" />
                            </div>
                        </form>
                        <p className='text-center mb-16'>New to Genius Car? <Link className='text-orange-600 font-semibold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;