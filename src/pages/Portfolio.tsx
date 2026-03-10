import { NavBar } from "../components/NavBar";

export function Portfolio() {
    return (
        <div>
            <NavBar currentPage="portfolio" />
            <div className="content"></div>
        </div>
    );
}