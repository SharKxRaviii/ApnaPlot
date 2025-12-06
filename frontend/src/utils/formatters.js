// utils/formatters.js
export const formatCurrency = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3
  }).format(price);
};

// This fixes the SLOWNESS. It requests smaller images from Unsplash.
export const optimizeImage = (url, width = 600) => {
  if (url.includes('images.unsplash.com')) {
    return `${url}?auto=format&fit=crop&w=${width}&q=80`;
  }
  return url;
};