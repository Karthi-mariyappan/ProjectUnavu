export const ConfirmCard=(props)=>{
    return (
        <div className="fixed top-0 w-full h-full bg-[#0000007a] flex items-center justify-center">
          <div className="p-8 py-10 bg-white w-full max-w-[600px] text-center flex items-center justify-center flex-col gap-4 rounded-3xl">
           <img src={props.imgsrc} alt=""/>
           <h1 className="text-md font-light">{props.title}</h1>
           <div className="flex gap-3">
               <button className="px-5 py-3 border rounded-2xl hover:bg-[#ff3131] hover:text-white" onClick={props.CancelHandler}>Cancel</button>
               <button className="px-7 py-3 border rounded-2xl bg-[#0BBA08] text-white" onClick={props.changeHandler}>Confirm</button>
           </div>
          </div>
      </div>
    )
}