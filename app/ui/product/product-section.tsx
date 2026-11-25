'use client'

import { Box, Paper, Typography } from "@mui/material"
import ProductCard from "./product-card";

export default function ProductSection({products}) {

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
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h6" color="secondary" sx={{ fontWeight:'medium', m:3 }}>BEST DEAL</Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight:'medium', m:3 }}>See All</Typography>
            </Box>
         
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    overflowX: 'auto',
                    p:2
                }}
                >
                    {
                        products.map((product, index)=>(
                            <ProductCard key={index} product={product}/>
                        ))
                    }
            </Box>
        </Box>
    )
}