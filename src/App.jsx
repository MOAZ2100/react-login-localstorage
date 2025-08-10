import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <div className="w-full h-[100vh] bg-gray-200">
      <BrowserRouter >
      <Routes>
        <Route path="/HomePage" element={ <HomePage/>} /> 
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  
    </div>
  )
}
