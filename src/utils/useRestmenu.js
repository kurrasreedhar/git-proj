import { useEffect, useState } from "react";
import { REID } from "../utils/constants";

export const useRestmenu=(resId)=>{

    const[rminfo , srminfo] = useState([])

    useEffect(()=>{
        Fetch()
       },[])
     
      const Fetch=async()=>{
        const dta= await fetch(REID+resId) 
        const jdata= await dta.json()
         srminfo(jdata)}

         return rminfo
    
}