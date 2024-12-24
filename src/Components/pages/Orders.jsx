import { useState } from "react";
import NewOrderStatus from "../card/NewOrderStatus";
import PreparingOrderStatus from "../card/PreparingOrderStatus";
import ReadyStatus from "../card/ReadyStatus";
import CompletedOrderStatus from "../card/CompletedOrderStatus";
import OrdersHeader from "../card/OrdersHeader";
import OnlineOrderlist from "../card/OnlineOrderlist";
import DineinOrderlist from "../card/DineinOrderlist";
function Orders() {
    const [orderSelected,setorderID]=useState(null)
    const [btntoggle,setbtntoggle]=useState(true)

  return (
    <div className="bg-[#ECF1F6] py-2 flex flex-col h-[91.5dvh]">
        {/* Manage Orders header Component*/}
        <OrdersHeader setbtntoggle={setbtntoggle} btntoggle={btntoggle} setorderID={setorderID} />
        {/*  */}
        <div className=" flex-1 px-8 flex flex-row gap-4 py-3 h-[70dvh]">
          {
            btntoggle ?(
              <>
                   {/* Component for online order list Card */}
                   <OnlineOrderlist setorderID={setorderID} />
              </>
            ):
            (
               <>
                  {/* Component for dine orders list card */}
                  <DineinOrderlist setorderID={setorderID}/>
               </>
            )
          }
          
          <div className="flex-1 h-full bg-white rounded-3xl relative">
              {
               orderSelected ? (
                                   (orderSelected.Status == 0) ? (
                                               <NewOrderStatus orderdata={orderSelected}/>
                                          ):
                                            (
                                               (orderSelected.Status == 1) ? (
                                                     <PreparingOrderStatus orderdata={orderSelected}/>
                                               )
                                                :(
                                                    (orderSelected.Status == 2) ? (
                                                          <ReadyStatus orderdata={orderSelected}/>
                                                     )
                                                      :(
                                                           <CompletedOrderStatus orderdata={orderSelected}/>
                                                        )
                                                 )
                                             )
                  
                                ) : 
                                (
                                     <h1 className="font-light text-[25px] absolute top-1/2 text-[#767070] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                        No Order Selected
                                     </h1>
                                )
              }

          </div>
        </div>
    </div>
  )
}

export default Orders