import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar.jpg'

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="">
            <img className="h-[70px] w-[70px]" src={navImg} alt="" />
          </a>
        </div>
        
        <div className="flex items-center gap-1">
         <span>{availableBalance}</span>
         <span>Coin</span>
         <span><img className='h-[20px] w-[20px]' src={dollarImg} alt="" /></span>
        </div>
      </div>
        </div>
    );
};

export default Navbar;