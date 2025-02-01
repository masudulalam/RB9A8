import BannerDashboard from "../bannerDashboard/BannerDashboard";
import DashboardCard from "../dashboardCard/DashboardCard";
import TotalCost from "../totalCost/TotalCost";


const Dashboard = () => {
    return (
        <div>
            <BannerDashboard />
            <DashboardCard />
        </div>
    );
};

export default Dashboard;