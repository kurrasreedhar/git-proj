import { lazy,Suspense } from "react";
import Header from "./compoenents/Header"
import Body  from './compoenents/Body';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./compoenents/Home";
import {Contact} from "./compoenents/Contact";
import appStore from "./utils/appStore";
import { Restmenu } from "./compoenents/Restmenu";
import {Provider} from "react-redux";
import { Cart } from "./compoenents/Cart";

const Services = lazy(()=>import("./compoenents/Services"))

function App() {
  
   return (
    <div className="App">
<BrowserRouter >
<Provider store={appStore}>
  <Header/>
  <Routes>
  <Route path="/" element={<Body/>}/>
   <Route path="/Home" element={<Home/>}/>
  <Route path="/Services" element={<Suspense fallback={<h1>Loading.......</h1>}><Services/></Suspense>} />
  <Route path="/Contact" element={<Contact/>}/>
   <Route path="/Restaurant/:resId" element={<Restmenu/>}/>
   <Route path="/Cart" element={<Cart/>}/>
  </Routes></Provider>
 
  </BrowserRouter>
    </div>
  );
}
export default App;
