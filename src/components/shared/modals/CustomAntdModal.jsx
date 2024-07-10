import { Divider, Modal } from 'antd';
import PropTypes from "prop-types";
import closeIcon from '../../../assets/global/icons/close-icon.svg';

const CustomAntdModal = ({ title, subTitle, isCentered, antdModalOpen, setAntdModalOpen, children, modalWidth }) => {
    return (
        <div>
            <Modal
                title={false}
                centered={isCentered || false}
                footer={null}
                maskClosable={false}
                open={antdModalOpen}
                closable={false}
                onCancel={false}
                width={modalWidth || 545}
            >
                <div>
                    <div className='flex justify-between items-center gap-2'>
                        <div>
                            <h3 className='text-[24px] font-semibold'>{title}</h3>
                            <p className='text-[16px] font-normal text-sp1-gray2'>{subTitle && subTitle}</p>
                        </div>
                        <button
                            onClick={() => setAntdModalOpen(false)}
                        >
                            <img src={closeIcon} className='w-[30px] h-[30px] rounded-full' alt="closeIcon" />
                        </button>
                    </div>
                    <Divider />
                    <div className=''>
                        {
                            children
                        }
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CustomAntdModal;

CustomAntdModal.propTypes = {
    title: PropTypes.node,
    subTitle: PropTypes.node,
    isCentered: PropTypes.bool,
    antdModalOpen: PropTypes.bool,
    setAntdModalOpen: PropTypes.func,
    children: PropTypes.node,
    modalWidth: PropTypes.number
}