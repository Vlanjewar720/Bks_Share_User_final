  


       import { useState } from "react";
       import { Link } from "react-router-dom";
       import { Button  } from "@material-tailwind/react";
      //  import Example from "./Navbar";
       
      
          
  export default function Adetails() {
        
       
         return (
           <div className="">
           <div className="2xl:container ">  
           <div className="">
            
              
             {/* USER */}
               <div>
              
            <div className="w-full h-12 bg-[#81A356] text-white  ">
               <p className="translate-y-1/2 ms-6"> Enter Your Personal Details</p>
               <img src="" alt="" />
           </div>
       
               <br />
                 {/* form */}
            
                
             <div className="lg:p-[60px] p-[30px]   bg-[#F0ECEC]  ">
             {/* heading */}
           
             {/* form */}
       
             <div className=''>
               <form
                 action=""
                 className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3"
               >
                 <div className="lg:text-[24px] text-[20px]  ps-12 pe-12">
                   <label htmlFor=" " className="">
                     First Name <span className="text-[red]">*</span>
                   </label>
                   <input
                     type="text" style={placeholderStyle}
                     className="w-full border rounded mt-1 p-3  " placeholder="   Enter your first name"
                   />
                 </div>
       
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="" className="">
                     Last Name <span className=" text-[red]">*</span>
                   </label>style={placeholderStyle}
                   <input
                     type="text" placeholder="  Enter your Last name"
                     className="w-full border rounded mt-1 p-3 "
                   />
                 </div>
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="">
                     E-mail  <span className="text-[red]">*</span>
                   </label>style={placeholderStyle}
                   <input
                     type="text" placeholder="   Enter your E-mail"
                     className="w-full border mt-1 p-3 rounded  "
                   />
                 </div>
       
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="">
                     Mobile Number <span className="text-[red]">* </span>
                   </label>style={placeholderStyle}
                   <input
                     type="text" placeholder="   Enter Mobile  no."
                     className="w-full border rounded mt-1 p-3 "
                   />
                 </div>
         
         
       
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="">
                     Profile Pic <span className="text-[red]">* </span>
                   </label>style={placeholderStyle}
                   <input
                     type="file" placeholder="  "
                     className="w-full border border-green-500 rounded mt-1 pt-1 "
                   />
                 </div>
         
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="" className="">
                     Full Address <span className="text-[red]">*</span>
                   </label>style={placeholderStyle}
                   <textarea name="" id=""  rows="3" className="w-full border  rounded ps-2"></textarea>
                 </div>
                 
               </form>
             </div>
             
       
             {/* address */}
            
       
             {/* <div className="grid lg:grid-cols-2 grid-cols-1 lg:ms-[150px]"> */}
             
       
          
               <center className="py-6">
              {/* <Link to='/store'> */}
               {/* <Button  className="bg-[#f05345] font-normal px-4 py-2 lg:text-[18px] text-[14px]">Cancel </Button> */}
               {/* </Link>  */}
              {/* <Link to='/' ><Button color="green" onClick={notify } 
               className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 lg:text-[18px] text-[14px]"> Submit</Button></Link> */}
       
               <Button color="green"  
                className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 lg:text-[18px] text-[14px]">Update</Button>
          
               </center>
           
           </div>
           {/* <ToastContainer position='bottom-center'/> */}
              
           </div>
       
       
           </div>
           </div>
           </div>
         );
       };