import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"
const Navbar = () => {
  const location = useLocation()
  return (
    <nav className=" w-full">
      <div className="py-2 flex px-24 justify-between text-white font-semibold items-center w-full bg-dark-green">
       <div className=" flex items-center gap-8">
       <span className="">555-0198</span>
       <span>123 Maple Street, Springfield, IL 62701</span>
       </div>
       <div>
        <span>Monday-Saturday: 9 am - 11:30 pm</span>
       </div>
        </div> 
        <div className=" bg-white px-16 flex justify-between items-center">
            <img className="w-40" src={logo} alt="" />
            <div className="flex gap-8 text-xl font-semibold">
                <Link className={`hover:text-dark-green transition-all duration-300 ${location.pathname == "/"? " text-dark-green" : "text-black"}`} to={"/"}>Home</Link>
                <Link className={`hover:text-dark-green transition-all duration-300 ${location.pathname == "/shop"? " text-dark-green" : "text-black"}`} to={"/shop"}>Shop</Link>
                <Link className={`hover:text-dark-green transition-all duration-300 ${location.pathname == "/doctors"? " text-dark-green" : "text-black"}`} to={"/doctors"}>Doctors</Link>
                <Link className={`hover:text-dark-green transition-all duration-300 ${location.pathname == "/appointments"? " text-dark-green" : "text-black"}`} to={"/appointments"}>Appointments</Link>
                <Link className={`hover:text-dark-green transition-all duration-300 ${location.pathname == "/about"? " text-dark-green" : "text-black"}`} to={"/about"}>About</Link>
                <Link className={`hover:text-dark-green transition-all duration-300 ${location.pathname == "/contact"? " text-dark-green" : "text-black"}`} to={"/contact"}>Contact</Link>
                <Link className={`hover:text-dark-green transition-all duration-300 ${location.pathname == "/cart"? " text-dark-green" : "text-black"}`} to={"/cart"}>Cart (0)</Link>
            </div>
            <div className="flex items-center gap-4">
                <Link to={"/login"} className="bg-dark-green px-4 py-2 text-white rounded-md">Login</Link>
                <Link to={"/register"} className="bg-dark-green px-4 py-2 text-white rounded-md">Register</Link>
            </div>
            </div> 
    </nav>
  )
}

export default Navbar