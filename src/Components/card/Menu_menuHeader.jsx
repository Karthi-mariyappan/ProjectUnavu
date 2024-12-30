import { useState } from "react";


function Menu_menuHeader(props) {
     const [orderdetails,setorderdetails]= useState({
            'Out of Stock':5,
            'Dishes Listed':22
          })
         
  return (
    <>
      <div className="h-[120px] flex items-center px-4 gap-2 md:px-8">
         <div className="w-full max-w-[550px] py-1 h-full flex flex-col gap-3">
           <div className="flex-1 flex items-center">
              <div className="">
                   <h1 className="text-[20px] md:text-[22px]">MENU DETAILS</h1>
                   <hr className="border border-black w-[60%]"></hr>
              </div>
           </div>
           {/* Toggle btns for switching to Dine and Delivery cards */}
           <div className="flex-1">
             <div className="h-full md:w-4/5 xl:w-[550px] border flex items-center rounded-xl bg-white">
               <div className="w-full flex h-full py-1 px-2 ">
                     <div className={`flex-1  rounded-xl  flex items-center justify-center cursor-pointer ${props.btntoggle?'bg-[#33374D] text-white':'text-black'}`} onClick={()=>{props.setbtntoggle(true)}}><h1 className="relative px-5">Delivery</h1></div>
                     <div className={`flex-1  rounded-xl  flex items-center justify-center cursor-pointer ${props.btntoggle?'text-black':'text-white bg-[#33374D]'}`} onClick={()=>{props.setbtntoggle(false)}}><h1 className="relative px-5">Dine-in</h1></div>
                 </div>
             </div>
           </div>
         </div>
         {/* Menu Count Details */}
         <div className="flex-1 h-full  items-center hidden md:flex justify-end">
            {
               props.btntoggle ? (
                Object.entries(orderdetails).map(([key,value],index)=>{
                  return(
                     <div key={index} className={`flex flex-col items-center font-light w-[120px]  px-1 laptop:w-[150px] xl:w-[150px] text-center ${index!=1?' border-r-2 border-dotted border-[#CCCCCC]':''}`}>
                         <h1 className="md:text-sm lg:text-5xl 2xl:text-6xl">{value}</h1>
                         <h1 className="md:text-sm 2xl:text-md ">{key}</h1>
                     </div>
                  )
               })
               ):(
                <></>
               )
            }
         </div>
      </div>
    </>
  )
}

export default Menu_menuHeader