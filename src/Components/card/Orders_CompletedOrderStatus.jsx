import { Progress } from "antd"
import OrderStatusBar from "./Orders_OrderStatusBar"
import {Orderlist} from './Orders_Orderlist'
import delivery_boy from '../../Assets/Images/deliveryboy.svg'
import customer from '../../Assets/Images/customericon.svg'

function CompletedOrderStatus(props) {
  return (
    <div className="relative h-full">
      <div className="h-full flex flex-col">
         {/* Status Bar */}
         <div className="h-[15%] py-3">
             <OrderStatusBar statuscount={props.orderdata && props.orderdata.Status} />
         </div>
         <div className="h-[85%] flex flex-row  px-10">
            {/* Order Details Div Block */}
            <div className=" rounded-3xl flex-1 overflow-hidden relative">
                 <div className="py-7  flex flex-col gap-1">
                    <h1 className="font-light md:text-sm lg:text-lg 2xl:text-2xl">Completed Orders Overview</h1>
                    <hr className="border border-black w-[150px] rounded"></hr>
                 </div>
                 <h1 className="text-[#FF8811] md:text-sm lg:text-lg 2xl:text-xl ">Order ID - {props.orderdata.OrderID}</h1>
                 <h1 className="text-xl font-light pt-4">Order summary - <span className="text-md text-[#504e4e]">{props.orderdata.itemList.length} items</span></h1>
                 <div className="py-3 h-1/2 flex flex-col gap-3  overflow-scroll bar  md:text-sm">
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
                  <div className="absolute bottom-3 w-full bg-[#F8F8F8] px-10 py-5 flex items-center justify-center flex-col">
                       <div className="flex flex-1   w-full flex-row font-light md:text-sm lg:text-lg 2xl:text-xl">
                            <h1 className="flex-1">Total</h1>
                            <h1 className="flex-1 text-right">{props.orderdata.GrandPrice}</h1>
                        </div>
                        <div className="flex w-full gap-2 md:text-sm lg:text-lg 2xl:text-xl">
                            <h1 className="text-xl font-light flex-1 ">Payment Status</h1>
                            <div className="relative">
                                 <h1 className="text-[#31B12F] text-xl flex gap-5 items-center"><span className="underline underline-offset-2 text-sm text-[#4F9AF0] cursor-pointer">View</span>Paid </h1>
                            </div>
                        </div>
                  </div>
            </div>
            <div className="px-5 py-10 flex items-end"><hr className="h-[80%] border border-[#c5c3c3] border-dashed"></hr></div>
            <div className="flex-1 flex pt-20 relative">
              {/* Delivery Status and Table reservation feedback*/}
              {
                !props.orderdata.TableDetails ? (
                  <div className="flex-1">
                      <h1 className="text-xl font-light p-5">Delivery status</h1> 
                      <div className="py-3 flex items-center justify-center  w-[90%]  2xl:w-[70%] gap-5 mr-auto ml-auto">
                           <img src={delivery_boy} className="w-[60px]"/>
                           <div className="flex-1 relative">
                               <Progress showInfo={false} percent={50}  strokeColor="#FF8811" />
                               <h1 className="absolute left-1/2 transform -translate-x-1/2 text-sm  w-full text-center font-light">On the way</h1>
                           </div>
                           <img src={customer} className="w-[60px]"/>
                      </div>
                      <div className="flex items-center justify-center font-light gap-6 py-5">
                         <h1 className=" md:text-sm text-blue-500 underline underline-offset-2">View Details </h1>
                         <button className="px-12 py-3 rounded-lg border">Track the Delivery</button>
                      </div>
                  </div>
                ):(
                  <div className="flex-1 font-light ">
                       <h1 className="text-xl p-5">Customer Feedback</h1> 
                       <h1 className="px-2 text-center font-light text-[#6C5B5B] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Not yet Reviewed</h1>
                  </div>
                )
              }
            </div>
         </div>
      </div>
    </div>
  )
}

export default CompletedOrderStatus