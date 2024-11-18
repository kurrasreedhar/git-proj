import Rescard from "./Rescard"
import {useEffect, useState} from "react";
import { SWIGGY_URL } from "../utils/constants";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import { Withpromotecard } from "./Rescard";


export default function Body(){
  
  const Promotedresturants=Withpromotecard(Rescard);
  
   const [lr,slr]=useState([])
   const [st,sst]=useState("")
   const [filterrest, setfilterrest] = useState([])
   const useOnlinestatus=useOnline()
   useEffect(()=>{
   Ftch()
   },[])

   const Ftch=async()=>{
    const dta= await fetch(SWIGGY_URL)
    const json= await dta?.json()

   slr(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //console.log(json.data) 

  }
 
     if(useOnlinestatus=== false) return <h1> internet is offline</h1>
    
    return lr.length === 0 ? <Shimmer/> :(
    
      <div className='Container'>
       <div className='Se'>

       <input type='text' placeholder='search'  value={st} onChange={(e)=>{
        sst(e.target.value) }}/>

        <button onClick={()=>{ 
          console.log(st)
          const fsl= lr.filter((x)=>x.info.name.toLowerCase().includes(st.toLowerCase()))
            setfilterrest(fsl)
        }}>
          search</button>
       
        <button  className="butt"onClick={()=>{
          const flr=lr.filter((x)=>x.info.avgRating>4.3);
          setfilterrest(flr)
        }}> topratedrest</button>
 </div>  

       <div className='Res-container' >
         {filterrest.map((y)=> { 
          console.log(y)
        return <Link  className="Linkk" key={y.info.id} to={"/Restaurant/"+y.info.id} >
          {y.info.promoted? (< Promotedresturants resdt={y}/>):(<Rescard  resdt = {y}/>)}
          </Link>
  
       })}
        </div>
        
      </div>
    )
  }