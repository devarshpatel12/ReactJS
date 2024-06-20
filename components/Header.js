
// import { LOGO_URL } from "../utils/constants";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from '../utils/useOnlineStatus';
// const Header = () => {
//   const [btnname,setbtnname]=useState("Login");
//    const onlineStatus=useOnlineStatus();
//     return (
//       <div className="flex justify-between bg-pink-100  shadow-lg m-2 ">
//         <div className="logo-container  ">
//           <img
//           src= {LOGO_URL}
//             alt="App Logo"
//             className="w-56 "
//           />
//         </div>
//         <div className="flex items-center ">
//           <ul className="flex p-4 m-4">
//            <li className="px-4">
//            Online Status:{ onlineStatus ? '✅' : '🔴'  }
//            </li>
//             <li className="px-4"><Link to="/">Home</Link></li>
//             <li className="px-4"><Link to="/about">About Us</Link></li>
//             <li className="px-4"><Link to="/contact">Contact Us</Link> </li>
//             <li className="px-4">Cart</li>
//             <button className="login-btn" onClick={()=>{
//               btnname=="Login"?
//               setbtnname("Logout"):setbtnname("Login");
//               console.log(btnname);
//             }}>{btnname}</button>
//           </ul>
//         </div>
//       </div>
//     );
//   };
//   export default Header; 
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  const onlineStatus = useOnlineStatus();
 const {loggedInUser}=useContext(UserContext);
 const cartItems=useSelector((store)=>store.cart.items);
 console.log(cartItems)

  return (
    <div className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6"> {/* Adjusted padding */}
        <div className="flex items-center">
          <img src={LOGO_URL} alt="App Logo" className="w-12 h-12 rounded-full mr-4" />
          <span className="text-lg font-semibold">Foodie Delight</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="px-4">{onlineStatus ? '✅' : '🔴'} Online</span>
          <Link to="/" className="px-4 hover:text-blue-300">Home</Link>
          <Link to="/menu" className="px-4 hover:text-blue-300">Menu</Link>
          <Link to="/about" className="px-4 hover:text-blue-300">About Us</Link>
          <Link to="/cart" className="px-4 hover:text-blue-300">Cart-({cartItems.length})</Link>
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={() => {
            setbtnname(btnname === "Login" ? "Logout" : "Login");
          }}>{btnname}</button>
            <div className="">{loggedInUser}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

