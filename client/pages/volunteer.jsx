import styles from '../styles/Volunteer.module.scss';
import { useEffect } from 'react';
import {HiPlusSm} from 'react-icons/hi';

const Volunteer = () => {

  useEffect(() => {
    const handleClick = (e) => {
      const isTabBtn = e.target.matches('.tabBtn');

      if (!isTabBtn || e.target.closest('.tabContent')) {
        return;
      }

      if (e.target.classList.contains('active')) {
        return;
      }

      let clicked;
      if (isTabBtn) {
        clicked = e.target;
        clicked.classList.toggle('active');
        document.getElementById(clicked.innerHTML.toLowerCase()).classList.toggle('active');
      };

      document.querySelectorAll('.tabBtn').forEach((btn) => {
        if (btn === e.target) return;
        btn.classList.remove('active');
        document.getElementById(btn.innerHTML.toLowerCase()).classList.remove('active');
      });

    };

    document?.addEventListener('click', handleClick);

    return () => {
      document?.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <section className={styles.volunteer}>
      <div className={styles.header}>
        <h3>Want to help the animals?</h3>
        <h1>Volunteer at The Happy Herd</h1>
        <p>We would love to have you. The more organized we are and the more commitment we have from our amazing volunteers, the better the experience will be for you and for the animals. They also enjoy seeing the same, familiar faces and love to bond with volunteers that can commit to a specific schedule.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="tabs">
          <button className="tabBtn active">Info</button>
          <button className="tabBtn">Hours</button>
          <button className="tabBtn">Transportation</button>
        </div>
        <div className="content">
          <div className="tabContent active" id="info">
            <ul>
              <li>Must be 16 years or older.</li>
              <li>We prefer volunteers are able to commit to a regular schedule - once a week or every two weeks.</li>
              <li>Call or text Diane if you are unable to come on your scheduled day (number will be provided once confirmed as volunteer).</li>
              <li>We do not permit outside dogs as our chickens, ducks and turkeys are free to wander around the property.</li>
            </ul>
          </div>
          <div className="tabContent" id="hours">
            <ul>
              <li>Volunteering hours are open year round between the following hours:</li>
              <li>9:30 AM - 12:00 PM</li>
            </ul>
          </div>
          <div className="tabContent" id="transportation">
            <ul>
              <li>Unfortunately, there is no convenient public transportation to our Sanctuary therefore private or group arranged transportation must be organized by the volunteers.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.tasks}>
        <div className={styles.bubble}>
          <ul>
            <li>You must bring a signed liability waver with you the first time.</li>
            <li>Be sure to wear farm appropriate attire: boots or rubber boots, clothing that can get dirty, gloves & a mask if you’re sensitive to dust when cleaning stalls.</li>
            <li>Please do not bring friends with you unless you have been a minimum of 4x to volunteer & have checked with Diane first. Too many people can make things confusing and jobs can get missed. It works best when everyone is in a routine and doesn’t need to be supervised.</li>
            <li>There is a volunteer room where you can leave items & a bathroom at the back of the property, next to the donkey and cow areas, beside the feed room.</li>
            <li>Be sure to ask Diane what you can feed and how much.</li>
            <li>On your first day you’ll have an orientation with another volunteer where you’ll meet the animals and be shown around the farm. Someone will be available to help you orient to the different jobs so you become comfortable.</li>
          </ul>
        </div>
        <h1>What Does Volunteering at an Animal Sanctuary Involve?</h1>
        <ul className={styles.taskList}>
          <li className="taskItem">
            <h3 className="taskName">Cleaning residents stalls</h3>
            <p className="taskInfo">
              Raking up old hay and waste into wheelbarrows <br/>
              Sweep and pick up waste in goat pen <br/>
              Dumping waste on to designated dump site <br/>
              Replace bedding (straw or shaving) <br/>
              Filling hay mangers <br/>
              Emptying, scrubbing, cleaning and refilling water barrels
            </p>
          </li>
          <li className="taskItem">
            <h3 className="taskName">Cleaning chicken coops</h3>
            <p className="taskInfo">
              Clean and refilling water bowls and food <br/>
              Cleaning of waste <br/>
              Gather eggs from the coops <br/>
              Strip all bedding from floor and nesting boxes (monthly) <br/>
              Putting down light layer of lime and then cover with shavings <br/>
              Refill nesting boxes with shavings
            </p>
          </li>
          <li className="taskItem">
            <h3 className="taskName">Meal prep for residents</h3>
            <p className="taskInfo">
              Sorting vegetables and fruits in the feed room <br/>
              Discarding unusable items <br/>
              Preparing meals for the animals as needed <br/>
              Ensuring a wheelbarrow of hay is left for afternoon feedings of animals 
            </p>
          </li>
          <li className="taskItem">
            <h3 className="taskName">Animal care</h3>
            <p className="taskInfo">
              Brush and play with the animals <br/>
              Pigs love belly loves <br/>
              All animals love to be groomed <br/>
              The pigs need mud holes filled with water in the hot summer weather 
            </p>
          </li>
          <li className="taskItem">
            <h3 className="taskName">General tasks</h3>
            <p className="taskInfo">
              General clean up of bran area and removal of hay from grass areas around the farm <br/>
              Notifying Diane & Steve if running low on any items around the farm <br/>
              Storage of tools in proper area and tidy up during and after completion of work <br/>
              Weeding/watering garden and plants <br/>
              Moving hay into barn loft <br/>
              Painting fences/houses 
            </p>
          </li>
        </ul>
        <div className={styles.bubble}>
          <ul>
            <li>Feel free to take pictures and pet the animals, but please remember the volunteer work comes first! The farm needs volunteers to help spread the work out and ensure all jobs are completed so the animals are taken care of properly, and more work isn’t left for the next day’s volunteers.</li>
            <li>By volunteering, you’re freeing the owners up to collect food, run errands for the farm, answer emails, pick up medicine, treat any sick animals etc.</li>
            <li>We appreciate your help more than you can realize! Thank you for your commitment to the animals & The Happy Herd Farm Sanctuary. Please make sure to consider all of the above before deciding you want to volunteer. Volunteering is work, but it is also very rewarding! If you’re willing, we would love to have you!</li>
          </ul>
        </div>
        <div className="my-10 text-center">Volunteer application form -- fill it in, submit, translate to pdf for admins @ HH, form will take in everything in the actual form itself<br/>end of volunteer page</div>
      </div>
    </section>
  )
}

export default Volunteer;