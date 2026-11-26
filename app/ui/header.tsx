'use client'

import { Person, PersonOutlined, SearchOutlined, ShoppingBag, ShoppingBagOutlined } from "@mui/icons-material"
import { Grid, Stack, Box, Typography, TextField, Paper } from "@mui/material"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Header() {
    const [query, setQuery] = useState('')
    const router = useRouter()
    
    const handleSearch = (event: React.FormEvent) => {
        if (query.trim()){
            // navigates to /products?q=query
            router.push(`/products?name=${encodeURIComponent(query)}`)
        }
    }

    return (
        <>
        {/* desktop header */}
        <Grid component={Paper} container spacing={2} sx={{ px: 5, alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
            <Grid size={3}>
                <Typography variant="h5" sx={{fontWeight: "light", letterSpacing: 10}}>MENSTYLE</Typography>
            </Grid>
            <Grid size={6}>
                <Box sx={{ display: 'flex', alignItems: "center", p: 2 }}>
                    <SearchOutlined sx={{ mr:1 }} />
                    <TextField
                        sx={{ flex: 1 }}
                        variant="outlined"
                        label="Search Product"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        size="small"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSearch(e)
                            }
                        }}
                    />
                </Box> 
            </Grid>
            <Grid container spacing={2} size={3} sx={{ justifyContent: "flex-end" }}>
                <ShoppingBagOutlined />
                <PersonOutlined  />
            </Grid>
        </Grid>        

        {/* mobile header */}
        <Stack component={Paper} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Typography variant="h5" sx={{textAlign: 'center', fontWeight: "light", letterSpacing: 10, pt: 2 }}>MENSTYLE</Typography> 
        
            <Box sx={{ display: 'flex', alignItems: "center", px: 3, py: 2 }}>
                <SearchOutlined color='action' sx={{ mr:1 }} />
                <TextField
                    sx={{ flex: 1 }}
                    variant="outlined"
                    label="Search Product"
                    size="small"
                />
            </Box>  
        </Stack>
        </>
    )
}