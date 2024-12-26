import veg from '../../Assets/Images/veg.svg'
function Orderlist(props) {
  return (
    <div className='flex items-center px-5 py-2 gap-4 font-light border rounded-lg'>
        <img src={veg} className='' alt=''/>
        <div className='flex-1'>
            <h1 className='truncate'>{props.dishname}</h1>
            <h1 className='truncate'>{props.dishcatergory}</h1>
        </div>
        <h1 >Qty {props.quantity}  x</h1>
        <h1 >{props.price}.00</h1>
    </div>
  )
}


export {Orderlist}