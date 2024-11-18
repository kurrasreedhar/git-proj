import { useEffect, useState } from "react";


export const useOnline=()=>{
   const[useOnlinestatus,setuseOnlinestatus] = useState(true)
    useEffect(()=>{
    window.addEventListener("online",()=>{
     setuseOnlinestatus(true)
    })
    window.addEventListener("offline",()=>{
        setuseOnlinestatus(false)
       })
    })
    return useOnlinestatus;
}