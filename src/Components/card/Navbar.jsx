import { useNavigate } from 'react-router-dom'
import Navbar_img_1 from '../../Assets/Images/navbar1.svg'
import Navbar_img_2 from '../../Assets/Images/navbar2.svg'
import Navbar_img_3 from '../../Assets/Images/navbar3.svg'
import Navbar_img_4 from '../../Assets/Images/navbar4.svg'
import Navbar_img_5 from '../../Assets/Images/navbar5.svg'
import Navbar_img_6 from '../../Assets/Images/navbar6.svg'
const Navbar = (props) => {
    const navigate = useNavigate()
    const NavbarList={
        0:{
            ImageSrc:Navbar_img_1,
            Name:"Orders"
        },
        1:{
            ImageSrc:Navbar_img_2,
            Name:"Menu"
        },
        2:{
            ImageSrc:Navbar_img_3,
            Name:"Metrics"
        },
        3:{
            ImageSrc:Navbar_img_4,
            Name:"Offers"
        },
        4:{
            ImageSrc:Navbar_img_5,
            Name:"History"
        },
        5:{
            ImageSrc:Navbar_img_6,
            Name:"Help"
        }       
    }
  return (
    <div className='w-[100px] h-full font-light'>
        {
            Object.keys(NavbarList).map((keys) => {
                return(
                    <div key={keys} className={`h-[80px] py-2 flex gap-1 flex-col cursor-pointer transition-all duration-200 ${props.panelname==NavbarList[keys].Name? "bg-[#ECF1F6]":""} p-2`} onClick={()=>{navigate("/panel/"+NavbarList[keys].Name)}}>
                        <div className='h-full flex'>
                            <div className='flex-1 flex  flex-col'>
                                <div className=' flex-1 h-[70%] flex items-center justify-center '>
                                    <img src={NavbarList[keys].ImageSrc} alt='' className=' h-[30px]'/>
                                </div>
                                <div className=' text-sm text-center '>{(NavbarList[keys].Name).toUpperCase()}</div>
                            </div>
                        </div>
                        {
                            props.panelname==NavbarList[keys].Name && (
                                 <div className='bg-[#FF8811] h-[4px] w-[60%] mr-auto ml-auto rounded-full'></div>
                            )
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Navbar