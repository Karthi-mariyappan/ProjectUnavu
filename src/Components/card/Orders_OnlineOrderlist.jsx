import { useEffect, useState,useRef } from "react"
import search from '../../Assets/Images/Search.svg'
import Order_Request_card from "./Orders_Order_Request_card"
import { FetchNewOrders,Apporved_orders, getnextorders,fetchorderbyid, GetOrderById } from "../../services/api"
const OnlineOrderlist=(props)=> {

    const LoadNextData = useRef(null);
 
    const [pagenumber,setpagenumber] = useState(0)
    const [neworderrequest,setneworderrequest]=useState()
    const [orders,setorders]=useState()
    const [orderError,setOrderError]=useState(null)
    const [filterData, setfilterdata] = useState();
    const [filterOrderdata,setfilterorderdata]=useState(null)

    
    // New Order Fetched 
    useEffect(()=>{
      let timer=0
      const fetchneworders=async()=>{
        const res = await FetchNewOrders();
        setneworderrequest(res)
        timer = setTimeout(fetchneworders, 10000);
      }
      fetchneworders()
      return () => {
        clearTimeout(timer); 
      };
    },[])
  
  // approved Orders
    useEffect(()=>{
       const fetchApporvedorders=async()=>{
          const res=await Apporved_orders();
          setorders(res)
       }
       fetchApporvedorders()
    },[])
  
    // GetByID Search
    const getbyID=async()=>{
      try {
        const res= await fetchorderbyid(filterData)
        setfilterorderdata(res)
      } catch (error) {
        console.log(error)
      }
    }
  
    // Get Detail on end of Scroll bar
    const handleScroll = async() => {
      const element = LoadNextData.current;
      if (element) {
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            try {
              const res = await getnextorders(pagenumber) 
              if(res.status=="404"){
                setOrderError("Reached End")
              }
              else{
                setorders(prevOrders => [...prevOrders, ...res]);
                setpagenumber(pagenumber+1)
              }
            } catch (error) {
              console.log(error)
            }
        }
      }
    };
  
  
    // onClick get Full Order Details
    const OnclickgetOrders=async(Id)=>{
      try {
          const data =  await GetOrderById(Id)
          props.setorderID(data)
      } catch (error) {
        console.log(error)
      }
    }



  return (
    <div className=" w-full max-w-[400px] 2xl:max-w-[550px] h-full flex flex-col bg-white rounded-2xl">
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
    <div className=" flex-1 px-5 overflow-scroll bar" ref={LoadNextData} onScroll={handleScroll}>
    {
                 filterOrderdata ==null ? (
                       <div className="relative">
                       {
                            (neworderrequest && neworderrequest.length>0) && (
                              <div className="flex flex-col pb-5 gap-3">
                                 <h1 className="text-[20px] font-light text-[#6C5B5B] py-3">New Order Request</h1>
                                  {
                                     neworderrequest.map((item)=>{
                                      return(
                                        <>
                                          <div key={item.Id} onClick={()=>{OnclickgetOrders(item.Id)}} className="font-light">
                                          <Order_Request_card address={item.address} item={item.item} Id={item.Id} status={item.progress || 0} timestamp={item.timestamp} />
                                          </div> 
                                        </>
                                      )
                                     })
                                  }
                              </div>
                            )
                       }   

                        {
                         orders && (
                           <div className="flex flex-col pb-5 gap-3">
                              <h1 className="text-[20px] font-light text-[#6C5B5B] py-3">Approved Order List</h1>
                               {
                                  orders.map((item)=>{
                                   return(
                                     <>
                                       <div key={item.Id} onClick={()=>{OnclickgetOrders(item.Id)}} className="font-light">
                                           <Order_Request_card address={item.address} item={item.item} Id={item.Id} timestamp={item.timestamp} />
                                       </div>
                                     </>
                                   )
                                  })
                               }
                               {
                                  orderError &&(
                                      <h1 className="text-[18px] font-light text-center text-[#6C5B5B]">Reached End</h1>
                                   )
                                }
                           </div>
                         )
                       }   
                       </div>
                 ):( 
                       (filterData && filterOrderdata.length==0) ? (
                         <h1 className="text-[20px] font-light text-[#575555] py-10 text-center">Order is not Found</h1>
                       )
                       :
                       (
                         <div className="h-[400px] relative">
                          <h1 className="text-[20px] font-light text-[#6C5B5B] py-3">{filterOrderdata[0].status=="approved"?"Approved Order List":"New Order Request"}</h1>
                          <div key={filterOrderdata[0].Id} onClick={()=>{OnclickgetOrders(filterOrderdata[0].Id)}}>
                               <Order_Request_card address={filterOrderdata[0].address} item={filterOrderdata[0].item} Id={filterOrderdata[0].Id} timestamp={filterOrderdata[0].timestamp} />
                          </div> 
                       </div>
                       )
                 )
               }
    </div>
 </div>
  )
}

export default OnlineOrderlist