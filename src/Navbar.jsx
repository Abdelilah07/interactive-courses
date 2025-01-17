import { Menu, Search, Bell } from "lucide-react";


const Navbar = () => {


    
    return (
        <div className="navbar bg-base-100 border rounded-xl shadow-md w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <Menu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href="/" className="btn btn-ghost text-xl">Interactive Courses</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <Search />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <Bell />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;