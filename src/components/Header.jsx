import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom"
export default function Header() {

  const [pageState,setPageState] =useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setPageState("Profile");

        }else{
            setPageState("Sign in")
        }
    })
  })

  function pathMatchRoute(route){
    if(route === location.pathname){
        return true;
    }
  }
  return (
    <div className=" bg-white fixed w-full z-40 top-0 start-0 border-b shadow-sm "> 
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" 
                    alt="logo" className='h-5 cursor-pointer' 
                    onClick={()=>navigate("/")}/>          
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold ${
                       pathMatchRoute("/") 
                       ? "text-black border-b-[3px] border-b-red-500" 
                       :"text-gray-400"}`}
                       onClick={()=>navigate("/")}
                       >
                        Home
                    </li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold  ${
                       pathMatchRoute("/offers") ?
                       "text-black border-b-[3px] border-b-red-500" 
                       :"text-gray-400"}`}
                       onClick={()=>navigate("/offers")}
                    >Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold  ${
                       (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) 
                       ?"text-black border-b-[3px] border-b-red-500" 
                       :"text-gray-400 border-b-[3px] border-b-white"}`}
                       onClick={()=>navigate("/profile")}
                    >
                        {pageState}
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
