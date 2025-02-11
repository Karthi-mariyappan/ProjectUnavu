import pdficon from '../../Assets/Images/pdficon.svg'
function Profile_GST() {
  return (
    <>
       <div className="flex pt-7 pb-3 px-12 items-center">
          <div className="">
               <h1 className="text-xl 2xl:text-3xl">GST</h1>
               <hr className="border border-black w-[50%]"></hr>
          </div>
       </div>
       <div className='px-10 py-10 flex flex-col gap-5 cursor-default'>
          <div className='flex'> 
               <div className='flex-1 flex'>
                   <div className='bg-[#ecf1fd] px-5 py-5 2xl:px-6 2xl:py-6 rounded-2xl  flex items-center justify-center'>
                        <svg width="27" height="27" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M16.8125 1.00586V6.64238C16.8125 7.40572 17.1064 8.13929 17.6307 8.68005C18.1563 9.2214 18.8678 9.5252 19.6095 9.5249H25.8595" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M26 10.1209V23.5508C25.9699 24.4292 25.7721 25.2928 25.4179 26.0918C25.0637 26.8908 24.5602 27.6093 23.9364 28.2061C23.312 28.8056 22.5796 29.272 21.7809 29.5786C20.9823 29.8852 20.1331 30.026 19.2818 29.993H7.78182C6.92536 30.0335 6.0696 29.8987 5.2636 29.5964C4.4576 29.294 3.7172 28.8301 3.08485 28.2312C2.45495 27.6328 1.94628 26.9109 1.58837 26.1074C1.23047 25.304 1.03047 24.4349 1 23.5508V7.44689C1.03008 6.56846 1.22791 5.70487 1.58209 4.90589C1.93627 4.10691 2.43979 3.38834 3.06364 2.79159C3.688 2.19208 4.42043 1.7257 5.21907 1.41911C6.01771 1.11251 6.86692 0.971693 7.71818 1.00471H16.3758C17.6974 0.99988 18.9731 1.50577 19.953 2.42324L24.4379 6.68982C24.9164 7.11629 25.3029 7.6422 25.572 8.23335C25.8411 8.82451 25.987 9.46765 26 10.1209Z" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                   </div>
                   <div className='flex-1  px-3 flex flex-col gap-1 justify-center'>
                       <h1 className='text-[#4A4A4A] text-sm'>GSTIN</h1>
                       <h1 className='text-xl 2xl:text-2xl  text-[#4A4A4A]'>1234567890011234</h1>
                   </div>
               </div>
               <div className='flex-1 flex'>
                   <div className='bg-[#ecf1fd] px-5 py-5 2xl:px-6 2xl:py-6 rounded-2xl  flex items-center justify-center'>
                       <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13 5.7998V12.9998L17.8 15.3998" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                   </div>
                   <div className='flex-1  px-3 flex flex-col gap-1 justify-center'>
                       <h1  className='text-[#4A4A4A] text-sm'>GST Registration Date</h1>
                       <h1 className='text-xl 2xl:text-2xl  text-[#4A4A4A]'>12/09/2034</h1>
                   </div>
               </div>
               <div className='flex-1 flex'>
                    <div className='flex items-center'>
                        <img src={pdficon} className=''/>
                    </div>
                    <div className='flex items-center gap-4 px-4'>
                       <h1>sangeethaLicence.PDF</h1>
                       <p className='underline text-[#357BE5] cursor-pointer'>view</p>
                    </div>
               </div>
           </div>
       </div>
    </>
  )
}

export default Profile_GST