import { FiChevronDown } from "react-icons/fi"
import { useRef, useEffect } from 'react'

const MenuItem = ({ name, subMenu}) => {

  useEffect(() => {
    const clickEvent = (e) => {
      const isDropdownBtn = e.target.matches("[data-dropdown-button]");

      // clicking inside while expanded won't do anything
      if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) {
        return;
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
    
    if (link.includes(' ')) {
      const replaceSpace = link.replace(' ', '');

      return (
        <li className="pr-5">
        <a href={`/${replaceSpace}`} className="flex menu-item items-center hover:text-primary">
          {name}
        </a>
      </li>
      )
    } else {
      return (
        <li className="pr-5">
          <a href={`/${link}`} className="flex menu-item items-center hover:text-primary">
            {name}
          </a>
        </li>
      )
    }
  }

  // loop over child menu items and display it with dropdown
  const subMenuItems = subMenu?.map((item, index) => {
    const link = item.split(' ').join('').toLowerCase();
    return (
      <a key={index} href={`/${link}`} className="py-2 px-1 hover:text-primary">
        {item}
      </a>
    )
  })

  return (
    <li className="pr-5 dropdown relative" data-dropdown>
      <button className="dropdown-menu menu-item flex items-center hover:text-primary" data-dropdown-button>
        {name}
        <FiChevronDown className="mt-0.5 ml-0.5 dropdown-arrow"/>
      </button>
      <div className="sub-menu absolute left-0 top-[calc(100%_+_0.25rem)] bg-white p-[0.75rem] rounded-lg drop-shadow-lg flex flex-col min-w-max items-start">
        {subMenuItems}
      </div>
    </li>
  )
}

export default MenuItem;