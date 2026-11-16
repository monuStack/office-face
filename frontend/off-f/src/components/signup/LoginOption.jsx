import styles from "./loginoption.module.css";
import { FaGoogle, FaWindows, FaApple, FaFacebook } from "react-icons/fa";


export default function LoginOption() {
  return (
    <div className={styles.optionContainer}>
      <button>
        <FaGoogle style={{ color: "rgb(255, 212, 59)" }} />
      </button>

      <button>
        <FaWindows style={{ color: "rgb(116, 192, 252)" }} />
      </button>

      <button>
        <FaApple style={{ color: "rgb(234, 60, 139)" }} />
      </button>

      <button>
        <FaFacebook style={{ color: "rgb(75, 97, 173)" }} />
      </button>
    </div>
  );
}
