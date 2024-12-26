import Menu_categories from './Menu_categories';
import Menu_menuHeader from './Menu_menuHeader'
import { useState } from "react";
import Menu_NewMenuAddFrom from './Menu_NewMenuAddFrom';


function Menu() {
     const [btntoggle,setbtntoggle]=useState(true)
     const [addnewtoggle,setaddnewtoggle]=useState(false)
   
  return (
    <>
      <Menu_menuHeader  setbtntoggle={setbtntoggle} btntoggle={btntoggle} />
      <div className="flex-1 px-8 flex flex-row gap-4 py-3 h-[70dvh]">
           {
              btntoggle?(<>
                  {
                    addnewtoggle ? (
                      <>
                         <div className="flex-1 h-full flex flex-row bg-white rounded-3xl relative py-2">
                             <div className='w-full max-w-[400px] py-5 h-full px-7 '>
                               <div className='py-5 flex items-center gap-3'>
                                  <svg width="23" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={()=>{setaddnewtoggle(false)}}>
                                       <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM26 7L1 7V9L26 9V7Z" fill="black"/>
                                  </svg>
                                  <h1 className='text-md cursor-pointer' onClick={()=>{setaddnewtoggle(false)}}>BACK TO MENU</h1>
                               </div>
                               <div className='py-5 flex flex-col gap-2 font-light'>
                                  <button className='bg-[#FF8811] w-full h-[60px] rounded-xl text-white'>BASIC iNFORMATION</button>
                                  <button className='bg-[#ECF1F6] w-full h-[60px] rounded-xl text-black'>ODD ONS - VARIENTS</button>
                               </div> 
                             </div>
                             <div className='w-full max-w-[400px] py-5 flex flex-col gap-2 px-7 absolute bottom-0'>
                                  <button className='bg-[#ECF1F6] h-[60px] rounded-xl text-[#626161] font-light'>Add New Item Request</button>
                             </div>
                             <div className='px-2 flex items-center'> <hr className='border border-[#D3D3D3] h-[90%]'></hr> </div>
                             <div className='flex-1 px-8 py-10 overflow-scroll bar'>
                                 <Menu_NewMenuAddFrom/>
                             </div>
                         </div>
                      </>
                      ):(
                      <>
                           <Menu_categories addnewmenu={setaddnewtoggle}/>
                      </>)
                  }
              </>):(
                   <>
                      <div className="flex-1 bg-white rounded-3xl relative pt-3">
                     
                      </div>
                   </>
                  )
           }
      </div>
    </>
  )
}

export default Menu