import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Radio } from 'antd';

const FormSchema = z.object({ 
  Item_Category:z.string().min(1,{message:"Select the Category"}),
  Sub_Category:z.string().min(1,{message:"Select the Sub Category"}),
  Dish_Name:z.string().min(1,{message:"Select the Dish"}),
  Description:z.string().min(1,{message:"Enter the Description"}),
  Ingredients:z.string().min(1,{message:"Enter Ingredients used"}),
  Dishimage:z.any().refine((files) => files?.length >= 1, { message: 'Image is required.' }),
})

function Menu_RequestNewDish(props) {
        const {register,handleSubmit,formState: { errors },setError,clearErrors} = useForm({ resolver: zodResolver(FormSchema) });
        const [value, setValue] = useState(1);
        const [filenames,setfilenames]=useState({
          Dishimage:""
       })
        //  Image Error
        const fileHandler=(e)=>{
            const {name , files} = e.target
            const fileData=files[0]
            
            const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
            if (!ACCEPTED_IMAGE_MIME_TYPES.includes(fileData.type)) {
              return  setError(name, {
                type: "manual",
                message: "Only .jpg, .jpeg, .png and .webp formats are supported."
              });
            }
            const MAX_SIZE = 3 * 1024 * 1024; 
            if (fileData.size > MAX_SIZE) {
              return setError(name, {
                type: "manual",
                message: "File size exceeds 3MB. Please upload a smaller PDF file."
              });
            }

            setfilenames({
              ...filenames,
              [name]: fileData,
            });
            clearErrors(name);
          }

        // Submit the New Dish add request
        const onSubmit = async(data) => {
          console.log(data)
        }

  return (
    <>
        {/* Add new Dish request item */}
       <form  onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-[20px] md:text-[22px] py-5">Add New Item Request</h1>
            {/* Radio Veg/Non Veg */}
            <div className='w-full h-[120px] bg-[#ECF1F6] rounded-xl font-light flex flex-col gap-2 justify-center px-10'>
                  <h1 className='text-[#808080] text-lg'>Veg/non veg</h1>
                  <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
                    <Radio value={1} className='text-xl font-normal' style={{buttonCheckedBg: '#ffffff' }}>Veg</Radio>
                    <Radio value={2}  className='text-xl font-normal'>Non - Veg</Radio>
                  </Radio.Group>
            </div>
            <div className='flex flex-row pt-5'>
              {/* Select Item Category */}
               <div className='flex-1  px-5 flex gap-4 flex-col'>
                  <h1>Item Category</h1>
                  <div className="relative w-full font-light">
                    <select className="appearance-none border w-full h-[60px] px-5 pr-10 rounded-md" {...register("Item_Category")}>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9"/>
                    </svg>
                  </div>
                  {/* Error for Item Category */}
                   {errors.Item_Category && (
                      <p className="font-light p-1 text-red-500 text-[14px]">
                         {errors.Item_Category.message}*
                      </p>
                    )}  
               </div>

               {/* Select Item Sub-Category */}
               <div className='flex-1 px-5 flex gap-4 flex-col'>
                  <h1>Item Sub-Category</h1>
                  <div className="relative w-full">
                    <select className="appearance-none border w-full h-[60px] px-5 pr-10 rounded-md font-light" {...register("Sub_Category")}>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9"/>
                    </svg>
                  </div>
                  {/* Error for Sub-Category */}
                  {errors.Sub_Category && (
                     <p className="font-light p-1 text-red-500 text-[14px]">
                        {errors.Sub_Category.message}*
                     </p>
                  )}  
               </div>
         </div>
         <div className='flex flex-row pt-5'>
              {/* Dish name */}
              <div className='flex-1  px-5 flex gap-4 flex-col'>
                  <h1>Dish Name</h1>
                  <div className="relative w-full">
                    <input type='text'  className="border w-full h-[60px] px-5 pr-10 rounded-md" placeholder='' {...register("Dish_Name")}/>
                  </div>
                  {/* Error Dish Name */}
                  {errors.Dish_Name && (
                     <p className="font-light p-1 text-red-500 text-[14px]">
                        {errors.Dish_Name.message}*
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
         <div className='flex flex-row pt-5'>
               {/* Input box for Ingredients */}
                <div className='flex-1  px-5 flex gap-4 flex-col'>
                  <h1>Ingredients</h1>
                  <div className="relative w-full font-light">
                      <input type='text'  className="border w-full h-[60px] px-5 pr-10 rounded-md" placeholder='' {...register("Ingredients")}/>
                  </div>
                  {/* Error in Dish ingredients */}
                  {errors.Ingredients && (
                     <p className="font-light p-1 text-red-500 text-[14px]">
                        {errors.Ingredients.message}*
                     </p>
                  )} 
                </div>
                {/* Add dish Image */}
                <div className='flex-1  px-5 flex gap-4 flex-col'>
                  <h1>Dish Image</h1>
                  <div className="relative w-full font-light">
                      <input type="file" id="images" className="hidden" onChange={fileHandler} name="Dishimage"/>
                      <label htmlFor="images" className="border bg-[#EAEAEA] w-full h-[60px] px-5 pr-10 rounded-md text-[#7B7B7B] flex items-center justify-center" placeholder='' {...register("Description")}>Upload</label>
                      <div className="flex items-center ">
                         <p className="mt-2 text-sm  text-[#858181] ">
                            {
                               filenames.Dishimage ? filenames.Dishimage.name : "No file chosen"
                            }
                         </p>
                      </div>
                  </div>
                  {/* Error in added Dish Images */}
                  {errors.Dishimage && (
                     <p className="font-light p-1 text-red-500 text-[14px]">
                        {errors.Dishimage.message}*
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

export default Menu_RequestNewDish