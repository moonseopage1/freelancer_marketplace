import { Divider, Skeleton } from 'antd';
import PropTypes from 'prop-types';

const LgDataCardWithHeaderLoader = ({ actionCompo, children }) => {
    return (
        <div className='lg_data_card_with_header'>
            <div className='lg_data_card_header_wrapper'>
                <div style={{ maxWidth: '150px', width: '100%' }}>
                    <Skeleton.Button active={true} size={'small'} block={true} shape={'default'} />
                </div>
                {actionCompo}
            </div>
            <Divider />
            <div>
                {children}
            </div>
        </div>
    );
};

export default LgDataCardWithHeaderLoader;

LgDataCardWithHeaderLoader.propTypes = {
    actionCompo: PropTypes.node,
    children: PropTypes.node
}