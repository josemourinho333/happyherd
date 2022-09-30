import MenuItem from "./menuitem"

const NavBar = () => {

  return (
    <nav className="flex flex-col">
      <div className="flex justify-between items-center px-10 py-5">
        <div className="logo w-1/12">
          <a href="/">
            <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="logo" className="logo-img w-full" />
          </a>
        </div>
        <button className="bg-slate-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-900">Book a Tour</button>
      </div>
      <div className="bg-slate-800 text-slate-200 px-10 py-3">
        <ul className="flex text-xs">
          <MenuItem 
            name="Animals" 
            subMenu={["Rescued Animals", "In Loving Memory"]} 
          />
          <MenuItem 
            name="News & Events" 
            subMenu={["Pig Yoga", "Featured In"]}
          />
          <MenuItem
            name="Support Us" 
            subMenu={["Sponsor an Animal", "Garths Gift Shop", "Donate", "Supporters"]}
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
      </div>
    </nav>
  )
}

export default NavBar