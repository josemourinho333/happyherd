import { FiChevronDown } from "react-icons/fi"
import { useRef, useEffect } from 'react'

const MenuItem = ({ name, subMenu}) => {

  useEffect(() => {
    const clickEvent = (e) => {
      const isDropdownBtn = e.target.matches("[data-dropdown-button]")
      if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) {
        return
      }

      let currentDropdown
      if (isDropdownBtn) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active')
      }

      document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
      })
    }

    document?.addEventListener('click', clickEvent);

    return () => {
      document?.removeEventListener('click', clickEvent);
    }
  }, [])

  // no child menu items
  if (!subMenu) {
    const link = name.toLowerCase()

    return (
      <li className="pr-5">
        <a href={`/${link}`} className="flex menu-item items-center">
          {name}
        </a>
      </li>
    )
  }

  // loop over child menu items and display it with dropdown
  const subMenuItems = subMenu?.map((item, index) => {
    const link = item.split(' ').join('').toLowerCase();
    return (
      <a key={index} href={`/${link}`} className="py-2 px-1 hover:text-black">
        {item}
      </a>
    )
  })

  return (
    <li className="pr-5 dropdown relative" data-dropdown>
      <button className="dropdown-menu menu-item flex items-center" data-dropdown-button>
        {name}
        <FiChevronDown className="mt-1 ml-1 dropdown-arrow"/>
      </button>
      <div className="sub-menu absolute left-0 top-[calc(100%_+_0.25rem)] bg-white p-[0.75rem] rounded-lg shadow-lg flex flex-col min-w-max items-start text-slate-800">
        {subMenuItems}
      </div>
    </li>
  )
}

export default MenuItem;