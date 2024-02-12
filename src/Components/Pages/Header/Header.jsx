import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-10/12 mx-auto my-10">

            <header className="flex justify-between items-center">
                <div>
                    <img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/logo/CareerHub.png?raw=true" alt="" />
                </div>

                <nav>
                    <ul className="flex justify-center items-center gap-10 text-xl font-semibold text-gray-500">
                        <li><NavLink>Statistic</NavLink></li>
                        <li><NavLink>Applied Jobs</NavLink></li>
                        <li><NavLink>Blog</NavLink></li>
                    </ul>
                </nav>

                <div>
                    <button className="btn text-white capitalize bg-gradient-to-r from-blue-400  to-blue-500">Star Applying</button>
                </div>

            </header>

        </div>
    );
};

export default Header;