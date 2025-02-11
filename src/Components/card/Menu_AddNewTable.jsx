import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Radio } from 'antd';

const FormSchema = z.object({ 
  Floor:z.string().min(1,{message:"Select the Category"}),
  Seating:z.string().min(1,{message:"Select the Sub Category"}),
  tablenumber:z.string().min(1,{message:"Enter table Number"}),
  Description:z.string().min(1,{message:"Enter the Description"}),
})

function Menu_AddNewTable() {
      const {register,handleSubmit,formState: { errors }} = useForm({ resolver: zodResolver(FormSchema) });
            const [value, setValue] = useState(1);
            
            // Submit the New Dish add request
            const onSubmit = async(data) => {
              console.log(data)
            }
  return (
    <>
    {/* Add new Dish request item */}
   <form  onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[20px] md:text-[22px] py-5">List New Table</h1>
        {/* Radio Veg/Non Veg */}
        <div className='w-full h-[120px] bg-[#ECF1F6] rounded-xl font-light flex flex-col gap-2 justify-center px-10'>
              <h1 className='text-[#808080] text-lg'>Room Type</h1>
              <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
                <Radio value={1} className='text-xl font-normal' style={{buttonCheckedBg: '#ffffff' }}>AC</Radio>
                <Radio value={2}  className='text-xl font-normal'>NON-AC</Radio>
              </Radio.Group>
        </div>
        <div className='flex flex-row pt-5'>
          {/* Select Item Category */}
           <div className='flex-1  px-5 flex gap-4 flex-col'>
              <h1>Floor</h1>
              <div className="relative w-full font-light">
                <select className="appearance-none border w-full h-[60px] px-5 pr-10 rounded-md" {...register("Floor")}>
                    <option value="" hidden>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <svg className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9"/>
                </svg>
              </div>
              {/* Error for Item Category */}
               {errors.Floor && (
                  <p className="font-light p-1 text-red-500 text-[14px]">
                     {errors.Floor.message}*
                  </p>
                )}  
           </div>

           {/* Select Item Sub-Category */}
           <div className='flex-1 px-5 flex gap-4 flex-col'>
              <h1>Seating Capacity</h1>
              <div className="relative w-full">
                <select className="appearance-none border w-full h-[60px] px-5 pr-10 rounded-md font-light" {...register("Seating")}>
                    <option value="" hidden>Select</option>
                    <option value="2">2 Seater</option>
                    <option value="4">4 Seater</option>
                    <option value="8">8 Seater</option>
                </select>
                <svg className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9"/>
                </svg>
              </div>
              {/* Error for Sub-Category */}
              {errors.Seating && (
                 <p className="font-light p-1 text-red-500 text-[14px]">
                    {errors.Seating.message}*
                 </p>
              )}  
           </div>
     </div>
     <div className='flex flex-row pt-5'>
          {/* Dish name */}
          <div className='flex-1  px-5 flex gap-4 flex-col'>
              <h1>Table Number</h1>
              <div className="relative w-full">
                <input type='text'  className="border w-full h-[60px] px-5 pr-10 rounded-md" placeholder='' {...register("tablenumber")}/>
              </div>
              {/* Error Dish Name */}
              {errors.tablenumber && (
                 <p className="font-light p-1 text-red-500 text-[14px]">
                    {errors.tablenumber.message}*
                 </p>
              )}  
          </div>
          
          {/* Dish Description */}
          <div className='flex-1  px-5 flex gap-4 flex-col'>
              <h1>Description</h1>
              <div className="relative w-full font-light">
                  <input type='text'  className="border w-full h-[60px] px-5 pr-10 rounded-md" placeholder='' {...register("Description")}/>
              </div>
              {/* Error Dish Dscription */}
              {errors.Description && (
                 <p className="font-light p-1 text-red-500 text-[14px]">
                    {errors.Description.message}*
                 </p>
              )} 
          </div>
     </div>
     <div className='w-full py-8 px-5 flex items-center justify-center'>
        {/* Btn for Cancel the Form */}
        <button type='button' className='text-[#DC3333] px-3 underline underline-offset-4 rounded-xl' onClick={()=>{props.setaddnewtoggle(false)}}>Cancel</button>
        {/* Btn for Submit the New Add Request */}
        <button className='bg-[#0BBA08] ml-auto text-white px-10 flex flex-row items-center justify-center py-5 gap-5 rounded-xl'>
           Request
             <svg width="129" height="16" viewBox="0 0 129 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128.707 8.70711C129.098 8.31658 129.098 7.68342 128.707 7.29289L122.343 0.928932C121.953 0.538408 121.319 0.538408 120.929 0.928932C120.538 1.31946 120.538 1.95262 120.929 2.34315L126.586 8L120.929 13.6569C120.538 14.0474 120.538 14.6805 120.929 15.0711C121.319 15.4616 121.953 15.4616 122.343 15.0711L128.707 8.70711ZM0 9H128V7H0V9Z" fill="white"/>
             </svg>
        </button>
     </div>
   </form>
</>
  )
}

export default Menu_AddNewTable