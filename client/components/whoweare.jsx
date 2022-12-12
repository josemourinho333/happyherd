import { HiChevronRight } from "react-icons/hi";
import CardNew from './CardNew';

const WhoWeAre = ({ aboutItems }) => {

  const aboutSections = aboutItems.reverse().map((about, index) => {
    const info = about.content.raw.split('/')[0];
    const cta = about.content.raw.split('/')[1];
    const extra = about.content.raw.split('/')[2];

    return (
      <div key={about.id} className={`min-h-screen ${index % 2 === 0 ? "bg-gradient-to-br from-black to-zinc-900" : "bg-zinc-100/70"} text-primary-content flex justify-center items-center py-20`}>
        <div className="flex flex-col gap-y-5 items-center text-center w-11/12 sm:w-10/12 md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl sm:text-6xl font-extrabold">{about.title.raw}</h2>
          <p className="text-base sm:text-xl font-normal">{info}</p>
          {
            !cta
              ? <></>
              : <div className="flex flex-col justify-center items-center text-lg md:flex-row ">
                  <a to="/projects" className="text-[#2997ff] flex items-center m-2">{cta}<HiChevronRight className="pt-0.5 w-5 h-5"/></a>
                </div>
          }
          <CardNew src={about._embedded["wp:featuredmedia"][0].source_url}/>
          <p className="text-xs italic">{extra ? extra : ''}</p>
        </div>

      </div>
    )
  });

  return (
    <>
      {aboutSections}
    </>
  )
};

export default WhoWeAre;