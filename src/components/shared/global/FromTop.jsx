import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const FromTop = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location?.pathname]);
    return children;
};

export default FromTop;

FromTop.propTypes = {
    children: PropTypes.node
}