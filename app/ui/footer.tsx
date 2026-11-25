import { FavoriteBorderOutlined, HomeOutlined, PersonOutlined, ShoppingBagOutlined } from "@mui/icons-material"
import { Box, Grid, Paper, Stack, Typography } from "@mui/material"

export default function Footer() {
    return (
        <>
        {/* <Box sx={{mt:4, bgcolor: '#979797', py: 10}}>
            <Stack sx={{ textAlign:'center'}}>
                <Typography> Lorem ipsum dolor, sit amet consectetur adipisicing elit </Typography>
                <Typography> Incidunt consequuntur amet culpa cum itaque neque. </Typography>   
            </Stack>
            

            <Box sx={{ gap: 5, mt:6, display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                <Typography>About</Typography>
                <Typography>Careers</Typography>
                <Typography>History</Typography>
                <Typography>Services</Typography>
                <Typography>Projects</Typography>
                <Typography>Blog</Typography>
            </Box>
        </Box> */}

        {/* mobile Footer */}
        <Grid 
            component={Paper}
            container 
            sx={{
                height: '64px', 
                position: 'fixed', 
                bottom: 0, 
                left:0, 
                width: '100%',  
                display: { alignItems: 'center', xs: 'flex', md: 'none' } 
                }}
        >
            <Grid container size={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <HomeOutlined />
            </Grid>
            <Grid container size={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <ShoppingBagOutlined />
            </Grid>
            <Grid container size={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <PersonOutlined />
            </Grid>
        </Grid>
        </>
    )
}