import { Input } from 'antd';
import PropTypes from 'prop-types';

const FilterInput = ({ label, value, placeholder, onChange, suffix, prefix }) => {
    return (
        <div className='filter_input_wrapper'>
            <label>{label}</label>
            <Input size="large" value={value} placeholder={placeholder} onChange={onChange} prefix={prefix} suffix={suffix} />
        </div>
    );
};

export default FilterInput;

FilterInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    suffix: PropTypes.any,
    prefix: PropTypes.any
}