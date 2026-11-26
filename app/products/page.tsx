'use client'

import { Box, Button, Card, Drawer, FormControlLabel, Grid, Pagination, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "@/app/ui/product/product-card";
import { getProductsApi, getProductBrandsApi, getProductCategoriesApi, getProductColoursApi } from '@/app/lib/products-api'
import ProductFilter from "@/app/ui/product/product-filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default  function ProductsPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('name')
  const router = useRouter()
  const pathname = usePathname()

  const [products, setProducts] = useState([])
  const [meta, setMeta] = useState({
    current_page: 1,
    total_pages: 1,
    per_page: 10
  })
  const [isSortByOpen, setIsSortByOpen] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState({
    category_ids: [],
    brand_ids: [],
    colour_ids: [],
    sizes: [],
    sort_by: 'new_products',
    page: 1
  })

  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [colours, setColours] = useState([])

  const getProducts = async () => {
      try {
        const response = await getProductsApi(filters)
        setProducts(response.data);
        setMeta(response.meta)
      } catch (err) {
        console.error(err);
        alert(err)
      } finally {
        setIsLoading(false);
      }
  }

  const getFilterOptions = async () => {
      try {
        const brandRes = await getProductBrandsApi()
        const colourRes = await getProductColoursApi()
        const categoryRes = await getProductCategoriesApi()
        
        setBrands(brandRes)
        setColours(colourRes)
        setCategories(categoryRes)
      } catch (err) {
        console.error(err);
        alert(err)
      } finally {
        setIsLoading(false);
      }
  }

  // re-fetch products whenever filter change
  useEffect(() => {
    setIsLoading(true)
    const t = setTimeout(()=>{
      getProducts()
    }, 400) // 400ms Debounce

    return () => clearTimeout(t)
  }, [filters]);

  // listen to query from product search when user input a product name at the header
  useEffect(()=>{
    setFilters(prev => ({
      ...prev,
      name: query || ''
    }))
  },[query])

  // get dynamic filter options
  useEffect(()=>{
    getFilterOptions()
  },[])

  const toggleSortByDrawer = (isOpen) => {
      setIsSortByOpen(isOpen)
  }

  const handleChangeSortBy = (event) => {
      setFilters({...filters, sort_by: event.target.value})
      toggleSortByDrawer(false)
  }

  const handleChangeFilter = (updateParams={}) => {
    setFilters(prev => ({
      ...prev,
      page: 1,
      ...updateParams,
    }))
  }

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('name')

    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  return (
    <>
      { isLoading && <Typography variant="h4">Loading</Typography> }
      <Grid container spacing={2} sx={{ mt: 2, alignItems: 'start' }}>
        {/* PRODUCT FILTER */}
        <Grid 
          size={2} 
          sx={{
              position: 'sticky',
              top: { md: 10 },
              display: { xs: 'none', md: 'block' }
          }}
        >
          <ProductFilter 
            filters={filters}
            handleChangeFilter={handleChangeFilter}
            brands={brands}
            colours={colours}
            categories={categories}
          />
        </Grid>

        {/* PRODUCT LIST */}
        <Grid size={10}>
           <Box>
              { query && (
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mx:2}}>Result products: {`${query}`}</Typography>
                  <Button variant="outlined" onClick={clearSearch}>Reset Result</Button>
                </Box>
                ) }
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant="h6" color="secondary" sx={{ fontWeight:'medium', m:3 }}>PRODUCT LIST</Typography>
                  <Button onClick={() => toggleSortByDrawer(true)} variant="outlined">Sort By</Button>
              </Box>
          
              {/* product list card */}
              <Box
                  sx={{
                      display: 'flex',
                      gap: 3,
                      flexWrap: 'wrap',
                      p:3
                  }}
                  >
                      {
                          products.map((product, index)=>(
                              <ProductCard key={index} product={product}/>
                          ))
                      }
              </Box>

              {/* pagination */}
              <Pagination
                count={meta.total_pages}
                page={meta.current_page}
                onChange={(e,value) => handleChangeFilter({ page: value })}
                showFirstButton
                showLastButton
                size="small"
                sx={{ justifyContent: 'center' }}
              />

              {/* sort by drawer */}
              <Drawer
                  anchor="right"
                  open={isSortByOpen}
                  onClose={()=>{toggleSortByDrawer(false)}}
              >
                  <Box sx={{m:2, minWidth: 300}}>
                      <Typography sx={{mb: 2}}>Sort By</Typography>
                      <RadioGroup value={filters?.sort_by} onChange={handleChangeSortBy}>
                          <FormControlLabel value="new_products" control={<Radio />} label="New Products" />
                          <FormControlLabel value="old_products" control={<Radio />} label="Old Products" />
                          <FormControlLabel value="lowest_price" control={<Radio />} label="Lowest Price" />
                          <FormControlLabel value="highest_price" control={<Radio />} label="Highest Price" />
                      </RadioGroup>
                  </Box>
              </Drawer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}