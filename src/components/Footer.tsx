import styles from "./Footer.module.css";

export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.column}>
                <p>Contact</p>
                <p>Email: UDDevLab@gmail.com</p>
                <p>Discord: <a href="https://discord.gg/unTJ5ePKmf">discord.gg/unTJ5ePKmf</a></p>
            </div>
        </div>
    );
}