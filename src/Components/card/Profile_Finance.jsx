import { useEffect, useState } from 'react';
import card from '../../Assets/Images/Card.svg'
import { FileAddOutlined,EditOutlined} from '@ant-design/icons';
import {registered_Bank_details} from '../../services/api'
import { Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { setChangeToggle } from '../../Slices/BankPopSlice';
import { SetBankID, SetRemoveToggle } from '../../Slices/ConfirmRemovePop';
function Profile_FInance(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        const result =async ()=>{
            const data = await registered_Bank_details()
            props.setbankdetails(data)
        }
        result()
    },[])
  
  return (
    <>
            <div className="flex pt-7 pb-3 px-12 items-center">
                <div className="">
                     <h1 className="text-xl 2xl:text-3xl">Finance</h1>
                     <hr className="border border-black w-[50%]"></hr>
                </div>
            </div>
            <div className="px-10 py-5 flex flex-col gap-5">
                 <div className='flex gap-5'>
                     <div className=''> 
                         <div className='rounded-2xl bg-[#F8FAFF] flex items-center gap-4 px-10 py-4'>
                            <div className='text-xl'>
                                <h1 className=' text-xs 2xl:text-sm text-[#616060]'>PAN NUMBER</h1>
                                <h1 className='text-xl 2xl:text-3xl'>AAAAA1234</h1>
                            </div>
                            <div className='px-5 py-5 rounded-full bg-white'>
                                <img src={card} alt='' className='w-[30px]'/>
                            </div>
                         </div>
                     </div>
                     <div className=''> 
                          <div className='rounded-2xl bg-[#F8FAFF] flex items-center gap-4 px-10 py-4'>
                            <div className='text-xl'>
                                <h1 className='text-xs 2xl:text-sm text-[#616060]'>TAN NUMBER</h1>
                                <h1 className='text-xl 2xl:text-3xl'>ABCD12345E</h1>
                            </div>
                            <div className='px-5 py-5 rounded-full bg-white'>
                                <img src={card} alt='' className='w-[30px]'/>
                            </div>
                         </div>
                    </div>
                 </div>
                 <div>
                     <div className='flex items-center justify-end '>
                             <h1 className='text-xl px-2 flex-1 text-[#606060]'>Bank Details</h1>
                             {
                                (props.bankdetils && props.bankdetils.length>0) && <h1 className='font-light text-sm text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer' onClick={()=>dispatch(setChangeToggle())}>Add New Account</h1>
                             }
                             
                     </div>
                     <div className='py-8 px-0'>
                        {
                           (props.bankdetils && props.bankdetils.length==0) ? (

                                <div title='Add New Bank Account' onClick={()=>dispatch(setChangeToggle())} className='cursor-pointer w-1/2 2xl:w-1/4 bg-[#f5f5f5d3] py-14 px-15 flex items-center justify-center rounded-3xl'>
                                     <FileAddOutlined style={{ fontSize: '25px', color: '#706D6D' }}/>
                                </div>

                            ):(
                                
                                <Radio.Group onChange={props.onChange} value={props.value} className="flex gap-5">
                                {props.bankdetils?.map((item, index) => (
                                       <div key={item.ID} className="flex flex-col bg-[#F8FAFF] p-3 px-7 items-center justify-center rounded-3xl">
                                           <Radio value={item.BankId || index}>
                                               <div className="w-[300px] flex flex-col gap-3 py-3 pl-5">
                                                   <div className="flex gap-5 items-center">
                                                       <div className="flex-1">
                                                           <img src={item.BankURL} alt={item.BankName} className="w-[100px]"/>
                                                       </div>
                                                       {
                                                           item.Primary && (
                                                               <h1 className="bg-[#A5F6A3] px-4 py-1 rounded-full text-xs"> Primary</h1>
                                                           )
                                                       }
                                                   </div>
                                                   <div className="text-sm">
                                                       <div className="flex">
                                                           <div className="flex-1">Bank Name</div>
                                                           <div className="flex-1 text-end text-[#8E9093]">{item.BankName}</div>
                                                       </div>
                                                       <div className="flex">
                                                           <div className="flex-1">Account No</div>
                                                           <div className="flex-1 text-end text-[#8E9093]">{item.AccountNo}</div>
                                                       </div>
                                                       <div className="flex">
                                                           <div className="flex-1">IFSC code</div>
                                                           <div className="flex-1 text-end text-[#8E9093]">{item.IFSCCode}</div>
                                                       </div>
                                                       <div className="flex">
                                                           <div className="flex-1">Holder Name</div>
                                                           <div className="flex-1 text-end text-[#8E9093]">{item.HolderName}</div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </Radio>
                                           <div className="flex ml-auto px-5 cursor-pointer gap-3">
                                                <div className="text-xs flex gap-1 hover:underline hover:underline-offset-2 text-red-500" onClick={(e)=>{e.stopPropagation(); dispatch(SetRemoveToggle()); dispatch(SetBankID(item.ID )) }}> Remove</div>
                                           </div>
                                       </div>
                                   ))}
                               </Radio.Group>
                            )
                        }
                       
                       
                     </div>
                 </div>
            </div>
            <div className="absolute bottom-10 left-12 rounded-xl text-sm">
                <h1>Note :</h1>
                <h1 className='text-[#7E7B7B]'>Payments for the previous week’s orders will be released every monday</h1>
            </div>
        </>
  )
}

export default Profile_FInance