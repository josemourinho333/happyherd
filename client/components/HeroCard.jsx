import React from 'react';
import Link from 'next/link';

// HeroCard accepts bunh of grid span values for responsive design. 
// Pass a falsey value if you want col or row to keep using the values set before the current one you're setting.
// defCol/Row are required. Use them as default values or viewport smaller than tailwind's sm pre-set value (defCol/Rows will be the values used for all phone screens)

const HeroCard = ({ title, children, cta, path, defCol, defRow, smCol, smRow, mdCol, mdRow, lgCol, lgRow, xlCol, xlRow, external }) => {
  return (
    <div className={`after:content relative 
      flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-zinc-900 px-6 py-16 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight 
      col-span-${defCol} 
      row-span-${defRow}
      ${smCol && `${smCol}`}
      ${smRow && `${smRow}`}
      ${mdCol && `${mdCol}`}
      ${mdRow && `${mdRow}`}
      ${lgCol && `${lgCol}`}
      ${lgRow && `${lgRow}`}
      ${xlCol && `${xlCol}`}
      ${xlRow && `${xlRow}`}
      `}>
      <h1 className="text-3xl font-bold uppercase tracking-widest">
        {title}
      </h1>
      <p className="max-w-[40ch] text-xl text-white/75 sm:max-w-[32ch]">
        {children}
      </p>
      {
        external
          ? <a
              className="pointer z-10 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
              href={path}
              target="_blank"
              rel="noreferrer"
            > 
              {cta}
            </a>
          : <Link href={path}>
            <button className="pointer z-10 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4">
              {cta}
            </button>
            </Link>
      }
      
        
    </div>
  )
}

export default HeroCard;