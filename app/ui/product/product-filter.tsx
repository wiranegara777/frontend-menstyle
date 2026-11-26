'use client';

import React, { useEffect, useState } from 'react';
import {
  Box, Drawer, Button, Chip, Slider, Autocomplete, TextField,
  Typography, IconButton, InputAdornment,
  Card,
  Paper
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function ProductFilter({
    filters={},
    handleChangeFilter=()=>{},
    categories=[],
    brands=[],
    colours=[]
}) {
  const [open, setOpen] = useState(false);
  
  // Filter State
  const [selectedCategories, setSelectedCategories] = useState(filters?.category_ids || []);
  const [selectedSizes, setSelectedSizes] = useState(filters?.sizes || []);
  const [selectedBrands, setSelectedBrands] = useState(filters?.brands || []);
  const [selectedColours, setSelectedColours] = useState(filters?.colours || []);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const toggleSelection = (key, list, setList, item) => {
    const updatedList = list.includes(item) ? list.filter(i => i !== item) : [...list, item]
    setList(updatedList);
    handleChangeFilter({[key]: updatedList})
  };


const pluckId = (items) => {
    const ids = items.map(({ id }) => id)
    return ids
}

  return (
    <Box>
      {/* Trigger Button */}
      {/* <Button variant="outlined" startIcon={<FilterListIcon />} onClick={() => setOpen(true)}>
        Filters
      </Button> */}

      {/* Drawer */}
      {/* <Drawer anchor="right" open={open} onClose={() => setOpen(false)}> */}
        <Box sx={{ width: '100%', p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Filters</Typography>
            {/* <IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton> */}
          </Box>

          <Box sx={{ flex: 1, overflowY: 'auto' }}>
            {/* Categories */}
        
                <Typography variant="subtitle2" sx={{ mt: 1 }}>Category</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 1 }}>
                {categories.map(cat => (
                    <Chip
                    key={cat?.id}
                    label={cat?.name}
                    onClick={() => toggleSelection('category_ids',selectedCategories, setSelectedCategories, cat?.id)}
                    color={selectedCategories.includes(cat?.id) ? 'primary' : 'default'}
                    variant={selectedCategories.includes(cat?.id) ? 'filled' : 'outlined'}
                    />
                ))}
                </Box>
            
            <Typography variant="subtitle2" sx={{ mt: 2 }}>Price Range</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1, alignItems: 'center' }}>
                <TextField
                    label="Min"
                    type="number"
                    size="small"
                    value={minPrice}
                    onChange={(e) => {
                        setMinPrice(e.target.value)
                        handleChangeFilter({ min_price: e.target.value })
                    }}
                    fullWidth
                />
                <Typography sx={{ color: 'text.secondary' }}>–</Typography>
                <TextField
                    label="Max"
                    type="number"
                    size="small"
                    value={maxPrice}
                    onChange={(e) => {
                        setMaxPrice(e.target.value)
                        handleChangeFilter({ max_price: e.target.value })
                    }}
                    fullWidth
                />
            </Box>

            {/* Brand Search */}
            <Typography variant="subtitle2" sx={{ mt: 2 }}>Brand</Typography>
            <Autocomplete
              multiple
              options={brands}
              value={selectedBrands}
              onChange={(_, newValue) => {
                    setSelectedBrands(newValue)
                    const brandIds = newValue.map(({ id }) => id)
                    handleChangeFilter({ brand_ids: brandIds })
                }
              }
              renderInput={(params) => <TextField {...params} placeholder="Search brands..." />}
              sx={{ mt: 1 }}
            />

            {/* Sizes */}
            <Typography variant="subtitle2" sx={{ mt: 2 }}>Size</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 1 }}>
              {SIZES.map(size => (
                <Chip
                  key={size}
                  label={size}
                  onClick={() => toggleSelection('sizes', selectedSizes, setSelectedSizes, size)}
                  color={selectedSizes.includes(size) ? 'primary' : 'default'}
                  variant={selectedSizes.includes(size) ? 'filled' : 'outlined'}
                />
              ))}
            </Box>

            {/* Colors */}
            <Typography variant="subtitle2" sx={{ mt: 2 }}>Color</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 1 }}>
              {colours.map(color => (
                <Chip
                  key={color?.id}
                  label={color?.name}
                  onClick={() => toggleSelection('colour_ids',selectedColours, setSelectedColours, color?.id)}
                  color={selectedColours.includes(color?.id) ? 'primary' : 'default'}
                  variant={selectedColours.includes(color?.id) ? 'filled' : 'outlined'}
                />
              ))}
            </Box>
          </Box>

          {/* Footer Actions */}
          {/* <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 2, display: 'flex', gap: 2 }}>
            <Button variant="outlined" fullWidth onClick={handleClear}>Clear All</Button>
            <Button variant="contained" fullWidth onClick={handleApply}>Apply</Button>
          </Box> */}
        </Box>
      {/* </Drawer> */}
    </Box>
  );
}   