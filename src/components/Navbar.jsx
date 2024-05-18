import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";

export  function Navbar(){
    const [Nav,setNav]=useState(false);

    return   (
        
<div className="flex justify-between items-center max-w-[1640px] p-4">
        {/* {left side of header} */}
        <div className="flex items-center">
         <div onClick={()=>setNav(!Nav)} className="cursor-pointer"><GiHamburgerMenu size={30} /></div>
           <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">REACT</h1> 
         <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[0.9rem]">   
            <p className="bg-black text-white rounded-full p-2" >delivery</p>
            <p>dine</p>
         </div>
         </div>
{/* 
         search inputs */}

         <div className="bg-gray-200 rounded flex items-center px-2 w-[12.5rem] sm:w-[25rem] lg:w-[500px] ">
         <IoSearchOutline  size={20}/>
         <input type="text" placeholder="search food.." className="focus:outline-none p-1 w-full bg-transparent"/>
            
         </div>
{/* 
         cart menu */}
        <div className="bg-[black] text-white  hidden md:block">
            <button><FaShoppingCart size={20} className="mr-2"  /></button>
        </div>
{/* 
         mobile menu */}

{/* overlay */}

       {Nav ?  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 duration-400 delay-1000" > </div>:''}
{/* side drawer menu */}

            <div className={Nav ? "fixed top-0 left-0 w-[18.75rem] h-screen bg-white z-10 duration-400 ease-in-out delay-75 ": "hidden"}>
            <GiHamburgerMenu size={30} onClick={()=>{setNav(!Nav); }} className="absolute right-4 top-4 cursor-pointer"/>
            <h2 className="hover:text-3xl  text-2xl p-4 ">Best <span className="font-bold">Eats</span></h2>
            <nav>
            <ul className="flex flex-col p-4 text-gray-800">
                <li className="hover:opacity-100 hover:text-2xl flex mr-4 text-xl opacity-90">
                <TbTruckDelivery size={25} className="" />Orders</li>
                <li className="hover:opacity-100 hover:text-2xl flex mr-4 text-xl opacity-90">
                <TbTruckDelivery size={25} className="" />favorites
                </li>
                <li className="hover:opacity-100 hover:text-2xl flex mr-4 text-xl opacity-90">
                <TbTruckDelivery size={25} className=" " />Wallet
                </li><li className="hover:opacity-100 hover:text-2xl flex mr-4 text-xl opacity-90">
                <TbTruckDelivery size={25} className= "" />Help
                </li>
                <li className="hover:opacity-100 hover:text-2xl flex mr-4 text-xl opacity-90">
                <TbTruckDelivery size={25} className=" " />Promotions
                </li>
                <li className="hover:opacity-100 hover:text-2xl flex mr-4 text-xl opacity-90">
                <TbTruckDelivery size={25} className="" />Invite Friends
                </li>

            </ul>
            </nav>
           
            </div>
            
            
         </div>


         
       
        
    )
}