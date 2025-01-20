import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Item from "./pages/Item";
import Sidebar from "./components/Sidebar";
import Bills from "./pages/Bills";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<Item />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
