import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationsData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationsData.map((route) => <Link route={route}></Link>);

  return (
    <div>
      {/* Dynamic Navbar by passing data as props to another file */}
      <nav className="flex justify-between mx-10">
        <span className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
          <ul className={`md:hidden absolute ${open? 'top-8': '-top-35'} duration-1000 z-10`}>
            {links}
          </ul>
          <h2 className="ml-4">Navbar</h2>
        </span>
        <ul className="md:flex hidden">{links}</ul>
        <button>Sign Up</button>
      </nav>

      {/* //Dynamic Navbar
        <nav>
            <ul className='flex'>
                {
                    navigationsData.map(route => <li className='mr-10'>{route.name}</li>)
                }
            </ul>
        </nav> */}

      {/* Manual Navbar */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Blog</a></li>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/">About Us</a></li>
                <li className='mr-10'><a href="/">Services</a></li>
                <li className='mr-10'><a href="/">Contact</a></li>
            </ul> */}
    </div>
  );
};

export default Navbar;
