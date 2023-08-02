import React, { useState, Fragment, useEffect } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import Navbar from "../components/Navbar";
import {
  Typography,
  Button,
  AccordionHeader,
  Accordion,
  AccordionBody,
  Card,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

import { GoCreditCard } from "react-icons/go";
import { Link } from "react-router-dom";
import { selectLoggedInUser } from "../features/auth/authSlice";
import axios from "axios";

export default function Cart() {
  const [open, setOpen] = useState(1);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const users = useSelector(selectLoggedInUser);

  const getcart = async () => {
    try {
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
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  useEffect(() => {
    getcart();
  }, []);

  //remove cart
  const handleRemove = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${productId}`);
      getcart();
    } catch (error) {
      console.error("Failed to remove cart item:", error);
    }
  };

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

   
   

    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    function handalremove() {
      document.getElementById("box").hidden = true;
      document.getElementById("text1").hidden = true;
    }
    function handalremoves() {
      document.getElementById("boxx").hidden = true;
      document.getElementById("text2").hidden = true;
    }
    function handalremovess() {
      document.getElementById("boxxx").hidden = true;
      document.getElementById("text3").hidden = true;
    }

    return (
      <>
        <div>
          <Accordion open={open === 1}>
            <Navbar />
            <div className="mt-24">
              <div className="container ">
                <AccordionHeader onClick={() => handleOpen(1)}>
                  <div className="row m-1 w-full shadow bg-white rounded border ">
                    <div
                      className="col-12 "
                      style={{ backgroundColor: "#81A356" }}
                    >
                      <p
                        className="d-flex mx-5 my-auto  p-2 text-start text-white"
                        style={{ Color: "#000000" }}
                      >
                        {" "}
                        Order Summary{" "}
                      </p>
                    </div>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <div className="row m-1 shadow bg-white rounded border">
                    <div className="col-9 flex  items-center bg-[white] h-20">
                      <p className="d-flex   text-[23px] ps-4 text-start text-black ">
                        {" "}
                        Product's
                      </p>
                    </div>
                    <div className="col-3 flex -ms-6 items-center">
                      <p className="pe-6 ">
                        <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                          Qty
                        </span>
                        <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                          Each
                        </span>
                        <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                          Total
                        </span>
                      </p>
                    </div>
                  </div>

                  {cartItems.map((cartItem) => (
                    <div
                      className="row shadow m-1 bg-white rounded border mt-1 p-4"
                      id="box"
                      key={cartItem.product._id}
                    >
                      <div className="col-md-3 col-sm-12">
                        <p className="d-flex items-center my-auto p-2 justify-content-center">
                          <img
                            src={`./books/${cartItem.product.img}`}
                            alt="home"
                            width="109"
                            height="125"
                            className="img-fluid"
                          />
                        </p>
                      </div>
                      <div className="col-md-6 col-sm-12 text-start">
                        <span>{cartItem.product.description}</span>
                        <br />
                        <br />
                        <div className="flex items-center">
                          <p>
                            <BsCurrencyRupee />
                          </p>
                          <p>
                            <b>{cartItem.product.price}</b>
                          </p>
                        </div>
                        <div className="flex items-center text-[14px]">
                          <p className="">
                            <BsCurrencyRupee />
                          </p>
                          <p>
                            <span>
                              <s>{2 * cartItem.product.price}</s>
                            </span>
                            &nbsp;
                            <span className="text-[12px] text-green-800">
                              {" "}
                              50% &nbsp; off
                            </span>
                            <button
                              type="button"
                              className="btn btn-outline-secondary rounded hover:bg-green-700 text-[10px] mx-2 "
                              onClick={() => handleRemove(cartItem.product._id)} 
                            >
                              {" "}
                              Remove{" "}
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12 justify-content-end ">
                        <p className="">
                          <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                            {cartItem.quantity}
                          </span>
                          <span className="px-4 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                            {cartItem.product.price}
                          </span>
                          <span className="px-4 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                            {cartItem.quantity * cartItem.product.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* payment for books */}

                  {cartItems.length > 0 && (
                    <div className="row m-1">
                      <div
                        className="lg:flex mb-3  flex-row-reverse justify-between p-2 shadow  bg-white rounded border "
                        id="boxxx"
                      >
                        <div className="border border-spacing-2 lg:ms-48 py-4 p-14 ">
                          <Typography>
                            {cartItems.map((cartItem) => (
                              <p key={cartItem.product._id}>
                                <tr>
                                  <td className="px-4 font-bold">
                                    Order Subtotal :
                                  </td>
                                  <td className="px-4 font-bold">
                                    ₹{" "}
                                    {cartItem.quantity * cartItem.product.price}
                                  </td>
                                </tr>
                              </p>
                            ))}
                            <hr className="text-gray"></hr>
                            <p>
                              <tr>
                                <td className="px-4 font-bold">Discount : </td>
                                <td className=" font-bold">-(50%)</td>
                              </tr>

                              <tr>
                                <td className="px-4 font-bold">
                                  Shipping Charges :{" "}
                                </td>
                                <td className="px-1 font-bold">
                                  <strike> ₹40</strike>{" "}
                                  <span className="text-[green]">Free*</span>
                                </td>
                              </tr>

                              <tr>
                                <td className="px-4 font-bold border border-spacing-2">
                                  Order Total :
                                </td>
                                <td className="px-1 font-bold border border-spacing-2">
                                  {cartItems.reduce(
                                    (total, cartItem) =>
                                      total +
                                      cartItem.quantity *
                                        cartItem.product.price,
                                    0
                                  )}
                                </td>
                              </tr>
                            </p>
                          </Typography>
                        </div>

                        <div className="lg:ms-20 ms-[80px] flex py-4 items-center">
                          <Typography onClick={() => handleOpen(1)}>
                            <Button className="bg-[#388E3C] outline-1 rounded-[5px] text-[18px] px-12 py-3 hover:bg-green-500 capitalize">
                              Place Order
                            </Button>
                          </Typography>
                        </div>
                      </div>
                    </div>
                  )}
                </AccordionBody>
              </div>
            </div>
          </Accordion>
          <Accordion open={open === 2}>
            <div className="">
              <div className="container">
                <AccordionHeader onClick={() => handleOpen(2)}>
                  <div className="grid m-1 w-full shadow bg-white rounded border ">
                    <div
                      className="grid-cols-1 "
                      style={{ backgroundColor: "#81A356" }}
                    >
                      <p
                        className="d-flex mx-5 my-auto  p-2 text-start text-white"
                        style={{ Color: "#000000" }}
                      >
                        {" "}
                        Checkout{" "}
                      </p>
                    </div>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <div className="bg-[#EFE7E7] p-3 shadow-md">
                    <p className="grid w-full grid-cols-1 ps-4 text-[20px]">
                      Payment mode options
                    </p>
                    <div className="grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 h-full sm:grid-cols-1 gap-3 p-2">
                      <div>
                        {/* card 1 */}
                        <Card className="my-2 ">
                          <div className="flex justify-start items-center shadow-md p-3 gap-2">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              disabled
                              className="h-4 w-4 border-gray-900 text-green-900 focus:ring-green-900"
                            />
                            <GoCreditCard className="text-[30px] mx-3" />
                            <p className="text-[20px]">Card</p>
                          </div>
                        </Card>
                        {/* card2 */}
                        <Card className="my-2">
                          <div className="flex justify-start items-center shadow-md px-3 gap-2">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              disabled
                              className="h-4 w-4 border-gray-900 text-green-900 focus:ring-green-900"
                            />

                            <img
                              src="./Buyerimages/upiBuyer.png"
                              alt="xzv"
                              className="h-20 -ms-3"
                            />
                            <p className="text-[20px]">UPI</p>
                          </div>
                        </Card>
                        {/* card 3 */}

                        <Card className="my-2">
                          <div className="flex justify-start items-center shadow-md px-3 gap-2">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              defaultChecked
                              className="h-4 w-4 border-gray-900 text-green-900 focus:ring-green-900"
                            />

                            <img
                              src="./Buyerimages/codBuyer.png"
                              className="h-14"
                              alt=""
                            />
                            <p className="text-[20px] ms-3">Cash On Delivery</p>
                          </div>
                        </Card>
                      </div>

                      {/* <div className="shadow-md p-2 rounded-md leading-10 bg-[white]">
                        <h1 className="text-center md:text-[22px] text-[18px] my-2 mb-2">
                          Order Summary
                        </h1>
                        <p className="flex justify-around md:text-[22px] text-[18px] mt-2">
                          <span>Item's price &emsp; :-</span>
                          <span>₹ 637 /-</span>
                        </p>
                        <p className="flex justify-around  border-b-8 pb-2 md:text-[22px] text-[18px]">
                          <span>Delivery &emsp; :-</span>
                          <span>0.00 /-</span>
                        </p>

                        <p className="flex justify-around md:text-[22px] pt-2  text-[18px]">
                          <span>Order Total &emsp; :-</span>
                          <span>₹ 637/-</span>
                        </p>
                      </div> */}
                      <div className="shadow-md p-5 rounded-md leading-10 bg-[white]">
                        {cartItems.length > 0 && (
                          <div className="shadow-md p-2 rounded-md leading-10 bg-[white]">
         
                                <Typography>
                                  {cartItems.map((cartItem) => (
                                    <p key={cartItem.product._id}></p>
                                  ))}

                                  <tr>
                                  <td className=" px-5 text-center md:text-[22px] text-[18px] my-2 mb-2">
                                    Order Summary :-
                                  </td>
                                    <td className="px-[30px] font-bold"> 
                                    ₹ {cartItems.reduce(
                                        (total, cartItem) =>
                                          total +
                                          cartItem.quantity *
                                            cartItem.product.price,
                                        0
                                      )}
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className=" px-5 text-center md:text-[22px] text-[18px] my-2 mb-2">
                                      Delivery &emsp; :-
                                    </td>
                                    <td className="px-[30px] font-bold">
                                      ₹ 0.00
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className=" px-5 text-center md:text-[22px] text-[18px] my-2 mb-2">
                                    Order Total &emsp; :-
                                    </td>
                                    <td className="px-[30px] font-bold"> 
                                    ₹ {cartItems.reduce(
                                        (total, cartItem) =>
                                          total +
                                          cartItem.quantity *
                                            cartItem.product.price,
                                        0
                                      )}
                                      </td>
                                  </tr>

                                </Typography>
                              

                              
                            </div>
                          
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[white] w-full justify-center p-4 flex">
                    <Link to="/orderplaced">
                      <Typography onClick={() => handleOpen(2)}>
                        <Button className="bg-[#388E3C] outline-1 rounded-[5px] text-[18px] px-12 py-3 hover:bg-green-500  capitalize  ">
                          Confirm Order
                        </Button>
                      </Typography>
                    </Link>
                  </div>
                </AccordionBody>
              </div>
            </div>
          </Accordion>
        </div>
      </>
    );
  }
}
