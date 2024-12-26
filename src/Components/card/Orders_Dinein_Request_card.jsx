import image from '../../Assets/Images/DineIn_Tracking.svg'
import { Progress } from 'antd';
function Dinein_Request_card(props) {
  return (
    <div className='h-[170px] py-3 px-6 bg-[#ECF1F6] rounded-2xl flex flex-row font-light'>
         <div className='w-[75%] flex flex-col gap-1 py-2'>
            <h1 className="text-[13px] text-[#8E8E8E] ">Table Details</h1>
            <h1 className='text-[18px] text-[#201E1E] truncate cursor-pointer '>Seat No - {props.dataitem.FloorNo} floor/ {props.dataitem.SeatNumber}</h1>
            <h1 className='text-[18px]  truncate cursor-pointer text-[#6C5B5B]'>{props.dataitem.TotalGuest} Guest | {props.dataitem.Items} Items</h1>
            <div className='flex-1 flex items-end'>
               <h1 className='text-[15px] font-light text-[#6C5B5B]'>{props.dataitem.InTiming} - {props.dataitem.OutTiming}</h1>
           </div>
         </div>
         <div className=' flex-1 flex flex-col'>
                     <h1 className='text-[#FF8811] text-[20px] text-right'>{props.dataitem.Id}</h1>
                     <div className='flex-1 flex flex-col items-center justify-center'>
                        <img src={image} className='w-[30px]' />
                   
                        <h1 className='text-[13px]'>Arrived in</h1>
                        <h1 className='text-[#FF8811] text-[15px] text-right font-normal'>{props.dataitem.CustomerArrivedIn}</h1>
                        <Progress  strokeColor="#FF8811" showInfo={false}/>
                     </div>
         </div>
    </div>
  )
}

export default Dinein_Request_card