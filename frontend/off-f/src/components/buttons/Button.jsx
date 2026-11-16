import styles from "./button.module.css";

export default function Button({innerText,icon,type}){
 
    return(
    <>
    <div className={styles.btn}>
        <button className={styles[type]}>{icon}{innerText}</button>
    </div>
    </>
    )
}