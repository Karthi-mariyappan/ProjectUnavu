import { Link } from "react-router-dom";
import Unavu_logo from "../../Assets/Images/Unavu_logo.svg";
import Otp_card from "../card/Otp_card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {GetCountries,GetState,GetCity,} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState, useEffect } from "react";
import { DatePicker } from 'antd';
import moment from 'moment';
import {Generate_otp, New_application} from '../../services/api'

const FormSchema = z.object({ 
    Restaurant_name: z.string().min(3, { message: "Name must be at least 2 characters long." }).max(100, { message: "Name must not exceed 100 characters." }),
    Restaurant_Category: z.enum(['Veg', 'Non-Veg', 'Both'], { errorMap: () => ({ message: "Please select a valid hotel category." })}),
    PhoneNumber: z.string().min(1, "PhoneNumber is required").regex(/^\d{10}$/, "Invalid PhoneNumber"),
    EmailID: z.string().email({ message: "Invalid email address." }),
    Restaurant_address: z.string().min(1,{message:"Restaurant Address Required"}),
    Restaurant_state:z.string().min(1,{message:"Select the State"}),
    Restaurant_city:z.string().min(1,{message:"Select the City"}),
    Restaurant_Number_Pincode:z.string().min(1,{message:"Pincode Required"}).regex(/^\d{6}$/,"Invalid Pincode"),
    Aadhar_number: z.string().min(1,{message:"Aadhar-Number Required"}),
    GST_number: z.string().min(1,{message:"Gst Number Required"}).regex(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/,"Invalid GST Number"),
    Fissi_no: z.string().min(1,{message:"Fssai No Required"}).length(14, { message: "Fssai No must be 14 characters long" }).regex(/^\d{14}$/, { message: "Invalid Fssai No format" }),
    First_name: z.string().min(1, { message: "Owner Required" }),
    Second_name: z.string(),
    mailID_opt: z.string().optional(),
    PhoneNumber_opt: z.string().optional(),
    Fissi_expiry_date: z.string().optional(),
    Aadhar_file:z.any().refine((files) => files?.length >= 1, { message: 'Image is required.' }),
    GST_file:z.any().refine((files) => files?.length >= 1, { message: 'Image is required.' }),
    Fissi_file:z.any().refine((files) => files?.length >= 1, { message: 'Image is required.' })
});

