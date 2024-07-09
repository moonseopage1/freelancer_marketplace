import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Sp1MarketPlaceHome from "../pages/root/home/Sp1MarketPlaceHome";
import ListOfMileStones from "../pages/root/listOfMilestones/ListOfMileStones";
import BidInsights from "../pages/root/bidInsights/BidInsights";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Sp1MarketPlaceHome />,
            },
            {
                path: "/marketplace-projects",
                element: <h2>Marketplace Projects</h2>,
            },
            {
                path: "/marketplace-project-details",
                element: <h2>Marketplace Project Details</h2>,
            },
            {
                path: "/marketplace-bid-insights",
                element: <BidInsights />,
            },
            {
                path: "/marketplace-milestones",
                element: <ListOfMileStones />,
            },
            {
                path: "/marketplace-profile",
                element: <h2>Marketplace Profile</h2>,
            },
            {
                path: "/marketplace-message",
                element: <h2>Marketplace Message</h2>,
            },
        ],
    },
]);