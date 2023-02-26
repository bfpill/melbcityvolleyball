import Navbar from "../components/Navbar.js";
import { Outlet} from "react-router-dom";
import Footer from "../components/Footer.js";

function Root() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default Root;
