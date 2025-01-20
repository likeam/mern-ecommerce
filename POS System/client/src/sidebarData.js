import { BsAppIndicator } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { GrDocumentStore } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";

const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <IoHomeOutline />,
  },
  {
    title: "Bills",
    path: "/bills",
    icon: <GrDocumentStore />,
  },
  {
    title: "Items",
    path: "/items",
    icon: <GoTasklist />,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <GoPerson />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiOutlineLogin />,
  },
];

export default sidebarData;
