import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
