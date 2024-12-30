import { useEffect, useState,useRef } from "react"
import search from '../../Assets/Images/search.svg'
import { fetchorderbyid, getDineOrderslist, hotelDetails,GetOrderById} from "../../services/api"
import moment from 'moment';
import { DatePicker,TimePicker  } from 'antd';
import Dinein_Request_card from "./Orders_Dinein_Request_card";

const DineinOrderlist = (props) => {
        const LoadNextData = useRef(null);
        const [filterData, setfilterdata] = useState();
        const [filterOrderdata,setfilterorderdata]=useState(null)
        const [selectedDate,setDate]=useState(null)
        const [selectedtime,settime]=useState(null)
        const [hotelDetailsdata,sethotelDetailsdata]=useState(null)
        const [DineOrderlist,setDineOrderList]=useState(null)
        const [disableList,setdisableList]=useState({
            hourlist:[],
            Minlist:[]
        })

         useEffect(()=>{
           const hotelTiming = async()=>{
              try {
                 const data = await hotelDetails()
                 sethotelDetailsdata(data)
  
                 const closingTime = data[0].Closing_time
                 const [Close_hour, Close_minute] = closingTime.split(':');

                 const Opening_time = data[0].Opening_time
                 const [Open_hour, Open_minute] = Opening_time.split(':');
               

                 for(let i=Close_hour+1;i<=24;i++){
                   disableList.Minlist.push(parseInt(i))
                 }

                 for (let j = Open_hour-1; j >= 0; --j) {
                   disableList.Minlist.push(j)
                 }               
              } catch (error) {
                console.log(error)
              }
           }
           hotelTiming()
        },[])


        // Get List 
        useEffect(()=>{
             const getdetails=async()=>{
                 try {
                     const data = await getDineOrderslist(selectedDate,selectedtime)
                     setDineOrderList(data)
                 } catch (error) {
                     console.log(error)
                 }
             }
             getdetails()
         },[selectedDate,selectedtime])


        // Search By order ID
        const getbyID=async()=>{
              try {
                 console.log("hi")
              } catch (error) {
                console.log(error)
              }
        }

        // Get Detail on end of Scroll bar
        const handleScroll = async() => {
          const element = LoadNextData.current;
          if (element) {
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                console.log("End")
            }
          }
        }
        
        // Disable the Times Slots
        const disabledTime = () => ({
            disabledHours: () => disableList.Minlist
        });

        // Onchange the Date Set to SetDate UseState Hook
        const handleDateChange = (date, dateString) => {
            setDate(dateString)
        };

        // Onchange the timeset to Settime UseState Hook
        const handleTimeChange = (date, dateString) => {
            settime(dateString)
        };

        // get Orders by ID
        const OnclickgetOrders=async(Id)=>{
          try {
              const data =  await GetOrderById(Id)
              props.setorderID(data)
          } catch (error) {
            console.log(error)
          }
        }

  return (
    <div className=" w-full max-w-[400px] 2xl:max-w-[550px] h-full flex flex-col bg-white rounded-2xl relative">
        {/* Search bar */}
       <div className="flex items-center border-b">
           <div className=" w-full p-3 relative ">
               <input type="text" className="bg-[#ECF1F6] w-full h-[50px] rounded-full px-7 font-light" placeholder="Search by ID" onChange={(e)=>{setfilterdata(e.target.value),setfilterorderdata(null)}} 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    getbyID()
                  }
                }}/>
               <img src={search} className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 right-5 cursor-pointer"  onClick={getbyID}/>
           </div>
           <div className="cursor-pointer px-5">
                <svg width="20" height="20" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 14C11.6667 15.4728 10.4728 16.6667 9 16.6667C7.52724 16.6667 6.33333 15.4728 6.33333 14C6.33333 12.5272 7.52724 11.3333 9 11.3333C10.4728 11.3333 11.6667 12.5272 11.6667 14ZM8.5 2C8.5 1.72386 8.72386 1.5 9 1.5C9.27614 1.5 9.5 1.72386 9.5 2L8.5 2ZM8.5 14L8.5 2L9.5 2L9.5 14L8.5 14Z" fill="black"/>
                    <path d="M0.333334 3C0.333334 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333334 4.47276 0.333334 3ZM3.5 15C3.5 15.2761 3.27614 15.5 3 15.5C2.72386 15.5 2.5 15.2761 2.5 15L3.5 15ZM3.5 3L3.5 15L2.5 15L2.5 3L3.5 3Z" fill="black"/>
                </svg>
            </div>
       </div>
       {/*Filter Data and Time */}
       <div className=" flex-1 px-5 overflow-scroll pt-5 bar" ref={LoadNextData} onScroll={handleScroll}>
           <div className="flex h-[100px] p-2  gap-3">
              <div className="flex-1 flex flex-col">
                  <h1 className="text-[#AFAFAF] text-lg flex-1">Date</h1>
                  <DatePicker  className="bg-[#F2F2F2] w-full flex-1" onChange={handleDateChange}  format={{format: 'YYYY-MM-DD',type: 'mask',}}  disabledDate={(current) => current && current < moment().startOf('day')} />
              </div>
              <div className="flex-1 flex flex-col">
                  <h1 className="text-[#AFAFAF] text-lg flex-1">Time</h1>
                  <TimePicker.RangePicker  disabledTime={disabledTime} className="bg-[#F2F2F2] w-full flex-1" onChange={handleTimeChange} use12Hours={true}  format="h:mm A"/>
              </div>
           </div>
           {
               (selectedDate && selectedtime && DineOrderlist) ? (<>
               <div className="flex flex-col px-2 py-5">
                    <div className="flex-1 pb-5">
                       <h1 className="text-xl">{DineOrderlist.length} | Dine-In List</h1>
                       <p className="font-light">
                            {
                              (() => {
                                const date = new Date();
                                const today = date.toISOString().split('T')[0]; 
                                const tomorrow = new Date(date);
                                tomorrow.setDate(date.getDate() + 1);
                                const tomorrowDate = tomorrow.toISOString().split('T')[0];                     
      
                                if (selectedDate === today) {
                                  return "Today";
                                } else if (selectedDate === tomorrowDate) {
                                  return "Tomorrow";
                                } else {
                                  return selectedDate;
                                }
                              })()
                            } ~ {selectedtime[0]} - {selectedtime[1]}
                       </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {
                            DineOrderlist.map((item)=>{
                                return(
                                    <> 
                                    <div key={item.Id} onClick={()=>{OnclickgetOrders(item.Id)}}>
                                       {/* Dinein Request Card */}
                                         <Dinein_Request_card dataitem={item}/>
                                    </div>
                                      
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
               </>):(<>
                 <h1 className="px-2 text-center font-light text-[#6C5B5B] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Select the date and Time to Fetch the Orders</h1>
               </>)
           }
       </div>
   </div>
  )
}

export default DineinOrderlist