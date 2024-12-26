import { useEffect, useState } from "react";
import {Orderlist} from "./Orders_Orderlist";
import OrderStatusBar from "./Orders_OrderStatusBar";
import {Progress } from 'antd';

function NewOrderStatus(props) {
    const [data,setdata]=useState(props.orderdata)
    const [timertoggle, settoggle] = useState(false);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(0);
    const [progressbar, setprogressbar] = useState(0);
    const [orderstatus,setorderstatus]=useState(false)

    useEffect(()=>{
        let timer
        const preparation_time_calculate=()=>{
            const Required_mins = Number((props.orderdata.Preparationtime).slice((props.orderdata.Preparationtime).indexOf('-') + 2).trim()) / 60;

            //Estimated at
            const estimated_delivery_time = new Date();
            estimated_delivery_time.setMinutes(estimated_delivery_time.getMinutes() + Required_mins);
            
            // current Time
            timer=setInterval(() => {
                const current_time = new Date();
                const timeDifference = estimated_delivery_time - current_time;
                
                const progressbar = (((Required_mins-(timeDifference/60000))/Required_mins)*100)
                setprogressbar(progressbar);

                if(timeDifference<=0){
                    clearInterval(timer);
                    setMinutes(0);
                    setSeconds(0);
                    setorderstatus(true)
                }
                else{
                    setorderstatus(false)
                    setMinutes(String(Math.floor(timeDifference / 60000)).padStart(2, '0'))
                    setSeconds(String(Math.floor((timeDifference % 60000) / 1000)).padStart(2, '0'))                    
                }
            }, 1000);
        }
        preparation_time_calculate()
        return()=>{
            clearInterval(timer)
        }
    },[props.orderdata])

    const startingpreparing = () => {
        console.log(props.orderdata)
        console.log("start")
        settoggle(true)
    }
    const cancelOrder = () => {
        console.log("cancel Order")
    }
   
  return (
    <div className="relative h-full">
      <div className=" h-full flex flex-col">
         {/* Status Bar */}
        <div className="h-[15%] py-5">
            <OrderStatusBar statuscount={props.orderdata && props.orderdata.Status} />
        </div>
        {/* ItemsDetails */}
        <div className="flex-1 flex flex-col  overflow-hidden">
           <div className="flex flex-row gap-10 w-full px-10 py-5 relative">
              <div className="flex flex-col">
                  <h1 className="text-[#FF8811] text-[20px]">Order ID - {props.orderdata.OrderID}</h1>
                  <h1 className="text-[#000000] text-[18px] font-light">{props.orderdata.itemcount} items ~ {props.orderdata.GrandPrice} <span className="px-3 text-[15px] font-light underline underline-offset-2 text-blue-500">Details</span></h1>
              </div>
                {
                    props.orderdata.TableDetails ? (
                        <>
                          <div className="font-light">
                              <h1 className="text-[#8E8E8E] text-sm">Table Details</h1>
                              <div className="flex gap-5">
                                 <h1>Seat No - 1floor/T-S1</h1>
                                 <h1 className='truncate cursor-pointer text-[#6C5B5B]'>{props.orderdata.TableDetails.TotalGuest} Guest | {props.orderdata.TableDetails.Items} Items</h1>
                              </div>
                              <h1>Today ~ {props.orderdata.TableDetails.InTiming} - {props.orderdata.TableDetails.OutTiming}</h1>
                          </div>
                        </>
                    ):(
                       <div className="absolute top-1/2 border transform right-0 -translate-x-10 -translate-y-1/2 rounded-full flex items-center justify-center font-light">
                         <h1 className=" md:text-sm  text-[#000000] px-10 py-2 rounded-full bg-[#FAEC91] font-light">Approval Pending</h1>
                       </div>    
                    )
                }    
            </div>
             {/* Customer Order List */}
             <div className="py-4 flex flex-col gap-3 px-10  overflow-scroll bar">
                   {
                    (props.orderdata.itemList).map((item)=>{
                        return(
                            <>
                            <Orderlist type={item.type} dishname={item.Dishname} dishcatergory={item.DishCategory} quantity={item.Quantity} price={item.EachPrice} /> 
                            </>
                        )
                    })
                   }
            </div>
            <div className="h-[15%] absolute w-full bottom-0 bg-[#FAFAFA] p-5 rounded-b-2xl">
                <div className="h-full flex font-light gap-1">
                   <div className=" flex-1 flex">
                      <div className="flex-1  flex flex-col items-center justify-center md:text-sm lg:text-md 2xl:text-lg">
                         <h1>Preparation time</h1>
                         <h1>{props.orderdata.Preparationtime}</h1>
                      </div>
                      <div className="flex-1  flex flex-col items-center justify-center md:text-sm lg:text-md 2xl:text-lg">
                        {
                             !props.orderdata.TableDetails ? (
                                 <> 
                                    <h1>Delivery Executive</h1>
                                    <h1>{props.orderdata.DeliveryBoyStatus}</h1>
                                 </>
                                ):(
                                 <>  
                                     <h1>Guest Arrived IN</h1>
                                     <h1>{props.orderdata.TableDetails.CustomerArrivedIn} Mins</h1>
                                 </>
                                )
                        }
                      </div>
                      <div className="flex-1  flex flex-col items-center justify-center md:text-sm lg:text-md 2xl:text-lg">
                         <h1>Grand total</h1>
                         <h1>{props.orderdata.GrandPrice}</h1>
                      </div>
                   </div>
                   <div className=" w-2/5 flex items-center gap-2 text-white">
                       
                       {
                             !props.orderdata.TableDetails ? (
                                 <> 
                                   <button className="flex-1 bg-[#33374D] py-3  rounded-xl md:text-sm lg:text-md 2xl:text-lg" onClick={()=>cancelOrder()}>Out of Stock</button>
                                   <button className="flex-1 bg-[#EC8219] py-3  rounded-xl md:text-sm lg:text-md 2xl:text-lg" onClick={()=>{startingpreparing()}}>Accept order</button>
                                 </>
                                ):(
                                 <>  
                                   <button className="flex-1 bg-[#EC8219] py-3  rounded-xl md:text-sm lg:text-md 2xl:text-lg" onClick={()=>{startingpreparing()}}>STARTED PREPARING</button>
                                 </>
                                )
                        }
                   </div>
                </div>
            </div>
        </div>
       </div>
       {
           timertoggle && (
                 <div className="bg-[#000000a1] w-full h-full absolute top-0 rounded-3xl flex flex-col gap-5 items-center justify-center">
                   <div className="w-[270px] h-[270px] bg-white rounded-full flex items-center justify-center">
                       <Progress type="circle" percent={progressbar} strokeColor="#FF8811" format={() => 
                         <div className="flex flex-col gap-3">
                             <span className="text-[40px]">{minutes}:{seconds}</span>
                             <span className="text-[24px] font-semibold">PREPARING</span>
                         </div>
                         
                       } size={240}/>
                   </div>
                   <h1 className="underline underline-offset-4 text-[20px] text-white font-light cursor-pointer" onClick={()=>{settoggle(false)}}>View Dish List</h1>
                 </div>
           )
       }
       
    </div>
  );
}

export default NewOrderStatus;
