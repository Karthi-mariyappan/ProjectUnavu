import table_1 from '../../Assets/Images/table1.svg'
import table_2 from '../../Assets/Images/table2.svg'
import table_3 from '../../Assets/Images/table3.svg'
import Menu_TableCountCard from './Menu_TableCountCard'
import search from '../../Assets/Images/search.svg'
import {tablelisted} from '../../services/api'
import { useEffect, useState } from 'react'
import {Menu_ListedTableCard} from './Menu_ListedCard'

function Menu_ListedTables() {
    const [tablelist,settablelist]=useState({})
    const data = [{
        id:1,
        TotalCount:15,
        SeatType:2,
        capacityCount:30,
        imgsrc:table_1
    },{
        id:2,
        TotalCount:24,
        SeatType:4,
        capacityCount:96,
        imgsrc:table_2
    },{
        id:3,
        TotalCount:12,
        SeatType:8,
        capacityCount:96,
        imgsrc:table_3
    }]


   useEffect(()=>{
    const tabledetails =async()=>{
        try {
            const data = await tablelisted()
            settablelist(data)
        } catch (error) {
            console.log(error)
        }
    }
    tabledetails()
   },[])

  return (
     <>
     <h1 className="text-[20px] md:text-[22px] py-2">Listed Tables Overview</h1>
     <div className='py-5'>
        <div className="flex lg:w-[90%] 2xl:w-[65%] 2xl:h-[180px] mr-auto ml-auto py-5 items-center gap-3 justify-center">
            {data.map((item) => (
                <Menu_TableCountCard key={item.id} TotalCount={item.TotalCount} SeatType={item.SeatType} capacityCount={item.capacityCount}imgsrc={item.imgsrc}/>
            ))}
        </div>
     </div>
     <div className='h-[12%] flex items-center'>
         <div className='h-full  w-full max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px] flex flex-1 items-center relative'>
            <input type='text' className='border-b font-light border-[#A5A5A5] h-[40px] w-full rounded-none text-sm  focus:outline-none' placeholder='Search by Dish name'/>
            <img src={search} alt='' className='absolute  w-[20px] top-1/2 -translate-x-1/2 -translate-y-1/2 right-0'/>
         </div>
         <div className="cursor-pointer px-4">
            <svg width="20" height="20" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 14C11.6667 15.4728 10.4728 16.6667 9 16.6667C7.52724 16.6667 6.33333 15.4728 6.33333 14C6.33333 12.5272 7.52724 11.3333 9 11.3333C10.4728 11.3333 11.6667 12.5272 11.6667 14ZM8.5 2C8.5 1.72386 8.72386 1.5 9 1.5C9.27614 1.5 9.5 1.72386 9.5 2L8.5 2ZM8.5 14L8.5 2L9.5 2L9.5 14L8.5 14Z" fill="black"/>
                <path d="M0.333334 3C0.333334 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333334 4.47276 0.333334 3ZM3.5 15C3.5 15.2761 3.27614 15.5 3 15.5C2.72386 15.5 2.5 15.2761 2.5 15L3.5 15ZM3.5 3L3.5 15L2.5 15L2.5 3L3.5 3Z" fill="black"/>
            </svg>
         </div>
     </div>
     {
  Object.keys(tablelist).map((item) => (
    <div key={item}>
      <h1 className="text-xl font-light py-5">{item}</h1>
      {tablelist[item].map((value, index) => (
            Object.keys(value).map((dataKey) => (
                <>
                  <h1 className="text-lg font-light py-4">{dataKey}</h1>
                   <div className='flex flex-col gap-2'>
                      {
                        value[dataKey].map((items)=>{
                            return <Menu_ListedTableCard key={items.id} image={dataKey === "2 Seater" ? table_1 : dataKey === "4 Seater" ? table_2 : table_3} data={items} />;
                        })
                      }
                   </div>
                </>
            ))
        
      ))}
    </div>
  ))
}

 </>
  )
}

export default Menu_ListedTables