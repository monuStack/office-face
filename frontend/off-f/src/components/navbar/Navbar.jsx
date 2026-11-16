import styles from "./navbar.module.css";
import Button from "../buttons/Button";
import VideoCallIcon from "@mui/icons-material/VideoCall";
export default function Navbar() {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className={styles.searchBarContainer}>
          {/* search container */}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Enter meeting ID" />
            <Button innerText={"Join"} type={"Join"} />
          </div>
          <Button
            innerText={"new"}
            icon={<VideoCallIcon />}
            type={"newMeeting"}
          />
        </div>
        <div className={styles.buttonContiner}>
          <Button innerText={"Log in"} type={"logIn"} />
          <Button innerText={"Sign Up Free"} type={"signUp"} />
        </div>
      </nav>
    </>
  );
}
