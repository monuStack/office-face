import LoginOption from "./LoginOption";
import styles from "./signup.module.css";
import { FaGoogle, FaWindows, FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <div className={styles.headingContainer}>
          <h1>Sign up for free</h1>
          <p>No credit card required</p>
        </div>
        <div className={styles.fromContainer}>
          <form action="http://localhost:8000/api/auth/signup" method="get" className={styles.from}>
            <label htmlFor="email">Enter your email address</label>
            <input type="email" placeholder="Email address" id="email" />
            <button>Continue</button>
          </form>
        </div>
        <p>or sign up with</p>
        <LoginOption/>
        <div><h4>
          Already have an account? <Link to="/login">Log In</Link>
        </h4></div>
      </div>
    </div>
  );
}
