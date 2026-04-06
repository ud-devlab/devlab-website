import { NavBar } from "../components/NavBar";
import styles from "./Portfolio.module.css";
export function Portfolio() {
    return (
        <div>
            <NavBar currentPage="portfolio" />
            <div className="content">
            <title>Portfolio</title>
            <div className={styles.mainBox}>
                <h1>Projects</h1>
                <span className={styles.description}>See what we've been up to! Your work can also be apart of this list!</span>
            </div>
            <div className = {styles.projectRow}>
                    <div className = {styles.projectbox}>
                        <h1>Project1</h1>
                        <p>Description</p>
                    </div>
                    <div className = {styles.projectbox}>
                        <h1>Project2</h1>
                        <p>Description</p>
                    </div>
                    <div className = {styles.projectbox}>
                        <h1>Project3</h1>
                        <p>Description</p>
                    </div>
            </div>
        </div>

    </div>
    );
}