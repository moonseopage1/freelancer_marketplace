import { useEffect, useState } from 'react';
import '../../../styles/message/freelancerMessage.css';
import { ConfigProvider } from 'antd';
import ChatList from '../../../components/root/freelancerMessage/sections/ChatList';
import ChatBox from '../../../components/root/freelancerMessage/sections/ChatBox';
import ChatActionList from '../../../components/root/freelancerMessage/sections/ChatActionList';

const FreelancerMessage = () => {
    //! TODO: this is used for development purpose only
    const [isMessageLoading, setIsMessageLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsMessageLoading(false);
        }, 3000);
    }, []);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Switch: {
                        colorPrimary: '#34C759',
                        trackMinWidth: '36px',
                    },
                },
            }}
        >
            <div className='sp1_marketplace_page_wrapper'>
                <div className='marketplace_message_wrapper'>
                    <div className='chat_list_lg'>
                        <ChatList isMessageLoading={isMessageLoading} />
                    </div>
                    <div className='chat_box_lg'>
                        <ChatBox isMessageLoading={isMessageLoading} />
                    </div>
                    <div className='chat_action_list_lg'>
                        <ChatActionList isMessageLoading={isMessageLoading} />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default FreelancerMessage;