import { Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, json } from "react-router-dom";
// import { FaTwitter } from "react-icons/fa";
import {eyeOff} from "react-icons-kit/feather/eyeOff"
import {eye} from "react-icons-kit/feather/eye"

import { useForm } from "react-hook-form";
import { useState } from "react";
import Icon from "react-icons-kit";
// import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { checkUserAsync, selectError, selectLoggedInUser } from "../features/auth/authSlice";





 export default function Signadi () {

  const[password,setPassword]=useState("")
  const [type,setType]=useState("password")
  const[icon,setIcon]=useState(eyeOff)
  const dispatch = useDispatch()
  const error = useSelector(selectError)
  const user =useSelector(selectLoggedInUser)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleToggle = ()=>{
    if(type==='password'){
      setIcon(eye)
      setType('text')
    }
    else{
      setIcon(eyeOff)
      setType('password')
    }
  }

   

  return (
    <>
     

   <div className="  ">
      <div className=" lg:w-[100%] ">
     
      <Link to="/">
        <img className="xl:ms-14 xl 
                         lg:ms- lg:mt- lg:
                         md: md:mt- md:mb- 
                         sm: sm: sm:mb-
                         mt-4
                         " src="./logo1.png" alt="my img" />
                         </Link>
      
        <main className="grid  xl:mx-96 justify-items-center  bg-white rounded-lg shadow-2xl pt-2 ">
          <form action="" className="lg:w-7/12  font-[JejuMyeongjo]"   onSubmit={handleSubmit((data)=>{
            dispatch(checkUserAsync({
              email:data.email,
              password:data.password,
            }))
            navigate("/Aorder")
            console.log(data)
          })}>
            <h1 className="pb-5 text-3xl font-bold text-center">Login </h1>
            <section className="mb-4">
              <Input
                variant="standard"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: "please enter valid email",
                  },
                })}
                color="green"
                label="Email*"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </section>
            <br />
            <div>
           <div className="mb-4 flex justify-end ">
              <Input
                  type={type}
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters \n
- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
- Can contain special characters`,
                    },
                  })}
                  variant="standard"
                   color="green"
                  label="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                
             />
             <span className="flex justify-around items-center" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={25}/>
              </span>
            </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              {
                error && (
                  <p className="text-red-500">{error.message}</p>
                )
              }
         </div>
            <section className=" flex justify-between py-3  ">
              <div className="md:text-[16px] text-[13px] ">
                <input type="checkbox" className="me-1" /> 
                Remember me
              </div>
              <div className="md:text-[16px] text-[13px] ">Forgot Password ?</div>
            </section>
            <br />
            <br />
            <button  className="bg-[#81A356] text-white p-2 rounded-xl w-full">
              Login
            </button>
            <br />
            <br />
          
            <br />
           
          </form>
        </main>
      </div>
           
   
    </div>

    

    

   </>
  );
};