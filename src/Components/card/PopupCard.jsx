import QuestionIcon from '../../Assets/Images/QuestionIcon.svg'
import dishadded from '../../Assets/Images/dishadded.svg'
import { useEffect,useState } from 'react'

export const AddNewDishPopUp_card=()=>{
    return(
        <div className='fixed bg-[#0000007a]  w-full h-full flex items-center justify-center'>
          <div className="p-8 py-10 bg-white w-full max-w-[550px] text-center flex items-center justify-center flex-col gap-4 rounded-3xl">
            <img src={QuestionIcon} className='w-[120px]'/>
            <h1 className="text-lg font-light">Would you like to add this dish to the menu?</h1>
           <div className="flex gap-3">
               <button className="px-7 py-3 border rounded-2xl hover:bg-[#ff3131] hover:text-white" >Cancel</button>
               <button className="px-7 py-3 border rounded-2xl hover:bg-[#6adf68] bg-[#0BBA08] text-white" >Confirm</button>
           </div>
          </div>
        </div>
    )
}

export const DishAddedPopup_card=()=>{
         const [minutes, setMinutes] = useState(null);
         const [seconds, setSeconds] = useState(0);     
         useEffect(()=>{
             let timer
             const preparation_time_calculate=()=>{
                 const Required_mins = Number(2100) / 60;
                 // accepted at
                 const accept_timestamp = "2025-01-31T12:10:56";
     
                 //Estimated at
                 const estimated_delivery_time = new Date(accept_timestamp);
                 estimated_delivery_time.setMinutes(estimated_delivery_time.getMinutes() + Required_mins);
                 
                 // current Time
                 timer=setInterval(() => {
                     const current_time = new Date();
                     const timeDifference = estimated_delivery_time - current_time;
                     if(timeDifference<=0){
                         clearInterval(timer);
                         setMinutes(0);
                         setSeconds(0);
                     }
                     else{
                         setMinutes(String(Math.floor(timeDifference / 60000)).padStart(2, '0'))
                         setSeconds(String(Math.floor((timeDifference % 60000) / 1000)).padStart(2, '0'))                    
                     }
                 }, 1000);
             }
             preparation_time_calculate()
             return()=>{
                 clearInterval(timer)
             }
         },[])
     return(
      <div className='fixed bg-[#0000007a]  w-full h-full flex items-center justify-center'>
         <div className="p-8 py-10 bg-white w-full max-w-[550px] text-center flex items-center justify-center flex-col gap-4 rounded-3xl">
            <img src={dishadded} className='w-[120px]'/>
            <div className='flex flex-col gap-2 items-center'>
               <h1 className="text-2xl font-medium">Successfully Dish Added !!</h1>
               <p className='font-light text-sm w-[85%]'>Newly added dishes will be featured on the Unavu main site within 1 hours</p>
            </div>
            <button className="w-[80%] py-4 border rounded-2xl bg-[#000000] text-white" >Continue {minutes} m {seconds} s</button>
         </div>
      </div>
     )
}