"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Box, Drawer, Grid, Typography } from "@mui/material";
import PageLinks from "@/app/utils/routes";
import PATH from "@/app/constant/ROUTES";
import { OrgContext } from '@/app/context/OrgProvider';
import Tooltip from '@mui/material/Tooltip';

const sideBar_BG = 'white'
//light blue - #1A97f5



const NAV_COLORS = {
    "select": { backgroundColor: "#e8f0fe", color: "#1969df", borderRadius: 2},
}





const Sidebar = (props) => {
    const [open, setOpen] = React.useState(0);
    const router = useRouter();
    const lgUp = true;
    const { org, setOrg, updateOrgSingle } = useContext(OrgContext)


    const handleClick = (index) => {
        if(open == index)
            return;
        setOpen(index)
    };
    

    if(!org.logged)
        router.replace(PATH.login)


    const handleNavigation = (href) => {
        router.replace(href)
    };


    const SidebarContent = (
        <Box sx={{ p: 2, height: "100%",
                backgroundColor: sideBar_BG, color: 'black', borderRight: '1px solid #050311', width: props.sideBarWidth }}>
            <Box>
                <Box sx={{ mt: 17 }}>
                    {PageLinks.map((item, index) => (
                        <Box
                            key={index}
                            component="div"
                            sx={{ 
                                ...(open === index && NAV_COLORS['select']),
                                mt: 2,
                                ":hover": { "cursor": 'pointer' }
                            }}
                        >
                            <Grid
                                container
                                alignItems="center"
                                onClick={() => {
                                    handleClick(index);
                                    handleNavigation(item.href);
                                }}
                                sx={{
                                    mb: 1,
                                    px: 2, py: 1,
                                    ...(true === item.href && { color: "red" }),
                                    
                                }}
                            >
                                <Grid item>
                                    <Tooltip title={item.title}> 
                                        <Box
                                            sx={{
                                                ...(open === index && NAV_COLORS['select']),
                
                                            }}
                                        >
                                            <item.icon />
                                        </Box>
                                    </Tooltip>
                                </Grid>
                                {
                                    (!props.navMode) && (
                                        <Grid item>
                                            <Typography 
                                                variant="body" 
                                                sx={{ 
                                                    ...(open === index && NAV_COLORS['select']),
                                                    ml: 2  // Add some margin to separate icon and text
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Grid>
                                    ) 
                                }
                            </Grid>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open={props.isSidebarOpen}
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: `${props.sidebarWidth}px`,
                        zIndex: 1
                    },
                }}
            >
                {SidebarContent}
            </Drawer>
        );
    }
    
    return (
        <Drawer
            anchor="left"
            open={props.isMobileSidebarOpen}
            onClose={props.onSidebarClose}
            PaperProps={{
                sx: {
                    width: sidebarWidth,
                    zIndex: 1
                },
            }}
            variant="temporary"
        >
            {SidebarContent}
        </Drawer>
    );
};

export default Sidebar;
