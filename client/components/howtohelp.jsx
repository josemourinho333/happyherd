import {request} from 'graphql-request';
import { useEffect } from 'react';
import useSWR from 'swr';
import { HiOutlineArrowRight } from "react-icons/hi";

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const HowToHelp = () => {
  const { data, error } = useSWR(`
  {
    mediaItems(where: {title: "howtohelp"}) {
      edges {
        node {
          id
          sourceUrl
          altText
          caption(format: RENDERED)
        }
      }
    }
  }
  `, fetcher);

  useEffect(() => {
    const handleClick = (e) => {
      const isExpandable = e.target.matches("[data-expandable-button]");
      
      // clicking inside while expanded won't do anything
      if (!isExpandable && e.target.closest("[data-expandable]") != null) {
        return;
      };

      let currentExpanded
      if (isExpandable) {
        currentExpanded = e.target.closest("[data-expandable]");
        currentExpanded.classList.toggle('active');
      };

      document.querySelectorAll("[data-expandable].active").forEach(expandable => {
        if (expandable === currentExpanded) return;
        expandable.classList.remove('active');
      })
    };

    document?.addEventListener('click', handleClick);

    return () => {
      document?.removeEventListener('click', handleClick);
    }
  }, [])

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const howToHelp = data?.mediaItems.edges.map((item, index) => {
    if (index === 1) {
      return(
        <img id={index} key={item.node.id} src={item.node.sourceUrl} className="object-cover w-full h-full rounded-xl" />
      )
    }
  })

  return (
    <section className="flex h-[70vh]">

      <div className="basis-1/2 justify-center px-[1rem]">
        {howToHelp}
      </div>

      <div className="intro self-center items-start flex flex-col basis-1/2 px-[1rem] text-neutral">
        <h1 className="text-primary font-semibold text-5xl">How You Can Help</h1>
        <p className="intro-content my-8 text-neutral">
        As one of the first farm animal sanctuaries on Canada's West Coast,
        we are always seeking assistance through volunteers or donations, monetary or in kind. 
        <br/><br/>
        We regularly greet visitors for scheduled tours so people can meet our ever-growing family.
        </p>

        <div className="options active border-neutral" data-expandable>
          <h1 id="0" className="text-neutral font-semibold text-2xl" data-expandable-button>Volunteer</h1>
          <p className="text-neutral">Volunteers are critical in running our sanctuary. We have volunteers care for the animals 365 days a year.</p>
          <button className="btn btn-primary my-3 sm:btn-sm md:btn-md lg:btn-md">
            Volunteer
            <HiOutlineArrowRight className="ml-2 mt-0.5"/>
          </button>
        </div>

        <div className="options border-neutral" data-expandable>
          <h1 id="1" className="text-neutral font-semibold text-2xl" data-expandable-button>Donate</h1>
          <p>Make a one time or a monthly donation to The Happy Herd.</p>
          <button className="btn btn-primary my-3 sm:btn-sm md:btn-md lg:btn-md">
            Donate
            <HiOutlineArrowRight className="ml-2 mt-0.5"/>
          </button>
        </div>
      </div>

    </section>
  )
};

export default HowToHelp;