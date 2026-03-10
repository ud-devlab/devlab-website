import { NavBar } from "../components/NavBar";

export function About() {
    return (
        <div>
            <NavBar currentPage="about" />
            <div className="content"></div>
        </div>
    );
}