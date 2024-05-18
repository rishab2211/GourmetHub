import { data } from "./data"
import { useState } from "react"
export function Food(){

    const [food,setfood]=useState(data)
    const filtertype=(category)=>{
        setfood(data.filter((item)=>{
            return item.category === category ;
        }))
    }
    const filterprice=(price)=>{
       setfood(data.filter((item)=>{
                return item.price === price;
       }))
            
        }
    
    return(
        <div className="max-w-[1640px m-auto px-4 py-12">

            <h1 className="text-[#fb8500] font-bold text-4xl text-center" >Top Rated Items</h1>
            {/* filter row */}
            <div className="flex flex-col lg:flex-row justify-between lg:justify-evenly">

                {/* filter type */}
                <div >
                    <p className="font-bold text-gray-700">Filter by</p>
                    <div className="flex  flex-wrap">
                        <button onClick={()=>{setfood(data)}} className="m-1  transform transform-transition duration-100 ease-out text-orange-600 shadow-xl hover:bg-orange-50 hover:scale-105  border-orange-600  bg-white">All</button>
                        <button onClick={()=>{(filtertype('burger'))}} className=" m-1 transform transform-transition duration-100 ease-out text-orange-600 shadow-xl hover:bg-orange-50 hover:scale-105  border-orange-600  bg-white">Burgers</button>
                        <button onClick={()=>{((filtertype('pizza')))}} className=" m-1 transform transform-transition duration-100 ease-out text-orange-600 shadow-xl hover:bg-orange-50 hover:scale-105  border-orange-600  bg-white">Pizza</button>
                        <button onClick={()=>{((filtertype('salad')))}} className=" m-1 transform transform-transition duration-100 ease-out text-orange-600 shadow-xl hover:bg-orange-50 hover:scale-105  border-orange-600  bg-white">Salad</button>
                        <button onClick={()=>{(filtertype('chicken'))}} className=" m-1 transform transform-transition duration-100 ease-out text-orange-600 shadow-xl hover:bg-orange-50 hover:scale-105  border-orange-600  bg-white">Chicken</button>
                    </div>
                </div>
                {/* filter price */}
                <div>
                    <p>Filter Price</p>
                    <div className="flex  ">
                        <button onClick={()=>{setfood(data)}} className="m-1 transform transform-transition duration-100 ease-out     text-orange-600  shadow-xl hover:bg-orange-50  hover:scale-105  border-orange-600  ">$</button>
                        <button onClick={()=>{filterprice('$')}} className="m-1 transform transform-transition duration-100 ease-out text-orange-600  shadow-xl hover:bg-orange-50  hover:scale-105  border-orange-600  ">$$</button>
                        <button onClick={()=>{filterprice('$$')}} className="m-1 transform transform-transition duration-100 ease-out text-orange-600  shadow-xl hover:bg-orange-50  hover:scale-105  border-orange-600  ">$$$</button>
                        <button onClick={()=>{filterprice('$$$')}} className="m-1 transform transform-transition duration-100 ease-out text-orange-600 shadow-xl hover:bg-orange-50 hover:scale-105  border-orange-600  ">$$$$</button>
                        <button onClick={()=>{filterprice('$$$$')}} className="m-1 transform transform-transition duration-100 ease-out text-orange-600  shadow-xl hover:bg-orange-50  hover:scale-105  border-orange-600  ">$$$$$</button>
                    
                    </div>
                    {/* display food */}
                    
                </div>
            </div>

                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
                        
                           {
                            food.map((item,index)=>{
                                return(
                                    <div className=" border shadow-lg object-cover hover:scale-105 duration-300  " key={index}>
                                <img className="w-full h-[200px] object-cover rounded-lg   " src={item.image} alt={item.name} />
                                    <div className="flex justify-between px-2 py-4">
                                    <p className="font-bold ">{item.name}</p>
                                    <p><span className="bg-orange-500 rounded-xl shadow-xl ">{item.price}</span></p>
                                </div>
                                </div>
                                )
                            })
                           }
                    </div>

        </div>

    )
   
}