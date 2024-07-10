import { Tabs } from 'antd';
import { useEffect, useMemo } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const items = [
    {
        key: 'Details',
        label: 'Details',
    },
    {
        key: 'Proposals',
        label: 'Proposals',
    },
    {
        key: 'Payment',
        label: 'Payment',
    },
    {
        key: 'Files',
        label: 'Files',
    },
    {
        key: 'Task-lists',
        label: 'Task lists',
    },
];

const ProjectDetailsTab = ({ isAwarded }) => {
    const { projectId } = useParams(); // Assuming your route has a projectId parameter like '/marketplace-project-details/:projectId'
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
    const activeTab = searchParams.get('tab') || 'Details';

    useEffect(() => {
        // If the URL doesn't have the 'tab' parameter, set it to 'Details' by default
        if (!searchParams.get('tab')) {
            navigate(`?tab=Details`, { replace: true });
        }
    }, [navigate, searchParams]);

    const onChange = (key) => {
        navigate(`?tab=${key}`);
    };

    return (
        <Tabs activeKey={activeTab} items={!isAwarded ? items.slice(0, 2) : items} onChange={onChange} tabBarGutter={16} />
    );
};

export default ProjectDetailsTab;

ProjectDetailsTab.propTypes = {
    isAwarded: PropTypes.bool
}