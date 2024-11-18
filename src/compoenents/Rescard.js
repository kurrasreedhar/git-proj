

import { CDN_URL } from "../utils/constants"


export default function Rescard(props){
  const {resdt}  = props
   
    const {cloudinaryImageId ,name , areaName,sla:{deliveryTime},cuisines,avgRating} =resdt?.info || {}
  
  return(
    <div className='Rescard'>
     
      <img src={CDN_URL +cloudinaryImageId}  />
      <div className="restaurant-info">
      <h3 className="restaurant-name">{name}</h3>
      <h4 className="rating-value">{avgRating}</h4>
      <p className="restaurant-cuisine">{cuisines.join(",")}</p>
      <h4 className="delivery-time">{deliveryTime}mins</h4>
      <h5  className="area-name">{areaName}</h5>
    
      </div>
    </div>

  )
}
 export const Withpromotecard=(Rescard)=>{
  return (props)=>{
        return(<div>
          <label>promoted</label>
          <Rescard  {...props}/>
        </div>)
  }

 }