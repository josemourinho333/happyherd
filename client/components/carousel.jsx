import { useState } from 'react';
import { request } from 'graphql-request';
import useSWR from 'swr';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { formatCaption } from '../helpers/formatCaption';

const fetcher = (query) => request(process.env.happyHerdApi, query).then((data) => data)
  .catch((err) => console.log('err', err));

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const { data, error } = useSWR(
    `{
      mediaItems(where: {title: "hero"}) {
        edges {
          node {
            id
            title(format: RENDERED)
            srcSet
            sourceUrl
            caption(format: RENDERED)
          }
        }
      }
    }`,
    fetcher
  );

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const nextSlide = () => {
    if (slide === imgs.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide === 0) {
      setSlide(imgs.length -1);
    } else {
      setSlide(slide - 1);
    }
  };

  // clickign circle will take you to the slider instead of using arrows
  const fastTravelSlide = (sliderPage) => {
    setSlide(sliderPage);
  };

  // loop over fetched data and return img jsx
  const imgs = data.mediaItems.edges?.map((item) => {
    const {title, cta, moreInfo, caption} = formatCaption(item.node.caption);

    return (
      <>
        <img key={item.node.id} src={item.node.sourceUrl} alt={item.node.title} className="w-full h-full imgs object-top"/>
        <div className="flex flex-col img-content items-start bg-neutral/50 px-20">
          <h1 className="font-bold text-5xl text-white">{title}</h1>
          <p className="text-white text-lg font-light mt-1 mb-10">{caption}</p>
          <button className="btn btn-primary py-1 px-3 sm:btn-sm md:btn-md lg:btn-md">{cta}</button>
          {
            !moreInfo
            ? <></>
            : <p className="text-white text-sm my-2">{moreInfo}</p>
          }
        </div>
      </>
    )
  });

  // fill dot depending on which slide you're on
  const dots = imgs.map((img, index) => {
    if (index === slide) {
      return (
        <RiCheckboxBlankCircleFill key={index} className="w-2.5 h-2.5 mx-1 text-white" onClick={() => fastTravelSlide(index)}/>
      )
    } else {
      return (
        <RiCheckboxBlankCircleLine key={index} className="w-2.5 h-2.5 mx-1 text-white" onClick={() => fastTravelSlide(index)}/>
      )
    }
  })

  return (
    <section className="carousel-container grid">
      {/* <div 
        className="arrows arrow-left flex items-center hover:bg-black/50"
        onClick={prevSlide}
      >
        <GoChevronLeft className="w-7 h-7 text-slate-200"/>
      </div> */}
      {imgs[slide]}
      {/* <div 
        className="arrows arrow-right flex items-center hover:bg-black/50"
        onClick={nextSlide}
      >
        <GoChevronRight className="w-7 h-7 text-slate-200"/>
      </div> */}
      <div className="dots flex">
        {dots}
      </div>
    </section>
  )
};

export default Carousel;