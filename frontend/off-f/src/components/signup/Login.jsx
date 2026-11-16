import LoginOption from "./LoginOption";
import styles from "./signup.module.css";


export default function Signup() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <div className={styles.headingContainer}>
          <h1>Log in</h1>
        </div>
        <div className={styles.fromContainer}>
          <form action="/" method="get" className={styles.from}>
            <label htmlFor="email">Enter your email address</label>
            <input type="email" placeholder="Enter email, Zoom Mail or Phone" id="email" />
            <button>Next</button>
          </form>
        </div>
        <p>or sign in with</p>
        <LoginOption/>
        <h4>
          <a href="">Forgot email?</a>
        </h4>
        <div>
            <a href="">Help</a>
            <a href="">Terms</a>
            <a href="">Privacy</a>
        </div>
      </div>
    </div>
  );
}
