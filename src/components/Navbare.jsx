import { useState, useEffect, useRef } from "react";
import "./Navbare.css";
import logo from "../../public/images/logo.png";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` navbare w-full text-white fixed top-0 left-0 right-0 z-1000 flex items-center justify-around transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: "1px" }}
    >
      <img className="logo" width={80} src={logo}></img>
      <nav>
        <ul className="flex gap-4 list-none">
          <li className="bg-gray-700 px-4 py-2 rounded-md">Menu</li>
          <li className="bg-gray-700 px-4 py-2 rounded-md">Fine Dining</li>
          <li className="bg-gray-700 px-4 py-2 rounded-md">About</li>
          <li className="bg-gray-700 px-4 py-2 rounded-md">Contact</li>
        </ul>
      </nav>
      <div className="reservation  Reservation" >Reservation </div>
    </header>
  );
}

