import Hero from '../components/hero';

const Volunteer = () => {

  return (
    <section className="flex flex-col items-center">
      <Hero title="Volunteer at the Happy Herd" cta="Volunteer">
        We would love to have you. The more organized we are and the more commitment we have from our amazing volunteers, the better the experience will be for you and for the animals. They also enjoy seeing the same, familiar faces and love to bond with volunteers that can commit to a specific schedule.
      </Hero>

      <div className="stats stats-vertical drop-shadow-lg my-10 p-3">
        <div className="stat">
          <div className="stat-value mb-3">Info</div>
          <div className="stat-desc opacity-100 my-1">Must be 16 years or older.</div>
          <div className="stat-desc opacity-100 my-1">We prefer volunteers are able to commit to a regular schedule - once a week or every two weeks.</div>
          <div className="stat-desc opacity-100 my-1">Call or text Diane if you are unable to come on your scheduled day (number will be provided once confirmed as volunteer).</div>
          <div className="stat-desc opacity-100 my-1">We do not permit outside dogs as our chickens, ducks and turkeys are free to wander around the property.</div>
        </div>
        <div className="stat">
          <div className="stat-value mb-3">Hours</div>
          <div className="stat-desc opacity-100 my-1">Volunteering hours are open year round between the following hours:</div>
          <div className="stat-desc opacity-100 my-1">9:30 AM - 12:00 PM</div>
        </div>
        <div className="stat">
          <div className="stat-value mb-3">Transportation</div>
          <div className="stat-desc opacity-100 my-1">Unfortunately, there is no convenient public transportation to our Sanctuary therefore private or group arranged transportation must be organized by the volunteers.</div>
        </div>
      </div>

      <div className="alert alert-info shadow-lg flex flex-col w-5/6 items-start p-10">
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>You must bring a signed liability waver with you the first time.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Be sure to wear farm appropriate attire: boots or rubber boots, clothing that can get dirty, gloves & a mask if you’re sensitive to dust when cleaning stalls.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Please do not bring friends with you unless you have been a minimum of 4x to volunteer & have checked with Diane first. Too many people can make things confusing and jobs can get missed. It works best when everyone is in a routine and doesn’t need to be supervised.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>There is a volunteer room where you can leave items & a bathroom at the back of the property, next to the donkey and cow areas, beside the feed room.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Be sure to ask Diane what you can feed and how much.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>On your first day you’ll have an orientation with another volunteer where you’ll meet the animals and be shown around the farm. Someone will be available to help you orient to the different jobs so you become comfortable.</span>
        </div>
      </div>

      <div className="w-5/6 m-[3rem]">
        <h1 className="text-primary text-5xl font-semibold">What Does Volunteering at an Animal Sanctuary Involve?</h1>
        <ul className="my-[2rem]">
          <li className="flex pt-[1rem] pb-[2rem] border-b border-black sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Cleaning residents stalls</h3>
            <p className="basis-1/2 tracking-widest leading-8 sm:mt-[1rem] md:mt-[1rem] lg:mt-[0rem]">
              Raking up old hay and waste into wheelbarrows <br/>
              Sweep and pick up waste in goat pen <br/>
              Dumping waste on to designated dump site <br/>
              Replace bedding (straw or shaving) <br/>
              Filling hay mangers <br/>
              Emptying, scrubbing, cleaning and refilling water barrels
            </p>
          </li>
          <li className="flex pt-[1rem] pb-[2rem] border-b border-black sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Cleaning chicken coops</h3>
            <p className="basis-1/2 tracking-widest leading-8 sm:mt-[1rem] md:mt-[1rem] lg:mt-[0rem]">
              Clean and refilling water bowls and food <br/>
              Cleaning of waste <br/>
              Gather eggs from the coops <br/>
              Strip all bedding from floor and nesting boxes (monthly) <br/>
              Putting down light layer of lime and then cover with shavings <br/>
              Refill nesting boxes with shavings
            </p>
          </li>
          <li className="flex pt-[1rem] pb-[2rem] border-b border-black sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Meal prep for residents</h3>
            <p className="basis-1/2 tracking-widest leading-8 sm:mt-[1rem] md:mt-[1rem] lg:mt-[0rem]">
              Sorting vegetables and fruits in the feed room <br/>
              Discarding unusable items <br/>
              Preparing meals for the animals as needed <br/>
              Ensuring a wheelbarrow of hay is left for afternoon feedings of animals 
            </p>
          </li>
          <li className="flex pt-[1rem] pb-[2rem] border-b border-black sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">Animal care</h3>
            <p className="basis-1/2 tracking-widest leading-8 sm:mt-[1rem] md:mt-[1rem] lg:mt-[0rem]">
              Brush and play with the animals <br/>
              Pigs love belly loves <br/>
              All animals love to be groomed <br/>
              The pigs need mud holes filled with water in the hot summer weather 
            </p>
          </li>
          <li className="flex pt-[1rem] pb-[2rem] border-b border-black sm:flex-col md:flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold basis-1/2">General tasks</h3>
            <p className="basis-1/2 tracking-widest leading-8 sm:mt-[1rem] md:mt-[1rem] lg:mt-[0rem]">
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

      <div className="alert alert-success shadow-lg flex flex-col w-5/6 items-start p-10">
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Feel free to take pictures and pet the animals, but please remember the volunteer work comes first! The farm needs volunteers to help spread the work out and ensure all jobs are completed so the animals are taken care of properly, and more work isn’t left for the next day’s volunteers.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>By volunteering, you’re freeing the owners up to collect food, run errands for the farm, answer emails, pick up medicine, treat any sick animals etc.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>We appreciate your help more than you can realize! Thank you for your commitment to the animals & The Happy Herd Farm Sanctuary. Please make sure to consider all of the above before deciding you want to volunteer. Volunteering is work, but it is also very rewarding! If you’re willing, we would love to have you!</span>
        </div>
      </div>

      <div className="my-10 text-center">Volunteer application form -- fill it in, submit, translate to pdf for admins @ HH, form will take in everything in the actual form itself<br/>end of volunteer page</div>
    </section>
  )
}

export default Volunteer;