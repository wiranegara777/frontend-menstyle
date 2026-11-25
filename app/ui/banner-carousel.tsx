"use client"

import { Button, Grid, Paper, Typography } from "@mui/material"
import Slider from "@ant-design/react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
    }

    const bannerConstant = [{
        title: 'PREMIUM ITEMS',
        description: 'Unlock Your Style now with our Premium collection.',
        image: '/banner/banner-1.jpg'
    },{
        title: 'AESTHETIC LOOK',
        description: 'Shop our products with ease.',
        image: '/banner/banner-2.jpg'
    },{
        title: 'CURATED LOCALLY',
        description: 'Locally Curated products to support local business',
        image: '/banner/banner-3.jpg'
    }]

    return (
        // <Box sx={{ overflow: 'hidden', minWidth: 0 }}>

        <Paper sx={{mt: 2, overflow: 'hidden', minWidth: 0 }}>
            <Slider {...settings}>
                {
                    bannerConstant.map((banner, index)=> (
                        <div key={index}> 
                            <Grid container sx={{width: '100%'}}>
                                <Grid container size={{xs:6, md:4}} sx={{ alignItems: 'center' }}>
                                    <Grid sx={{ml:5}}>
                                        <Typography sx={{fontWeight: 'medium', fontSize: { xs: '1rem', md:'2rem' }}}>{banner.title}</Typography>
                                        <Typography sx={{fontSize: { xs: '0.8rem', md:'1rem' }}}>{banner.description}</Typography>
                                        <Button color="primary" variant="contained" sx={{mt:2}}>Shop Now</Button>
                                    </Grid>
                                </Grid>
                                <Grid size={{ xs:6, md:8 }}>
                                    <Image 
                                        src={banner.image}
                                        alt="banner picture"
                                        width={1600}
                                        height={900}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </Slider>
        </Paper>
    )
}