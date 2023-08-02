import { Option, Button , Select } from "@material-tailwind/react";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { selectLoggedInUser } from "../features/auth/authSlice";
import {
  selectProduct,
  createProductAsync,
} from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookSellForm = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
    noofbooks: '',
    img: null,
  });
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
    setSelectedCity({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, img: e.target.files[0]});
  };

const navigate = useNavigate()
const [selectedCity, setSelectedCity] = useState("");

  return (
   
     
      <form
          action=""
          onSubmit={async(e)=>{
            e.preventDefault();

            try {
              const formData = new FormData();
              formData.append('title', productData.title);
              formData.append('description', productData.description);
              formData.append('city', productData.city);
              formData.append('price', productData.price);
              formData.append('noofbooks', productData.noofbooks);
              formData.append('created', user._id);
              formData.append('img', productData.img);
        
              // Make the API request to create the product
              const response = await axios.post('http://localhost:5000/products/', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
        
              // Handle the response (e.g., show success message, redirect, etc.)
              console.log('Product created:', response.data);
              navigate('/myproduct')
            } catch (error) {
              console.error('Error creating product:', error);
            }
          }}
        >
          {/* <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-3">
              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">First Name</label>
                <input
                  required
                  value={user.firstName}
                  className="w-full border border-black rounded ps-2 shadow-md "
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>
              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  value={user.email}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  value={user.phone}
                  className="w-full border border-black rounded ps-2 shadow-md"
                />
              </div>

              <div className="lg:text-[18px] text-[16px]">
                <label htmlFor="" className="">
                  Description
                </label>
                <textarea
                name="description"
                  onChange={handleChange}
                  id=""
                  rows="3"
                  className="w-full border border-black rounded ps-2 shadow-md"
                ></textarea>
              </div>
              <div className="     lg:text-[20px] text-[18px]">
                <div>
                  <label htmlFor="">Pin Code </label>
                  <br />
                  <input
                  
                    maxLength={6}
                    className="  border border-black rounded mb-3 ps-2 shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="">City in Maharashtra </label>
                  <div className="flex  flex-col gap-6">
                   
                    <Select
                      className="  border rounded bg-white "
                      label="select city"
                     >
                      <Option value="Nagpur">Nagpur</Option>
                      <Option value="Wardha">Wardha</Option>
                      <Option value="Yavatmal">Yavatmal</Option>
                      <Option value="Nashik">Nashik</Option>
                      <Option value="Amravati">Amravati</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* address */}

          {/* <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 md:mt-4 gap-y-4">
            <div className="lg:text-[20px] text-[18px] ">
              <label htmlFor=""> No. of Book's</label>
              <br />
              <input
                type="number"
                required
                name="noofbooks"
                onChange={handleChange}
                className="w-52 border border-black rounded ps-2 shadow-md"
              />
            </div>
            <div className="lg:text-[20px] text-[18px] ">
              <label htmlFor=""> Price of Books</label>
              <br />
              <input
                type="number"
                required
                name="price"
                onChange={handleChange}
                className="w-52 border border-black rounded ps-2 shadow-md"
              />
            </div>
          </div> */}

 
          {/* <ToastContainer />
        */}
        
      

        {/* <div>
            <center className="py-6">
              <Link to="/store">
                <Button className="bg-[#f05345] font-normal px-4 py-2  text-white lg:text-[18px] text-[14px]">
                  Cancel{" "}
                </Button>
              </Link>
            
              <Button
                color="green"
                type="submit"
                className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 ms-2 lg:text-[18px] text-[14px]"
              >
                Submit
              </Button>
            </center>
          </div>
      <div className="lg:text-[20px] text-[18px] ">
        <label htmlFor="img">Image of Book's</label><br />
        <input
          type="file"
          name="img"
          onChange={handleFileChange}
          className="shadow-md w-60"
          accept="image/*"
          />
      </div> */}

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}



<div className="py-5">
              <div className="bg-[#f3c4cc] container max-w-2xl shadow-md p-3 rounded-md">
          
             
             
            <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-3 p-3 ">
                <div className="lg:text-[20px] text-[18px]">
                       <span> <img src="./logo1.png"  alt="logo" className="img-fluid"/> </span>
                  </div>
                  <div className="lg:text-[20px] text-[18px] lg:ml-[-70px] md:ml-[-50px] mt-2">
                       <span className="lg:text-[30px] text-[30px] lg:ml-[-70px] md:ml-[-50px] ">BooksShare-Sellers Form </span>
                  </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">First Name</label>
                <input
                  required
                  value={user.firstName}
                  className="w-full border border-black rounded ps-2 shadow-md "
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>
              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  value={user.email}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  value={user.phone}
                  className="w-full border border-black rounded ps-2 shadow-md"
                />
              </div>

              <div className="lg:text-[18px] text-[16px]">
                <label htmlFor="" className="">
                  Description
                </label>
                <textarea
                name="description"
                  onChange={handleChange}
                  id=""
                  rows="3"
                  className="w-full border border-black rounded ps-2 shadow-md"
                ></textarea>
              </div>
              <div className=" lg:text-[20px] text-[18px]">
                <div>
                  <label htmlFor="">Pin Code </label>
                  <br />
                  <input
                  
                    maxLength={6}
                    className="  border border-black rounded mb-3 ps-2 shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="">City in Maharashtra </label>
                  <div className="flex  flex-col gap-6">
                   
                   <Select
                      className="border rounded bg-white "
                      label="select " name="city" value={selectedCity}  onChange={handleChange}
                     >
                      <Option value="Nagpur" name="Nagpur">Nagpur</Option>
                      <Option value="Wardha" name="Wardha">Wardha</Option>
                      <Option value="Yavatmal" name="Yavatmal">Yavatmal</Option>
                      <Option value="Nashik" name="Nashik">Nashik</Option>
                      <Option value="Amravati" name="Amravati">Amravati</Option>
                    </Select> 
                   
                  </div>
                </div>
              </div>
            </div>
          

          {/* address */}

          <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2  p-3 justify-center ">
                <div className="lg:text-[20px] text-[18px] ">
                    <label htmlFor="img">Image of Book's</label><br />
                    <input
          type="file"
          name="img"
          onChange={handleFileChange}
          className="shadow-md w-60"
          accept="image/*"
          />
                  </div>
                  <div className="lg:text-[20px] text-[18px] mt-4 my-3 ">
                         
                  </div>

                  <div className="lg:text-[20px] text-[18px] mt-4 ">
                        <label htmlFor=""> No. of Book's</label>
                        <br />
                        <input
                          type="number"
                          required
                          name="noofbooks"
                          onChange={handleChange}
                          className="w-52 border border-black rounded ps-2 shadow-md"
                        />
                      </div>

                  <div className="lg:text-[20px] text-[18px] mt-4">
                    <label htmlFor=""> Price of Books</label>
                    <br />
                    <input
                      type="number"
                      required
                      name="price"
                      onChange={handleChange}
                      className="w-52 border border-black rounded ps-2 shadow-md"
                    />
                  </div>                     
     
              </div>
               
                    <center className="py-3">
                      <Link to="/store">
                        <Button className="bg-[#f05345] font-normal px-4 py-2  text-white lg:text-[18px] text-[14px]">
                          Cancel{" "}
                        </Button>
                      </Link>
                    
                     
                    
                      <Button
                        color="green"
                        type="submit"
                        className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 ms-2 lg:text-[18px] text-[14px]"
                      >
                        Submit
                      </Button>
                    
                   <div className="lg:text-[14px] text-[12px] py-3">
                        <span className="lg:text-[14px] text-[12px] text-center">For courier the books to us at :- G-5 Anand Rajani Apartment, IT park pin Code : 440022</span>
                       
                      </div>
                   </center>
          {/* <ToastContainer /> */}    

          </div> 
  
  </div> 
          </form>
  
  );
};


export default BookSellForm;