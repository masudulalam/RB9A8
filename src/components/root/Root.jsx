import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto"> 
            {/* Navbar */}
            <Navbar />
            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-285px)]">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Root;