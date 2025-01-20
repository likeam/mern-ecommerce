import { BsAppIndicator } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { GrDocumentStore } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <body className=" bg-slate-600">
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2    w-[300px] overflow-y-auto text-center bg-gray-900 ">
        <div className=" text-gray-100 text-xl ">
          <div className="p-2.5 mt-1 flex items-center ">
            <BsAppIndicator />
            <h1 className=" font-bold text-gray-200 text-[30px] ml-3">
              POS System
            </h1>
          </div>
          <hr className=" my-2 text-gray-600" />
        </div>
        <Link
          to="/"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600 text-white"
        >
          <IoHomeOutline />
          <span className=" text-[25px] ml-4 text-gray-200">Home</span>
        </Link>
        <Link
          to="/bills"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600 text-white"
        >
          <GrDocumentStore />
          <span className=" text-[25px] ml-4 text-gray-200">Bills</span>
        </Link>
        <Link
          to="/items"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600 text-white"
        >
          <GoTasklist />
          <span className=" text-[25px] ml-4 text-gray-200">Items</span>
        </Link>
        <Link
          to="/customers"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600 text-white"
        >
          <GoPerson />
          <span className=" text-[25px] ml-4 text-gray-200">Customers</span>
        </Link>
        <Link
          to="/logout"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600 text-white"
        >
          <AiOutlineLogin />
          <span className=" text-[25px] ml-4 text-gray-200">Logout</span>
        </Link>
      </div>
    </body>
  );
};

export default Sidebar;
