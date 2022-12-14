import HeroCard from '../components/HeroCard';

const Volunteer = () => {

  return (
    <section className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 bg-primary-content overflow-x-visible grid-rows-1">

      <HeroCard 
        title="Volunteer at Happy Herd" 
        cta="Volunteer" 
        path="https://form-can.keela.co/volunteer-sign-up-form7" 
        external={true}
        defCol={1}
        defRow=""
        smCol=""
        smRow=""
        mdCol=""
        mdRow=""
        lgCol="lg:col-start-1 lg:col-end-3"
        lgRow=""
        xlCol="xl:col-start-1 xl:col-end-4"
        xlRow=""
      >
        We would love to have you. The more organized we are and the more commitment we have from our amazing volunteers, the better the experience will be for you and for the animals. They also enjoy seeing the same, familiar faces and love to bond with volunteers that can commit to a specific schedule.
      </HeroCard>
   
      <div 
        className="stats stats-vertical shadow h-full rounded-lg
        col-span-1
        lg:col-start-3 lg:col-end-5
        xl:col-start-4 xl:col-end-7
      ">
        <div className="stat">
          <div className="stat-title text-2xl">Info</div>
          <div className="stat-value text-xl">Must be 16 years or older.</div>
          <div className="stat-value text-xl whitespace-normal">We prefer volunteers are able to commit to a regular schedule - once a week or every two weeks.</div>
        </div>
        <div className="stat">
          <div className="stat-title text-2xl">Hours</div>
          <div className="stat-value text-xl whitespace-normal">9:30 AM - 12:00 PM <br/>Year Round</div>
        </div>
        <div className="stat">
          <div className="stat-title text-2xl">Transportation</div>
          <div className="stat-value text-xl whitespace-normal">There is no convenient public transportation to our Sanctuary therefore private or group arranged transportation must be organized by the volunteers.</div>
        </div>
      </div>

      <div className="col-span-full justify-self-center py-5">
        <h1 className="text-primary text-4xl font-bold">What Does Volunteering at an Animal Sanctuary Involve?</h1>
        <ul className="my-[2rem]">
          <li className="flex py-[1rem] gap-y-3 border-b border-black flex-col sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Cleaning residents stalls</h3>
            <p className="basis-1/2 tracking-widest leading-8">
              Raking up old hay and waste into wheelbarrows <br/>
              Sweep and pick up waste in goat pen <br/>
              Dumping waste on to designated dump site <br/>
              Replace bedding (straw or shaving) <br/>
              Filling hay mangers <br/>
              Emptying, scrubbing, cleaning and refilling water barrels
            </p>
          </li>
          <li className="flex py-[1rem] gap-y-3 border-b border-black flex-col sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Cleaning chicken coops</h3>
            <p className="basis-1/2 tracking-widest leading-8">
              Clean and refilling water bowls and food <br/>
              Cleaning of waste <br/>
              Gather eggs from the coops <br/>
              Strip all bedding from floor and nesting boxes (monthly) <br/>
              Putting down light layer of lime and then cover with shavings <br/>
              Refill nesting boxes with shavings
            </p>
          </li>
          <li className="flex py-[1rem] gap-y-3 border-b border-black flex-col sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Meal prep for residents</h3>
            <p className="basis-1/2 tracking-widest leading-8">
              Sorting vegetables and fruits in the feed room <br/>
              Discarding unusable items <br/>
              Preparing meals for the animals as needed <br/>
              Ensuring a wheelbarrow of hay is left for afternoon feedings of animals 
            </p>
          </li>
          <li className="flex py-[1rem] gap-y-3 border-b border-black flex-col sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Animal care</h3>
            <p className="basis-1/2 tracking-widest leading-8">
              Brush and play with the animals <br/>
              Pigs love belly loves <br/>
              All animals love to be groomed <br/>
              The pigs need mud holes filled with water in the hot summer weather 
            </p>
          </li>
          <li className="flex py-[1rem] gap-y-3 border-b border-black flex-col sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">General tasks</h3>
            <p className="basis-1/2 tracking-widest leading-8">
              General clean up of bran area and removal of hay from grass areas around the farm <br/>
              Notifying Diane & Steve if running low on any items around the farm <br/>
              Storage of tools in proper area and tidy up during and after completion of work <br/>
              Weeding/watering garden and plants <br/>
              Moving hay into barn loft <br/>
              Painting fences/houses 
            </p>
          </li>
        </ul>
      </div>

      <HeroCard 
        title="We appreciate your help!"
        cta="Volunteer" 
        path="https://form-can.keela.co/volunteer-sign-up-form7" 
        external={true}
        defCol={1}
        defRow=""
        smCol="sm:col-span-full"
        smRow=""
        mdCol=""
        mdRow=""
        lgCol="lg:col-span-full"
        lgRow=""
        xlCol="xl:col-span-full"
        xlRow=""
      >
        Thank you for your commitment to the animals & The Happy Herd Farm Sanctuary. Please make sure to consider all of the above before deciding you want to volunteer. Volunteering is work, but it is also very rewarding! If you’re willing, we would love to have you!
      </HeroCard>
    </section>
  )
}

export default Volunteer;