import styles from './heroSection.module.css'
import Button from "../buttons/Button";

export default function HeroSection() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.itemsContainer}>
        <div className={styles.textContainer}>
          <h1>Connect. Collaborate. Get Things Done.</h1>
          <h2>Meet, talk, and collaborate with your team from anywhere.</h2>
          <p>Office Face makes online meetings simple, fast, and reliable — whether you're <br /> working with your team, clients, or friends.</p>
          <div className={styles.btnContainer}>
            <Button innerText={"New Meeting"} />
            <Button innerText={"Sign Up Free"} type={"signUp"}/>
          </div>
          <p>Secure video meetings. Smooth collaboration. One simple platform.</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/Hero.png" alt="Hero Image" />
        </div>
      </div>
      </div>
    </>
  );
}
