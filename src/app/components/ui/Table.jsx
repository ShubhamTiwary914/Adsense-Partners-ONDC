import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";


const ExTable = ({ columns, items }) => {
    return (
        <Table aria-label="simple table" sx={{ mt: 5, whiteSpace: "nowrap", border: '1px solid #ccc', borderRadius: '8px' }}>
        <TableHead>
            <TableRow>
            {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                <Typography color="textSecondary" variant="body1">
                    {column.label}
                </Typography>
                </TableCell>
            ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {items.map((item, index) => (
            <TableRow key={item.transactionId} sx={{ 
                backgroundColor: index % 2 === 0 ? 'white' : '#f7f7f7', 
                '&:hover': { backgroundColor: '#f0f0f0' }
            }}>
                {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                    {column.id === 'amount' ? `₹${item[column.id]}` : item[column.id]}
                    </Typography>
                </TableCell>
                ))}
            </TableRow>
            ))}
        </TableBody>
        </Table>
    );
};

export default ExTable;
