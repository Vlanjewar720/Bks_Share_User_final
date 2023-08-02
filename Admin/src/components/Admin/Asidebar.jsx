import { useState } from "react";
import { Link } from "react-router-dom";

const Asidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: " Dashboard", src: "./adminsidebar/dash.png", to: "" },
    { title: " Books", src: "./adminsidebar/books.png", to: "" },
    { title: "Orders", src: "./adminsidebar/order.png", to: "/amorder" },
    {
      title: "Transactions",
      src: "./adminsidebar/transaction.png",
      to: "/amtransaction",
    },
    { title: "Blog", src: "./adminsidebar/blog.png", to: "" },
    { title: "Feedback", src: "./adminsidebar/feedback.png", to: "" },
    { title: "Setting", src: "./adminsidebar/setting.png", to: "/settingm" },
    { title: "Log out", src: "./adminsidebar/log out.png", to: "" },
  ];

  return (
    <>
      <div
        className={`${
          open
            ? "xl:w-72   w-30 h-[78vmin] fixed  bg-[#2196f3] rounded"
            : "w-  h-[78vmin] lg:w-10 xl:w-10 md:w-10 sm:w-10  fixed  bg-[#2196f3] rounded"
        } `}
        id="main"
      >
        <img
          src="./sidebar/b.png"
          alt="control"
          className={` cursor-pointer  w-12    border-dark-purple
                          border-none  ${!open   && " w-12   rotate-180 "}`}
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
        <ul className="     bg-[#2196f3]">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.to}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#388e3c] hover:text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img
                src={Menu.src}
                className="w-6  "
                alt="asset"
              />
              <span
                className={`${!open && "hidden"}  origin-center duration-200 `}
              >
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Asidebar;
