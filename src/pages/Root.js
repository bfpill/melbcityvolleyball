import Navbar from "../components/Navbar.js";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
