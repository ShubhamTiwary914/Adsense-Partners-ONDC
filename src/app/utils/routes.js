import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

import PATH from '../constant/ROUTES';


const MenuItems = [
    {
        title: "Dashboard",
        icon: DashboardOutlinedIcon,
        href: PATH.dashboard,
    },

    {
        title: "Analytics",
        icon: AnalyticsOutlinedIcon,
        href:  PATH.analytics,
    },

    {
        title: "Payments",
        icon: AccountBalanceOutlinedIcon,
        href: PATH.payments,
    },

    {
        title: "Ads",
        icon: CampaignOutlinedIcon,
        href: PATH.ads,
    },

    {
        title: "Settings",
        icon: ManageAccountsOutlinedIcon,
        href: PATH.settings,
    },

];

export default MenuItems;
