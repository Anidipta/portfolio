import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'raw.githubusercontent.com',
      'streamlit.io',
      'upload.wikimedia.org',
      'rasterio.readthedocs.io'
    ],
  },
};

export default nextConfig;
