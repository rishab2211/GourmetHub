

export function Hero(){
    return(
        <>
        <div className="max-w-[1640px mx-auto p-4">
            <div className=" max-h-[500px] relative">
            {/* {overlay} */}
            <div className="absolute  w-full h-full text-gray-200 hover:bg-black/50 bg-black/40 max-h-[500p] flex flex-col justify-center">
                <h1  className=" px-6 text-4xl sm-text-5xl md:text-5xl lg:text-7xl font-bold">
                    The <span className=" text-orange-500">Best </span>
                </h1>
                <h1 className="px-6 text-4xl sm-text-5xl md:text-5xl lg:text-7xl font-bold">
                    Food <span className="text-orange-500">Delivered</span>
                </h1>
            </div>
            <img image-rendering:pixelated loading="lazy" className="object-cover z-1  w-full max-h-[31.2rem]  flex-auto " src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600" alt="burger" />

            </div>
        </div>
        
        </>
    )
}