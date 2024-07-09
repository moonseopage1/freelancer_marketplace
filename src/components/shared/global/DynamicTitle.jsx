import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const formatTitleFromPath = (path) => {
    const pathParts = path.split("/");
    const lastPathPart = pathParts[pathParts.length - 1];

    // Replace hyphens with spaces and capitalize the first letter of every word
    const formattedTitle = lastPathPart
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return formattedTitle;
};

const DynamicTitle = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const formattedTitle = formatTitleFromPath(location.pathname);
        window.document.title = `Seopage1 ${formattedTitle && ` | ${formattedTitle}`}`;
    }, [location]);

    return children;
};

export default DynamicTitle;
