function Menu_TableCountCard(props) {
  return (
    <div key={props.id} className='w-1/3 flex h-full rounded-3xl p-4 2xl:p-4 bg-[#ECF1F6]'>
        <div className='flex-1 flex flex-col'>
           <div className='flex-1 flex justify-center flex-col'>
               <h1 className='md:text-2xl lg:text-4xl 2xl:text-7xl '>{props.TotalCount}</h1>
               <h1 className='text-[#555555] md:text-[8px] lg:text-[9px] 2xl:text-[13px] font-light truncate'>Total {props.SeatType} seater available</h1>
               <h1 className='font-light  md:text-[8px] lg:text-[9px] 2xl:text-[13px]  text-[#818181]'>{props.capacityCount} capacity</h1>
           </div>
        </div>
        <div className='w-[70px] flex items-end pl-3'>
           <img src={props.imgsrc}  className='px-1 py-1 bg-white rounded-full'/>
        </div>
     </div>
  )
}

export default Menu_TableCountCard