import React, { useEffect, useState } from 'react';
import  Navbar  from '../components/Navbar';
import { Button, Stepper, Step, CardHeader, Typography } from '@material-tailwind/react';
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { selectLoggedInUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';


const OrderTracking = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  // Replace this with your actual order tracking data
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const users = useSelector(selectLoggedInUser);

  useEffect(() => {
    const getcart = async () => {
      const response = await fetch(
        `http://localhost:5000/cart/getcart/${users._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.length);
      setQuantity(data.length);
      setProduct(data);
    };
    getcart();
  }, []);


  {
    const cartItems = []; // Array to store the cart items with quantity

    product.forEach((item) => {
      const existingCartItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.product._id === item.product._id
      );

      if (existingCartItemIndex !== -1) {
        // If the cart item already exists, increment the quantity
        cartItems[existingCartItemIndex].quantity++;
      } else {
        // If it's a new cart item, add it to the array with initial quantity as 1
        cartItems.push({ ...item, quantity: 1 });
      }
    });


  return (
  <>
 <div>
  <Navbar/>
 </div>
 <div className='container border border-spacing-2 mt-24 bg-[#F2F1F1] '>
  <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 shadow my-2 xl:grid-cols-3 2xl:grid-cols-3'>
    <div className='bg-[white] p-3 leading-6 shadow'>
      <h3 className='font-semibold'>Delivery Address</h3>
      <p>{users.firstName}</p>
      <p>Plot no. 201, Hingna road , Nagpur</p>
      <p>Maharashtra - 440016</p>
      <p>Contact No. : {users.phone}</p>
     {/* <Button type='button'  className='rounded-sm flex gap-1 items-center capitalize py-2 px-3 bg-white border border-spacing-1 text-black hover:border-spacing-0'><CiEdit className='text-xl'/> Edit Address</Button> */}
    </div>

    {/* card 2nd */}
    <div className='bg-[white] p-3 leading-7 shadow'>
      <h3 className='font-semibold'>Contact Us</h3>
      <p>Email : <span>booksshare@gmail.com</span></p>
      <p>Call : <span> 0552-0505-8221</span></p>
      <p>Maharashtra - 440016</p>
      <Link className='text-[blue] text-sm'> Need Help ?</Link>
    </div>

    {/* card 3rd  */}
    <div className='bg-[white] p-3 leading-8 shadow'>
      <div>
        <h3 className='font-semibold'>Price Details</h3>
       
         {/* <tr>
          <td>Items Price </td>
          <td>&emsp;₹637 <span>(3 items)</span></td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className='text-[green]'>&emsp;Free *</td>
        </tr>
        <tr>
          <td>Total Amount </td>
          <td>   &emsp;₹ 637/-</td>
        </tr>  */}
       {cartItems.map((cartItem) => (
            <table  key={cartItem.product._id}>
            
              </table>
            ))}
            <tr>
          <td>Items : </td>
          <td> <span> {cartItems.length} items</span></td>
        </tr>
             <tr>
          <td>Shipping :</td>
          <td className='text-[green]'>&emsp;Free *</td>
        </tr>
        <tr>
                                <td className="  ">
                                Total Amount :
                                </td>
                                <td className="px-1 ">
                                ₹ {cartItems.reduce(
                                    (total, cartItem) =>
                                      total +
                                      cartItem.quantity *
                                        cartItem.product.price,
                                    0
                                  )}/-
                                </td>
                              </tr>
      </div>
    </div>

  </div>

  <div className='bg-white border-spacing-1'>
  <div className="w-full py-4 px-8">
      <CardHeader floated={false}  color='blue-gray' className="grid h-24  rounded-none m-0 place-items-center">
        <div className="w-full px-20 pt-4 pb-8">
          <Stepper
            activeStep={activeStep}
            lineClassName="bg-[green]"
            activeLineClassName="bg-black"
          >
            <Step
              className="h-4 w-4 !bg-[] text-[green]] cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(0)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Order Placed</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(1)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Confirmed</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(2)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Ready to Ship</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(3)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">In Transit</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(4)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Delivered</Typography>
              </div>
            </Step>
          </Stepper>
        </div>
      </CardHeader>
    </div>
  </div>

 </div>
  </>
  );
};
}
export default OrderTracking;
