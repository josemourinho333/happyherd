import styles from '../styles/Volunteer.module.scss';
import { useEffect } from 'react';

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
    </section>
  )
}

export default Volunteer;