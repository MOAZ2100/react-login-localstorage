import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function HomePage() {

   const [user , setuser] = useState();
   const navigate = useNavigate()

    
     useEffect(()=>{
        let useIsLogin = localStorage.getItem('userActive');
         if(useIsLogin){
           setuser(useIsLogin)
         }else{
           navigate('/LoginPage')
         }
     } , [])

  return (
    <div className="w-full h-full flex gap-2 bg-gray-400">

        
       <h1>wellocme {user}</h1>
       <button className="btn btn-primary" onClick={()=>{
           localStorage.removeItem('userActive')
           navigate('/LoginPage')
       }}>logout</button>
    </div>
  )
}
