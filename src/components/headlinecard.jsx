export function Headlinecard(){
    return(
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
                {/* card */}
                <div className="rounded-xl relative">
                    {/* overlay */}

                    <div className="absolute w-full h-full bg-black/50 - rounded-xl text-white "> 
                        <p className="font-bold tex-2xl px-2 pt-4 ">Sun's out </p>
                        <p className="px-2">through 8/26</p>
                        
                        <button className= "transform transition-transform duration-500 ease-in-out hover:scale-110 border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                    </div>

                    <img  className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?b=1&s=612x612&w=0&k=20&c=VVShqZ0KPKhEKzLkP1TC1qiIqTFkULCsCZtcakKodFI=" alt="/" />


                </div>
        {/* card-2 */}
                <div className=" transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-xl relative">
                    {/* overlay */}

                    <div className="absolute w-full h-full bg-black/50 - rounded-xl text-white "> 
                        <p className="font-bold tex-2xl px-2 pt-4 ">Sun's out </p>
                        <p className="px-2">through 8/26</p>
                        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                    </div>

                    <img  className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?b=1&s=612x612&w=0&k=20&c=VVShqZ0KPKhEKzLkP1TC1qiIqTFkULCsCZtcakKodFI=" alt="/" />


                </div>
        {/* card-3 */}
                <div className="  rounded-xl relative">
                    {/* overlay */}

                    <div className="hover:bg-black/60 absolute w-full h-full bg-black/50 - rounded-xl text-white "> 
                        <p className="font-bold tex-2xl px-2 pt-4 ">Sun's out </p>
                        <p className="px-2">through 8/26</p>
                        <button className="transform transition-transform duration-500 ease-in-out hover:scale-105 border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                    </div>

                    <img  className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?b=1&s=612x612&w=0&k=20&c=VVShqZ0KPKhEKzLkP1TC1qiIqTFkULCsCZtcakKodFI=" alt="/" />


                </div>
        
        
        
        </div>

    )
}