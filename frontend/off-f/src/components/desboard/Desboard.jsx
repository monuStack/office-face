import { IoCallOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import Calender from "./calender/Calender";
import styles from "./desboard.module.css";
import Navbar from "../navbar/Navbar";
import Button from "../buttons/Button";
import VideoCallIcon from "@mui/icons-material/VideoCall";

export default function Desboard() {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.DateContainer}>
          <div className={styles.DayContainer}>
            <h3>Mon,Nov 16</h3>
            <SlCalender />
          </div>
          <div>
            <Calender />
          </div>
        </div>
        <div className={styles.meetContainer}>
          <div className={styles.imageContainer}>
            <img src="images/meeting.png" alt="meeting img" />
          </div>
          <div className={styles.buttonContainer} >
            <Button
            innerText={"new"}
            icon={<VideoCallIcon />}
            type={"newMeeting"}
          />
          </div>
        </div>
      </div>
    </>
  );
}
