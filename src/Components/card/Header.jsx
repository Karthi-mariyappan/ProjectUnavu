import Header_Logo from '../../Assets/Images/headerlogo.svg'
import { MenuOutlined } from '@ant-design/icons';
import Temp_pf from '../../Assets/Images/hoteldp.png'
import { useNavigate } from 'react-router-dom';
const Header=()=>{
    const navigate= useNavigate()
    return(
        <>
        <div className=" py-2 px-3 bg-white md:px-8 hidden laptop:flex sticky top-0">
            {/* Logo */}
            <div className='flex flex-row items-center' onClick={()=>{navigate('/panel/Orders')}}>
              <img src={Header_Logo} className=' md:w-[80px] laptop:w-[95px] 2xl:w-[110px]' />
              <hr className='w-[1px] h-[45px] border border-[#9F8F8F] mx-4'></hr>
            </div>
            {/* content */}
            <div className='flex-1 pl-5 py-1 flex items-center'>
                    {/* Header Notification Alert  */}
                     <div className='w-full max-w-[270px] h-[90%] flex py-1 items-center px-1 rounded-full bg-[#33374D] cursor-pointer'>
                       <div className='flex-1'>
                           <div className='relative px-3'>
                              <h1 className='text-white font-light text-center flex items-center justify-center gap-2'>Open Outlets 
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"fill="currentColor">
                                       <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                                    </svg>
                              </h1>
                           </div>
                       </div>
                       <div className='h-full w-[40%] flex items-center justify-center bg-white rounded-full '>
                         <h1 className='text-[#31B52F]'>ON - 2</h1>
                       </div>
                    </div>
                    {/* Search Bar */}
                    <div className=' flex flex-1 h-[90%] items-center px-3'>
                        <div className='flex-1 h-full flex items-center justify-end'>
                           <div className='flex-1 flex h-full relative w-full max-w-[500px]'>
                                    <input type='text' className='bg-[#ECF1F6] h-full rounded-full px-16  max-w-[700px] w-full focus:outline-none font-light text-[18px]' placeholder='Search here' />
                                    <div className='absolute  top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2'>
                                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z" stroke="#8D9093" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                       </svg>
                                   </div>
                           </div>
                        </div>
                        {/* Nofiticaiton Icon and Restaurant Name */}
                        <div className='flex h-full items-center gap-2 pl-4'>
                             <div className='cursor-pointer'>
                                <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M13.2699 3.1875H16.2917C16.5735 3.1875 16.8437 3.29944 17.043 3.4987C17.2422 3.69796 17.3542 3.96821 17.3542 4.25C17.3542 4.53179 17.2422 4.80204 17.043 5.0013C16.8437 5.20056 16.5735 5.3125 16.2917 5.3125H13.3167C11.713 5.3125 10.5726 5.3125 9.6815 5.38617C8.80317 5.457 8.25775 5.59442 7.82567 5.814C6.95956 6.25538 6.25538 6.95956 5.814 7.82567C5.59442 8.25775 5.45842 8.80317 5.38617 9.6815C5.31392 10.574 5.3125 11.713 5.3125 13.3167V20.6833C5.3125 22.2884 5.3125 23.4274 5.38617 24.3185C5.457 25.1968 5.59442 25.7422 5.814 26.1743C6.25538 27.0404 6.95956 27.7446 7.82567 28.186C8.25775 28.4056 8.80317 28.5416 9.6815 28.6138C10.574 28.6861 11.713 28.6875 13.3167 28.6875H20.6833C22.2884 28.6875 23.4274 28.6875 24.3185 28.6138C25.1968 28.543 25.7422 28.4056 26.1743 28.186C27.0404 27.7446 27.7446 27.0404 28.186 26.1743C28.4056 25.7422 28.5416 25.1968 28.6138 24.3185C28.6861 23.426 28.6875 22.287 28.6875 20.6833V17.7083C28.6875 17.4265 28.7994 17.1563 28.9987 16.957C29.198 16.7578 29.4682 16.6458 29.75 16.6458C30.0318 16.6458 30.302 16.7578 30.5013 16.957C30.7006 17.1563 30.8125 17.4265 30.8125 17.7083V20.7301C30.8125 22.2771 30.8125 23.5039 30.7318 24.4913C30.6496 25.5028 30.4767 26.3571 30.0801 27.1391C29.4347 28.4049 28.4052 29.4339 27.1391 30.0787C26.3571 30.4767 25.5028 30.6496 24.4913 30.7318C23.5039 30.8125 22.2771 30.8125 20.7301 30.8125H13.2699C11.7229 30.8125 10.4961 30.8125 9.50867 30.7318C8.49717 30.6496 7.64292 30.4767 6.86233 30.0801C5.59603 29.4349 4.5665 28.4054 3.92133 27.1391C3.52325 26.3571 3.35042 25.5028 3.26825 24.4913C3.1875 23.5039 3.1875 22.2771 3.1875 20.7301V13.2699C3.1875 11.7229 3.1875 10.4961 3.26825 9.50867C3.35042 8.49717 3.52325 7.64292 3.91992 6.86233C4.56546 5.59581 5.5955 4.56626 6.86233 3.92133C7.6415 3.52325 8.49717 3.35042 9.50867 3.26825C10.4961 3.1875 11.7229 3.1875 13.2699 3.1875ZM20.8958 8.14583C20.8958 7.4947 21.0241 6.84993 21.2733 6.24836C21.5224 5.64679 21.8877 5.10019 22.3481 4.63976C22.8085 4.17934 23.3551 3.81411 23.9567 3.56493C24.5583 3.31575 25.203 3.1875 25.8542 3.1875C26.5053 3.1875 27.1501 3.31575 27.7516 3.56493C28.3532 3.81411 28.8998 4.17934 29.3602 4.63976C29.8207 5.10019 30.1859 5.64679 30.4351 6.24836C30.6842 6.84993 30.8125 7.4947 30.8125 8.14583C30.8125 9.46087 30.2901 10.722 29.3602 11.6519C28.4304 12.5818 27.1692 13.1042 25.8542 13.1042C24.5391 13.1042 23.278 12.5818 22.3481 11.6519C21.4182 10.722 20.8958 9.46087 20.8958 8.14583Z" fill="#706F6F"/>
                               </svg>
                             </div>
                            <div className='h-full flex flex-row py-1 items-center px-1 rounded-full bg-[#ECF1F6] cursor-pointer' onClick={()=>{navigate("/Profile/Account")}}>
                                 <div className='w-[40px] rounded-full'>
                                 <img src={Temp_pf} alt='' className='rounded-full'/>
                                 </div>
                                 <div className='pr-7 pl-2 max-w-[180px]'>
                                        <h1 className='truncate'>Sangeetha’s veg</h1>
                                        <h1 className='font-light text-[#7A7A7A] text-[13px]'>Admin Login</h1>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            {/* Mobile view */}
            <div className='py-5 px-5 laptop:hidden flex items-center'>
                <div className='flex flex-row items-center'>
                  <img src={Header_Logo} className='w-[90px]' />
                  <hr className='w-[1px] h-[45px] border border-[#c7c3c3] mx-4'></hr>
                </div>
                <div className='w-[180px] h-full flex py-3 items-center px-2 rounded-full bg-[#33374D] cursor-pointer'>
                       <div className='flex-1 '>
                           <div className='relative'>
                                <h1 className='text-white font-light text-[12px] px-2'>Open Outlets</h1>
                                <div className="absolute top-1/2 right-1 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"fill="currentColor">
                                       <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                           </div>
                       </div>
                       <div className='px-2 flex items-center justify-center bg-white rounded-full '>
                                <h1 className='text-[#31B52F] text-[12px]'>ON - 2</h1>
                       </div>
                </div>
                <div className='flex-1 h-full flex items-center justify-end gap-3'>
                    <div className=' relative  h-full items-center  hidden md:flex '>
                                <input type='text' className='bg-[#ECF1F6] py-2  rounded-full px-16  max-w-[700px] w-full focus:outline-none font-light text-[18px]' placeholder='Search here' />
                                <div className='absolute px-5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z" stroke="#8D9093" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                    </div>
                    <div className='hidden md:flex'>
                       <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2699 3.1875H16.2917C16.5735 3.1875 16.8437 3.29944 17.043 3.4987C17.2422 3.69796 17.3542 3.96821 17.3542 4.25C17.3542 4.53179 17.2422 4.80204 17.043 5.0013C16.8437 5.20056 16.5735 5.3125 16.2917 5.3125H13.3167C11.713 5.3125 10.5726 5.3125 9.6815 5.38617C8.80317 5.457 8.25775 5.59442 7.82567 5.814C6.95956 6.25538 6.25538 6.95956 5.814 7.82567C5.59442 8.25775 5.45842 8.80317 5.38617 9.6815C5.31392 10.574 5.3125 11.713 5.3125 13.3167V20.6833C5.3125 22.2884 5.3125 23.4274 5.38617 24.3185C5.457 25.1968 5.59442 25.7422 5.814 26.1743C6.25538 27.0404 6.95956 27.7446 7.82567 28.186C8.25775 28.4056 8.80317 28.5416 9.6815 28.6138C10.574 28.6861 11.713 28.6875 13.3167 28.6875H20.6833C22.2884 28.6875 23.4274 28.6875 24.3185 28.6138C25.1968 28.543 25.7422 28.4056 26.1743 28.186C27.0404 27.7446 27.7446 27.0404 28.186 26.1743C28.4056 25.7422 28.5416 25.1968 28.6138 24.3185C28.6861 23.426 28.6875 22.287 28.6875 20.6833V17.7083C28.6875 17.4265 28.7994 17.1563 28.9987 16.957C29.198 16.7578 29.4682 16.6458 29.75 16.6458C30.0318 16.6458 30.302 16.7578 30.5013 16.957C30.7006 17.1563 30.8125 17.4265 30.8125 17.7083V20.7301C30.8125 22.2771 30.8125 23.5039 30.7318 24.4913C30.6496 25.5028 30.4767 26.3571 30.0801 27.1391C29.4347 28.4049 28.4052 29.4339 27.1391 30.0787C26.3571 30.4767 25.5028 30.6496 24.4913 30.7318C23.5039 30.8125 22.2771 30.8125 20.7301 30.8125H13.2699C11.7229 30.8125 10.4961 30.8125 9.50867 30.7318C8.49717 30.6496 7.64292 30.4767 6.86233 30.0801C5.59603 29.4349 4.5665 28.4054 3.92133 27.1391C3.52325 26.3571 3.35042 25.5028 3.26825 24.4913C3.1875 23.5039 3.1875 22.2771 3.1875 20.7301V13.2699C3.1875 11.7229 3.1875 10.4961 3.26825 9.50867C3.35042 8.49717 3.52325 7.64292 3.91992 6.86233C4.56546 5.59581 5.5955 4.56626 6.86233 3.92133C7.6415 3.52325 8.49717 3.35042 9.50867 3.26825C10.4961 3.1875 11.7229 3.1875 13.2699 3.1875ZM20.8958 8.14583C20.8958 7.4947 21.0241 6.84993 21.2733 6.24836C21.5224 5.64679 21.8877 5.10019 22.3481 4.63976C22.8085 4.17934 23.3551 3.81411 23.9567 3.56493C24.5583 3.31575 25.203 3.1875 25.8542 3.1875C26.5053 3.1875 27.1501 3.31575 27.7516 3.56493C28.3532 3.81411 28.8998 4.17934 29.3602 4.63976C29.8207 5.10019 30.1859 5.64679 30.4351 6.24836C30.6842 6.84993 30.8125 7.4947 30.8125 8.14583C30.8125 9.46087 30.2901 10.722 29.3602 11.6519C28.4304 12.5818 27.1692 13.1042 25.8542 13.1042C24.5391 13.1042 23.278 12.5818 22.3481 11.6519C21.4182 10.722 20.8958 9.46087 20.8958 8.14583Z" fill="#706F6F"/>
                       </svg>
                    </div>
                    <button className='px-3 ml-3 rounded-xl py-2 border '>
                        <MenuOutlined />
                    </button>
                </div>
            </div>
        </> 
    )
}

export default Header