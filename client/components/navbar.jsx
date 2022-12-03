import MenuItem from "./menuitem";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi"

const NavBar = () => {

  return (
    <div className="navbar bg-base-100/70 backdrop-blur-lg sticky top-0 p-0 h-[10vh] z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 py-2 px-7 shadow bg-base-100 w-screen inset-x-0 h-[50vh] overflow-y-auto flex-nowrap">
            <li className="border-b my-3"><a className="text-lg font-semibold">Book a Tour</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Rescued Animals</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">In Loving Memory</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Sponsor an Animal</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Garth's Gift Shop</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Donate</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Pig Yoga</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Volunteer</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Contact</a></li>
            <li className="border-b my-3"><a className="text-lg font-semibold">Supporters</a></li>
          </ul>
        </div>
        <a href="/" className="w-1/4 p-[1rem]">
          <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="happyherd-logo" className="w-full"/>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
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
      <div className="navbar-end p-[1rem]">
        <a className="btn btn-primary btn-sm mx-1 normal-case hidden lg:flex">Book a Tour</a>
        <a className="btn btn-primary btn-sm normal-case">Donate</a>
      </div>
    </div>
  )
}

export default NavBar