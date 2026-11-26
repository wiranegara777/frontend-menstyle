const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000"

// append url query params into api path for GET Api call
export const fetchUrlParamsBuilder = (path, params = {}) => {

  const url = new URL(`${API_BASE_URL}${path}`);
  
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Append each array item as a separate parameter with the same key
      value.forEach(item => searchParams.append(`${key}[]`, item.toString()));
    } else {
      // Append single value directly
      searchParams.append(key, value.toString());
    }
  });

  url.search = searchParams.toString()

  return url
};