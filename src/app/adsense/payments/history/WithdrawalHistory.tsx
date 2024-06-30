import Table from './../../../components/ui/Table';
import { Box, Grid, TextField, Button } from '@mui/material';


const columns = [
    { id: 'transactionId', label: 'Transaction ID' },
    { id: 'amount', label: 'Amount (INR)', align: 'right' },
    { id: 'accountName', label: 'Account Name' },
    { id: 'source', label: 'Source' },
    { id: 'date', label: 'Date' },
];

const items = [
    {
        transactionId: "TXN123456",
        amount: "5000",
        accountName: "John Doe",
        source: "Bank Transfer",
        date: "2024-06-01",
    },
    {
        transactionId: "TXN123457",
        amount: "15000",
        accountName: "Jane Smith",
        source: "Credit Card",
        date: "2024-06-05",
    },
    {
        transactionId: "TXN123458",
        amount: "2000",
        accountName: "Bob Johnson",
        source: "Cash Deposit",
        date: "2024-06-10",
    },
    {
        transactionId: "TXN123459",
        amount: "7500",
        accountName: "Alice Brown",
        source: "Online Transfer",
        date: "2024-06-15",
    },
];



const SearchRow = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <TextField label="Transaction ID" variant="outlined" size="small" sx={{ mr: 2 }} />
        <TextField label="Source" variant="outlined" size="small" sx={{ mr: 2 }} />
        <TextField label="Amount" variant="outlined" size="small" sx={{ mr: 2 }} />
        <Box sx={{ ml: 2 }}>
        <Button variant="outlined" sx={{ borderColor: 'black', color: 'black', backgroundColor: 'white', mx: 3, fontSize: '11px' }}>
            Search
        </Button>
        <Button variant="outlined" sx={{ borderColor: 'red', color: 'red', backgroundColor: 'white', fontSize: '11px' }}>
            Clear
        </Button>
        </Box>
    </Box>
);


export default function WithdrawalHistory(){
    return (
        <Grid>
            <SearchRow />
            <Table columns={columns} items={items}/>
        </Grid>
    )
}