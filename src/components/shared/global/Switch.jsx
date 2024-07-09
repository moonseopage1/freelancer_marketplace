import PropTypes from 'prop-types';

const Switch = ({ children }) => {
    return (
        <> {children} </>
    )
}

const Case = ({ children, condition }) => {
    if (!condition) return null;
    return (
        <>{children}</>
    )
}

Switch.Case = Case;
export default Switch

// PropTypes here
Switch.propTypes = {
    children: PropTypes.node
}

Case.propTypes = {
    children: PropTypes.node,
    condition: PropTypes.bool
}