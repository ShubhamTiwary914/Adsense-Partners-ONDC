import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const topStats = [
    {
        title: 'Impressions',
        value: 'k',
        Icon: CampaignOutlinedIcon,
        bg: '#d5f3f2',
        color: '#12b9b2'
    },
    {
        title: 'Clicks',
        value: '',
        Icon: AdsClickOutlinedIcon,
        bg: '#f8dddd',
        color: '#f65368'
    },
    {
        title: 'Orders',
        value: '',
        Icon: ShoppingCartOutlinedIcon,
        bg: '#f8ecdc',
        color: '#ee9d01'
    },
    {
        title: 'Earnings',
        value: '$',
        Icon: CurrencyExchangeOutlinedIcon,
        bg: '#d3edfa',
        color: '#293342'
    }
]


function generator(){
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    let ranges = [[10,57],[100,200],[15,30],[30,60]]
    let units = ['k', '', '', '$']
    for(let i=0; i<topStats.length; i++){
        topStats[i]['value'] = `${ getRandomNumber(10, 20)}${units[i]}`
    }
        
    
    return topStats
}


export { topStats, generator }