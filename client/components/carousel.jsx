import { useState } from 'react';
import { request } from 'graphql-request';
import useSWR from 'swr';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';

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
    return (
      <img key={item.node.id} src={item.node.sourceUrl} alt={item.node.title} className="w-full h-full imgs"/>
    )
  });

  // fill dot depending on which slide you're on
  const dots = imgs.map((img, index) => {
    if (index === slide) {
      return (
        <RiCheckboxBlankCircleFill key={index} className="w-3 h-3 mx-1 text-emerald-200" onClick={() => fastTravelSlide(index)}/>
      )
    } else {
      return (
        <RiCheckboxBlankCircleLine key={index} className="w-3 h-3 mx-1 text-emerald-200" onClick={() => fastTravelSlide(index)}/>
      )
    }
  })

  return (
    <section className="carousel-container grid items-center">
      <div 
        className="arrows arrow-left bg-emerald-200 rounded-full flex justify-center mx-3"
        onClick={prevSlide}
      >
        <GoChevronLeft className="w-7 h-7"/>
      </div>
      {imgs[slide]}
      <div 
        className="arrows arrow-right bg-emerald-200 rounded-full flex justify-center mx-3"
        onClick={nextSlide}
      >
        <GoChevronRight className="w-7 h-7"/>
      </div>
      <div className="dots flex">
        {dots}
      </div>
    </section>
  )
};

export default Carousel;