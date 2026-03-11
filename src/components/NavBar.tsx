import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import devlabLogo from "../assets/DevLab-Centered-Logo-Transparent-ContentCrop.png";

export function NavBar(props: { currentPage: string }) {
    console.log(props.currentPage);
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <Link to="/" className={styles.navbarLink}><img src={devlabLogo} alt="DevLab Logo" width={100} /></Link>
            </div>
            <div className={styles.navbarRight}>
                <Link to="/about" className={styles.navbarLink}>About</Link>
                <Link to="/portfolio" className={styles.navbarLink}>Portfolio</Link>
                <Link to="/resources" className={styles.navbarLink}>Resources</Link>
            </div>
        </div>
    );
}