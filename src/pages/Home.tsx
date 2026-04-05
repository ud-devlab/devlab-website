import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import styles from "./Home.module.css";

export function Home() {
    return (
        <div>
            <NavBar currentPage="home" />
            <div className="content">
                <div className={styles.mainBox}>
                    <h1 className={styles.landingTitle}>&#123;DevLab&#125;</h1>
                    <p className={styles.description}>Our club develops apps in a collaborative, beginner-friendly environment.</p>
                </div>
                <div className={styles.infoCards}>
                    <Link to="/portfolio" className={styles.infoCard}>
                        <div>
                            <h3>Projects</h3>
                            <p>See what we've been up to</p>
                        </div>
                    </Link>
                    <Link to="/about" className={styles.infoCard}>
                        <div>
                            <h3>Leadership</h3>
                            <p>Meet our team</p>
                        </div>
                    </Link>
                    <Link to="/resources" className={styles.infoCard}>
                        <div>
                            <h3>Resources</h3>
                            <p>Need something? It's probably here</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}