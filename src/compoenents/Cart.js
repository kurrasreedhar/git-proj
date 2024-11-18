import { useSelector} from "react-redux"
import { Itemlist } from "./Itemcard"
import { useDispatch } from "react-redux"
import { clearCart } from "./CartSlice"


export const Cart=()=>{
    const dispatch=useDispatch()
    const HandleClearCart=()=>{
        dispatch(clearCart())
      }
    
    const Cartitems=useSelector((store)=>store.cart.items)
    console.log(Cartitems)
    return(<div >
      <button onClick={HandleClearCart}>{Cartitems.length ===0 } clearcart </button>
        <Itemlist dta={Cartitems} />

    </div>)
}