import { useState } from "react";
import { trash2 } from "react-icons-kit/feather/trash2";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
} from "@material-tailwind/react";
import Icon from "react-icons-kit";
import { BsTrash2 } from "react-icons/bs";


const TABLE_HEAD = ["Profile", "Message", "Reply", "Action"];

const TABLE_ROWS = [
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  },

  
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  },
  
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  },
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  },
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  },
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  }, 
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  }, 
  {
    Profile:'./Cool.png',
    Message: "At Udyam, we understand and appreciate the importance of physical activity",
    Reply: "Reply",
    Action:<Icon icon={trash2} />
  },
  
  
  
];      

export default function FeedbackMiddle(){

    return(
        <>
        
        <div className=" h-12 hover:bg-[#388e3c] ms-2 bg-[#2196f3] text-white mt-3 rounded  ">
              <p className="translate-y-1/2  font-bold text-center ">Feedback </p>
            
            </div>

          {/* USER */}
       
          <div className="  bg-[#F0ECEC]   pe-2 ps-2 ">
          <Card className=" ">
              <div className=" overflow-scroll h-[75vh]">
              <table className="w-full rounded table-auto text-center">
                <thead className="sticky top-0" >
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
                  {TABLE_ROWS.map(({ Profile,Message, Reply,Action }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50 text-center";

                    return (
                      <tr key={Profile}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold "
                          >
                        <img src={Profile}  className="w-10 h-10 border-1 rounded-full" alt="profile" />
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {Message}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="bg-[#81A356]  rounded-[10px]  text-white  text-bold"
                          >
                           <button className=" text-white p-2">{Reply} </button> 
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color=""
                            className="font-medium"
                          >
                           
                        <button> {Action}</button>
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </Card>

            <br />

           
          </div>
        </>
    )
}