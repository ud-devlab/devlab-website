import { NavBar } from "../components/NavBar";
import styles from "./Resources.module.css";

export function Resources() {
    return (
        <div>
            <NavBar currentPage="resources" />
            <div className="content">
                <title>Resources</title>
                <div className={styles.mainBox}>
                    <h1>Resources</h1>
                    <span className={styles.description}>Need something? It's probably here</span>
                </div>               
                <div className={styles.resourcesBox}>
                    <h2>Club Links</h2>
                    <div className={styles.resourcesRow}>
                        <div className={styles.resourceItem}>
                            <h3>GitHub</h3>
                            <p>Contribute to our club's projects and repositories.</p>
                            <p><a href="https://github.com/ud-devlab" target="_blank" rel="noreferrer">Visit our GitHub</a></p>
                        </div>
                        <div className={styles.resourceItem}>
                            <h3>Discord</h3>
                            <p>Join our server to chat, collaborate, and get announcements.</p>
                            <p><a href="https://discord.gg/jfGHuDvPEp" target="_blank" rel="noreferrer">Join our Discord</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}