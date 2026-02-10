import { useEffect, useRef, useState } from 'react'
import './Heeder.css'
import { LogOut, Search, ShoppingCart } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import flover from './Pictures/flover.svg'
import search from './Pictures/search.svg'
import magazine from './Pictures/magazine.svg'
import logout from './Pictures/logout.svg'
const Heeder = () => {
  let location = useLocation();
  useEffect(() => {
    let span = document.getElementsByTagName("span")[1];
    let a = document.getElementsByTagName("a");
    if (location.pathname === "/") {
      span.style.display = "none";
    }
    else {
      span.style.display = "inline-block";
    }
    if (location.pathname === "/home") {
      span.style.left = a[0].offsetLeft + "px";
      span.style.width = a[0].offsetWidth + "px";
    }
    if (location.pathname === "/shop") {
      span.style.left = a[1].offsetLeft + "px";
      span.style.width = a[1].offsetWidth + "px";
    }
    if (location.pathname === "/plant") {
      span.style.left = a[2].offsetLeft + "px";
      span.style.width = a[2].offsetWidth + "px";
    }
    if (location.pathname === "/blogs") {
      span.style.left = a[3].offsetLeft + "px";
      span.style.width = a[3].offsetWidth + "px";
    }
  }, [location]);
  return (
    <>
      <div className="sticky top-0 w-full h-[clamp(38px,5.5vmin,53px)] flex justify-between items-start">
        <div className="w-[16%] flex"><img src={flover} alt="" className='w-[clamp(28px,5.5vmin,34.3px)]' /><span className='text-[#46A358] font-bold text-[clamp(18px,2.901vmin,110.03px)]'>GREENSHOP</span></div>
        <div className="w-2/5 h-10 flex justify-around text-[clamp(14px,2.6vmin,20px)]">
          <NavLink to="/home" className={({ isActive, isPending }) => (isActive ? "active trsspn" : isPending ? "trsspn" : "")}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "activegr trsspn" : "")}>Shop</NavLink>
          <NavLink to="/plant" className={({ isActive }) => (isActive ? "activegr trsspn" : "")}>Plant Care</NavLink>
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? "activegr trsspn" : "")}>Blogs</NavLink>
        </div>
        <div className="w-[16%] flex justify-around items-center">
          <img src={search} alt="" className='w-[clamp(18px,5.5vmin,20px)] h-[clamp(18px,5.5vmin,20px)]' /><img src={magazine} alt="" className='w-[clamp(18px,5.5vmin,24px)] h-[clamp(18px,5.5vmin,24px)]' /><button className='flex bg-green-600 rounded-md text-white p-dd items-center'><img src={logout} alt="" className='w-[clamp(18px,5.5vmin,20px)] h-[clamp(18px,5.5vmin,20px)]' />Login</button>
        </div>
        <div className='absolute bottom-0 w-full h-px bg-[#46A35880]'>
          <span className='absolute bottom-0 h-1 bg-green-600 span-r transition-[0.8s]'></span>
        </div>
      </div>
    </>
  )
}
export default Heeder