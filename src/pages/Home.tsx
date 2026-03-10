import { NavBar } from "../components/NavBar";

export function Home() {
    return (
        <div>
            <NavBar currentPage="home" />
            <div className="content"></div>
        </div>
    );
}