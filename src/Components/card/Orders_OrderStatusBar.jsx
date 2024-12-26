import { ContainerOutlined,DashOutlined,FileDoneOutlined,CheckSquareOutlined } from '@ant-design/icons';

function OrderStatusBar(props) {
  return (
    <div className="flex items-center justify-center gap-2 px-10 h-full text-[18px] text-center md:text-sm lg:text-md 2xl:text-lg  font-light ">
       <div className={`${props.statuscount>=0?"bg-[#FF8811] text-white":"bg-[#f6fafd] text-black"} flex items-center justify-center gap-2 w-full max-w-[160px] py-3 rounded-xl `}><ContainerOutlined style={{fontSize: '17px'}} /><h1>New Order</h1></div>
       <hr className="border-[1px] border-[#dddcdc]  w-[8%]"></hr>
       <div className={`${props.statuscount>=1?"bg-[#FF8811] text-white":"bg-[#ECF1F6] text-black"} flex items-center justify-center gap-2 w-full max-w-[160px] py-3 rounded-xl `}><DashOutlined style={{fontSize: '17px'}} /><h1>Preparing</h1></div>
       <hr className="border-[1px] border-[#dddcdc]  w-[8%]"></hr>
       <div className={`${props.statuscount>=2?"bg-[#FF8811] text-white":"bg-[#ECF1F6] text-black"} flex items-center justify-center gap-2 w-full max-w-[160px] py-3 rounded-xl `}><FileDoneOutlined style={{fontSize: '17px'}} /><h1>Ready</h1></div>
       <hr className="border-[1px] border-[#dddcdc]  w-[8%]"></hr>
       <div className={`${props.statuscount>=3?"bg-[#FF8811] text-white":"bg-[#ECF1F6] text-black"} flex items-center justify-center gap-2 w-full max-w-[160px] py-3 rounded-xl `}><CheckSquareOutlined style={{fontSize: '17px'}} /><h1>In-Delivery</h1></div>
    </div>
  )
}

export default OrderStatusBar