import { ConfigProvider, Switch } from 'antd';

// Component for Dish list Card
function Menu_ListedCard(props) {
  return (

       <div className='flex items-center px-5 py-2 gap-4 font-light border'>
           <img src={props.image} className='' alt=''/>
        <div className='flex-1 '>
            <h1 className='truncate text-[13px] 2xl:text-sm'>{props.data.name}</h1>
        </div>
        <div className='flex-1  flex'>
            <div className='flex items-center'> 
                <ConfigProvider theme={{components: {
                         Switch: {
                           colorPrimary: '#C4F1BF', 
                           colorPrimaryHover: '#C4F1BF', 
                           colorBgContainer: '#FF3535', 
                           handleBg: '#2DB92A', 
                           handleBgActive: '#fadb14',
                         },
                       },
                     }}>
                   <Switch checked={props.data.stock === 'on'} onChange={(checked) => {  console.log(`${checked ? 'on' : 'off'} `+props.data.id);}}/>
                </ConfigProvider></div>
            <div className='flex-1 flex items-center justify-end gap-5'>
                <button className='px-5 py-1.5 text-[10px] 2xl:text-sm  rounded-lg 2xl:px-10 2xl:py-2 border 2xl:rounded-xl border-[#C2BBBB] text-[#C2BBBB]'>Edit</button>
                <button className='px-5 py-1.5 text-[10px] 2xl:text-sm rounded-lg 2xl:px-10 2xl:py-2 border 2xl:rounded-xl border-[#FF0000] text-[#FF0000]'>Delete</button>
            </div>
        </div>
    </div>
  )
}
// Component for Table list card
function Menu_ListedTableCard(props) {
  return (
       <div className='flex items-center px-5 py-2 gap-4 font-light border'>
           <img src={props.image} className='' alt=''/>
        <div className='flex-1 '>
            <h1 className='truncate text-[13px] 2xl:text-sm'>Table No ~{props.data.TableNo}</h1>
            <h1 className='truncate text-[13px] 2xl:text-sm'>{props.seattype}</h1>
        </div>
        <div className='flex-1  flex'>
            <div className='flex items-center'> 
                <ConfigProvider theme={{components: {
                         Switch: {
                           colorPrimary: '#C4F1BF', 
                           colorPrimaryHover: '#C4F1BF', 
                           colorBgContainer: '#FF3535', 
                           handleBg: '#2DB92A', 
                           handleBgActive: '#fadb14',
                         },
                       },
                     }}>
                   <Switch checked={props.data.Available == true} onChange={(checked) => {  console.log(`${checked ? 'on' : 'off'} `+props.data.id);}}/>
                </ConfigProvider></div>
            <div className='flex-1 flex items-center justify-end gap-5'>
                <button className='px-5 py-1.5 text-[10px] 2xl:text-sm rounded-lg 2xl:px-10 2xl:py-2 border 2xl:rounded-xl border-[#FF0000] text-[#FF0000]'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export {Menu_ListedTableCard,Menu_ListedCard} 