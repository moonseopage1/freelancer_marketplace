import { Link, NavLink } from "react-router-dom";
import sp1_logo from "../../../assets/global/sp1_logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
// import { useGetUserQuery } from "../../../redux/features/auth/authApi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const { data } = useGetUserQuery(undefined);
    return (
        <nav className="relative z-50">
            <div className=" bg-[#F2F4F7]">
                <div className="sp1_marketplace_container flex items-center justify-between py-2">
                    <Link to="/">
                        <div className="flex items-center gap-1 font-medium">
                            <span>Seopage1</span>
                            <img className="w-[80px]" src={sp1_logo} alt="sp1_logo" />
                        </div>
                    </Link>
                    <div>
                        <ul
                            className={`flex py-4  items-center duration-200 bg-[#F2F4F7] text-primary-gray z-[999] flex-col md:p-0  top-[45px] lg:bg-transparent w-full lg:w-auto lg:flex-row absolute lg:static ${open ? "left-0" : "-left-full"
                                }`}
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded flex items-center text-primary-main text-[16px] "
                                            : "px-4 py-2 rounded flex items-center text-[16px] "
                                    }
                                    onClick={() => setOpen(!open)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/marketplace-projects"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded flex items-center text-primary-main text-[16px] "
                                            : "px-4 py-2 rounded flex items-center text-[16px] "
                                    }
                                    onClick={() => setOpen(!open)}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/marketplace-project-details"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded flex items-center text-primary-main text-[16px] "
                                            : "px-4 py-2 rounded flex items-center text-[16px] "
                                    }
                                    onClick={() => setOpen(!open)}
                                >
                                    Project Details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/marketplace-bid-insights"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded flex items-center text-primary-main text-[16px] "
                                            : "px-4 py-2 rounded flex items-center text-[16px] "
                                    }
                                    onClick={() => setOpen(!open)}
                                >
                                    Bid Insights
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/marketplace-milestones"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded flex items-center text-primary-main text-[16px] "
                                            : "px-4 py-2 rounded flex items-center text-[16px] "
                                    }
                                    onClick={() => setOpen(!open)}
                                >
                                    Milestones
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/marketplace-message"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded flex items-center text-primary-main text-[16px] "
                                            : "px-4 py-2 rounded flex items-center text-[16px] "
                                    }
                                    onClick={() => setOpen(!open)}
                                >
                                    Message
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/marketplace-profile"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-4 py-2 rounded flex items-center text-primary-main text-[16px] "
                                            : "px-4 py-2 rounded flex items-center text-[16px] "
                                    }
                                    onClick={() => setOpen(!open)}
                                >
                                    Profile
                                </NavLink>
                            </li>

                        </ul>
                        <div>
                            <IoMenuSharp
                                onClick={() => setOpen(!open)}
                                className="text-[30px] text-primary-gray lg:hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
