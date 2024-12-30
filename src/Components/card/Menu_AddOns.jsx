import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const dynamicSchema = {};
for (let i = 1; i <= 5; i++) {
  dynamicSchema[`AddName${i}`] = z.string().min(1, {message: "Select the portion size",});
  dynamicSchema[`Price${i}`] = z.string().min(1, {message: "Item Price Reqiured"});
}

const FormSchema = z.object({ 
  ...dynamicSchema
})

function Menu_AddOns(props) {
     const {register,handleSubmit,formState: { errors },setError,clearErrors} = useForm({ resolver: zodResolver(FormSchema) });
     const [totalportion,setportion]=useState(0)
     const onSubmit = async(data) => {   console.log(data) }

  return (
   <>
       {/* Add new Odd Ons */}
       <form  onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-[20px] md:text-[22px] py-5">ODD ONS - VARIENTS</h1>
            {/* Get Total Add on need to List */}
            <div className='flex flex-row pt-5'>
              <div className='flex-1  px-5 flex gap-4 flex-col'>
                  <h1>Total AddOns</h1>
                  <div className="relative w-full">
                    <select className="appearance-none border w-full h-[60px] px-5 pr-10 rounded-md font-light" onChange={(e)=>{setportion(e.target.value)}}>
                        <option hidden>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <svg className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9"/>
                    </svg>
                  </div>
               </div>
               <div className='flex-1 px-5 flex gap-4 flex-col'></div>
            </div>
            {/* Boxs for the New Add ons Based on the Selected number*/}
            {
                  totalportion != null && (
                    <>
                      { 
                       Array.from({ length: totalportion }).map((_, i) => (
                        <div key={i}>
                          <h1 className="text-[20px] md:text-[18px] pt-10">Add Ons Details ~ {i+1}</h1>
                          <div className='flex flex-row pt-5'>
                            {/* Add On name */}
                            <div className='flex-1 px-5 flex gap-4 flex-col'>
                              <h1>AddOn Name</h1>
                              <div className="relative w-full">
                                <select {...register(`AddName${i + 1}`)} className="appearance-none border w-full h-[60px] px-5 pr-10 rounded-md font-light">
                                  <option value="" hidden>Select</option>
                                  <option value="appetizers">Appetizers</option>
                                  <option value="main_course">Main Course</option>
                                  <option value="desserts">Desserts</option>
                                  <option value="beverages">Beverages</option>
                                  <option value="soups">Soups</option>
                                  <option value="salads">Salads</option>
                                  <option value="sides">Sides</option>
                                  <option value="breakfast">Breakfast</option>
                                  <option value="seafood">Seafood</option>
                                  <option value="vegan">Vegan</option>
                                </select>
                                <svg className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                                </svg>
                              </div>
                              {/* Error */}
                              {errors[`AddName${i + 1}`] && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors[`AddName${i + 1}`].message}*
                                     </p>
                                  )} 
                            </div>
                            {/* price */}
                            <div className='flex-1 px-5 flex gap-4 flex-col'>
                              <h1>AddOn Price <span className='text-[#999999] text-sm font-light'>(Excluding all tax)</span></h1>
                              <div className="relative w-full">
                                <input type="number" {...register(`Price${i + 1}`)} className="border w-full h-[60px] px-10 pr-10 rounded-md appearance-none font-light" placeholder="" step="0.01" min={1} />
                                <div className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-6'>
                                  <svg width="10" height="15" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.91938 7.792L1.26338 6.912V6.128H2.99138C3.46071 6.128 3.84471 5.95733 4.14338 5.616C4.45271 5.27467 4.60738 4.85333 4.60738 4.352C4.60738 3.97867 4.51671 3.65333 4.33538 3.376C4.16471 3.088 3.91938 2.864 3.59938 2.704C3.29004 2.544 2.93804 2.464 2.54338 2.464H0.447375V0.799999H7.45538V2.464H4.41538L2.83138 1.44C3.31138 1.44 3.76471 1.51467 4.19138 1.664C4.61804 1.81333 4.99138 2.02133 5.31138 2.288C5.64204 2.544 5.89804 2.85333 6.07938 3.216C6.27138 3.568 6.36738 3.952 6.36738 4.368C6.36738 4.82667 6.27138 5.264 6.07938 5.68C5.89804 6.08533 5.64738 6.448 5.32738 6.768C5.00738 7.088 4.62871 7.33867 4.19138 7.52C3.76471 7.70133 3.31138 7.792 2.83138 7.792H1.91938ZM4.91138 12L1.31138 6.944L3.08738 6.544L7.00738 12.016L4.91138 12ZM3.23138 5.072V3.632H7.51938V5.072H3.23138Z" fill="#999999" />
                                  </svg>
                                </div>
                              </div>
                              {/* Error */}
                              {errors[`Price${i + 1}`] && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors[`Price${i + 1}`].message}*
                                     </p>
                                  )} 
                            </div>
                          </div>
                        </div>
                       ))
                      }
                      </>
                  )
            }
            {
               (totalportion!=0)&&(
                 <div className='w-full py-8 px-5 flex items-center justify-center'>
                     {/* Cancel */}
                     <button type='button' className='text-[#DC3333] px-3 underline underline-offset-4 rounded-xl' onClick={()=>{props.setaddnewtoggle(false)}}>Cancel</button>
                     {/* Submit */}
                     <button className='bg-[#0BBA08] ml-auto text-white px-10 flex flex-row items-center justify-center py-5 gap-5 rounded-xl'>
                          Submit
                          <svg width="129" height="16" viewBox="0 0 129 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M128.707 8.70711C129.098 8.31658 129.098 7.68342 128.707 7.29289L122.343 0.928932C121.953 0.538408 121.319 0.538408 120.929 0.928932C120.538 1.31946 120.538 1.95262 120.929 2.34315L126.586 8L120.929 13.6569C120.538 14.0474 120.538 14.6805 120.929 15.0711C121.319 15.4616 121.953 15.4616 122.343 15.0711L128.707 8.70711ZM0 9H128V7H0V9Z" fill="white"/>
                          </svg>
                     </button>
                 </div>
               )
            }  
       </form>
   </>
  )
}

export default Menu_AddOns