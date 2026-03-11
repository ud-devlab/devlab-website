import { NavBar } from "../components/NavBar";
import styles from "./About.module.css";

export function About() {
    return (
        <div>
            <NavBar currentPage="about" />
            <div className="content">
                <div className={styles.mainBox}>
                    <h1 className={styles.landingTitle}>About Us</h1>
                    <p className={styles.description}>Our club allows programmers of all levels to contribute to real, resume-building team projects.</p>
                </div>
                <div className={styles.leadershipBox}>
                    <h2>Leadership</h2>
                    <div className={styles.leadershipRow}>
                        <div className={styles.leadershipMember}>
                            <h3>Avneet Aurora <span>PRESIDENT</span></h3>
                            <p>Description</p>
                        </div>
                        <div className={styles.leadershipMember}>
                            <h3>Michael Rothkopf <span>PRESIDENT</span></h3>
                            <p>Description</p>
                        </div>
                        <div className={styles.leadershipMember}>
                            <h3>Mohnish Pothineni <span>TREASURER</span></h3>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}