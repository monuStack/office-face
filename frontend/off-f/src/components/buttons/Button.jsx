import styles from "./button.module.css";

export default function Button({innerText,icon,type,onClick}){
 
    return(
    <>
    <div className={styles.btn}>
        <button className={styles[type]} onClick={onClick}>
            {icon}{innerText}
            </button>
    </div>
    </>
    )
}