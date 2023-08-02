import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
} from "@material-tailwind/react";


const TABLE_HEAD = ["Payment", "Type", "Date", "Amount"];

const TABLE_ROWS = [
  {
    payment: "UPI Payment",
    type: "Supplies",
    date: "23/04/23",
   amount:"2222.00"

  },

  
  {
    payment: "Cash Withdraw",
    type: "Marketing",
    date: "23/04/18",
   amount:"4572.00"

  },
  
  {
    payment: "Cash Withdraw",
    type: "Marketing",
    date: "23/04/18",
   amount:"4572.00"

  },
  {
    payment: "Cash Withdraw",
    type: "Marketing",
    date: "23/04/18",
   amount:"4572.00"

  },
  {
    payment: "Cash Withdraw",
    type: "Marketing",
    date: "23/04/18",
   amount:"4572.00"

  },
  {
    payment: "Cash Withdraw",
    type: "Marketing",
    date: "23/04/18",
   amount:"4572.00"

  }, {
    payment: "Cash Withdraw",
    type: "Marketing",
    date: "23/04/18",
   amount:"4572.00"

  }, {
    payment: "Cash Withdraw",
    type: "Marketing",
    date: "23/04/18",
   amount:"4572.00"

  },
  {
    payment: "UPI Payment",
    type: "Supplies",
    date: "23/04/23",
   amount:"2222.00"

  },
  {
    payment: "UPI Payment",
    type: "Supplies",
    date: "23/04/23",
   amount:"2222.00"

  },
  {
    payment: "UPI Payment",
    type: "Supplies",
    date: "23/04/23",
   amount:"2222.00"

  },
  
  
];        
const Atransaction = () => {
 
  return (
   
<>        

          {/* USER */}
            <div className=" h-12 hover:bg-[#388e3c] bg-[#2196f3] text-white rounded ms-2 mt-3 ">
              <p className="translate-y-1/2 ms-6 font-bold  text-center">Transaction </p>
            
            </div>
          <div className="  bg-[#F0ECEC]   pe-2 ps-2 ">

            <br />

            <Card className=" ">
              <div className=" overflow-scroll h-[80vh]">
              <table className="w-full rounded table-auto text-left ">
                <thead className="sticky top-0 " >
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
                  {TABLE_ROWS.map(({ payment,type, date,amount }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={payment}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {payment}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {type}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color=""
                            className="font-medium"
                          >
                            ₹ {amount}
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
export default Atransaction;
