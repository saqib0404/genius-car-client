import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer py-28 p-10 text-base-content bg-zinc-900 ">
            <div className='text-white'>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div className='text-white'>
                <span className="footer-title">Services</span>
                <a href='/' className="link link-hover">Branding</a>
                <a href='/' className="link link-hover">Design</a>
                <a href='/' className="link link-hover">Marketing</a>
                <a href='/' className="link link-hover">Advertisement</a>
            </div>
            <div className='text-white'>
                <span className="footer-title">Company</span>
                <a href='/' className="link link-hover">About us</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div>
            <div className='text-white'>
                <span className="footer-title">Legal</span>
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;