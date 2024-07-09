import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Sp1MarketPlaceHome from "../pages/root/home/Sp1MarketPlaceHome";
import ListOfMileStones from "../pages/root/listOfMilestones/ListOfMileStones";
import BidInsights from "../pages/root/bidInsights/BidInsights";
import FreelancerProjects from "../pages/root/freelanerProjects/FreelancerProjects";
import FreelancerMessage from "../pages/root/freelancerMessage/FreelancerMessage";
import FreelancerProjectDetails from "../pages/root/freelancerProjectDetails/FreelancerProjectDetails";
import FreelancerProfile from "../pages/root/marketplaceProfile/FreelancerProfile";

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
                element: <FreelancerProjects />,
            },
            {
                path: "/marketplace-project-details",
                element: <FreelancerProjectDetails />,
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
                element: <FreelancerProfile />,
            },
            {
                path: "/marketplace-message",
                element: <FreelancerMessage />,
            },
        ],
    },
]);