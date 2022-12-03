import { HiChevronRight } from "react-icons/hi";
import CardNew from './CardNew';

const WhoWeAre = ({ aboutItems }) => {

  const aboutSections = aboutItems.reverse().map((about, index) => {
    const info = about.content.raw.split('/')[0];
    const cta = about.content.raw.split('/')[1];
    const extra = about.content.raw.split('/')[2];

    return (
      <div key={about.id} className={`flex flex-col min-h-screen ${index % 2 === 0 ? "bg-base-100" : "bg-zinc-100/70"} justify-center items-center text-center py-10 px-8 gap-y-5`}>
        <div className="basis-1/2 flex flex-col gap-y-5 w-4/5 lg:w-3/5">
          <h2 className="text-6xl font-semibold">{about.title.raw}</h2>
          <p className="text-lg font-light">{info}</p>
          {
            !cta
              ? <></>
              : <div className="flex flex-col justify-center items-center text-lg md:flex-row ">
                  <a to="/projects" className="text-[#2997ff] flex items-center m-2">{cta}<HiChevronRight className="pt-0.5 w-5 h-5"/></a>
                </div>
          }
        </div>
        <CardNew src={about._embedded["wp:featuredmedia"][0].source_url}/>
        <p className="text-xs italic">{extra ? extra : ''}</p>

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