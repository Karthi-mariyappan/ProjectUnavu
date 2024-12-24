import image from '../../Assets/Images/image.svg'
import { Progress } from 'antd';
const Order_Request_card = (props) => {
  return (
    <div className='h-[170px] py-3 px-6 bg-[#ECF1F6] rounded-2xl flex flex-row '>
       <div className='w-[75%] flex flex-col gap-1 py-2'>
           <h1 className='text-[#8E8E8E] text-[13px]'>To</h1>
           <h1 className='text-[15px] text-[#201E1E] truncate cursor-pointer'  title={props.address}>{props.address}</h1>
           <h1>{props.item}</h1>
           <div className='flex-1 flex items-end'>
               <h1 className='text-[12px] font-light'>{props.timestamp}</h1>
           </div>
       </div>
       <div className=' flex-1 flex flex-col'>
            <h1 className='text-[#FF8811] text-[20px] text-right'>{props.Id}</h1>
            {
                props.status!=null?
                 (
                  <>
                     <div className='flex-1 flex flex-col items-center justify-center'>
                        <img src={image} className='' />
                        <h1 className='text-[10px]'>ASSIGNING...</h1>
                        <Progress percent={props.status} strokeColor="#FF8811" showInfo={false}/>
                     </div>
                 </>
                 ):(
                 <>
                
                 </>
                 )
            }
            
       </div>
    </div>
  )
}

export default Order_Request_card