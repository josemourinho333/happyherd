import React from 'react';
import { useRouter } from 'next/router';
import axios from '../../components/Axios';
import { makeSingular } from '../../helpers/makeSingular';
import { HiChevronRight } from "react-icons/hi";

const rescuedanimals = ({animal}) => {
  const router = useRouter();
  const { pid } = router.query;

  if (router.isFallback) {
    return (
      <div>Loading....</div>
    )
  }
  console.log('animal', animal);
  return (
    <div className="flex flex-col bg-base-100">
      <div 
        style={{backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 98%), linear-gradient(-90deg, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 98%), linear-gradient(180deg, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 98%), linear-gradient(0deg, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 98%),radial-gradient(circle, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 97%), url(${animal._embedded["wp:featuredmedia"][0].source_url})`}}
        className="w-full min-h-[70vh] bg-no-repeat bg-center bg-cover flex">

      </div>
    </div>
  )
};

export async function getStaticPaths() {
  try {
    const response = await axios.get(`/animals`);

    const animals = await response.data;
    const paths = animals.map((animal) => ({
      params: {
        pid: animal.id.toString()
      }
    }));

    return {
      paths,
      fallback: true
    }

  } catch (error) {
    console.log('error', error);
  };
};

export async function getStaticProps({params}) {
  const id = params.pid;
  try {
    const response = await axios.get(`/animals/${id}`, { 
      params: {
        context: "edit", 
        _embed: true
      }
    });

    const animal = await response.data;

    return {
      props: {
        animal
      }
    }

  } catch (error) {
    console.log('error', error);
  }
};

export default rescuedanimals;