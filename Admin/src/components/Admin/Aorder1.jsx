import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
} from "@material-tailwind/react";


const TABLE_HEAD = ["Order Id", "Name", "Quantity", "Price"];

const TABLE_ROWS = [
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },
  {
    Orderid:51841,
    Name: "Sammer",
    Quantity: 4,
   Price:"2222.00"

  },

  
  
  
  
];        
const Aorder = () => {
 
  return (
   
<>         <div className=" h-12 hover:bg-[#388e3c] ms-2 bg-[#2196f3] mt-3  text-white rounded    ">
              <p className="translate-y-1/2 ms-6 font-bold text-center  ">Order Submmary </p>
            
            </div>

          {/* USER */}
          <div className="  bg-[#F0ECEC]   pe-2 ps-2  ">
  

            

            <Card className=" ">
              <div className="overflow-scroll h-[80vh] ">
              <table className="w-full  table-auto text-left ">
                <thead className="sticky top-0  ">
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-3"
                      >
                        <Typography
                          variant=""
                          color="blue-gray"
                          className="font-bold "
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ Orderid,Name,Quantity,Price }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={Orderid}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {Orderid}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {Name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {Quantity}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color=""
                            className="font-medium"
                          >
                            ₹ {Price}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </Card>
          </div>
       
          </>
   
  );
};
export default Aorder;

