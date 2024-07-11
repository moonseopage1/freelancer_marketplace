import { useEffect, useState } from 'react';
import { ConfigProvider, Skeleton } from 'antd';
import '../../../styles/marketPlaceProfile/marketPlaceProfile.css';
import { user_profile } from '../../../constants/userProfile';
import ProfileLeftSection from '../../../components/root/marketPlaceProfile/sections/ProfileLeftSection';
import ProfileRightSection from '../../../components/root/marketPlaceProfile/sections/ProfileRightSection';
import ProfileLeftSectionLoader from '../../../components/shared/loaders/freelancerProfileLoaders/ProfileLeftSectionLoader';
import ProfileRightSectionLoader from '../../../components/shared/loaders/freelancerProfileLoaders/ProfileRightSectionLoader';
import { useGetFreelancerProfileQuery } from '../../../redux/features/freelancerProfile/freelancerProfileApi';


const FreelancerProfile = () => {
    const { cover_image } = user_profile || {}
    const [isProfileLoading, setIsProfileLoading] = useState(true);

    const { data } = useGetFreelancerProfileQuery()

    //! TODO: This is used for development purpose only
    useEffect(() => {
        setTimeout(() => {
            setIsProfileLoading(false);
        }, 3000);
    }, [])

    return (
        <ConfigProvider
            theme={{
                components: {
                    Pagination: {
                        itemActiveBg: '#095AC6',
                    },
                },
            }}
        >
            <div className='sp1_marketplace_page_wrapper'>
                <div className='marketplace_profile_wrapper'>

                    {
                        isProfileLoading ? <div className='marketplace_cover_image'>
                            <Skeleton.Image block active={true} style={{ width: '100%', height: '366px' }} />
                        </div> : <img className='marketplace_cover_image' src={cover_image} alt="cover_image" />
                    }
                    <div className='marketplace_profile_body'>
                        <div className='marketplace_profile_body_contents'>
                            {
                                isProfileLoading ? <ProfileLeftSectionLoader /> : <ProfileLeftSection profileData={user_profile} />
                            }

                            {
                                isProfileLoading ? <ProfileRightSectionLoader /> : <ProfileRightSection profileData={user_profile} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default FreelancerProfile;