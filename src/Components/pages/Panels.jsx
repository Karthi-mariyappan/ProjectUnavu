import Navbar from '../card/Navbar'
import { useParams} from "react-router-dom";
import Orders from '../card/Orders';
import Menu from '../card/Menu.jsx'
function Panels() {
    const { panel } = useParams();
  return (
    <div className="h-[91.5dvh] flex">
    <Navbar panelname={panel}/>
    <div className="bg-[#ECF1F6] flex-1 py-2 flex flex-col h-full">  
         {
            panel == "Orders" ? (
                <Orders/>
            ):
            (
               (panel == "Menu") ? (
                  <Menu/>
               ):
               (
                  <>{panel}</>
               )
            )
         }
    </div>
</div>
  )
}

export default Panels