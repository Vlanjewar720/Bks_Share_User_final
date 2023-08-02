import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Card, Button } from "@material-tailwind/react";
import {  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { BsCurrencyRupee } from "react-icons/bs";


const Orderplaced = () => {

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
    <div>
      <div>
        <Navbar />
      </div>
      {/* order header card */}
      <div className="container border border-spacing-2 mt-24 bg-[#F2F1F1] ">
        <div className="bg-[white]  p-2 shadow lg:mx-5 flex items-center ">
          <div>
            <img
              src="./Buyerimages/orederplacedbuyer.png"
              className="w-[45px] "
              alt=""
            />
          </div>
          <div className="lg:ms-3  ms-1">
            <p className="lg:text-[20px] text-[15px] text-[#042CFE]">
              Order Placed For ₹637
            </p>
            <p className="lg:text-[17px] text-[12px] capitalize">
              {" "}
              Your order has been confirmed & will be shipping soon
            </p>
          </div>
        </div>

        {/* delivery address */}
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 my-2 lg:mx-5 gap-2 ">
          <div className="bg-[white]  p-2 shadow ">
            <div className=" flex items-center justify-center  gap-1 py-2">
              <img src="./Buyerimages/gaddi.png" className="w-[32px]" alt="" />
              <h3 className="lg:text-[22px] max-text-[22px] text-[16px]">
                Delivery Address
              </h3>
            </div>
            <hr />
            <div className="py-2 leading-8 lg:ps-3">
              <p className="lg:text-[18px] text-[14px]">{users.firstName}</p>
              <p className="lg:text-[18px] text-[14px]">
                {" "}
                plot No. 201, Hingna road nagpur, Maharashtra-440016
              </p>
              <p className="lg:text-[18px] text-[14px]">
                {" "}
                Contact No. {users.phone}
              </p>
            </div>
          </div>
          <div className="bg-[white]  p-2 shadow ">
            <div className=" flex items-center justify-center  gap-1 py-2">
              <img
                src="./Buyerimages/deatailchart.png"
                className="w-[32px]"
                alt=""
              />
              <h3 className="lg:text-[22px] max-text-[22px] text-[16px]">
                Order Details
              </h3>
            </div>
            <hr />
            <div className="py-3 leading-6 lg:ps-3 font-[JejuMyeongjo] ">
              
              <p className="lg:text-[18px] text-[14px]">
                {" "}
                Order ID :- <span>507712</span>
              </p>
              <p className="lg:text-[16px] text-[12px]">
                {" "}
                Estimated delivered in <span>18 Jul - 22 Jul</span>
              </p>
              <p className="lg:text-[18px] text-[14px] text-[black]">
                Mode of Payment :-{" "}
                <span className="text-[#15830B]">Cash On Delivary</span>
              </p>
            </div>
          </div>
        </div>
        {/* delivery address */}
        <div>
          <div className=" p-2 shadow lg:mx-5">
            {/* card one */}
            
            {cartItems.map((cartItem) => (
              <Card className="my-3 px-6 "
                key={cartItem.product._id}
              >
              <div className="lg:flex  justify-evenly items-center p-2">
                
                <div className="col-md-3 col-sm-12">
                  <p className="d-flex my-auto p-2 justify-content-center">
                    <img
                      src={`./books/${cartItem.product.img}`}
                      alt="home" width="109" height="125"
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 text-start">
                  <span>{cartItem.product.description}</span>
                    <p>
                      Order On : <span>
                      {new Date(cartItem.product.Date).toLocaleDateString("en-US")} at{" "}
                         {new Date(cartItem.product.Date).toLocaleTimeString("en-US", {
                                           hour: "numeric",
                                           minute: "numeric",
                                        })}
                                  </span>
                    </p>
              
                </div>
                <div className="col-md-2 col-sm-12 justify-content-end">
                  <div>Quantity :{cartItem.quantity}</div>
                  <div>Total Amount :{cartItem.quantity * cartItem.product.price}</div>                                            
                </div>
                </div>
              </Card>
            ))}
          
            {/* card two */}
            {/* <Card className="my-3 px-6">
              <div className="lg:flex justify-evenly items-center p-2">
                <div>
                  {" "}
                  <img src="./IMG2.jpg" alt="home" width="109" height="125" />
                </div>
                <div>
                  <p>
                    Ikigai: The Japanese secret to a long and happy life
                    [Hardcover] García, Héctor and Miralles, Francesc
                  </p>
                  <p>Order On : 12-07-2023</p>
                </div>
                <div>
                  <p>
                    Quantity : <span> 1</span>
                  </p>
                  <p>
                    Total Amount : <span> ₹212</span>
                  </p>
                </div>
              </div>
            </Card> */}
            {/* card three */}
            {/* <Card className="my-3 px-6">
              <div className="lg:flex justify-evenly items-center gap-3 p-2">
                <div>
                  {" "}
                  <img src="./IMG3.jpg" alt="home" width="109" height="125" />
                </div>
                <div>
                  <p>
                    Ikigai: The Japanese secret to a long and happy life
                    [Hardcover] García, Héctor and Miralles, Francesc
                  </p>
                  <p>Order On : 12-07-2023</p>
                </div>
                <div>
                  <p>
                    Quantity : <span> 1</span>
                  </p>
                  <p>
                    Total Amount : <span> ₹212</span>
                  </p>
                </div>
              </div>
            </Card> */}
          </div>
        </div>
        <div className="bg-[white] lg:mx-5 py-4">
        <div className="lg:flex items-center justify-around ">
          <p className="px-5 lg:text-[22px] text-[16px] font-semibold">Hope you enjoy your purchase , Thank you !</p>
          <p className="px-5 lg:text-[18px] text-[13px] ">Total Amount : <span>  ₹ {cartItems.reduce(
                                        (total, cartItem) =>
                                          total +
                                          cartItem.quantity *
                                            cartItem.product.price,
                                        0
                                      )}</span></p>
        </div>
        <div className="md:flex justify-center gap-5 my-2 shadow py-3">
            <center>
            <Link to='/trackorder'>
            <Button type="button" className="rounded-sm mx-2 capitalize px-6 py-2 my-2 bg-[#388E3C] sm:text-[16px] text-[14px] shadow-light-green-900">Track Order</Button>
            </Link>
            <Link to='/'>
            <Button type="button"  className="rounded-sm mx-2 capitalize px-6 py-2 bg-[#388E3C] sm:text-[16px] text-[14px] shadow-light-green-900">Continued</Button>
            </Link>
            </center>
        </div>
        </div>
      </div>
    </div>
  );
};
}
export default Orderplaced;
