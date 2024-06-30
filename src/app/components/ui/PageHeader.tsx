import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

import { 
    Box, Typography, IconButton, InputBase, Paper
} from "@mui/material"


import Search from './Search'

//@ts-ignore
export default function PageHeader({ title, subtitle  }){
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
            <Box>
                <Typography variant="h5"> {title} </Typography>
                <Typography variant="subtitle1"> {subtitle} </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ mx: 3 }}>
                    <NotificationsActiveOutlinedIcon />
                </IconButton>  
                <Search/>
            </Box>
        </Box>
    );
};