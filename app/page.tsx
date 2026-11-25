import { Box } from "@mui/material";
import BannerCarousel from "./ui/banner-carousel";
import ProductCard from "./ui/product/product-card";
import ProductSection from "./ui/product/product-section";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/v1/products', {
    cache: 'no-store'
  })
  const data = await res.json()

  const products = data?.data || []
  
  console.log('products', products)

  return (
    <Box sx={{ px:2 }}>
      <BannerCarousel />
      <ProductSection products={products} />
      <BannerCarousel />
      <ProductSection products={products}/>
    </Box>
  );
}