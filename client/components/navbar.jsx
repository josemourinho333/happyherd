import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi"

const NavBar = () => {

  return (
    <>
    <div className="bg-primary text-primary-content py-2 px-5 hidden lg:flex justify-end gap-2 font-light text-sm">
      <a href="/volunteer">Volunteer</a>
      |
      <a href="/contact">Contact</a>
    </div>
    <div id="navbar" className={`navbar bg-base-100/70 backdrop-blur-lg sticky top-0 p-0 h-[5vh] z-50`}>
      <div className="navbar-start w-full md:w-1/2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 py-2 px-7 shadow bg-base-100 w-screen inset-x-0 h-[50vh] overflow-y-auto flex-nowrap">
            <li className="border-b my-3"><a href="/donate" className="text-lg font-semibold">Donate</a></li>
            <li className="border-b my-3"><a href="/tour" className="text-lg font-semibold">Book a Tour</a></li>
            <li className="border-b my-3"><a href="/animals" className="text-lg font-semibold">Animals</a></li>
            <li className="border-b my-3"><a href="/volunteer" className="text-lg font-semibold">Volunteer</a></li>
            <li className="border-b my-3"><a href="/pigyoga" className="text-lg font-semibold">Pig Yoga</a></li>
            <li className="border-b my-3"><a href="/giftshop" className="text-lg font-semibold">Garth's Gift Shop</a></li>
            <li className="border-b my-3"><a href="/inlovingmemory" className="text-lg font-semibold">In Loving Memory</a></li>
            <li className="border-b my-3"><a href="/supporters" className="text-lg font-semibold">Supporters</a></li>
            <li className="border-b my-3"><a href="/contact" className="text-lg font-semibold">Contact</a></li>
          </ul>
        </div>
        <a href="/" className="py-[1rem] sm:px-5 flex flex-row gap-1 items-center">
          <img src="https://happyherd.org/wp-content/uploads/2022/12/New-TheHappyHerd-Logo.png" alt="happyherd-logo" className="w-[20%] sm:w-[10%]"/>
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight">The Happy Herd</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><a href="/animals">Animals</a></li>
          <li><a href="/pigyoga">Pig Yoga</a></li>
          <li><a href="/giftshop">Garth's Gift Shop</a></li>
          <li><a href="/inlovingmemory">In Loving Memory</a></li>
          <li><a href="/supporters">Supporters</a></li>
        </ul>
      </div>
      <div className="navbar-end py-[1rem] px-5 gap-2">
        <a className="btn btn-primary btn-sm normal-case hidden lg:flex">Book a Tour</a>
        <a className="btn btn-primary btn-sm normal-case hidden lg:flex">Donate</a>
      </div>
    </div>
    </>
  )
}

export default NavBar