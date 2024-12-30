import {useState,useEffect } from "react";
import sreach from '../../Assets/Images/search.svg'
import {menudetails} from '../../services/api'
import {Menu_ListedCard} from "./Menu_ListedCard";
import veg from '../../Assets/Images/veg.svg'
import Nonveg from '../../Assets/Images/nonveg.svg'

function Menu_categories(props) {
    const [menudata,setmenudata]=useState([])
    useEffect(()=>{
        const getmenudata=async()=>{
            const data =  await menudetails()
            setmenudata(data)
        }
        getmenudata()
      },[])

  return (
        <>  
           {/* List the Totle listed Categories in Listed menu */}
            <div className=" w-full max-w-[240px] 2xl:max-w-[340px] h-full flex flex-col bg-white rounded-2xl">
                <h1 className='flex items-center px-7 py-5 text-xl 2xl:text-2xl text-[#6C5B5B]'>Categories</h1>
                <div className='h-full overflow-scroll flex flex-col gap-2 bar'>
                    {
                        Object.keys(menudata).map((item)=>{
                            return <h1 key={item} className='px-7 text-[#4E5052] hover:text-black font-light lg:text-sm 2xl:text-lg cursor-pointer'>{item}</h1>
                        })
                    }
                </div>
            </div>
            <div className="flex-1 h-full bg-white rounded-3xl relative pt-3">
                <div className='h-[12%] flex items-center pr-10'>
                     {/* Search the Dish By search bar */}
                     <div className='h-full  w-full max-w-[300px] xl:max-w-[450px] 2xl:max-w-[550px] flex flex-1 items-center pl-8 relative'>
                        <input type='text' className='border-b font-light border-[#A5A5A5] h-[40px] w-full rounded-none text-sm  focus:outline-none' placeholder='Search by Dish name'/>
                        <img src={sreach} alt='' className='absolute  w-[20px] top-1/2 -translate-x-1/2 -translate-y-1/2 right-0'/>
                     </div>
                     {/* Filter icon */}
                     <div className="cursor-pointer px-4">
                        <svg width="20" height="20" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 14C11.6667 15.4728 10.4728 16.6667 9 16.6667C7.52724 16.6667 6.33333 15.4728 6.33333 14C6.33333 12.5272 7.52724 11.3333 9 11.3333C10.4728 11.3333 11.6667 12.5272 11.6667 14ZM8.5 2C8.5 1.72386 8.72386 1.5 9 1.5C9.27614 1.5 9.5 1.72386 9.5 2L8.5 2ZM8.5 14L8.5 2L9.5 2L9.5 14L8.5 14Z" fill="black"/>
                            <path d="M0.333334 3C0.333334 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333334 4.47276 0.333334 3ZM3.5 15C3.5 15.2761 3.27614 15.5 3 15.5C2.72386 15.5 2.5 15.2761 2.5 15L3.5 15ZM3.5 3L3.5 15L2.5 15L2.5 3L3.5 3Z" fill="black"/>
                        </svg>
                     </div>
                      {/* Add New Dish btn */}
                     <button className='font-light border ml-auto py-2 px-8 text-xs  rounded-md text-[#0BBA08] border-[#0BBA08]' onClick={()=>{props.addnewmenu(true)}}>ADD NEW ITEM</button>
                </div>
                {/* Listed menus */}
                <div className='px-10 h-[88%] pb-5 overflow-scroll bar'>
                    {
                          Object.keys(menudata).map((item)=>{
                             return <>
                              <h1 className='text-xl font-light py-5' key={item}>{item} ~ 2</h1>
                              <div className='flex flex-col gap-3'>
                              {
                                menudata[item].map((data)=>{
                                    return  <Menu_ListedCard key={data} image={data.type=="Veg"?veg:Nonveg} data={data}/>
                                })
                              }
                              </div>
                              
                             </>
                          })
                    }  
                </div>
            </div>
        </>
  )
}

export default Menu_categories