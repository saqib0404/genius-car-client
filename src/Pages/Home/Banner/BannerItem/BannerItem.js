import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, next, prev } = slide

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full text-white">
            <div className='img-gradient'>
                <img alt="" src={image} className="w-full h-full rounded-xl img-gradient" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-outline btn-warning mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-warning">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 md:left-24 top-1/4 ">
                <h2 className='text-6xl font-bold text-white'>Affordable <br />
                    Price For Car <br />
                    Servicing
                </h2>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/3 left-5 md:left-24 top-2/4 w-2/5 ">
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/4 left-5 md:left-24 top-3/4 ">
                <button className='btn btn-warning mr-5'>Discover More</button>
                <button className='btn btn-outline btn-warning'>Latest Ptoject</button>
            </div>
        </div>
    );
};

export default BannerItem;