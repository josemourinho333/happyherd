import styles from '../styles/HowToHelp.module.scss';

const HowToHelp = () => {
  return (
    <section className={`${styles["howtohelp-container"]} text-slate-800 p-10 w-full`}>

      <div className="intro items-start flex flex-col w-1/2">
        <h1 className={`${styles.title} font-semibold text-3xl text-white bg-slate-800 p-6 rounded-b-2xl`}>How You Can Help</h1>
        <p className="intro-content my-10 font-light text-lg">
        <i>As one of the first farm animal sanctuaries on Canada's West Coast,</i>
        <br/><br/>
        we are always seeking assistance through volunteers or donations, monetary or in kind. We regularly greet visitors for scheduled tours so people can meet our ever-growing family.
        </p>
      </div>

      <div className="options flex w-1/2">
        <div className={`${styles.option} w-1/2`}>
          <h1 className="sub-title font-bold text-slate-800 text-3xl self-end">Donate</h1>
          <p className="sub-desc text-center">Make a one time or a monthly donation to the Happy Herd.</p>
          <button className="sub-cta rounded-lg px-4 py-2 bg-slate-800 text-slate-200 hover:bg-rose-300">Donate</button>
        </div>
        <div className={`${styles.option} w-1/2`}>
          <h1 className="sub-title font-bold text-slate-800 text-3xl self-end">Volunteer</h1>
          <p className="sub-desc text-center">Volunteers are critical in running our sanctuary. We have volunteers care for the animals 365 days a year!</p>
          <button className="sub-cta rounded-lg px-4 py-2 bg-slate-800 text-slate-200 hover:bg-rose-300">Volunteer</button>
        </div>
      </div>

    </section>
  )
}

export default HowToHelp;