const Signup=()=> {

  const {register,handleSubmit,formState: { errors },setError,clearErrors} = useForm({ resolver: zodResolver(FormSchema) });
  // Otp Handling States
  const [PhoneOtp,setPhoneotp]=useState(new Array(6).fill(""))
  const [EmailOtp,setEmailotp]=useState(new Array(6).fill(""))
  const [Phonenumber,setPhonumber]=useState()
  const [email,setemail]=useState()
 
  const [Otp,SetOtp]=useState({
    EmailID:null,
    PhoneNumber:null
   })
  const isEmailValid = email && email.includes("@") && email.length >= 5;
  const isPhoneNumberValid = Phonenumber && Phonenumber.length === 10;

  //For PreDefind State and City dropdown 
  const [stateid, setStateid] = useState("");
  const [cityid, setCityid] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [date, setDate] = useState(null);

  const [filenames,setfilenames]=useState({
     Aadhar_file:"",
     GST_file:"",
     Fissi_file:""
  })

  useEffect(() => {
    GetCountries().then((result) => {
      const india = result.find((country) => country.name === "India");
      if (india) {
        GetState(india.id).then((stateResult) => {
          setStateList(stateResult);
        });
      }
    });
  }, []);

  // State handler
  const handleStateChange = (e) => {
      clearErrors("Restaurant_state");
    const selectedState = stateList.find((state) => state.id === parseInt(e.target.value)
    );
    if (selectedState) {
      setStateid(selectedState.id);
      GetCity(101, selectedState.id).then((result) => {setCityList(result);}).catch((err) => {
        console.error("Error fetching cities:", err);
      });
    }
  };

  // City handler
  const handleCityChange = (e) => {
      clearErrors("Restaurant_city");
    const selectedCity = cityList.find((city) => city.id === parseInt(e.target.value));
    if (selectedCity) {
      setCityid(selectedCity.id);
    }
  };

  const [value, setValue] = useState('');
  const formatInput = (e) => {
    let inputValue = e.target.value.replace(/\D/g, ''); 
    
    if (inputValue.length <= 4) {
      setValue(inputValue);
    
    } else if (inputValue.length <= 8) {
      setValue(inputValue.slice(0, 4) + '-' + inputValue.slice(4));
    } else {
      setValue(inputValue.slice(0, 4) + '-' + inputValue.slice(4, 8) + '-' + inputValue.slice(8, 12));
    }
    if(value.length==13){
      clearErrors("Aadhar_number");
    }
    else{
      setError("Aadhar_number", {
        type: "manual",
        message: "Invalid Aadhar Number"
      });
    }
  };

  const handleDateChange = (date, dateString) => {
    clearErrors("Fissi_expiry_date");
    setDate(dateString)
  };
  

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


  const onSubmit = async(data) => {
    try {
      if(date==null){
        return setError("Fissi_expiry_date", {
          type: "manual",
          message: "Please select the Fissi Expiry Date"
        });
      }
      else{
        const formData = new FormData();
        formData.append("Aadhar_file", filenames.Aadhar_file);
        formData.append("GST_file", filenames.GST_file);
        formData.append("Fissi_file", filenames.Fissi_file);
        formData.append("Date", JSON.stringify(date));
        formData.append("data", JSON.stringify(data));
        const result = await New_application(formData);
        if(result.status==200){
          console.log("Received")
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const [resend_timeout,settimeout]=useState({
    Email_timeout:0,
    PhoneNumber_timeout:0
  })


  const startCountdown = (type) => {
    const interval = setInterval(() => {
      settimeout((prev) => {
        const currentValue = prev[type];
        if (currentValue === 0) {
          clearInterval(interval); 
          return prev; 
        }
        return {
          ...prev,
          [type]: currentValue - 1,
        };
      });
    }, 1000);
  };
  

  const sendOtp = async (type) => {
    try {
      if (type === "Phonenumber") {
        const Phone_OTP = await Generate_otp(Phonenumber, "Phonenumber");
        SetOtp((prev) => ({ ...prev, PhoneNumber: Phone_OTP }));
        settimeout({
          ...resend_timeout,
          ["PhoneNumber_timeout"]:59
        }
        )
        startCountdown("PhoneNumber_timeout");
      } else if (type === "Email") {
        const EmailID_OTP = await Generate_otp(email, "Email");
        SetOtp((prev) => ({ ...prev, EmailID: EmailID_OTP }));
        settimeout({
          ...resend_timeout,
          ["Email_timeout"]:59
        }
        )
        startCountdown("Email_timeout");
      }
    } catch (error) {
      console.error("Error generating OTP:", error);
    }
  };


  const verifyOtp=async(OtpID,Otp_number)=>{
    try {
      console.log(OtpID,Otp_number)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="bg-[#EFEFEF]">
       <div className='bg laptop:p-14 laptop:py-8'>
       <form  onSubmit={handleSubmit(onSubmit)}>
           <div className=' w-[100%] laptop:w-[85%] 2xl:w-[75%] h-auto rounded-3xl flex flex-col mr-auto ml-auto bg-[#FFFFFF] py-5 md:py-14 px-5'>
              <div className="flex items-center justify-center pb-2">
                  <img src={Unavu_logo} className=" w-[180px] md:w-[220px] laptop:w-[250px]"/>
              </div>
              <h1 className="text-center text-[#514242] text-[28px] laptop:text-[35px] ">Set Up Your Restaurant</h1>
              <h1 className="text-center text-[#A39E9E] text-[12px] md:text-[15px] laptop:text-[18px] font-light px-5">Start serving customers both on-site and online with our <br className=" hidden md:flex"></br>simple registration process.</h1>
               {/* Restaurant Details */}
              <div className=" md:px-4 laptop:px-14 2xl:px-24  md:py-8">
                 <div className="h-auto flex  flex-col">  
                       <div className="h-[100px] flex items-center text-[25px]"><h1>Restaurant Details</h1></div>
                       <div className="w-full flex flex-col gap-6 ">
                           <div className="flex flex-col md:flex-row gap-5 laptop:gap-10">
                             {/* Restaurant Name Input and Error Container*/}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Restaurant Name</h1>
                                 <input {...register("Restaurant_name")} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5"/>
                                  {errors.Restaurant_name && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.Restaurant_name.message}*
                                     </p>
                                  )}
                             </div>
                             {/* Restaurant Category selection input and Error Container */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Restaurant category</h1>
                                 <div className="relative">
                                      <select {...register("Restaurant_Category")} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5 pr-[40px] appearance-none">
                                        <option hidden>Select Hotel Category</option>
                                        <option>Veg</option>
                                        <option>Non-Veg</option>
                                        <option>Both</option>
                                      </select>
                                      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"fill="currentColor">
                                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                                        </svg>
                                      </div>
                                 </div>
                                  {errors.Restaurant_Category && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.Restaurant_Category.message}*
                                     </p>
                                  )}            
                             </div>
                           </div>
                          <div className="flex flex-col md:flex-row gap-5 laptop:gap-10">
                           {/* Restaurant phone Number input and error Container */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Restaurant Phone Number</h1>
                                  <div  className="border flex w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] py-3 font-light px-5">
                                       <div className="flex items-center justify-center border-r-2 pr-5 ">+91</div>
                                       <input {...register("PhoneNumber")} onChangeCapture={e => setPhonumber(e.currentTarget.value)}  id="PhoneNumber" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, "") }}  className="px-4 flex-1 focus:outline-none" maxLength={10}/>
                                  </div>
                                  {errors.PhoneNumber && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.PhoneNumber.message}*
                                     </p>
                                  )}  
                               
                             </div>
                             {/* Send otp Btn disable till Otp phone number state null */}
                             {
                               Otp.PhoneNumber==null ?(
                                 <div className="flex-1 flex flex-col gap-2">      
                                     <div className="w-full flex-1 gap-4 flex flex-col">
                                         <h1 className="h-[25px] hidden md:block  font-light text-[#858181] "></h1>
                                         <div className="flex items-center justify-center">
                                             <button type="button" className={`w-full h-[70px] rounded-xl ${isPhoneNumberValid ? "bg-[#61AC4D]" : "bg-gray-400"} text-white`}disabled={!isPhoneNumberValid} onClick={() => sendOtp("Phonenumber")}>Send OTP</button>
                                          </div>
                                     </div>
                                     <div className="flex flex-row w-full px-5">
                                          <p className="font-light flex-1 py-2 text-red-500 text-[14px]">
                                          
                                          </p>
                                     </div>
                                 </div>
                               ):(
                                 <div className="flex-1 flex flex-col gap-2">     
                                        {/* Send otp Btn disable till Otp phone number state null */}
                                     <div className="w-full flex-1 gap-4 flex flex-col">
                                        <h1 className="text-[18px]  font-light text-[#858181]">Enter OTP</h1>
                                        <div className="flex items-center justify-center gap-3 laptop:gap-5">
                                          <Otp_card Otp={PhoneOtp} setotp={setPhoneotp} len={6} />
                                           <button type="button" className={`border px-5 laptop:px-10 py-3 rounded-xl  ${PhoneOtp.every((otp) => otp !== "")?'bg-blue-400 text-white':'bg-white  opacity-55'}`} disabled={!PhoneOtp.every((otp) => otp !== "")} onClick={()=>{verifyOtp(Otp.PhoneNumber.OtpID,PhoneOtp.join(""))}} >Verify</button>
                                        </div>
                                     </div>
                                     {
                                       (resend_timeout.PhoneNumber_timeout==0)?(
                                             <div className="flex flex-row w-full px-5">
                                               <p className="font-light p-1 text-red-500 text-[14px]">
                                                  
                                               </p> 
                                               <p className="font-light cursor-pointer flex-1 py-2 text-right  text-blue-500 text-[14px]" onClick={() => {sendOtp("Phonenumber")}}>Resend Otp?</p>
                                             </div>
                                       ):(
                                             <div className="flex flex-row w-full px-5">
                                                 <p className="font-light p-1 text-green-500 text-[14px]">
                                                     Otp Sent to your Phone number
                                                 </p> 
                                                 <p className="font-light cursor-pointer flex-1 py-2 text-right  text-blue-500 text-[14px]">({resend_timeout.PhoneNumber_timeout}s)</p>
                                             </div>
                                           )
                                     }
                               </div>
                               )
                             }
                          </div>
                          <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                             {/* Restaurant Email-ID Input and error Container */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                  <h1 className="text-[18px] font-light text-[#858181]">Restaurant EmailID</h1>
                                  <div  className="border flex w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] py-3 font-light px-5">
                                       <div className="flex items-center justify-center w-[50px] border-r-2 pr-5">@</div>
                                       <input {...register("EmailID")}  onChangeCapture={e => setemail(e.currentTarget.value)}   className="px-4 flex-1 focus:outline-none"/>
                                  </div>
                                  {errors.EmailID && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.EmailID.message}*
                                     </p>
                                  )}  
                             </div>
                             {/* Send otp Btn disable till Otp Email state null */}
                             {
                               Otp.EmailID==null?(
                                 <div className="flex-1 flex flex-col gap-2">      
                                     <div className="w-full flex-1 gap-4 flex flex-col">
                                         <h1 className="h-[25px] hidden md:block font-light text-[#858181] "></h1>
                                         <div className="flex items-center justify-center">
                                               <button type="button" className={`w-full h-[70px] rounded-xl ${isEmailValid ? "bg-[#61AC4D]" : "bg-gray-400"} text-white`} disabled={!isEmailValid}onClick={() => sendOtp("Email")}>Send OTP</button>
                                         </div>
                                     </div>
                                     <div className="flex flex-row w-full px-5">
                                          <p className="font-light flex-1 py-2 text-red-500 text-[14px]">
                                          
                                          </p>
                                     </div>
                                </div>
                               ):(                             
                                 <div className="flex-1 flex flex-col gap-2">     
                                      {/* Send otp Btn disable till Otp Email state null */}
                                      <div className="w-full flex-1 gap-4 flex flex-col">
                                          <h1 className="text-[18px] font-light text-[#858181]">Enter OTP</h1>
                                          <div className="flex items-center justify-center  gap-3 laptop:gap-5">
                                              <Otp_card Otp={EmailOtp} setotp={setEmailotp} len={6} />
                                              <button type="button" className={`border px-5 laptop:px-10 py-3 rounded-xl  ${EmailOtp.every((otp) => otp !== "")?'bg-blue-400 text-white':'bg-white  opacity-55'}`} disabled={!EmailOtp.every((otp) => otp !== "")} onClick={()=>{verifyOtp(Otp.EmailID.OtpID,EmailOtp.join(''))}} >Verify</button>
                                           </div>
                                      </div>
                                          {
                                           (resend_timeout.Email_timeout==0)?(
                                             <div className="flex flex-row w-full px-5">
                                               <p className="font-light p-1 text-red-500 text-[14px]">
                                                  
                                               </p> 
                                               <p className="font-light cursor-pointer flex-1 py-2 text-right  text-blue-500 text-[14px]" onClick={() => sendOtp("Email")}>Resend Otp?</p>
                                               </div>
                                            ):(
                                             <div className="flex flex-row w-full px-5">
                                                 <p className="font-light p-1 text-green-500 text-[14px]">Otp Sent to your Email ID</p> 
                                                 <p className="font-light cursor-pointer flex-1 py-2 text-right  text-blue-500 text-[14px]">({resend_timeout.Email_timeout}s)</p>
                                             </div>
                                           )
                                          }
                                 </div>
                               )
                             }
                          </div>
                       </div>
                 {/* Line */}
                 <div className="py-10">
                   <hr className="border-t-1  border-dotted border-[#C5BCBC] "></hr>
                 </div>
                {/* Restaurant Location */}
                 <div className="h-auto flex  flex-col">  
                       <div className="h-[80px] flex text-[25px]"><h1>Restaurant Location</h1></div>
                       <div className="w-full flex flex-col gap-6 "> 
                          {/* Restaurant Address Input Field and Error */}
                          <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Address</h1>
                                 <input {...register("Restaurant_address")} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5"/>
                                 {errors.Restaurant_address && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.Restaurant_address.message}*
                                     </p>
                                  )} 
                             </div>
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">State</h1>
                                 {/* Restaurant State Selection Input and Error */}
                                 <div className="relative">
                                       <select  {...register("Restaurant_state")} onChange={handleStateChange} value={stateid} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5 appearance-none">
                                             <option value="">Select State</option>
                                             {stateList.map((item) => (
                                               <option key={item.id} value={item.id}>
                                                 {item.name}
                                               </option>
                                             ))}
                                       </select>
                                       <div className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none">
                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"fill="currentColor">
                                           <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                                         </svg>
                                       </div>
                                  </div>
                                  {errors.Restaurant_state && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.Restaurant_state.message}
                                     </p>
                                  )} 
                             </div>
                          </div>
                          <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                             <div className="w-full flex-1 gap-4 flex flex-col">
                               {/* Restaurant City Selection Input and Error */}
                                 <h1 className="text-[18px] font-light text-[#858181]">City</h1>
                                 <div className="relative">
                                       <select  {...register("Restaurant_city")} onChange={handleCityChange} value={cityid} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5 appearance-none">
                                         <option value="">Select City</option>
                                         {cityList.map((item) => (
                                           <option key={item.id} value={item.id}>
                                             {item.name}
                                           </option>
                                         ))}
                                       </select>
                                       <div className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none">
                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"fill="currentColor">
                                           <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                                         </svg>
                                       </div>
                                  </div>  
                                  {errors.Restaurant_city && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.Restaurant_city.message}
                                     </p>
                                  )} 
                             </div>
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 {/* Restaurant PinCode Input and Error */}
                                 <h1 className="text-[18px] font-light text-[#858181]">Pincode</h1>
                                 <input  {...register("Restaurant_Number_Pincode")} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, "") }} maxLength={6} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5"/>
                                 {errors.Restaurant_Number_Pincode && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                        {errors.Restaurant_Number_Pincode.message}
                                     </p>
                                  )} 
                             </div>
                          </div>
                       </div>
                   </div>
                   <div className="py-10">
                       <hr className="border-t-1  border-dotted border-[#C5BCBC] "></hr>
                   </div>
                   {/* Registration Details */}
                   <div className="h-auto flex  flex-col">  
                       <div className="h-[80px] flex text-[25px]"> <h1>Registration Details</h1></div>
                       <div className="w-full flex flex-col gap-6 ">
                         <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                             {/* Owner aadhar Number Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Aadhar Card No</h1>
                                 <input {...register('Aadhar_number')}  value={value} onChange={formatInput} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5" placeholder="xxxx-xxxx-xxxx" maxLength="14"/>
                                 {errors.Aadhar_number && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.Aadhar_number.message}
                                     </p>
                                 )}
                             </div>
                             {/* Owner aadhar file Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                   <h1 className="text-[18px] font-light text-[#858181]">Aadhar card File</h1>
                                   <div className="flex flex-row gap-5">
                                     <input {...register("Aadhar_file")} name="Aadhar_file" onChange={fileHandler} type="file" id="Aadhar_file" className="hidden"/>
                                     <label htmlFor="Aadhar_file" className="h-[60px] w-[40%] border font-light text-white rounded-xl bg-[#746D6D] flex items-center justify-center cursor-pointer">Choose file</label>
                                     <div className="flex items-center">
                                       <p className="mt-2 text-sm text-[#858181] text-center">
                                        {
                                              filenames.Aadhar_file ? filenames.Aadhar_file.name : "No file chosen"
                                        }
                                       </p>
                                     </div>
                                   </div>
                                   {errors.Aadhar_file && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                       {errors.Aadhar_file.message}
                                     </p>
                                   )}
                             </div>
                          </div>
                          <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                             {/* Gst No Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">GST No</h1>
                                 <input {...register('GST_number')}  className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5"/>
                                 {errors.GST_number && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.GST_number.message}
                                     </p>
                                 )}
                             </div>
                              {/* Gst file Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">GST File</h1>
                                 <div className="flex flex-row gap-5">
                                     <input {...register('GST_file')} onChange={fileHandler} name="GST_file" type="file" id="gstfile" className="hidden" />
                                     <label htmlFor="gstfile" className="h-[60px] w-[40%] border font-light text-white rounded-xl bg-[#746D6D] flex items-center justify-center cursor-pointer">Choose file</label>
                                     <div className="flex items-center">
                                         <p className="mt-2 text-sm text-[#858181] text-center">
                                            {
                                               filenames.GST_file ? filenames.GST_file.name : "No file chosen"
                                            }
                                         </p>
                                     </div>
                                 </div>
                                 {errors.GST_file && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.GST_file.message}
                                     </p>
                                 )}
                             </div>
                          </div>
                          <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                              {/* FSSAI NO Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">FSSAI NO</h1>
                                 <input {...register('Fissi_no')} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, "") }} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5" maxLength="14"/>
                                 {errors.Fissi_no && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.Fissi_no.message}
                                     </p>
                                 )}
                             </div>
                              {/* FSSAI License Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">FSSAI license File</h1>
                                 <div className="flex flex-row gap-5">
                                     <input {...register('Fissi_file')} onChange={fileHandler} name="Fissi_file" type="file" id="Fissi_file" className="hidden" />
                                     <label htmlFor="Fissi_file" className="h-[60px] w-[40%] border font-light text-white rounded-xl bg-[#746D6D] flex items-center justify-center cursor-pointer">Choose file</label>
                                     <div className="flex items-center">
                                         <p className="mt-2 text-sm text-[#858181] text-center">
                                          {
                                              filenames.Fissi_file ? filenames.Fissi_file.name : "No file chosen"
                                          }
                                       </p>
                                     </div>
                                 </div>
                                 {errors.Fissi_file && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.Fissi_file.message}
                                     </p>
                                 )}
                             </div>
                          </div>
                          <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                            {/* FSSAI Expiry Date Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">FSSAI Expiry Date</h1>
                                 <DatePicker  className="h-[60px] laptop:h-[70px] rounded-xl text-[18px]"  format={{format: 'YYYY-MM-DD',type: 'mask',}} onChange={handleDateChange} disabledDate={(current) => current && current < moment().startOf('day')} />
                                 {errors.Fissi_expiry_date && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.Fissi_expiry_date.message}
                                     </p>
                                 )}
                             </div>
                             <div className="w-full flex-1 gap-4 flex flex-col"></div>
                          </div>
                       </div>
                   </div>
                   <div className="py-10">
                       <hr className="border-t-1  border-dotted border-[#C5BCBC] "></hr>
                   </div>
                   {/* Owner Information */}
                   <div className="h-auto flex  flex-col">  
                       <div className="h-[80px] flex text-[25px]">
                           <h1>Owner Information</h1>
                       </div>
                       <div className="w-full flex flex-col gap-6 ">
                         
                         <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                             {/* Owner First Name Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]" >First Name</h1>
                                 <input {...register('First_name')} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5" onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "") }}/>
                                 {errors.First_name && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.First_name.message}
                                     </p>
                                 )}
                             </div>
                             {/* Owner Second Name Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Second Name</h1>
                                 <input {...register('Second_name')} className="border w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] font-light px-5" onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "") }}/>
                                 {errors.Second_name && (
                                     <p className="font-light p-1 text-red-500 text-[14px]">
                                         {errors.Second_name.message}
                                     </p>
                                 )}
                             </div>
                          </div>
                          <div className="flex flex-col md:flex-row  gap-5 laptop:gap-10">
                             {/* Owner Phone Number Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Phone Number (Optional)</h1>
                                 <div  className="border flex w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] py-3 font-light px-5">
                                       <div className="flex items-center justify-center border-r-2 pr-5 ">+91</div>
                                       <input {...register("PhoneNumber_opt")}  onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, "") }}  className="px-4 flex-1 focus:outline-none" maxLength={10}/>
                                  </div>
                                 <p className="font-light flex-1  text-red-500 text-[14px]"></p>
                             </div>
                              {/* Owner Email Input and Error */}
                             <div className="w-full flex-1 gap-4 flex flex-col">
                                 <h1 className="text-[18px] font-light text-[#858181]">Email ID (Optional)</h1>
                                 <div  className="border flex w-full h-[60px] laptop:h-[70px] rounded-xl text-[18px] py-3 font-light px-5">
                                       <div className="flex items-center justify-center w-[50px] border-r-2 pr-5">@</div>
                                       <input {...register("mailID_opt")} className="px-4 flex-1 focus:outline-none"/>
                                  </div>
                                  <p className="font-light flex-1  text-red-500 text-[14px]"></p>
                             </div>
                          </div>
                       </div>
                   </div>
                   <div className="h-[100px] w-full flex items-end">
                        <div className=" w-full flex-1 max-w-[500px] h-[40px] font-light flex flex-row gap-5 py-5 items-center ">
                         <Link to="/" className="flex flex-row items-center mr-auto gap-2 cursor-pointer">
                             <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM21 7L1 7V9L21 9V7Z" fill="black"/>
                             </svg>
                             Back to login
                         </Link>
                        </div>
                        <div className=" flex-1 flex justify-end">
                            <button  type="submit" className="bg-[#FF8811] w-full max-w-[400px] h-[50px] md:h-[70px] rounded-xl text-white text-[20px] cursor-pointer">Submit</button>
                        </div>
                   </div>
                </div>
             </div>
          </div>
        </form>
       </div>
    </div>
  )
}

export default Signup
