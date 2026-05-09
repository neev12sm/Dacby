import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav
            className="
                bg-slate-900
                px-8
                py-4
                flex
                justify-between
                items-center
                shadow-lg
            "
        >

            <h1 className="text-cyan-400 text-2xl font-bold">
                Hacker News
            </h1>

            <div className="flex gap-6">

                <Link
                    className="text-white hover:text-cyan-400"
                    to="/"
                >
                    Home
                </Link>

                <Link
                    className="text-white hover:text-cyan-400"
                    to="/login"
                >
                    Login
                </Link>

                <Link
                    className="text-white hover:text-cyan-400"
                    to="/register"
                >
                    Register
                </Link>

                <Link
                    className="text-white hover:text-cyan-400"
                    to="/bookmarks"
                >
                    Bookmarks
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;