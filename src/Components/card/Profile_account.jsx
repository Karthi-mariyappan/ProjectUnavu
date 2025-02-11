import { ConfigProvider, Switch } from 'antd';
import Temp_pf from '../../Assets/Images/hoteldp.png'
import time from '../../Assets/Images/Time.svg'
import Location from '../../Assets/Images/Location.svg'

function Profile_account() {
  return (
        <>
            <div className="flex pt-7 pb-3 px-12 items-center">
                <div className="">
                     <h1 className="text-xl 2xl:text-3xl">Account Details</h1>
                     <hr className="border border-black w-[50%]"></hr>
                </div>
                <div className="flex-1 flex justify-end  gap-2 text-[#2DB92A]">
                   <ConfigProvider theme={{components: {
                            Switch: {
                              colorPrimary: '#C4F1BF', 
                              colorPrimaryHover: '#C4F1BF', 
                              colorBgContainer: '#FF3535', 
                              handleBg: '#2DB92A', 
                              handleBgActive: '#fadb14',
                            },
                          },
                        }}>
                      <Switch/>
                   </ConfigProvider>
                   Online
                </div>
            </div>
            <div className="flex px-10 py-5">
               <div className="lg:w-[180px] lg:h-[180px] 2xl:w-[300px] 2xl:h-[300px]">
                 <img src={Temp_pf} alt="" className="rounded-3xl "/>
               </div>
               <div className="flex-1 flex flex-col gap-3 px-8 py-3">
                  <div className="flex items-center gap-5">
                     <h1 className="text-2xl 2xl:text-4xl">Sangeetha’s Restaurant </h1>
                     <div className="text-sm font-light py-1 px-5 rounded-full bg-[#A5F6A3] text-[#1A9017]">Verified</div>
                  </div>
                  <div className="flex gap-2">
                     <div className="bg-[#10870E] text-white flex items-center px-2 text-xs 2xl:text-sm gap-1 rounded-md">
                         <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.7227 4.5766L8.51163 6.37457L9.18528 9.06343C9.22245 9.20939 9.21287 9.36246 9.15777 9.50331C9.10267 9.64415 9.00451 9.76644 8.87569 9.85474C8.74687 9.94303 8.59317 9.99337 8.43401 9.99939C8.27485 10.0054 8.11737 9.96684 7.98145 9.88856L5.5001 8.44944L3.01727 9.88856C2.88138 9.96639 2.72408 10.0046 2.56519 9.99835C2.4063 9.99211 2.25293 9.9417 2.12438 9.85348C1.99583 9.76526 1.89785 9.64317 1.84278 9.50258C1.78772 9.362 1.77802 9.2092 1.81492 9.06343L2.49103 6.37457L0.27992 4.5766C0.159684 4.47867 0.0727271 4.34953 0.029909 4.20531C-0.0129091 4.06109 -0.00969058 3.90817 0.0391625 3.76566C0.0880156 3.62316 0.180338 3.49737 0.3046 3.40401C0.428863 3.31065 0.579557 3.25386 0.737865 3.24073L3.63687 3.02033L4.7552 0.469918C4.81573 0.330923 4.91876 0.212029 5.05118 0.128354C5.1836 0.0446779 5.33944 0 5.49887 0C5.65831 0 5.81414 0.0446779 5.94656 0.128354C6.07898 0.212029 6.18201 0.330923 6.24254 0.469918L7.36038 3.02033L10.2594 3.24073C10.418 3.25338 10.5691 3.30985 10.6939 3.40308C10.8186 3.49631 10.9113 3.62214 10.9605 3.76482C11.0096 3.90751 11.013 4.06068 10.9702 4.20517C10.9274 4.34965 10.8403 4.47902 10.7198 4.57706L10.7227 4.5766Z" fill="white"/>
                         </svg>
                         4.4
                     </div>
                     <h1 className="flex-1 text-[#585656] text-sm 2xl:text-md">5k+ Reviews</h1>
                  </div>
                  <h1 className="text-[#9F9999] font-light text-sm lg:text-md 2xl:text-xl">North Indian, Biryani, Tandoor, Vellore Locality</h1>
                  <h1 className="text-[#585656] font-light text-sm lg:text-md 2xl:text-xl">Mail ID - SangeethaRestaurant@gmail.com</h1>
                  <h1 className="text-[#585656] font-light text-sm lg:text-md 2xl:text-xl">Phone No - +91-09828377181</h1>
               </div>
            </div>
            <div className="px-10 flex gap-14 items-center">
               <div className="flex flex-row gap-4">
                  <div className="h-[70px] w-[70px] bg-[#FFE6EE] rounded-xl flex items-center justify-center">
                      <img src={time} alt=""/>
                   </div>
                   <div className="font-light text-xs xl:text-sm ">
                       <h1 className="text-lg">Timing</h1>
                       <h1 className="text-[#5a5959]">10 am - 10 pm</h1>
                       <h1 className="text-[#5a5959]">Monday to Friday</h1>
                   </div>
               </div>
               <div className="flex flex-row gap-4">
                  <div className="h-[70px] w-[70px] flex items-center justify-center bg-[#D9FFED] rounded-xl">
                      <img src={Location} alt=""/>
                   </div>
                   <div className="font-light text-xs xl:text-sm ">
                       <h1 className="text-lg">Address</h1>
                       <h1 className="text-[#5a5959] w-full max-w-[300px] ">Bangalore Trunk Road, Thirumazhisai, Opp KFC, Chennai, Tamil Nadu 600124</h1>
                   </div>
               </div>
             
            </div>
            <h1 className="bg-[#FEDC8F] px-14 py-2 absolute bottom-5 right-5 rounded-xl text-sm xl:text-lg ">EDIT</h1>
        </>
  )
}

export default Profile_account