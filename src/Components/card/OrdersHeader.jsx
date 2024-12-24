import { useState } from "react"
function OrdersHeader(props) {
      const [orderdetails,setorderdetails]= useState({
        'Pending Deliveries':3,
        'In-Delivery Orders':2,
        'Delivered Orders':22,
        'Total Orders Today':27
      })
      const [Dine_orderdetails,set_Dine_orderdetails]= useState({
        'Dine-In Scheduled':2,
        'Total Served Dine-In':22,
        'Todays Dine-In Count':5,
      })
  return (
    <>
     <div className="h-[120px] flex items-center px-4 gap-2 md:px-8">
               <div className="w-full max-w-[550px] py-1 h-full flex flex-col gap-3">
                 <div className="flex-1 flex items-center">
                    <div className="">
                         <h1 className="text-[20px] md:text-[22px]">MANAGE ORDERS</h1>
                         <hr className="border border-black w-[60%]"></hr>
                    </div>
                 </div>
                 <div className="flex-1">
                   <div className="h-full md:w-4/5 xl:w-full border flex items-center rounded-xl bg-white">
                     <div className="w-full flex h-full py-1 px-2 ">
                           <div className={`flex-1  rounded-xl  flex items-center justify-center cursor-pointer ${props.btntoggle?'bg-[#33374D] text-white':'text-black'}`} onClick={()=>{props.setbtntoggle(true),props.setorderID(null)}}><h1 className="relative px-5">Delivery<div className="w-[12px] h-[12px]  rounded-full bg-[#FF8811] absolute right-0  top-0" ></div></h1></div>
                           <div className={`flex-1  rounded-xl  flex items-center justify-center cursor-pointer ${props.btntoggle?'text-black':'text-white bg-[#33374D]'}`} onClick={()=>{props.setbtntoggle(false),props.setorderID(null)}}><h1 className="relative px-5">Dine-in<div className="w-[12px] h-[12px]  rounded-full bg-[#FF8811] absolute right-0  top-0" ></div></h1></div>
                       </div>
                   </div>
                 </div>
               </div>
               <div className="flex-1 h-full  items-center hidden md:flex justify-end">
                  {
                     props.btntoggle ? (
                      Object.entries(orderdetails).map(([key,value],index)=>{
                        return(
                           <div key={index} className={`flex flex-col items-center font-light w-[120px] ${index==0?'text-[#E0A56A]':''}  ${index==2?'px-3':''} px-1 laptop:w-[150px] xl:w-[150px] text-center ${index!=3?' border-r-2 border-dotted border-[#CCCCCC]':''}`}>
                               <h1 className="md:text-sm lg:text-5xl 2xl:text-6xl">{value}</h1>
                               <h1 className="md:text-sm 2xl:text-md ">{key}</h1>
                           </div>
                        )
                     })
                     ):(
                      Object.entries(Dine_orderdetails).map(([key,value],index)=>{
                        return(
                           <div key={index} className={`flex flex-col items-center font-light w-[120px] ${index==0?'text-[#E0A56A]':''}  px-1 laptop:w-[160px] xl:w-[160px] text-center ${index!=2?' border-r-2 border-dotted border-[#CCCCCC]':''}`}>
                               <h1 className="md:text-sm lg:text-5xl 2xl:text-6xl">{value}</h1>
                               <h1 className="md:text-sm 2xl:text-md ">{key}</h1>
                           </div>
                        )
                     })
                     )
                  }
               </div>
            </div>
    </>
  )
}

export default OrdersHeader