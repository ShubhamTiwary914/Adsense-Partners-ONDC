"use client";
import { Box, Drawer, Typography, IconButton, Grid } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';


// import Search from './../ui/Search'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import {useRouter} from "next/navigation"
import Tooltip from '@mui/material/Tooltip';


import PATH from "@/app/constant/ROUTES";
import { useContext } from "react";
import { OrgContext } from "@/app/context/OrgProvider";



const Header = ({ setNavSize, navSize }) =>{
    const router = useRouter();
    const { org, logOffOrg } = useContext(OrgContext)

    const logout = () =>{
        logOffOrg()
        router.replace(PATH.login)
    }

    if(!org.logged)
        router.replace(PATH.login);


    return (
        <Drawer anchor="top" open={true} variant="persistent"  PaperProps={{  sx: { zIndex: 3, borderBottom: '1px solid black' }  }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'row' }}>
                    <Box>
                        <IconButton onClick={()=>setNavSize(old=> !old)}>
                            {(!navSize) ? <MenuIcon sx={{ fontSize: '35px'}}/> : <CloseIcon sx={{ fontSize: '35px' }}/>}
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ width: '120%', m:1, ml: 2 }}> {org.name}'s Adsense </Typography>
                    </Box>
                </Box>

            
                <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mt: 1}}>
                    {/* <Search/> */}
                    <Tooltip title="notifications" placement="bottom"> 
                        <IconButton sx={{ color: 'black' }}>
                            <NotificationsOutlinedIcon />
                        </IconButton>  
                        </Tooltip>
                    <Tooltip title="logout" placement="bottom"> 
                        <IconButton sx={{ ml: 2, color: 'black' }}>
                            <LogoutIcon onClick={logout}/>
                        </IconButton>  
                    </Tooltip>
                </Grid>
            
            </Box>
        </Drawer>
    )
}

export default Header;
