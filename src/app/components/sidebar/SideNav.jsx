"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Drawer, useMediaQuery, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import PageLinks from "@/app/utils/PageLinks";

import { useSelectedLayoutSegments } from 'next/navigation';
import orgLogo from './../../assets/logo/dummy-2.png';
import Image from "next/image";


const NAV_COLORS = {
    "select": { backgroundColor: "#1A97f5", color: "white", borderRadius: 3 },
    "unselect": { backgroundColor: "white", color: "black"}
}



const Sidebar = (props) => {
    const [open, setOpen] = React.useState(0);
    const router = useRouter();
    const pathDirect = router.asPath;
    const lgUp = true;

    const handleClick = (index) => {
        if (open === index) {
            setOpen((prevOpen) => !prevOpen);
        } else {
            setOpen(index);
        }
    };

    const handleNavigation = (href) => {
        router.replace(`/adsense/${href}/`)
    };

    const SidebarContent = (
        <Box sx={{ p: 3, height: "calc(100vh - 40px)" }}>
            <Box>
                <Box sx={{ display: 'flex', displayDirection: 'row', ml: 2, mb: 10 }}>
                    <Image src={orgLogo} width={40} />
                    <Typography variant="h5" gutterBottom sx={{ m: 1 }}> Organisation </Typography>
                </Box>
                <List sx={{ mt: 4 }}>
                    {PageLinks.map((item, index) => (
                        <List component="li" disablePadding key={item.title} 
                            sx={ (open == index) ? NAV_COLORS['select'] : NAV_COLORS['unselect'] } className="mt-4">
                            <ListItem
                                onClick={() => {
                                    handleClick(index);
                                    handleNavigation(item.href);
                                }}
                                button
                                sx={{
                                    mb: 1,
                                    ...(pathDirect === item.href && {
                                        color: "white",
                                    }),
                                }}
                            >
                                <ListItemIcon
                                    sx={
                                        (open == index) ? NAV_COLORS['select'] : NAV_COLORS['unselect']
                                    }
                                >
                                    <item.icon width="30" height="30" />
                                </ListItemIcon>
                                <Typography variant="body1">{item.title}</Typography>
                            </ListItem>
                        </List>
                    ))}
                </List>
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
                        width: props.sidebarWidth,
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
                    width: SidebarWidth,
                },
            }}
            variant="temporary"
        >
            {SidebarContent}
        </Drawer>
    );
};

export default Sidebar;
