import { useNavigate, useParams} from "react-router-dom";
import Profile_account from "../card/Profile_account";
import Profile_FInance from "../card/Profile_FInance";
import Profile_NewBankAcc from "../card/Profile_NewBankAcc";
import Waring from '../../Assets/Images/warning.svg';
import delte from '../../Assets/Images/delete.svg'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPrimaryAccountToggle } from "../../Slices/PrimaryAccChangePop";
import { useState } from "react";
import { ConfirmCard } from "../card/ConfirmCode";
import { SetBankID, SetRemoveToggle } from "../../Slices/ConfirmRemovePop";
import Profile_fssai from "../card/Profile_fssai";
import Profile_GST from "../card/Profile_GST";


function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const { Profile } = useParams();
  const [value, setValue] = useState(0);
  const [tempSelection,setSelection] = useState()
  const [bankdetils,setbankdetails]=useState()

  const list = ["Account","Finance","FSSAI","GST"]
  const AddnewBank = useSelector((state) => state.NewBankAccInfo.ToggleBtn);
  const PrimayAccChange = useSelector((state) => state.PrimaryAccountToggleInfo.ToggleBtn);
  const RemoveAccToggle =useSelector((state)=>state.RomoveAccountInfo)

  // Change the primary account toggle
  const CancelHandler =()=>{
    dispatch(setPrimaryAccountToggle())
  }

  const changeHandler = () =>{
    dispatch(setPrimaryAccountToggle())
    bankdetils.map((item,index)=>{
      index==tempSelection?bankdetils[index].Primary=true:bankdetils[index].Primary=false
    })
    setValue(tempSelection)
  }

  const onChange = (e) => {
    dispatch(setPrimaryAccountToggle())
    setSelection(e.target.value)
  };

  // Remove the Bank account 
  const removeCancelHandler = ()=>{
    dispatch(SetRemoveToggle())
    dispatch(SetBankID(null))
  }

  const removeAccountHandler = ()=>{
     dispatch(SetRemoveToggle())
     const indexofBankAcc=bankdetils.findIndex(bank=>bank.ID === RemoveAccToggle.BankID)
     if(indexofBankAcc!==-1){
         bankdetils.splice(indexofBankAcc,1)
     }
  }



  return (
    <div className='bg-[#ECF1F6] h-full'>
      <div className="h-[80px] flex items-center gap-2 md:px-10">
         <div className="w-full max-w-[550px] py-1 h-full flex flex-col gap-3">
           <div className="flex-1 flex items-center">
              <div className="">
                   <h1 className="text-2xl 2xl:text-3xl">Profile</h1>
                   <hr className="border border-black w-[50%]"></hr>
              </div>
           </div>
         </div>
         {/* Menu Count Details */}
         <div className="flex-1 h-full  items-end hidden md:flex flex-col justify-end">
              <h1 className='text-2xl 2xl:text-3xl'>#1272617639190</h1>
              <p className='text-sm text-[#888484]'>Unavu ID</p>
         </div>
      </div>
      <div className="flex-1  px-8 flex gap-4 py-3 h-[78dvh] lg:h-[79dvh] 2xl:h-[82.5dvh]">
          <div className="flex flew-row gap-4 w-full">
               <div className='w-full max-w-[300px] 2xl:max-w-[400px] bg-white rounded-3xl py-5'>
               {
                 list.map((items)=>{
                   return (
                     <div key={items} className=' w-full flex px-10 py-2 cursor-pointer' onClick={()=>{navigate("/Profile/"+items)}}>
                         <h1 className={`flex-1 truncate ${Profile==items?'text-black':'text-[#6A6565]'}`}>{items}</h1>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M15.7083 11.2932C15.8958 11.4807 16.0011 11.735 16.0011 12.0002C16.0011 12.2653 15.8958 12.5197 15.7083 12.7072L10.0513 18.3642C9.95907 18.4597 9.84873 18.5359 9.72672 18.5883C9.60472 18.6407 9.4735 18.6683 9.34072 18.6694C9.20794 18.6706 9.07626 18.6453 8.95337 18.595C8.83047 18.5447 8.71882 18.4705 8.62492 18.3766C8.53103 18.2827 8.45678 18.171 8.4065 18.0481C8.35622 17.9252 8.33092 17.7936 8.33207 17.6608C8.33322 17.528 8.36081 17.3968 8.41322 17.2748C8.46563 17.1528 8.54181 17.0424 8.63732 16.9502L13.5873 12.0002L8.63732 7.05018C8.45516 6.86158 8.35437 6.60898 8.35665 6.34678C8.35892 6.08458 8.46409 5.83377 8.6495 5.64836C8.83491 5.46295 9.08572 5.35778 9.34792 5.35551C9.61011 5.35323 9.86272 5.45402 10.0513 5.63618L15.7083 11.2932Z" 
                          fill={`${Profile==items?'#000000':'#6A6565'}`}/>
                         </svg>
                     </div> 
                   )
                 })
               }
             </div>
             <div className='w-full flex-1 flex flex-col relative bg-white  rounded-3xl'>
                 {
                  Profile == "Account"?(
                    <Profile_account/>
                  ):
                  (
                    Profile == "Finance"?(
                      <Profile_FInance bankdetils={bankdetils} setbankdetails={setbankdetails} onChange={onChange} value={value}/>
                    ):
                    (
                      Profile == "FSSAI"?(<Profile_fssai/>):(<Profile_GST/>)
                    )
                  )
                 }
             </div>
          </div>
      </div>
      {
         PrimayAccChange && (
           <ConfirmCard imgsrc={Waring} title={"Are you sure you want to change your primary account? All future payments will be credited to the newly selected account"} CancelHandler={CancelHandler} changeHandler={changeHandler}/>
         )
      }
      {
        RemoveAccToggle.ToggleBtn && (
          <ConfirmCard imgsrc={delte} title={"Are you sure you want to remove this account? All future transactions will be affected."} CancelHandler={removeCancelHandler} changeHandler={removeAccountHandler}/>
        )
      }
      {
        AddnewBank && (
          <Profile_NewBankAcc/>
        )
      }
    
    </div>
  )
}




export default Profile