import {  useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

     
      const navigate = useNavigate()
     const emailInput = useRef();
     const passwordInput = useRef();

    const hadelLogin = (event) => {
  event.preventDefault();
  let email = emailInput.current.value;
  let password = passwordInput.current.value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userHere = users.some((el) => {
    return el.email === email && el.password == password;
  });

  if (userHere) {
    localStorage.setItem("userActive", email);
    alert("login success");
    navigate("/HomePage");
  } else {
    alert("wrong email and password");
  }
};


       useEffect(()=>{

          let users = localStorage.getItem('users');
      if (!users) {
          localStorage.setItem('users', JSON.stringify([{ email: 'moaz@gamil.com', password: 123456 }]));
         }

           let ActiveUSER = localStorage.getItem('userActive')
           if(ActiveUSER){
             navigate('/HomePage')
           }
       })

          
  return (
    <div className="w-full h-[100vh] bg-gray-200  flex justify-center gap-2.5 items-center ">
        <form onSubmit={hadelLogin} className="container w-[400px] flex flex-col justify-center items-center p-3.5 gap-3.5 h-auto border shadow rotate-2  ">
             <p className="font-bold text-gray-700">wellcom back, please login</p>
              <input ref={emailInput} type="text" placeholder="enter your email" className="input w-full" />
              <input ref={passwordInput} type="text" placeholder="enter your password" className="input w-full" />
              <button className="btn btn-primary w-full ">Login</button>
        </form>
    </div>
  )
}
