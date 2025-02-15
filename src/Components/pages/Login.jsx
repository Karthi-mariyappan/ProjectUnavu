import leftBanner from "../../Assets/Images/loginbanner.svg";
import Unavu_logo from "../../Assets/Images/unavulogo.svg";
import chart from "../../Assets/Images/loginchaticon.svg";
import doubt from "../../Assets/Images/logindoubticon.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

import { getAuthentication } from "../../services/api";

const FormSchema = z.object({
  EmailID: z.string().email(),
  Password: z.string().min(3),
});

function Login() {
  
  const [passwordtoggle, setpassword] = useState(true);
  const {register,handleSubmit,formState: { errors },} = useForm({resolver: zodResolver(FormSchema),});

  const onSubmit = async(data) => {
    try {
      const result= await getAuthentication(data)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col laptop:flex-row lg:px-16 w-full laptop:h-[100dvh]">
      {/* Left Container */}
      <div className="laptop:w-[55%] h-full p-3 laptop:p-5">
        <img src={leftBanner} className="w-full h-full" />
      </div>
      {/* Right Container */}
      <div className=" laptop:w-[50%] flex flex-col laptop:h-full p-5">
        <div className=" flex flex-col gap-3 mt-auto mb-auto">
          <div className="flex items-center justify-center">
            <img src={Unavu_logo} alt=""  className="object-fill w-[140px] laptop:w-[180px]"/>
          </div>
          <div className="text-center">
            <h1 className="text-[33px] laptop:text-[40px] text-[#514242]">Welcome Back</h1>
            <h1 className="font-light text-[15px] text-[#423C3C]">Please login to your account</h1>
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center py-4 md:py-8 flex-col items-center gap-4">
              <div className="w-full max-w-[500px] flex flex-col gap-3">
                <div className=" w-full max-w-[500px]">
                  <input {...register("EmailID")}  className=" bg-[#EFEFEF] text-[15px] w-full text-[#423C3C] h-[53px] md:h-[65px] rounded-md md:rounded-xl px-5 font-light " placeholder="UserID"/>
                  {errors.EmailID && (
                    <p className="font-light p-2 text-red-500 text-[14px]">
                      {errors.EmailID.message}*
                    </p>
                  )}
                </div>
                <div className=" w-full max-w-[500px]">
                  <div className="relative">
                    <input type={passwordtoggle ? "password" : "text"} {...register("Password")} className=" bg-[#EFEFEF]  text-[15px] w-full text-[#423C3C] h-[53px] md:h-[65px] rounded-md md:rounded-xl px-5 font-light " placeholder="Password"/>
                    { 
                       passwordtoggle ? (
                         <EyeInvisibleOutlined className="absolute top-1/2 right-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer"style={{ fontSize: "120%" }} onClick={() => setpassword(false)}/>
                       ) : (
                         <EyeOutlined  className="absolute top-1/2 right-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer" style={{ fontSize: "120%" }} onClick={() => setpassword(true)}/>
                       )
                    }
                  </div>
                  {errors.Password && (
                    <p className="font-light p-2 text-red-500 text-[14px]">
                      {errors.Password.message}*
                    </p>
                  )}
                </div>
              </div>
              <Link to="/Forgot" className="w-full max-w-[500px] text-right px-4 py-2 text-[#423C3C] font-light cursor-pointer">Forget password ?</Link>
              <input  className="bg-[#FF8811] w-full max-w-[500px] h-[70px] rounded-xl text-white text-[20px]" type="submit" value="Login"/>
               {/* Help Container */}
              <div className=" w-full max-w-[500px] h-[40px] font-light flex flex-row gap-5 text-[#5B5959] py-10 items-center justify-center">
                <div className="flex flex-row items-center  justify-end gap-2 h-full cursor-pointer">
                  <img src={chart} alt="" className="w-[24px] opacity-80" />
                  <p>Chat with us</p>
                </div>
                <div className="flex flex-row items-center justify-end gap-2 h-full cursor-pointer">
                  <img src={doubt} alt="" className="w-[24px] opacity-80" />
                  <p>Help</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
