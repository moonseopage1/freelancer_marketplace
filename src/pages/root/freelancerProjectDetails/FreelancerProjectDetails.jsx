import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../../styles/freelancerProjectDetails/freelancerProjectDetails.css';
import { dummy_projects } from '../../../constants/projects';
import bookmarkIcon from '../../../assets/freelancerProjectDetails/bookmark.svg';
import shareIcon from '../../../assets/freelancerProjectDetails/shareIcon.svg'
import Switch from '../../../components/shared/global/Switch';
import ProjectDetailsTab from '../../../components/root/freelancerProjectDetails/ui/ProjectDetailsTab';
import ProjectDetails from '../../../components/root/freelancerProjectDetails/sections/ProjectDetails';
import ProjectDetailsSkeleton from '../../../components/shared/loaders/freelancerProjectsLoaders/ProjectDetailsSkeleton';
import Proposals from '../../../components/root/freelancerProjectDetails/sections/Proposals';
import ProposalsPageSkeleton from '../../../components/shared/loaders/freelancerProjectsLoaders/ProposalsPageSkeleton';
import Payment from '../../../components/root/freelancerProjectDetails/sections/Payment';
import Files from '../../../components/root/freelancerProjectDetails/sections/Files';
import Tasklists from '../../../components/root/freelancerProjectDetails/sections/Tasklists';

const FreelancerProjectDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeTab = searchParams.get('tab') || 'Details';

    // TODO: it will replaced later with real api loading 
    const [isProjectDataLoading, setIsProjectDataLoading] = useState(false);

    //!! TODO: This is used development only for now, It should be removed in production
    const singleProject = dummy_projects[0];

    const { id, project_id, title, description, details, currency, budget_range, average_bid_amount, bids_count, average_rating, reviews_count, skills, client_info, isAwarded, bidding_deadline, created_at, updated_at } = singleProject || {};

    return (
        <div className='sp1_marketplace_page_wrapper'>
            <div>
                <div className='p_d_header'>
                    <div className='p_d_header_title_wrapper'>
                        <h2 className='p_d_header_title'>{title} {isAwarded && <span className='p_d_header_title_badge'>Accepted</span>}</h2>
                    </div>
                    <div className='p_d_header_bids_amount_wrapper'>
                        <div>
                            <p className='p_d_header_bids_amount_title'>Bids</p>
                            <span className='p_d_header_bids_amount'>{bids_count}</span>
                        </div>
                        <div>
                            <p className='p_d_header_bids_amount_title'>Average bid</p>
                            <span className='p_d_header_bids_amount'>{currency?.symbol}{average_bid_amount} {currency?.code}</span>
                        </div>
                    </div>
                </div>
                <div className='sp1_marketplace_section_wrapper'>
                    <div className='p_d_tab_wrapper'>
                        <ProjectDetailsTab isAwarded={isAwarded} />
                        <div className='p_d_tab_action_wrapper'>
                            <button className='bg-transparent'>
                                <img src={bookmarkIcon} alt="bookmarkIcon" />
                            </button>
                            <button className='bg-transparent'>
                                <img src={shareIcon} alt="shareIcon" />
                            </button>
                        </div>
                    </div>
                    <div className=''>
                        <Switch>
                            <Switch.Case condition={activeTab === 'Details'}>
                                {
                                    isProjectDataLoading ? <ProjectDetailsSkeleton /> : <ProjectDetails singleProject={singleProject} />
                                }
                            </Switch.Case>
                            <Switch.Case condition={activeTab === 'Proposals'}>
                                {
                                    isProjectDataLoading ? <ProposalsPageSkeleton /> : <Proposals />
                                }
                            </Switch.Case>
                            <Switch.Case condition={activeTab === 'Payment'}>
                                <Payment />
                            </Switch.Case>
                            <Switch.Case condition={activeTab === 'Files'}>
                                <Files isProjectDataLoading={isProjectDataLoading} />
                            </Switch.Case>
                            <Switch.Case condition={activeTab === 'Task-lists'}>
                                <Tasklists />
                            </Switch.Case>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreelancerProjectDetails;