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
const Afeedback = () => {
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
       
      </div>


  );
};
export default Afeedback;
