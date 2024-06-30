import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

const BlogCard = ({ cards }) => {

    const router = new useRouter();
    const redirectPage = (href)  =>{    
        router.replace(`/adsense/${href}`)
    }


    return (
        <Grid container>
        {cards.map((card, index) => (
            <Grid key={index} item xs={12} lg={3.7} sx={{ display: "flex", alignItems: "center", mx: 1 }}>
                <Card variant="outlined" sx={{ p: 0, width: "100%", boxShadow: 2, ":hover": { cursor: 'pointer' } }} 
                    onClick={ () => redirectPage(card.href) }>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mr: 'auto' }}>
                        <Image src={card.img} alt="img" width="200" />
                    </Box>
                    <CardContent sx={{ paddingLeft: "30px", paddingRight: "30px", backgroundColor: cards.color }}>
                        <Typography sx={{ fontSize: "h6.fontSize", fontWeight: "500" }}>
                            {card.title}
                        </Typography>
                        <Typography color="textSecondary" sx={{ fontSize: "15px", fontWeight: "400", mt: 1 }}>
                            {card.subtitle}
                        </Typography>
                        <Button variant="contained" sx={{ mt: 3, backgroundColor: card.btncolor, fontSize: '11px', p:1, px: 2, borderRadius: 2 }}>
                            Learn More
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        ))}
        </Grid>
    );
};

export default BlogCard;
