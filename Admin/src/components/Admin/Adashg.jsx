import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
} from "@material-tailwind/react";
// import Example from "./Navbar";
import Adminnavbar from "./Navbaradmin";
import Mnavbar from "./mnavbar";

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
  
  
];
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: " Dashboard", src: "./adminsidebar/dash.png", to: "/userprofile" },
    { title: " Books", src: "./adminsidebar/books.png", to: "/sidebar" },
    { title: "Orders", src: "./adminsidebar/order.png", to: "" },
    { title: "Transactions", src: "./adminsidebar/transaction.png", to: "" },
    { title: "Blog", src: "./adminsidebar/blog.png", to: "" },
    { title: "Feedback", src: "./adminsidebar/feedback.png", to: "" },
    { title: "Setting", src: "./adminsidebar/setting.png", to: "" },
    { title: "Log out", src: "./adminsidebar/log out.png", to: "" },
  ];

  const placeholderStyle = {
    fontSize: "16px", // Change the font size
    // Add any other desired styles
  };

  return (
    
      <div className="mx-auto 2xl:container ">
        <Mnavbar />
        <div className=" flex">
          <div
            className={`${
              open
                ? "xl:w-72  w-10 h-[78vmin]"
                : "w-24  h-[78vmin] lg:w-10 xl:w-10 md:w-10 sm:w-10"
            } `}
            id="main"
          >
            <img
              src="./sidebar/b.png"
              alt="control"
              className={` cursor-pointer  w-12  float-right border-dark-purple
                          border-none  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                <br />
              </h1>
            </div>
            <ul className="pt-9 sm:mt-8  ">
              {Menus.map((Menu, index) => (
                <Link
                  to={Menu.to}
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-green-700 hover:text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  <img src={Menu.src} className="w-6  hover:text-white"  alt="asset" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-center duration-200 `}
                  >
                    {Menu.title}
                  </span>
                </Link>
              ))}
            </ul>
          </div>

          {/* USER */}
          <div className="  bg-[#F0ECEC] w-full max-h-fit p-4 ">
            <div className="w-full h-12 bg-[#587dbd] text-white rounded  ">
              <p className="translate-y-1/2 ms-6 font-bold ">Transaction </p>
              <img src="" alt="" />
            </div>

            <br />

            <Card className=" ">
              <table className=" min-w-auto table-auto text-left ">
                <thead >
                  <tr >
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant=""
                          color="blue-gray"
                          className="font-bold leading-none "
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
            </Card>
          </div>
        </div>
      </div>


  );
};
export default Sidebar;
