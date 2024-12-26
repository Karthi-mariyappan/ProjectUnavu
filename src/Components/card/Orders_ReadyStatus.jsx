import OrderStatusBar from "./Orders_OrderStatusBar";
import Otp_card from './Otp_card'
import { useState } from "react";
import delivery_boy from '../../Assets/Images/Delivery_boy.svg'
import { StarFilled } from '@ant-design/icons';
import {Generate_otp} from '../../services/api'

function ReadyStatus(props) {
      const [PhoneOtp,setPhoneotp]=useState(new Array(6).fill(""))

      const [resend_timeout,settimeout]=useState(0)
    
    
      const startCountdown = () => {
        const interval = setInterval(() => {
          settimeout((prev) => {
            if (prev === 0) {
              clearInterval(interval); 
              return prev;
            }
            return prev - 1;
          });
        }, 1000);
      };
      
      const sendOtp = async () => {
        try {
            const Phone_OTP = await Generate_otp(PhoneOtp, "Phonenumber");
            settimeout(59);
            startCountdown();
        } catch (error) {
          console.error("Error generating OTP:", error);
        }
      };

  return (
    <div className="relative h-full">
      <div className=" h-full flex flex-col">
          {/* Status Bar */}
         <div className="h-[15%] py-5">
              <OrderStatusBar statuscount={props.orderdata && props.orderdata.Status} />
         </div>
         {/*  */}
         <div className="flex-1 flex flex-col laptop:px-10 py-2">
       
            <div className="h-auto w-full rounded-3xl flex bg-[#ECF1F6] py-5">
              <div className="flex ml-auto mr-auto px-5 gap-0">
                {
                  !props.orderdata.CustomerDetails ? (
                    <>
                      <div className="flex items-center flex-1">
                             <img src={delivery_boy} className="w-[70px] xl:w-[100px]"/>
                             <div className="flex-1 px-3 flex flex-col gap-1">
                                  <h1 className="md:text-sm  2xl:text-xl truncate">Raj Kumar</h1>
                                  <div className="flex items-center gap-1">
                                     <div className="px-2 bg-[#10870E] rounded-full flex items-center gap-1 text-white font-light md:text-sm"><StarFilled  style={{ fontSize: '13px',color:'white'}} />4.4</div>
                                     <h1 className="md:text-sm font-light">15 Reviews</h1>
                                  </div>
                                  <h1 className="text-[13px] text-[#666060] font-light">Delivery man</h1>
                                  <h1 className="font-light underline text-blue-600 cursor-pointer md:text-sm lg:text-md">Track the person</h1>
                             </div>
                      </div>
                      <div className="flex items-center justify-center xl:px-5 flex-1">
                          <div className=" font-light flex flex-col gap-2 md:text-sm lg:text-md">
                                 <div className="flex items-center gap-5  ">
                                     <h1 className="text-[#808080] w-[130px]  ">UserID</h1><h1 className=" truncate w-full">#984271</h1>
                                 </div>
                                 <div className="flex items-center gap-5 ">
                                     <h1 className="text-[#808080] w-[130px]">Phone No</h1><h1 className="w-full truncate">+91-8685785957</h1>
                                 </div>
                                 <div className="flex items-center gap-5 ">
                                     <h1 className="text-[#808080] w-[130px]">Vehicle</h1><h1 className="w-full ">White Honda Activa - <br className="block laptop:hidden"></br>TN12AB1234</h1>
                                 </div>
                          </div>
                      </div>
                    </>
                  ):(<>
                          <div className="font-light">
                              <h1 className="text-[#202020] text-sm pb-2 font-normal">Customer Details</h1>
                              <div className=" font-light flex flex-col gap-2 md:text-sm lg:text-md">
                                 <div className="flex items-center gap-5  ">
                                     <h1 className="text-[#808080] w-[130px]  ">Name</h1><h1 className=" truncate w-full">{props.orderdata.CustomerDetails.Name}</h1>
                                 </div>
                                 <div className="flex items-center gap-5 ">
                                     <h1 className="text-[#808080] w-[130px]">Phone No</h1><h1 className="w-full truncate">{props.orderdata.CustomerDetails.PhoneNumber}</h1>
                                 </div>
                                 <div className="flex items-center gap-5 ">
                                     <h1 className="text-[#808080] w-[150px]">Email ID</h1><h1 className="w-full truncate">{props.orderdata.CustomerDetails.EmailID}</h1>
                                 </div>
                          </div>
                          </div>
                          <div className="font-light">
                              <h1 className="text-[#202020] text-sm pb-3 font-normal">Table Details</h1>
                              <div className="flex gap-5">
                                 <h1>Seat No - 1floor/T-S1</h1>
                                 <h1 className='truncate cursor-pointer text-[#6C5B5B]'>{props.orderdata.TableDetails.TotalGuest} Guest | {props.orderdata.TableDetails.Items} Items</h1>
                              </div>
                              <h1>Today ~ {props.orderdata.TableDetails.InTiming} - {props.orderdata.TableDetails.OutTiming}</h1>
                          </div>
                  </>)
                }
              
              </div>
            </div>
            <div className="flex items-center flex-col py-4">
            <h1 className="md:text-md 2xl:text-lg text-[#636360] font-light py-5">Delivery Person OTP Verification</h1>
                    <Otp_card  Otp={PhoneOtp} setotp={setPhoneotp} len={6} />
                    {
                       (resend_timeout==0)?(
                          <div className="text-center py-3">
                             <h1 className="font-light text-[#695D62] md:text-md"> Didn’t receive code ?</h1>
                             <h1 className="font-light text-[15px] text-[#03B3FF] cursor-pointer" onClick={()=>sendOtp()}>Resend OTP </h1>
                          </div>
                        ):(
                          <div className="flex flex-row items-center px-5 py-5 gap-5">
                              <p className="font-light p-1 text-green-500 text-[14px]">
                                  Otp Sent to your Phone number
                              </p> 
                              <p className="font-light cursor-pointer flex-1 py-2 text-right  text-blue-500 text-[14px]">({resend_timeout}s)</p>
                          </div>
                        )
                    }
                    
                   
                    {
                          PhoneOtp.every((digit) => digit !== "")&& (
                            <button className="bg-[#0BBA08] w-2/4 h-[50px] rounded-xl flex gap-4 font-light items-center justify-center text-white">
                                 <h1 className="md:text-md 2xl:text-lg">Hand-over</h1>
                                 <svg width="59" height="16" viewBox="0 0 59 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M58.7071 8.70711C59.0976 8.31658 59.0976 7.68342 58.7071 7.29289L52.3431 0.928932C51.9526 0.538408 51.3195 0.538408 50.9289 0.928932C50.5384 1.31946 50.5384 1.95262 50.9289 2.34315L56.5858 8L50.9289 13.6569C50.5384 14.0474 50.5384 14.6805 50.9289 15.0711C51.3195 15.4616 51.9526 15.4616 52.3431 15.0711L58.7071 8.70711ZM0 9H58V7H0V9Z" fill="white"/>
                                 </svg>
                            </button>
                          )
                    }

            </div>
        </div>
       </div>
    </div>
  );
}

export default ReadyStatus;
