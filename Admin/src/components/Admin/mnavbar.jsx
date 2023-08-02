


/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardHeader,
  CardBody,
  Navbar,
  Button,
  Input,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from "axios"




import { TbShoppingCart } from "react-icons/tb";

import { useSelector } from "react-redux";
import { selectProduct } from "../../features/product/productSlice";
import { useEffect, useState } from "react";
import { selectLoggedInUser } from "../../features/auth/authSlice";


export default function mnavbar() {
 
const[products,setProducts]=useState([])
const user = useSelector(selectLoggedInUser)


const [price,setPrice]=useState("")


  useEffect(()=>{

const getproduct = async ()=>{
  const product = await fetch(`http://localhost:5000/products/`)
  const data = await product.json()
  console.log(data)
  setProducts(data)
}
getproduct()

  },[]);


  const  filter = products.filter((item)=>{
    return item.status === "Pending"
  })
  console.log(filter)

  return (
      <div>
 
    <div>
      <Navbar className="mx-auto max-w-screen-sm px-2 py-2 text-black my-3">
        <div className="flex  items-center justify-between gap-y-4 ">
          <div className="relative flex w-full lg:w-full ">
            <Input type="search" color="green" label="Search..."  />
            <Button
              size="sm"
              className="!absolute right-1  top-1 px-6 rounded bg-[#81A356] flex "
            >
              <BsSearch className=" text-[20px]" />
            </Button>
          </div>
        </div>
      </Navbar>

      {/* card row 1 */}
      <div className="bg-[#DDDDDD] mt-3 p-5"> 
        <strong className="lg:ms-28 text-[22px] text-[blue] m-14 ">My Books</strong>

        <div className="  grid lg:grid-cols-4 md:grid-cols-2 mt-3 sm:grid-cols-1 ">
          {/* card one */}
     {
filter.map((item)=>(
    <form >
  <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5" key={item._id}>
  <CardHeader shadow={false} floated={false}>
    <center>
      <img src={`./books/${item.img}`} className="w-[120px] h-[188px] " alt="img" />
    </center>
  </CardHeader>
  <CardBody>
    <div className="flex items-center justify-between mb-2">
      <Typography  className="font-medium text-center text-[14px]">
       {item.title}
      </Typography>
    </div>

    <Typography className="font-medium text-center">
      
      <span className="text-black text-[18px]">User Value : ₹ {item.price}</span>
      <input type="text" className="border border-spacing-2" placeholder="Enter Admin Value" onChange={(e)=>setPrice(e.target.value)}/>
    </Typography>
  </CardBody>

  <CardFooter className="flex pt-0 ">
    <Button
      ripple={false}
      fullWidth={true}
      className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
    >
      <center>
      Cancel
      </center>
    </Button>

    <button
      ripple={false}
      fullWidth={true}
      onClick={async(e)=>{
        e.preventDefault();
        const response = await axios.put(`http://localhost:5000/products/${item._id}/bargain`,{
          price
      })
       
        console.log(response)
      }}
      className="ms-2  bg-[red] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
      >
      <center>
        Save & Send
      </center>
    </button>
  </CardFooter>
</Card>
     </form>
))
     }

        </div>
      </div>

      {/* Footer */}

    </div>
    </div>

  );
}




