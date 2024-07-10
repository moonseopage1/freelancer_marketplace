import { useState } from 'react';
import '../../../styles/listOfMilestones/listOfMilestones.css'
import { ConfigProvider, Select } from 'antd';
import ListOfMilestonesTable from '../../../components/root/listOfMilestones/sections/ListOfMilestonesTable';
import AntdTableSkeleton from '../../../components/shared/loaders/tableLoaders/AntdTableSkeleton';
import CreateMilestonePayModal from '../../../components/root/listOfMilestones/modals/CreateMilestonePayModal';

const ListOfMileStones = () => {
    const [activeFilterTab, setActiveFilterTab] = useState('incoming');
    // TODO: this loader state come from api later 
    const [isMilestoneDataLoading, setIsMilestoneDataLoading] = useState(false);
    const [isCreateMilestoneModalOpen, setIsCreateMilestoneModalOpen] = useState(false);

    return (
        <div className='sp1_marketplace_page_wrapper'>
            <div className='sp1_marketplace_section_wrapper list_of_milestones_page_wrapper'>
                <div className='list_of_milestones_header'>
                    <button onClick={() => setIsCreateMilestoneModalOpen(true)} className='list_of_milestones_btn'>Create Milestone Payment</button>
                    <div className='list_of_milestones_btn_wrapper'>
                        <button onClick={() => setActiveFilterTab('incoming')} className={activeFilterTab === 'incoming' ? 'list_of_milestones_btn' : 'list_of_milestones_btn_outline'}>Incoming(145)</button>
                        <button onClick={() => setActiveFilterTab('outgoing')} className={activeFilterTab === 'outgoing' ? 'list_of_milestones_btn' : 'list_of_milestones_btn_outline'}>Outgoing(14)</button>
                    </div>
                </div>
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                headerBg: 'transparent',
                            },
                            Select: {
                                selectorBg: '#1492E6',
                            },
                        },
                    }}
                >
                    <div className='list_of_milestones_body list_of_milestones_table_wrapper'>
                        {
                            isMilestoneDataLoading ? <AntdTableSkeleton columns={6} rows={10} /> : <ListOfMilestonesTable />
                        }
                        <div>
                            <Select
                                className='list_of_milestones_show_pages_select'
                                defaultValue="50"
                                style={{
                                    width: 120,
                                }}
                                // onChange={handleChange}
                                options={[
                                    {
                                        value: '10',
                                        label: 'Show 10',
                                    },
                                    {
                                        value: '20',
                                        label: 'Show 20',
                                    },
                                    {
                                        value: '50',
                                        label: 'Show 50',
                                    },
                                    {
                                        value: '100',
                                        label: 'Show 100',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </ConfigProvider>
            </div>
            {/* modals here */}
            <CreateMilestonePayModal antdModalOpen={isCreateMilestoneModalOpen} setAntdModalOpen={setIsCreateMilestoneModalOpen} />
        </div>



    );
};

export default ListOfMileStones;