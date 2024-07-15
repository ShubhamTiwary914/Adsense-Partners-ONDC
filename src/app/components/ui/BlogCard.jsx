import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import {COLORS} from '@/app/constant/THEME'
// import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';

const BlogCard = ({ cards }) => {

    const router = new useRouter();
    const redirectPage = (href)  =>{    
        router.replace(href)
    }


    return (
        <Grid container>
        {cards.map((card, index) => (
            <Grid key={index} item sm={12} lg={3.5} sx={{ display: "flex", alignItems: "center", mx: 5, mt: 5 }}>
                <Card variant="outlined" sx={{ width: "100%", boxShadow: 4, ":hover": { cursor: 'pointer', boxShadow: 10 }, borderRadius: 2 }} 
                    onClick={ () => redirectPage(card.href) }>
                    <CardContent sx={{ fontSize: "small", paddingLeft: "30px", paddingRight: "30px", backgroundColor: cards.color }}>
                        <Typography color="textSecondary"  sx={{ fontWeight: "bold"}}>
                            {card.title}
                        </Typography>
                        <Typography sx={{ fontSize: "large", fontWeight: "400", mt: 1 }}>
                            {card.subtitle}
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mr: 'auto' }}>
                            <Image src={card.img} alt="img" width={200}/>
                        </Box>
                        
                        <Box sx={{ mr: 4, mt: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Button variant={card.btnVariant}>
                                { card.btnText }
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        ))}
        </Grid>
    );
};

export default BlogCard;
