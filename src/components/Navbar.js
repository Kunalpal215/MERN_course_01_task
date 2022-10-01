import { Link } from "react-router-dom";
export function Navbar(){
    return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><h1>FriendsList 🥰</h1></Link>
        </div>
        </nav>
    );
}