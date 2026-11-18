import styles from "./navbar.module.css";
import Button from "../buttons/Button";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link to="/"><img src="/images/logo.png" alt="" /></Link>
          
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
          <Button innerText={"Log in"} type={"logIn"} onClick={() => navigate("/login")} />
          <Button innerText={"Sign Up Free"} type={"signUp"}  onClick={() => navigate("/signup")} />
        </div>
      </nav>
    </>
  );
}
