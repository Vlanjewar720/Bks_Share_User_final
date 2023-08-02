import { MdGpsFixed } from "react-icons/md";
import { Select, Option, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Address = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Your data submitted Succefully ! ",{
      position: toast.POSITION.BOTTOM_CENTER
    },
    );
};
  return (
    <>
    <div className="container max-w-2xl border-spacing-2 border rounded-md  mt-3 p-4 shadow bg-[#FFEADD]">
      <div className="p-10 lg:rounded-lg border  border-black">
        <form action="" onSubmit={handleSubmit} >
        <div className="pb-6 flex items-center">
        <img src="./logo1.png" className="lg:w-16 w-11 h-11 lg:h-16 -m-2" alt="" />
        <h2 className=" lg:p-4  lg:text-[28px] md:text-[24px] ms-8 lg:ms-20 text-[20px]">
        Add a New Address{" "}
        
        </h2>
      </div>
         <Link to="https://www.google.com/maps/dir//Axiom+TechGuru+Pvt.+Ltd.,+IT+Park+Rd,+Opposite+Shree+Dutt+Mandir,+Subhash+Nagar,+Trimurtee+Nagar,+Nagpur,+Maharashtra+440022/@21.1160151,79.0462581,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bd4bf469f911b75:0x75644cb26344efc9!2m2!1d79.0464593!2d21.115921?entry=ttu">
          <div  className="flex bg-[#81A356] my-2 p-2 w-56 rounded-md  text-white ">
            <MdGpsFixed className="me-3 mt-1 "  /> Use my current Location
          </div>
          </Link>
          <div
            action=""
            className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6"
          >
            <div className="lg:text-[20px] text-[18px]">
              <label htmlFor="">
                Full Name <br />
              </label>
              <input
                type="text"
                id=""
                className="w-full border border-black rounded ps-2 "
              />
            </div>

            <div className="lg:text-[20px] text-[18px]">
              <label htmlFor="">
                Mobile No. <br />
              </label>
              <input
                type="text"
                maxLength={10}
                className="w-full border border-black rounded ps-2 "
              />
            </div>
            <div className="lg:text-[20px] text-[18px]">
              <label htmlFor="">
                Pincode <br />
              </label>
              <input
                type="text"
                maxLength={6}
                className="w-full border border-black rounded ps-2 "
              />
            </div>

            <div className="lg:text-[20px] text-[18px]">
              <label htmlFor="">
                Locality <br />
              </label>
              <input
                type="text"
                className="w-full border border-black rounded ps-2 "
              />
            </div>
          </div>

          <div className="lg:text-[20px] text-[18px] mt-2">
            <label htmlFor="">Address (Area And Street )</label>
            <textarea
              name=""
              id=""
              cols=""
              rows="6"
              className="w-full grid lg:grid-cols-1 grid-cols-1 border border-black rounded ps-2"
            ></textarea>
          </div>

          <div
            action=""
            className="grid lg:grid-cols-2 mt-2 md:grid-cols-2 grid-cols-1 gap-6"
          >
            <div className="lg:text-[20px] text-[18px] ">
              <label htmlFor="">
                City/District/Town
                <br />
              </label>
              <input
                type="text"
                className="w-full border border-black rounded ps-2 "
              />
            </div>

            <div className="lg:text-[20px] text-[18px]">
              <label htmlFor="">State </label>
              <div className="flex w-full flex-col gap-6">
                <Select
                 
                  color="black"
                  className="  border rounded bg-white border-black"
                >
                  <Option>Nagpur </Option>
                  <Option>Wardha </Option>
                  <Option>Yavatmal </Option>
                  <Option>Nashik </Option>
                  <Option>Amaravati </Option>
                </Select>
              </div>
            </div>
            <div className="lg:text-[20px] text-[18px]">
              <label htmlFor="">
                Landmark (Optional) <br />
              </label>
              <input
                type="text"
                className="w-full border border-black rounded ps-2 "
              />
            </div>

            <div className="lg:text-[20px] text-[18px]">
              <label htmlFor="">
                Alternate Mob. No. <br />
              </label>
              <input
                type="text"
                className="w-full border border-black rounded ps-2 "
              />
            </div>
            <div className="lg:text-[20px] text-[18px]">
              <h2 className="font-bold pb-3">Address Type</h2>
              <input
                type="radio"
                className="lg:text-[20px] text-[12px] lg:mt-2"
                name="ggg"
              />{" "}
              Home All Day Delivery
            </div>
            <div className="lg:text-[20px] text-[18px] lg:mt-10">
              <input
                type="radio"
                className="lg:text-[20px] text-[18px]"
                name="ggg"
              />{" "}
              Work ( <span className="text-[17px]">Delivery Between 10 Am - 5 Pm</span> )
            </div>
          </div>

          <div className="py-5 grid xl:grid-cols-2 grid-cols-1 gap-2 ">
            <Button
            type="submit"
              className="bg-[#81A356] h-12  lg:text-[15px] text-[14px] w-full leading-4"
              color="green"
            >
              Save and Deliver Here
            </Button>
            <Link to="/cart">
            <Button
            
              variant="outlined"
              className=" border-black text-[red] h-12  lg:text-[15px] w-full  text-[14px]  leading-4 "
              color="red"
            >
              Cancel
              {" "}
            </Button>
            </Link>
          </div>
          <ToastContainer/>
        </form>
      </div>
      </div>
    </>
  );
};

export default Address;