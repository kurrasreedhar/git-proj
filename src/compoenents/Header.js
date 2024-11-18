import {  useState } from "react"
import img3 from "./logo3.jpeg"
import {  Link } from "react-router-dom"
import { useOnline } from "../utils/useOnline"
import { useSelector } from "react-redux"


export default function Header(){
  
const useOnlinestatus=useOnline()
  const[btn,sbtn]=useState("login")

  const cartItems=useSelector((store)=>store.cart.items)
    return(
      <div  className="Header">
        <div className="Logo">
        <Link to="/"><img src= {img3} width="100px" height="100px"/></Link>
       </div>
       <div className="list"> 
      <ul>
        <li>
      Online status: 
                        {useOnlinestatus ? (
                            <span className="material-icons check-green">check_circle</span>
                        ) : (
                            <span className="material-icons check-red">cancel</span>
                        )}</li>

        <li><Link to="/Home">Home</Link> </li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to ="/Contact">Contact</Link></li>
          <li><Link to="/Cart">Cart</Link>-({cartItems.length})items</li>
          
        
          <button className="tbtn" onClick={()=>{ btn === "login"? sbtn("logout"):sbtn("login")} }>{btn}</button>
         
          </ul>
       </div>
      </div>  )
  }