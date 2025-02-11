import fssiImage from '../../Assets/Images/FSSAI_Img.svg'
import pdficon from '../../Assets/Images/pdficon.svg'
function Profile_fssai() {
  return (
   <>
      <div className="flex pt-7 pb-3 px-12 items-center">
         <div className="">
              <h1 className="text-xl 2xl:text-3xl">FSSAI</h1>
              <hr className="border border-black w-[50%]"></hr>
         </div>
      </div>
      <div className='px-10 py-10 flex flex-col gap-5 cursor-default'>
           <div className='flex'> 
               <div className='flex-1 flex items-center'>
                   <div className='bg-[#ecf1fd]  px-5 py-5 2xl:px-6 2xl:py-6 rounded-2xl'>
                      <svg width="22" height="22" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12.0008 0.199219C10.3034 0.199219 8.67553 0.873503 7.4753 2.07374C6.27507 3.27397 5.60078 4.90183 5.60078 6.59922C5.60078 8.2966 6.27507 9.92447 7.4753 11.1247C8.67553 12.3249 10.3034 12.9992 12.0008 12.9992C13.6982 12.9992 15.326 12.3249 16.5263 11.1247C17.7265 9.92447 18.4008 8.2966 18.4008 6.59922C18.4008 4.90183 17.7265 3.27397 16.5263 2.07374C15.326 0.873503 13.6982 0.199219 12.0008 0.199219ZM4.01518 14.5992C3.59374 14.5973 3.17608 14.6787 2.78617 14.8387C2.39627 14.9986 2.0418 15.234 1.74313 15.5314C1.44445 15.8287 1.20745 16.1821 1.04574 16.5713C0.884022 16.9605 0.800777 17.3778 0.800781 17.7992C0.800781 20.5048 2.13358 22.5448 4.21678 23.8744C6.26798 25.1816 9.03278 25.7992 12.0008 25.7992C14.9688 25.7992 17.7336 25.1816 19.7848 23.8744C21.868 22.5464 23.2008 20.5032 23.2008 17.7992C23.2008 16.9505 22.8636 16.1366 22.2635 15.5365C21.6634 14.9364 20.8495 14.5992 20.0008 14.5992H4.01518Z" fill="#4A4A4A"/>
                      </svg>
                   </div>
                   <div className='flex-1  px-3 flex flex-col gap-1 justify-center'>
                       <h1 className='text-[#4A4A4A] text-sm'>Owner Name</h1>
                       <h1 className='text-xl 2xl:text-2xl text-[#4A4A4A]'>John K</h1>
                   </div>
               </div>
               <div className='flex-1 flex items-center'>
                   <div className='bg-[#ecf1fd]  px-5 py-5 2xl:px-6 2xl:py-6 rounded-2xl'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00866554 19.3712C0.0864671 20.6952 0.667219 21.9395 1.6321 22.8494C2.59698 23.7593 3.87304 24.2661 5.1992 24.266H8.67054C8.68209 24.0684 8.71329 23.8679 8.76412 23.6645L9.04661 22.5327H5.1992L4.93924 22.524C4.06724 22.4585 3.25225 22.0656 2.65765 21.4244C2.06306 20.7831 1.73279 19.9407 1.73307 19.0661V12.133H6.93227L7.23729 12.1243C8.56117 12.0465 9.80528 11.4657 10.7151 10.5007C11.6249 9.5357 12.1315 8.25947 12.1315 6.93314V1.73329H19.0637L19.3237 1.74195C20.1957 1.80755 21.0107 2.20036 21.6053 2.84164C22.1999 3.48292 22.5302 4.32528 22.5299 5.19986V8.67163C23.1163 8.64494 23.7029 8.7212 24.2629 8.89696V5.19986L24.2543 4.8948C24.1765 3.57075 23.5957 2.32649 22.6308 1.41659C21.666 0.506683 20.3899 -7.38756e-05 19.0637 8.07789e-09H11.4746L11.1696 0.0138661C10.359 0.0855689 9.5995 0.440223 9.02408 1.01571L1.01558 9.02522L0.80761 9.25054C0.285983 9.87416 0.000119595 10.6613 0 11.4743V19.0661L0.00866554 19.3712ZM6.93227 10.3997L2.11088 10.398C2.15016 10.346 2.19349 10.2969 2.24086 10.2507L10.2494 2.24114L10.3984 2.11287V6.93314L10.3897 7.19314C10.3242 8.06525 9.9314 8.88034 9.29019 9.47501C8.64899 10.0697 7.80674 10.4 6.93227 10.3997ZM12.0968 19.7196L20.4675 11.3478C20.7686 11.0469 21.126 10.8083 21.5194 10.6455C21.9127 10.4827 22.3342 10.399 22.7599 10.3992C23.1855 10.3994 23.607 10.4834 24.0002 10.6464C24.3934 10.8095 24.7506 11.0484 25.0515 11.3496C25.3524 11.6507 25.591 12.0082 25.7537 12.4015C25.9165 12.7949 26.0002 13.2165 26 13.6422C25.9998 14.0679 25.9158 14.4894 25.7528 14.8827C25.5898 15.2759 25.3509 15.6332 25.0498 15.9341L16.679 24.3041C16.1913 24.7918 15.5803 25.1381 14.9113 25.306L12.3152 25.9542C12.057 26.0186 11.7866 26.015 11.5303 25.944C11.2739 25.8729 11.0402 25.7367 10.852 25.5487C10.6638 25.3606 10.5275 25.1271 10.4562 24.8707C10.3849 24.6144 10.3811 24.344 10.4452 24.0857L11.0951 21.4893C11.263 20.8202 11.6092 20.2092 12.0968 19.7213" fill="#4A4A4A"/>
                        </svg>
                   </div>
                   <div className='flex-1  px-3 flex flex-col gap-1 justify-center'>
                       <h1  className='text-[#4A4A4A] text-sm'>FSSAI Registration Date</h1>
                       <h1 className='text-xl 2xl:text-2xl text-[#4A4A4A]'>12/09/23</h1>
                   </div>
               </div>
               <div className='flex-1'></div>
           </div>
           <div className='flex'> 
               <div className='flex-1 flex items-center'>
                   <div className='bg-[#ecf1fd]  px-5 py-5 2xl:px-6 2xl:py-6 rounded-2xl'>
                        <svg width="27" height="27" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M16.8125 1.00586V6.64238C16.8125 7.40572 17.1064 8.13929 17.6307 8.68005C18.1563 9.2214 18.8678 9.5252 19.6095 9.5249H25.8595" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M26 10.1209V23.5508C25.9699 24.4292 25.7721 25.2928 25.4179 26.0918C25.0637 26.8908 24.5602 27.6093 23.9364 28.2061C23.312 28.8056 22.5796 29.272 21.7809 29.5786C20.9823 29.8852 20.1331 30.026 19.2818 29.993H7.78182C6.92536 30.0335 6.0696 29.8987 5.2636 29.5964C4.4576 29.294 3.7172 28.8301 3.08485 28.2312C2.45495 27.6328 1.94628 26.9109 1.58837 26.1074C1.23047 25.304 1.03047 24.4349 1 23.5508V7.44689C1.03008 6.56846 1.22791 5.70487 1.58209 4.90589C1.93627 4.10691 2.43979 3.38834 3.06364 2.79159C3.688 2.19208 4.42043 1.7257 5.21907 1.41911C6.01771 1.11251 6.86692 0.971693 7.71818 1.00471H16.3758C17.6974 0.99988 18.9731 1.50577 19.953 2.42324L24.4379 6.68982C24.9164 7.11629 25.3029 7.6422 25.572 8.23335C25.8411 8.82451 25.987 9.46765 26 10.1209Z" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                   </div>
                   <div className='flex-1  px-3 flex flex-col gap-1 justify-center'>
                       <h1  className='text-[#4A4A4A] text-sm'>FSSAI License Number</h1>
                       <h1 className='text-xl 2xl:text-2xl text-[#4A4A4A]'>1234567890011234</h1>
                   </div>
               </div>
               <div className='flex-1 flex items-center'>
                  <div className='bg-[#ecf1fd]  px-5 py-5 2xl:px-6 2xl:py-6 rounded-2xl'>
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M13 5.7998V12.9998L17.8 15.3998" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                   <div className='flex-1  px-3 flex flex-col gap-1 justify-center'>
                       <h1  className='text-[#4A4A4A] text-sm'>Expiry Date</h1>
                       <h1 className='text-xl 2xl:text-2xl text-[#4A4A4A]'>12/09/2034</h1>
                   </div>
               </div>
               <div className='flex-1 flex'>
                  <div className='flex items-center'>
                     <img src={pdficon} className=''/>
                  </div>
                  <div className='flex items-center gap-4 px-4'>
                     <h1>sangeethaLicence.PDF</h1>
                     <p className='underline text-[#357BE5]'>view</p>
                  </div>
               </div>
           </div>
      </div>
      <img src={fssiImage} alt='' className='absolute  bottom-8 right-8'/>
   </>
  )
}

export default Profile_fssai