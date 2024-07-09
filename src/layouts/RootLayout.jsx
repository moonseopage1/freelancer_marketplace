import { Outlet } from "react-router-dom";
import FromTop from "../components/shared/global/FromTop";
import DynamicTitle from "../components/shared/global/DynamicTitle";
import Navbar from "../components/shared/root/Navbar";

const RootLayout = () => {
    return (
        <main className="relative overflow-x-hidden">
            <FromTop>
                <Navbar />
                <DynamicTitle>
                    <div >
                        <Outlet />
                    </div>
                </DynamicTitle>
                {/* <OurContactDetails /> */}
                {/* <Footer /> */}
            </FromTop>
        </main>
    );
};

export default RootLayout;