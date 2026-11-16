import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from './footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.leftConatiner}>
        <div className={styles.logoConatiner}>
          <img src="/images/white-logo.png" alt="logo" />
        </div>
        <div className={styles.contactConatiner}>
          <div className="mobContainer">
            <p>Get in toch</p>
            <h4>+91 00000 000 000</h4>
          </div>
          <div className={styles.SocialContainer}>
            <button>
              <InstagramIcon />
            </button>
            <button>
              <LinkedInIcon />
            </button>

            <button>
              <XIcon />
            </button>
            <button>
              <YouTubeIcon />
            </button>
            <button>
              <FacebookIcon />
            </button>
          </div>
          <p>Copyright ©2026 Monu Rajpoot, Inc. All rights reserved.</p>
        </div>
      </div>
      <div className={styles.rightConatiner}>
        <div className={styles.footerColumn}>
          <h3>About</h3>
          <a href="#">Zoom Blog</a>
          <a href="#">Customers</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
        </div>

        <div className={styles.footerColumn}>
          <h3>Download</h3>
          <a href="#">Zoom Workplace App</a>
          <a href="#">Zoom Rooms App</a>
          <a href="#">Browser Extension</a>
          <a href="#">Android App</a>
        </div>

        <div className={styles.footerColumn}>
          <h3>Sales</h3>
          <a href="#">Contact Sales</a>
          <a href="#">Plans & Pricing</a>
          <a href="#">Request a Demo</a>
          <a href="#">Request a Demo</a>
        </div>

        <div className={styles.footerColumn}>
          <h3>Support</h3>
          <a href="#">Test Zoom</a>
          <a href="#">Account</a>
          <a href="#">Support Center</a>
          <a href="#">Learning Center</a>
        </div>
      </div>
    </footer>
  );
}
