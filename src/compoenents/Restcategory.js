import { useState } from "react"
import { Itemlist } from "./Itemcard"


export const Restcategory=({data})=>{
    const[Showitem,Setshowitem]= useState(false)
    const [btn,sbtn]=useState("+")
    const Handler=()=>{
        Setshowitem(!Showitem);
        btn==="+" ? (sbtn("-")):(sbtn("+"));
        
    }
   
    return (
        <div className="wrapper">
            <div className="accordian">
                    <div className="item" onClick={Handler}> 
                       <h3> {data.title}({data.itemCards.length})</h3>
                       <span>{btn}</span>
                    </div>
            </div>

            <div className="content">
               {Showitem && <Itemlist dta={data.itemCards}/>}
                </div>
          </div>
    )
}  