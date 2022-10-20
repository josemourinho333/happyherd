import styles from '../styles/WhoWeAre.module.scss';
import { HiOutlineArrowRight } from "react-icons/hi";


const WhoWeAre = ({ data }) => {
  const imgs = data.mediaItems.edges?.map((img) => {
    return (
      <div className="context-img-container" key={img.node.id}>
        <img src={img.node.sourceUrl} alt="..." className="w-full context-img rounded-xl shadow-2xl" />
      </div>
    )
  });

  return (
    <section className="who-we-are-container flex items-center text-neutral">
      <div className="content-container flex flex-col basis-1/2 px-[1rem]">
        <h1 className="text-primary font-semibold text-5xl">
          The Happy Herd is a <strong>farm animal sanctuary</strong> for animals either abused or at risk.
        </h1>
        <p className="my-[2rem]">
          On 4 wonderful acres, you can find the many animals we have rescued roaming freely. We have several goats, sheep, chickens, cows, pigs, turkeys, ducks, cats, a dog, and a wonderful friendly donkey! Each with their <strong>own identity and personality</strong>, you can find out more about them by clicking below. We became official in August 2018, when we became a registered charity.
        </p>
        <button className="btn btn-primary px-5 py-2 self-start flex align-center sm:btn-sm md:btn-md lg:btn-md">
          Rescued Animals
          <HiOutlineArrowRight className="ml-2 mt-0.5"/>
        </button>
      </div>

      <div className={`${styles["context-imgs"]} py-[3rem] px-[1rem] basis-1/2`}>
        {imgs}
      </div>

    </section>
  )
};

export default WhoWeAre;