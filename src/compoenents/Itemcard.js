
import { useDispatch } from "react-redux";
import {CDN_URL} from "../utils/constants"
import {addItems, removeItems} from "./CartSlice"



export const Itemlist=({dta})=>{

const dispatch=useDispatch();

const HandlerReItem=(item)=>{
  dispatch(removeItems(item))

}

  const HandlerAddItem=(item)=>{
     dispatch(addItems(item))
   
  }
  
    return(
        <div className="mainitem">
        {dta.length > 0 ? (
          dta.map((item) => {
            if (!item.card || !item.card.info) {
             
              return null; // Skip rendering this item
          }

            return (
            <div className="maindiv" key={item.card.info.id}>
                  <div>  
                      <ul  className="ulist">
                        <li className="iname">{item.card.info.name}</li>
                        <li className="price">{item.card.info.price/100}rs</li>
                        <li className="desp">{item.card.info.description}</li>
                       </ul>
                </div>
                <div className="itemcontainer"> 
             <img src={CDN_URL+item.card.info.imageId} className="image" />
             <div className="addb"> 
              <button  onClick={()=>HandlerAddItem(item)}>+</button>
              <button  onClick={()=>HandlerReItem(item)}>-</button>
             </div>
              Customisable
             </div>
             </div>)
})
        ) : (
          <p>No items available.</p>
        )}
      </div>)
}