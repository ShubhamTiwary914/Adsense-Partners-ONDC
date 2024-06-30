import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';


const MenuItems = [
    {
        title: "Dashboard",
        icon: DashboardOutlinedIcon,
        href: "dashboard",
    },

    {
        title: "Analytics",
        icon: AnalyticsOutlinedIcon,
        href: "analytics",
    },

    {
        title: "Payments",
        icon: AccountBalanceOutlinedIcon,
        href: "payments",
    },

    {
        title: "Ads",
        icon: CampaignOutlinedIcon,
        href: "ads",
    },

    {
        title: "Settings",
        icon: ManageAccountsOutlinedIcon,
        href: "settings",
    },

];

export default MenuItems;
