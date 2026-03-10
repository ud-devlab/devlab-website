import { NavBar } from "../components/NavBar";

export function NotFound() {
    return (
        <div>
            <NavBar currentPage="notfound" />
            <div className="content"></div>
        </div>
    );
}