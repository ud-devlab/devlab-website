import { NavBar } from "../components/NavBar";
import styles from "./Resources.module.css";
export function Resources() {
    return (
        <div>
            <NavBar currentPage="resources" />
            <div className="content">
                <div className ={styles.mainBox}>
                    <h1>Resources</h1>
                    <span className={styles.description}>Need something? It's probably here</span>
                </div>
            </div>

        </div>
    );
}
