import React from "react";
import {
  Rating,
  Stepper,
  Step,
  Button,
  Typography,
} from "@material-tailwind/react";

const Orderdetails = () => {
  const [activeStep, setActiveStep] = React.useState(2);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(true);


  return (
    <>
      <div className="container">
        <div className="bg-[white]   p-2 shadow lg:mx-5 ">
          <div className="grid  w-full shadow bg-white rounded border ">
            <div
              className="grid-cols-1 "
              style={{ backgroundColor: "#81A356" }}
            >
              <p
                className="d-flex mx-5 my-auto text-lg  p-2 text-start text-white"
                style={{ Color: "#000000" }}
              >
                {" "}
                Delivered Order details{" "}
              </p>
            </div>
          </div>
          <div className="bg-[#E4E4E4] lg:my-6 grid lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 grid-cols-1">
            <div className=" ">
              <div className="lg:text-[20px] bg-[white] text-[16] m-2  sm:p-3  md:p-6 lg:p-6 xl:p-6 2xl:p-6 leading-9">
                <p>Order ID : 507712</p>
                <p>
                  Mode Of Payments :{" "}
                  <span className="text-[green]">Cash On Delivery</span>
                </p>
              </div>
              <div className="lg:text-[20px] bg-[white] shadow  text-[16] m-2 sm:p-3  md:p-6 lg:p-6 xl:p-6 2xl:p-6 leading-9 flex gap-2">
                <img
                  src="./Buyerimages/eva_phone-call-fill.png"
                  alt=""
                  width={30}
                />
                <p>
                  Support Service : <span> 0552-0505-8221</span>{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="shadow-md p-2  leading-10 lg:text-[20px]    text-[13px] m-2  bg-[white]">
                <h1 className="text-center md:text-[22px] font-semibold text-[18px] my-2 mb-2">
                  Order Details
                </h1>
                <p className="flex justify-around lg:text-[22px] text-[16px] mt-2">
                  <span> Price Details (3 items) &emsp; </span>
                  <span>₹ 637 /-</span>
                </p>
                <p className="flex justify-around  pb-2 lg:text-[22px] text-[16px]">
                  <span>Shipping Charges &emsp; </span>
                  <span className="text-[green]">Free*</span>
                </p>
                <hr />

                <p className="flex justify-around lg:text-[22px] py-3   text-[16px]">
                  <span>Order Total &emsp; :-</span>
                  <span>₹ 637/-</span>
                </p>
              </div>
            </div>

            <div className="lg:my-6 ">
              <div className="lg:text-[20px] bg-[white] text-[16] m-2  sm:p-3 shadow md:p-6 lg:p-6 xl:p-6 2xl:p-6 ">
                <h3 className="p-3">Product Details</h3>

                <div className="w-full h-64 overflow-auto touch-auto my-4">
                <div className="flex justify-normal py-3 gap-3">
                  <img src="./IMG1.jpg" className="w-24" alt="" />
                  <div>
                    <p className="text-[17px]">
                      Ikigai: The Japanese secret to a long and happy life
                      [Hardcover] García, Héctor and Miralles, Francesc
                    </p>
                    <p>
                      Amt : <span> ₹212 </span>
                      <span>
                        Qty : <span>1</span>
                      </span>
                    </p>
                  </div>
                </div>
                {/* second */}
                <div className="flex justify-normal py-3 gap-3">
                  <img src="./IMG2.jpg" className="w-24" alt="" />
                  <div>
                    <p className="text-[17px]">
                      SSC General studies Theory Book Based on Latest TCS
                      Pattern Chapter wise English Medium
                    </p>
                    <p>
                      Amt : <span> ₹200 </span>
                      <span>
                        Qty : <span>1</span>
                      </span>
                    </p>
                  </div>
                </div>
                {/* third */}
                <div className="flex justify-normal py-3 gap-3">
                  <img src="./IMG3.jpg" className="w-24" alt="" />
                  <div>
                    <p className="text-[17px]">Word Power root Words</p>
                    <p>
                      Amt : <span> ₹225 </span>
                      <span>
                        Qty : <span>1</span>
                      </span>
                    </p>
                  </div>
                </div>
                </div>

                <hr />
                <div>
                  <p>How was the product?</p>

                  <div className="">
                    <Rating
                      unratedColor="green"
                      className="text-[40px] "
                      ratedColor="green"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="my-7 px-2">
              <div className="bg-[white]  p-6 shadow ">
                <div className=" flex items-center justify-center   gap-1 py-2">
                  <h3 className="lg:text-[22px] max-text-[22px]  text-[16px]">
                    Delivery Address
                  </h3>
                </div>
                <hr />
                <div className="py-2 leading-8 lg:ps-3">
                  <p className="lg:text-[18px] text-[14px]">Sahil Rangari</p>
                  <p className="lg:text-[18px] text-[14px]">
                    {" "}
                    plot No. 201, Hingna road nagpur, <br /> Maharashtra-440016
                  </p>
                  <p className="lg:text-[18px] text-[14px]">
                    {" "}
                    Contact No. 9030520480
                  </p>
                </div>
              </div>

              <div className="bg-[white] my-3 p-6 shadow ">
                <div className="">
                  <h3 className="text-[20px]">Order Tracking</h3>
                </div>

                {/* stepper */}
                <div>
                  <div className="w-full  py-20 px-8 ">
                    <Stepper
                      activeStep={activeStep}
                      isLastStep={(value) => setIsLastStep(value)}
                      isFirstStep={(value) => setIsFirstStep(value)}
                    >
                      <Step onClick={() => setActiveStep(0)}>
                        <div className="h-auto w-auto" />
                        <div className="absolute -bottom-[3.5rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 0 ? "green" : "green"}
                          >
                            Order placed
                          </Typography>
                          <Typography
                            color={activeStep === 0 ? "green" : "green"}
                            className="font-normal text-[12px]"
                          >
                            ( 12 July, 2023)
                          </Typography>
                        </div>
                      </Step>
                      <Step >
                        <div className="h-auto w-auto" />
                        <div className="absolute -bottom-[3.5rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 1 ? "green" : "green"}
                          >
                            Order Shipped
                          </Typography>
                          <Typography
                            color={activeStep === 1 ? "green" : "green"}
                            className="font-normal text-[12px]"
                          >
                           (13 July, 2023)
                          </Typography>
                        </div>
                      </Step>
                      <Step onClick={() => setActiveStep(2)}>
                        <div className="h-auto w-auto" />
                        <div className="absolute -bottom-[4.5rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 2 ? "green" : "green"}
                          >
                            Order Delivered
                          </Typography>
                          <Typography
                            color={activeStep === 2 ? "green" : "green"}
                            className="font-normal text-[12px]"
                          >
                            Your item has been delivered <br />
 15 July, 2023
                          </Typography>
                        </div>
                      </Step>
                    </Stepper>
                   
                  </div>
                </div>





              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderdetails;
