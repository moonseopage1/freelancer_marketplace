import { Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import sp1Logo from '../../../assets/global/sp1_logo.svg';
import { footer_important_links, footer_nav_links, footer_social_links } from '../../../constants/footerLinks';

const Sp1Footer = () => {
    return (
        <footer className='sp1_footer bg-sp1-lightblue border-b-[8px] border-t-2 border-primary-main'>
            <div className='sp1_marketplace_container mt-[40px] md:mt-[75px] flex flex-col md:flex-row items-center justify-between gap-[16px]'>
                <div>
                    <img src={sp1Logo} alt="sp1_logo" className='max-w-[150px] xs:max-w-[200px] md:max-w-[260px]' />
                </div>
                <div className='flex flex-col md:flex-row items-center md:items-end gap-[20px] md:gap-[40px] lg:gap-[80px]'>
                    <div className='flex flex-wrap justify-center md:grid grid-cols-2 gap-4'>
                        {
                            footer_important_links.map(({ id, url, label }) => (
                                <div key={id}>
                                    <NavLink to={url} className={({ isActive }) => (isActive ? 'text-primary-main text-[14px] uppercase' : 'text-primary-black text-[14px] uppercase')}>{label}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-[24px]'>
                        <span className='text-[16px] text-sp1-dark1 opacity-50'>Social Media</span>
                        <div className='flex items-center gap-[24px]'>
                            {
                                footer_social_links.map(({ id, url, icon, label }) => (
                                    <div key={id}>
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            <img src={icon} alt={label} />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className='sp1_marketplace_container flex flex-col md:flex-row justify-between items-center gap-2 pb-[24px]'>
                <div className='flex items-center justify-center md:justify-start flex-wrap gap-[20px] md:gap-[40px]'>
                    {
                        footer_nav_links.map(({ id, url, label }) => (
                            <div key={id}>
                                <NavLink to={url} className={({ isActive }) => (isActive ? 'text-primary-main text-[16px] uppercase' : 'text-primary-black text-[16px] uppercase')}>{label}</NavLink>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <p className='text-[16px] text-sp1-dark1 opacity-50'>Copyright © {new Date().getFullYear()} • Seopage1</p>
                </div>
            </div>
        </footer>
    );
};

export default Sp1Footer;