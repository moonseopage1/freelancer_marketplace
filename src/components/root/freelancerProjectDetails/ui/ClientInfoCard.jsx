import PropTypes from 'prop-types';

const ClientInfoCard = ({ title, children }) => (
    <div className='p_d_about_client_section'>
        <div className='p_d_title_wrapper'>
            <h4 className='p_d_title_600'>{title}</h4>
        </div>
        <div>{children}</div>
    </div>
);

export default ClientInfoCard;

ClientInfoCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}