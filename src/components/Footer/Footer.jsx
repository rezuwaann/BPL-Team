import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'
import bannerLogo from '../../assets/banner-main.png'

const footer = () => {
    return (
        <div >
            <div style={{ backgroundImage: `url(${bannerBg})` }} className='relative top-40 bg-white max-w-[350px] xl:max-w-[1200px] mx-auto flex flex-col items-center  py-20 px-5  rounded-3xl shadow-2xl text-center'>
                <h1 className='font-bold lg:text-3xl '>Subscribe to our Newsletter</h1>
                <h3 className='font-medium lg:text-xl text-gray-400 mt-3 mb-5'>Get the latest updates and news right in your inbox!</h3>


                <div className='flex items-center gap-4'>
                    <div>
                        <label className="input validator">
                            <input type="email" placeholder="Enter Your email" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>

                    <div><button className='font-bold bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 transition py-3 px-5 rounded-xl hover:cursor-pointer '>Subscribe</button></div>
                </div>

            </div>


            <div className='bg-[#06091A]  w-full text-white flex flex-col gap-20 py-20 border-b-1 border-gray-600'>

                <div className='pt-50  '>
                    <img className='h-[140px] max-w-[140px] mx-auto' src={bannerLogo} alt="" />
                </div>

                <div className='flex flex-col xl:flex-row space-y-20 xl:space-y-0 space-x-70  mx-auto '>

                    <div className='flex flex-col max-w-[250px] gap-3 mr-auto'>
                        <h1 className='font-bold text-2xl'>About Us</h1>
                        <p className='text-gray-500'> We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>



                    <div className='flex flex-col max-w-[250px] gap-3 mr-auto'>
                        <h1 className='font-bold text-2xl'>Quick Links</h1>
                        <ul className='list-disc text-gray-500'>
                            <li className='hover:cursor-pointer'>Home</li>
                            <li className='hover:cursor-pointer'>Services</li>
                            <li className='hover:cursor-pointer'>About</li>
                            <li className='hover:cursor-pointer'>Contact</li>
                        </ul>
                    </div>



                    <div className='flex flex-col max-w-[300px] lg:max-w-[450px] gap-5 '>
                        <h1 className='font-bold text-2xl'>Subscribe</h1>
                        <p className='text-gray-500'>Subscribe to our newsletter for the latest updates.</p>

                        <div className="join">
                            <div className=''>
                                <label className="input validator join-item">

                                    <input className='text-black' type="email" placeholder="Enter your email" required />
                                </label>
                                <div className="validator-hint hidden">Enter your email </div>
                            </div>
                            <button className="btn join-item bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 transition py-3  hover:cursor-pointer">Subscribe</button>
                        </div>
                    </div>
                </div>



            </div>

            <div className='bg-[#06091A] text-white  p-3'>
                <h1 className='text-center text-gray-500'>@2024 Your Company All Rights Reserved.</h1>
            </div>

        </div>
    );
};

export default footer;