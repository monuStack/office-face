import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";
import styles from './home.module.css'

export default function Home(){
    return (
        <div className={styles.mainContainer}>
        <Navbar/>
        <HeroSection/>
        <Footer/>
        </div>
    )
}