import React from 'react';
import Link from './Link';

const navigationsData = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]

const Navbar = () => {
    return (
        <div>

        {/* Dynamic Navbar by passing data as props to another file */}
            <nav>
                <ul className='flex'>
                    {
                        navigationsData.map(route => <Link route={route}></Link>)
                    }
                </ul>
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