import { useState } from "react";
import { Link } from "react-router-dom";
import Mnavbar from "../components/Admin/mnavbar";
import Setting from "../components/Admin/setting";




const Settingm = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "./adminsidebar/dash.png", to: "" },
    { title: "Books", src: "./adminsidebar/books.png", to: "" },
    { title: "Orders", src: "./adminsidebar/order.png", to: "/amorder" },
    {
      title: "Transactions",
      src: "./adminsidebar/transaction.png",
      to: "/amtransaction",
    },
    { title: "Blog", src: "./adminsidebar/blog.png", to: "" },
    { title: "Feedback", src: "./adminsidebar/feedback.png", to: "" },
    { title: "Setting", src: "./adminsidebar/setting.png", to: "/" },
    { title: "Log out", src: "./adminsidebar/log out.png", to: "/" },
  ];

  return (
      <div className="2xl:container mx-auto">
      <Mnavbar />
      <div
        className={`${
          open
            ? "  xl:w-64 w-10 max-h-full pb-32  top-24  fixed text-white  2xl:text-black bg-[#2196f3] rounded"
            : "w-10 max-h-full lg:w-10 pb-44 xl:w-12 md:10 sm:text-white  2xl:text-black top-24  sm:w-10 fixed  bg-[#2196f3] rounded"
        } `}
        id="main"
      >
        <img
          src="./sidebar/b.png"
          alt="control"
          className={`cursor-pointer w-12 border-dark-purple border-none ${
            !open && "w-12 rotate-180"
          }`}
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
        <ul className="bg-[#2196f3]">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.to}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-[#388e3c] hover:text-white text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <img src={Menu.src} className="w-6" alt="asset" />
              <span className={`${!open && "hidden"} origin-center duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>

        <div className={`mt-10 ${!open ? "hidden" : ""}`}>
          {/* Add your additional content here */}
          {/* <h2 className="text-white text-lg px-4">Additional Content</h2> */}
          {/* Add more components or elements as needed */}
        </div>
      </div>
      <div
        className={`${
          open
            ? "xl:pl-64 pl-10 transition-all duration-200"
            : "pl-10 xl:pl-14 transition-all duration-200"
        }`}
      >
        <Setting/>
      </div>
    </div>
    
  
  );
};

export default Settingm;
