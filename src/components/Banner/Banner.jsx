import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'
import bannerLogo from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${bannerBg})`}} className='max-w-[1200px] m-4 lg:mx-auto flex flex-col items-center bg-black text-white py-5 lg:py-13 px-5 lg:px-35 rounded-3xl gap-2 mt-2 mb-10 text-center '>
            <img className='h-[100px] lg:h-[200px] w-[100px] lg:w-[250px]' src={bannerLogo} alt="" />
            <h1 className='font-bold text-2xl lg:text-4xl'> Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='font-medium text-xl lg:text-2xl'>Beyond Boundaries Beyond Limits</h3>
            <button className='bg-[#E7FE29] hover:cursor-pointer rounded-xl text-black font-bold p-1  mt-2'><h1 className='border-4 rounded-xl p-2'>Claim Free Credit</h1></button>
        </div>
    );
};

export default Banner;