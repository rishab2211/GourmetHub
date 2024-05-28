import {categories } from "./data"


export function Category(){
   
    
    return(
        <div className=" m-auto max-w-[1640px] px-4 py-12">
            <h1 className="text-orange font-bold text-center">Top Rated Menu</h1>
            {/* category */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6" >
                {categories.map((items,index)=>{
                    return(
                    <div key={index} className="hover:scale-105 duration-100  bg-gray-100 rounded-lg flex-justify-between items-center" >
                        <h2 className="font-bold sm:text-xl">{items.name}</h2>
                        <img  src={items.image} alt="" 
                        className="w-20"/>
                    </div>)
                })}
            </div>

        </div>
    )
}