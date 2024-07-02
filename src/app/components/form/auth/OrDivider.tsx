import { Box, Divider, Typography, styled } from '@mui/material';


const FullWidthDivider = styled(Divider)(({ theme }) => ({
    flex: 1,
    borderColor: theme.palette.divider,
}));


const OrDivider: React.FC = () => {
    return (
        <Box display="flex" alignItems="center" my={1} width="100%">
        <FullWidthDivider />
        <Typography variant="body2" color="textSecondary" sx={{ mx: 2 }}>
            or
        </Typography>
        <FullWidthDivider />
        </Box>
    );
};

export default OrDivider;