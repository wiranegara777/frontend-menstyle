
import { fetchUrlParamsBuilder } from '@/app/util/api-util'

export const getProductsApi = async (params={}) => {
    // construct the url with params
    const url = fetchUrlParamsBuilder('/api/v1/products', params)

    const res = await fetch(url);
    
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();   
}

export const getProductBrandsApi = async (params={}) => {
    // construct the url with params
    const url = fetchUrlParamsBuilder('/api/v1/products/brands', {})

    const res = await fetch(url);
    
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();   
}

export const getProductCategoriesApi = async (params={}) => {
    // construct the url with params
    const url = fetchUrlParamsBuilder('/api/v1/products/categories', {})

    const res = await fetch(url);
    
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();   
}

export const getProductColoursApi = async (params={}) => {
    // construct the url with params
    const url = fetchUrlParamsBuilder('/api/v1/products/colours', {})

    const res = await fetch(url);
    
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();   
}