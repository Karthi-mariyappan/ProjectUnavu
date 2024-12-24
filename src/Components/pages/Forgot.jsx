import leftBanner from "../../Assets/Images/Login_banner_.svg";
import Unavu_logo from "../../Assets/Images/Unavu_logo.svg";
import chart from "../../Assets/Images/Login_chart_icon.svg";
import doubt from "../../Assets/Images/Login_doubt_icon.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { sendResetOtp } from "../../services/api";

const FormSchema = z.object({ EmailID: z.string().email() });
function Forgot() {
  const {register,handleSubmit,formState: { errors },} = useForm({ resolver: zodResolver(FormSchema) });
  const onSubmit = (data) => {sendResetOtp(data)};

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
            <h1 className="text-[33px] laptop:text-[40px] text-[#514242]">Forget Password</h1>
            <h1 className="font-light text-[15px] text-[#423C3C]">No worries, we’ll send you reset instructions</h1>
          </div>
          {/* Login Form */}
          <div className=" justify-center py-4 md:py-8 flex flex-col items-center gap-8">
            <form onSubmit={handleSubmit(onSubmit)}  className="flex w-full flex-col items-center gap-8">
                <div className="w-full max-w-[500px] flex flex-col gap-3">
                  <div className=" w-full max-w-[500px]">
                    <input {...register("EmailID")}  className=" bg-[#EFEFEF] text-[15px] w-full text-[#423C3C] h-[53px] md:h-[65px] rounded-md md:rounded-xl px-5 font-light " placeholder="EmailID"/>
                    {
                       errors.EmailID && (
                         <p className="font-light p-2 text-red-500 text-[14px]">
                           {errors.EmailID.message}*
                         </p>
                       )
                    }
                  </div>
                </div>
                <input  className="bg-[#FF8811] w-full max-w-[500px] h-[70px] rounded-xl text-white text-[20px] cursor-pointer" type="submit" value="Submit"/>
            </form>
            <div className=" w-full max-w-[500px] h-[40px] font-light flex flex-row gap-5 py-5 items-center">
            <Link to="/"  className="flex flex-row items-center mr-auto gap-2 cursor-pointer">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM21 7L1 7V9L21 9V7Z" fill="black"/>
                </svg>
                Back to login
              </Link>
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default Forgot;
