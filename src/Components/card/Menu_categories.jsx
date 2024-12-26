import {useState,useEffect } from "react";
import sreach from '../../Assets/Images/search.svg'
import veg from '../../Assets/Images/veg.svg'
import Nonveg from '../../Assets/Images/NonVeg.svg'
import { ConfigProvider, Switch } from 'antd';
import {menudetails} from '../../services/api'

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
    <div className=" w-full max-w-[300px] 2xl:max-w-[340px] h-full flex flex-col bg-white rounded-2xl">
                <h1 className='h-[13%] flex items-center px-7 text-2xl text-[#6C5B5B]'>Categories</h1>
                <div className='h-full overflow-scroll flex flex-col gap-2 bar'>
                    {
                        Object.keys(menudata).map((item)=>{
                            return <h1 key={item} className='px-7 text-[#4E5052] hover:text-black font-light text-lg cursor-pointer'>{item}</h1>
                        })
                    }
                </div>
            </div>
            <div className="flex-1 h-full bg-white rounded-3xl relative pt-3">
                <div className='h-[12%] flex items-center pr-10'>
                     <div className='h-full  w-full max-w-[300px] xl:max-w-[450px] 2xl:max-w-[550px] flex flex-1 items-center px-8 relative'>
                        <input type='text' className='border-b font-light border-[#A5A5A5] h-[50px] w-full rounded-none focus:outline-none' placeholder='Search by Dish name'/>
                        <img src={sreach} alt='' className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 right-8'/>
                     </div>
                     <div className="cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 14C11.6667 15.4728 10.4728 16.6667 9 16.6667C7.52724 16.6667 6.33333 15.4728 6.33333 14C6.33333 12.5272 7.52724 11.3333 9 11.3333C10.4728 11.3333 11.6667 12.5272 11.6667 14ZM8.5 2C8.5 1.72386 8.72386 1.5 9 1.5C9.27614 1.5 9.5 1.72386 9.5 2L8.5 2ZM8.5 14L8.5 2L9.5 2L9.5 14L8.5 14Z" fill="black"/>
                            <path d="M0.333334 3C0.333334 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333334 4.47276 0.333334 3ZM3.5 15C3.5 15.2761 3.27614 15.5 3 15.5C2.72386 15.5 2.5 15.2761 2.5 15L3.5 15ZM3.5 3L3.5 15L2.5 15L2.5 3L3.5 3Z" fill="black"/>
                        </svg>
                     </div>
                     <button className='font-light border ml-auto py-2 px-8 rounded-xl text-[#0BBA08] border-[#0BBA08]' onClick={()=>{props.addnewmenu(true)}}>ADD NEW ITEM</button>
                </div>
                <div className='px-10 py-5 h-[88%] overflow-scroll bar'>
                    {
                          Object.keys(menudata).map((item)=>{
                             return <>
                              {/* menudata[item].map((data)=>{console.log(data)}) */}
                              <h1 className='text-xl font-light py-5' key={item}>{item} ~ 2</h1>
                              <div className='flex flex-col gap-3'>
                              {
                                menudata[item].map((data)=>{
                                    return  <div key={data} className='flex items-center px-5 py-2 gap-4 font-light border'>
                                        {
                                            data.type=="Veg" ?(<>
                                                <img src={veg} className='' alt=''/>
                                            </>):(<>
                                                <img src={Nonveg} className='' alt=''/>
                                            </>)
                                        }
                                   
                                    <div className='flex-1 '>
                                        <h1 className='truncate'>{data.name}</h1>
                                    </div>
                                    <div className='flex-1  flex'>
                                        <div className='flex items-center'> 
                                            <ConfigProvider
                                                 theme={{
                                                   components: {
                                                     Switch: {
                                                       colorPrimary: '#C4F1BF', // Green background for checked state
                                                       colorPrimaryHover: '#C4F1BF', // Hover state for checked
                                                       colorBgContainer: '#FF3535', // Unchecked background
                                                       handleBg: '#2DB92A', // Handle color for unchecked
                                                       handleBgActive: '#fadb14', // Handle color for checked
                                                     },
                                                   },
                                                 }}>
                                               <Switch
                                                      checked={data.stock === 'on'}
                                                      onChange={(checked) => {
                                                        console.log(`${checked ? 'on' : 'off'} `+data.id);
                                                      }}
                                                    />
                                            </ConfigProvider></div>
                                        <div className='flex-1 flex items-center justify-end gap-5'>
                                            <button className='px-10 py-2 border rounded-xl border-[#C2BBBB] text-[#C2BBBB]'>Edit</button>
                                            <button className='px-10 py-2 border rounded-xl border-[#FF0000] text-[#FF0000]'>Delete</button>
                                        </div>
                                    </div>
                                </div>
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