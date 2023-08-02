
import { Route,Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/SignIn"
import Atransaction from "./pages/Atransaction"
import Amorder from "./pages/Aorder"

import Settingm from "./pages/Settingm"
import Setting2 from "./components/Admin/setting2";
import Afeedback from './pages/Afeedback'

import Mnavbar1 from "./components/Admin/mnavbar"


import Request from "./components/Admin/Request"


const App = () => {
  return (
    <div>
   

<Routes>
 
 
<Route path="/" element={<Login/>}/>
<Route path="/feedback" element={<Afeedback/>}/>
<Route path="/request1" element={<Request/>}/>

  <Route path="/Mnavbar" element={<Mnavbar1/>}/>
  <Route path="/Atransaction" element={<Atransaction/>}/>
  <Route path="/Aorder" element={<Amorder/>}/>
  {/* <Route path="/cpass" element={<Asettingm/>}/> */}
  <Route path="/settingm" element={<Settingm/>}/>
  <Route path="/afeedback" element={<Afeedback/>}/>
  









  
</Routes>



    </div>
  )
}
export default App

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Aorder from "./components/Admin/Aorder";
// import Mnavbar from "./components/Admin/mnavbar";

// const Asidebar = () => {
//   const [open, setOpen] = useState(true);
//   const Menus = [
//     { title: "Dashboard", src: "./adminsidebar/dash.png", to: "" },
//     { title: "Books", src: "./adminsidebar/books.png", to: "" },
//     { title: "Orders", src: "./adminsidebar/order.png", to: "/amorder" },
//     {
//       title: "Transactions",
//       src: "./adminsidebar/transaction.png",
//       to: "/amtransaction",
//     },
//     { title: "Blog", src: "./adminsidebar/blog.png", to: "" },
//     { title: "Feedback", src: "./adminsidebar/feedback.png", to: "" },
//     { title: "Setting", src: "./adminsidebar/setting.png", to: "/cpass" },
//     { title: "Log out", src: "./adminsidebar/log out.png", to: "" },
//   ];

//   return (
//     <>
//     <Mnavbar/>
//       <div
//         className={`${
//           open
//             ? "xl:w-72 w-40 h-[78vmin] fixed mt-20 bg-[#2196f3] rounded"
//             : "w-40 h-[78vmin] lg:w-10 xl:w-10 md:w-10 sm:w-10 fixed mt-20 bg-[#2196f3] rounded"
//         } `}
//         id="main"
//       >
//         <img
//           src="./sidebar/b.png"
//           alt="control"
//           className={`cursor-pointer w-12 border-dark-purple border-none  ${
//             !open && "w-12 rotate-180"
//           }`}
//           onClick={() => setOpen(!open)}
//         />
//         <div className="flex gap-x-4 items-center">
//           <h1
//             className={`text-white origin-left font-medium text-xl duration-200 ${
//               !open && "scale-0"
//             }`}
//           >
//             <br />
//           </h1>
//         </div>
//         <ul className="bg-[#2196f3]">
//           {Menus.map((Menu, index) => (
//             <Link
//               to={Menu.to}
//               key={index}
//               className={`flex rounded-md p-2 cursor-pointer hover:bg-[#388e3c] hover:text-white text-sm items-center gap-x-4 ${
//                 Menu.gap ? "mt-9" : "mt-2"
//               } ${index === 0 && "bg-light-white"}`}
//             >
//               <img src={Menu.src} className="w-6" alt="asset" />
//               <span className={`${!open && "hidden"} origin-center duration-200`}>
//                 {Menu.title}
//               </span>
//             </Link>
//           ))}
//         </ul>

//         <div className={`mt-10 ${!open ? "hidden" : ""}`}>
        
//         </div>
//       </div>
//       <div
//         className={`${
//           open
//             ? "xl:pl-72 pl-30 transition-all duration-200"
//             : "pl-10 transition-all duration-200"
//         }`}
//       >
       
//         <Aorder/>
//       </div>
//     </>
//   );
// };

// export default Asidebar;
