import { FaCheckCircle } from 'react-icons/fa';

const Membership = () => {
  return (
    <section>
      <article>
        <div>
          <h1>{`Monthly Membership`}</h1>
          <h2>New members are eligilble for 3 free introductory classes!</h2>
          <aside>
            <h3>{`What's Included`}</h3>
            <div></div>
          </aside>
          <ul>
            <li>
              <FaCheckCircle />
              Full body workout in 60 minutes
            </li>
            <li>
              <FaCheckCircle />
              Unlimited access to all classes
            </li>
            <li>
              <FaCheckCircle />
              Personalized training with our coaches!
            </li>
            <li>
              <FaCheckCircle />
              Refer-a-friend rewards
            </li>
          </ul>
        </div>
        <div>
          <h2>Join us for a fixed price of</h2>
          <h1>
            <span>$</span>99.99
          </h1>
          <div>
            <span>Learn more</span>
            <button>Contact a Coach</button>
            <button>Visit Us</button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Membership;
