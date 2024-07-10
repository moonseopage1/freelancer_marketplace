import erpUser from '../../../assets/global/icons/erp_user.svg';
import projectIcon from '../../../assets/global/icons/project-1.svg';
import notificationIcon from '../../../assets/global/icons/notification-bing.svg';
import messageIcon from '../../../assets/global/icons/message-2.svg';
import folderIcon from '../../../assets/global/icons/folder-open.svg';
import logoutIcon from '../../../assets/global/icons/shutdown-1.svg';
import { Link, NavLink } from 'react-router-dom';
import { user_profile } from '../../../constants/userProfile';

const Sp1Navbar = () => {
    // const [open, setOpen] = useState(false);
    const { avatar } = user_profile || {}
    return (
        <nav className="sp1_navbar bg-primary-white border-b">
            <div className="sp1_marketplace_container flex items-center justify-between gap-2 py-2">
                <div className="flex items-center gap-[24px]">
                    <div className='flex items-center gap-2 border-r border-r-sp1-lightGray pr-[24px]'>
                        <img src={erpUser} alt="erpUser" className='w-[40px] h-[40px] rounded-full object-cover' />
                        <div className='hidden xs:block'>
                            <h5 className='text-[16px] text-primary-black'>A.khalid</h5>
                            <p className='text-[12px] text-sp1-gray1'>DGM</p>
                        </div>
                    </div>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-2 text-primary-main"
                                : "flex items-center gap-2"
                        }
                    >
                        <img src={projectIcon} className='w-[24px]' alt="projectIcon" />
                        <span className='text-[14px] font-medium hidden xs:block'>Projects</span>
                    </NavLink>
                </div>
                <div className="flex items-center gap-2 leading-[42px]">
                    <div className='flex items-center gap-[16px] border-r border-r-sp1-lightGray pr-[10px]'>
                        <div className='flex items-center gap-[12px]'>
                            <Link to="/">
                                <img src={notificationIcon} className='w-[24px]' alt="notificationIcon" />
                            </Link>
                            <Link to="/marketplace-message" className='relative'>
                                <img src={messageIcon} className='w-[24px]' alt="messageIcon" />
                                <span className='sp1_notification_badge'>2</span>
                            </Link>
                            <Link to="/" className='relative'>
                                <img src={folderIcon} className='w-[24px]' alt="folderIcon" />
                                <span className='sp1_notification_badge'>2</span>
                            </Link>
                        </div>
                        <NavLink to="/marketplace-profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 text-primary-main"
                                    : "flex items-center gap-2"
                            }
                        >
                            <img src={avatar} className='w-[34px] h-[34px] rounded-[5px] object-cover' alt="freelancer_avatar" />
                            <span className='text-[14px] hidden xs:block'>@rajat07me</span>
                        </NavLink>
                    </div>
                    <Link to="/" className='flex items-center gap-2'>
                        <img src={logoutIcon} alt="logoutIcon" />
                        <span className='text-[14px] hidden xs:block'>Logout</span>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Sp1Navbar;
