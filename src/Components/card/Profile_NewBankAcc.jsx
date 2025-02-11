import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {bankapi} from '../../services/api'
import { useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import { setChangeToggle } from '../../Slices/BankPopSlice';
const FormSchema = z.object({ 
    BankName:z.string().min(1,{message:"Select Bank"}),
    BankNumber:z.string().min(1,{message:"Account No Required*"}),
    ConfirmNumber:z.string().min(1,{message:"Retype Account no*"}),
    IfscCode:z.string().min(1,{message:"Enter IFSC code*"}),
    Holdername:z.string().min(1,{message:"Enter Holder Name*"})
  })

function Profile_NewBankAcc(props) {
      const {register,handleSubmit,watch,formState: { errors }} = useForm({ resolver: zodResolver(FormSchema) });
      const dispatch = useDispatch()
      
      const bankName = watch("BankName");
      const [banklist,setbanklist]=useState([])
      const onSubmit = async(data) => {
        console.log(data)
      }
    
      useEffect(()=>{
        const data =async() =>{
          const result_data = await bankapi()
          setbanklist(result_data)
        }
        data()
      },[])
      
  return (
    <div className='fixed  top-0 w-full h-full flex items-center justify-center  bg-[#00000067]'  onClick={()=>dispatch(setChangeToggle())} >
          <div className="bg-white w-full max-w-[800px] p-10 rounded-3xl" onClick={(e)=>{e.stopPropagation()}}>
          <form  onSubmit={handleSubmit(onSubmit)}>
             <h1>Add New</h1>
             <h1 className="text-3xl">Bank Account</h1>
             <div className="py-5 flex flex-col gap-3"> 
                  <div className="flex gap-4">
                      <div className="w-full flex-1 gap-2 flex flex-col">
                           <h1 className="text-md font-light text-[#858181]">Bank Name</h1>
                        
                           <select  {...register("BankName")} className="border flex w-full h-[60px] laptop:h-[50px] rounded-lg text-md px-2 py-3 font-light">
                                             <option value="">Select State</option>
                                             {banklist.map((item,index) => (
                                               <option key={index} value={index}>
                                                 {item.name}
                                               </option>
                                             ))}
                                       </select>
                          
                           {errors.BankName && (
                                    <p className="font-light p-1 text-red-500 text-xs">
                                       {errors.BankName.message}*
                                    </p>
                            )}                              
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                          {
                            bankName && (
                               <img src={banklist[bankName].logo_url} alt="" className="w-[120px]"/>
                            )
                          }                         
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="w-full flex-1 gap-2 flex flex-col">
                         <h1 className="text-md font-light text-[#858181]">Account No.</h1>
                           <div  className="border flex w-full h-[60px] laptop:h-[50px] rounded-lg text-[18px] py-3 font-light px-5">
                               <input {...register("BankNumber")} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, "") }}  className="flex-1 focus:outline-none"/>
                           </div>   
                           {errors.BankNumber && (
                                    <p className="font-light p-1 text-red-500 text-xs">
                                       {errors.BankNumber.message}*
                                    </p>
                            )}                               
                      </div>
                      <div className="w-full flex-1 gap-2 flex flex-col">
                         <h1 className="text-md font-light text-[#858181]">Confirm Account No.</h1>
                           <div  className="border flex w-full h-[60px] laptop:h-[50px] rounded-lg text-[18px] py-3 font-light px-5">
                               <input {...register("ConfirmNumber")} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, "") }}  className="flex-1 focus:outline-none"/>
                           </div>  
                           {errors.ConfirmNumber && (
                                    <p className="font-light p-1 text-red-500 text-xs">
                                       {errors.ConfirmNumber.message}*
                                    </p>
                            )}                                
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="w-full flex-1 gap-2 flex flex-col">
                         <h1 className="text-md font-light text-[#858181]">IFSC Code</h1>
                           <div  className="border flex w-full h-[60px] laptop:h-[50px] rounded-lg text-[18px] py-3 font-light px-5">
                               <input {...register("IfscCode")}  className="flex-1 focus:outline-none"/>
                           </div>  
                           {errors.IfscCode && (
                                    <p className="font-light p-1 text-red-500 text-xs">
                                       {errors.IfscCode.message}*
                                    </p>
                            )}                               
                      </div>
                      <div className="w-full flex-1 gap-2 flex flex-col">
                         <h1 className="text-md font-light text-[#858181]">Holder Name</h1>
                           <div  className="border flex w-full h-[60px] laptop:h-[50px] rounded-lg text-[18px] py-3 font-light px-5">
                               <input {...register("Holdername")} onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ""); }}  className="flex-1 focus:outline-none"/>
                           </div>      
                           {errors.Holdername && (
                                    <p className="font-light p-1 text-red-500 text-xs">
                                       {errors.Holdername.message}*
                                    </p>
                            )}                         
                      </div>
                  </div>  
                  <div className='w-full py-4  flex items-center justify-center'>
                     {/* Cancel */}
                     <button type='button' className='text-[#DC3333] px-3 underline underline-offset-4 rounded-xl'  onClick={()=>dispatch(setChangeToggle())}>Cancel</button>
                     {/* Submit */}
                     <button className='bg-[#0BBA08] ml-auto text-white px-5 flex flex-row items-center justify-center py-4 gap-5 rounded-xl'>
                          Submit
                          <svg width="129" height="16" viewBox="0 0 129 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M128.707 8.70711C129.098 8.31658 129.098 7.68342 128.707 7.29289L122.343 0.928932C121.953 0.538408 121.319 0.538408 120.929 0.928932C120.538 1.31946 120.538 1.95262 120.929 2.34315L126.586 8L120.929 13.6569C120.538 14.0474 120.538 14.6805 120.929 15.0711C121.319 15.4616 121.953 15.4616 122.343 15.0711L128.707 8.70711ZM0 9H128V7H0V9Z" fill="white"/>
                          </svg>
                     </button>
                 </div>               
             </div>
             </form>
             
          </div>
          
            
          
      </div>
  )
}

export default Profile_NewBankAcc