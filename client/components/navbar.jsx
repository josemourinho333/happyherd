import MenuItem from "./menuitem";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi"

const NavBar = () => {

  return (
    <>
      <div className="navbar bg-base-100 py-4 px-0 justify-center sticky top-0 z-[501] sm:px-[5rem] md:px-[6rem] lg:px-[12rem] sm:justify-between md:justify-between lg:justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li tabIndex={0}>
              <a className="items-center">
                Animals
                <FiChevronDown />
              </a>
              <ul className="p-2 bg-white">
                <li><a href="/rescuedanimals">Rescued Animals</a></li>
                <li><a href="/inlovingmemory">In Loving Memory</a></li>
              </ul>
            </li>
            <li tabIndex={1}>
              <a className="items-center">
                Support Us
                <FiChevronDown />
              </a>
              <ul className="p-2 bg-white">
                <li><a href="/sponsorananimal">Sponsor an Animal</a></li>
                <li><a href="/garthsgiftshop">Garth's Gift Shop</a></li>
                <li><a href="https://donate-can.keela.co/website-donate" target="_blank">Donate <HiOutlineExternalLink /></a></li>
                <li><a href="/supporters">Supporters</a></li>
              </ul>
            </li>
            <li><a className="/pigyoga">Pig Yoga</a></li>
            <li><a className="/volunteer">Volunteer</a></li>
            <li><a className="/contact">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost p-0" href="/">
          <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="logo" className="logo-img w-[125px]" />
        </a>
      </div>
      <div className="navbar-end hidden text-md lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <a className="items-center">
              Animals
              <FiChevronDown />
            </a>
            <ul className="p-2 bg-white shadow-xl">
              <li><a href="/rescuedanimals">Rescued Animals</a></li>
              <li><a href="/inlovingmemory">In Loving Memory</a></li>
            </ul>
          </li>
          <li tabIndex={1}>
            <a className="items-center">
              Support Us
              <FiChevronDown />
            </a>
            <ul className="p-2 bg-white shadow-xl">
              <li><a href="/sponsorananimal">Sponsor an Animal</a></li>
              <li><a href="/garthsgiftshop">Garth's Gift Shop</a></li>
              <li><a href="https://donate-can.keela.co/website-donate" target="_blank">Donate <HiOutlineExternalLink/></a></li>
              <li><a href="/supporters">Supporters</a></li>
            </ul>
          </li>
          <li><a href="/pigyoga">Pig Yoga</a></li>
          <li><a href="/volunteer">Volunteer</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end max-w-max ml-2">
        <a className="btn btn-sm btn-neutral mr-1 sm:btn-sm md:btn-sm lg:btn-sm">Book a tour</a>
        <a className="btn btn-sm btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Donate</a>
      </div>
    </div>

    
    {/* <nav className="flex justify-between items-center bg-[#fff] sticky top-0 z-[500] px-[12rem]">
        <div className="logo w-[9%] py-2">
          <a href="/">
            <img src="https://happyherd.org/wp-content/uploads/2022/10/hh-logo.png" alt="logo" className="logo-img w-full" />
            <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="logo" className="logo-img w-full" />
          </a>
        </div>
        <div className="flex items-center text-neutral">
          <ul className="flex text-sm">
            <MenuItem 
              name="Animals" 
              subMenu={["Rescued Animals", "In Loving Memory"]} 
            />
            <MenuItem
              name="Support Us" 
              subMenu={["Sponsor an Animal", "Garths Gift Shop", "Donate", "Supporters"]}
            />
            <MenuItem 
              name="Pig Yoga" 
              subMenu={null}
            />
            <MenuItem
              name="Volunteer" 
              subMenu={null}
            />
            <MenuItem
              name="Contact" 
              subMenu={null}
            />
          </ul>
          <button className="btn btn-neutral ml-1 sm:btn-sm md:btn-sm lg:btn-sm">
            Book a Tour
          </button>
          <button className="btn btn-primary ml-4 sm:btn-sm md:btn-sm lg:btn-sm">
            Donate
          </button>
      </div>
    </nav> */}
    </>

  )
}

export default NavBar