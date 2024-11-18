//import { Shimmer } from "./shimmer";
import { useParams } from "react-router-dom";
import { useRestmenu } from "../utils/useRestmenu";
import { Restcategory } from "./Restcategory"

  export const Restmenu =()=>{
  
   const {resId} = useParams()

const rminfo=useRestmenu(resId)
    
     const cardInfo = rminfo?.data?.cards[2]?.card?.card?.info;
          const Name = cardInfo?.name;
          const cuisines = cardInfo?.cuisines;
         const costForTwo = cardInfo?.costForTwo;
    // const icard =rminfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
       
    // console.log(rminfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
      
     const Categories=rminfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
           return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
           }) || [];
    //console.log(Categories)

    return(
       
        <div className="cat"> 
       <h1 className="name" >{Name}</h1><br/><br/>
       <p className="cuis">{cuisines}-- {costForTwo/100}rs for two</p>
       {Categories.map((category, index) => (
            <Restcategory
              key={index} 
              data={category?.card?.card}
            />
      ))}
    </div>)}