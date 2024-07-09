import { useState } from 'react';
import '../../../styles/bidInsights/bidInsights.css'
import { ConfigProvider } from 'antd';
import BidInsightsTable from '../../../components/root/bidInsights/sections/BidInsightsTable';
import AntdTableSkeleton from '../../../components/shared/loaders/tableLoaders/AntdTableSkeleton';

const BidInsights = () => {
    // TODO: it will be updated in future by api
    const [isBidInsightsTableLoading, setIsBidInsightsTableLoading] = useState(true);
    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        headerBg: 'transparent',
                    },
                },
            }}
        >
            <div className='sp1_marketplace_page_wrapper'>
                <div className='sp1_marketplace_section_wrapper list_of_milestones_page_wrapper'>
                    <div className='list_of_milestones_body list_of_milestones_table_wrapper'>
                        {
                            isBidInsightsTableLoading ? <AntdTableSkeleton columns={8} rows={8} /> : <BidInsightsTable />
                        }
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default BidInsights;