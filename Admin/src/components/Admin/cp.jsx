import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Cpass() {
    return (  
     
    <>
      <div className="  bg-[#F0ECEC] w-full  h-screen  pt-20    ">
      <Card color="transparent " className="w-[27vmax]  mx-auto  shadow-inner shadow-blue-gray-700 border p-2" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center p-4">
          Change password
        </Typography>
        {/* <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography> */}
        <form className=" pb-16 w-full grid  ">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="" label="Old Password" />
            <Input size="" label="New Password" />
            <Input type="password" size="" label="Confirm Password" />
          </div>
          <div className="flex justify-around ">          <Button className="mt-6  hover:bg-[#388e3c]" >
            Submit
          </Button>
          <Button className="mt-6  hover:bg-[#388e3c]" >
            Clear
          </Button>
          </div>

        </form>
      </Card>
      </div>
      </>
   )
  }