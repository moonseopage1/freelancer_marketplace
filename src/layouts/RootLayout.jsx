import { Outlet } from "react-router-dom";
import FromTop from "../components/shared/global/FromTop";
import DynamicTitle from "../components/shared/global/DynamicTitle";
import Navbar from "../components/shared/root/Navbar";
import Sp1Navbar from "../components/shared/root/Sp1Navbar";
// import Sp1Footer from "../components/shared/root/Sp1Footer";

const RootLayout = () => {
    return (
        <main className="relative overflow-x-hidden">
            <FromTop>
                <Navbar />
                <Sp1Navbar />
                <DynamicTitle>
                    <div >
                        <Outlet />
                    </div>
                </DynamicTitle>
                {/* <Sp1Footer /> */}
            </FromTop>
        </main>
    );
};

export default RootLayout;