/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'glad.geog.umd.edu',
      'raw.githubusercontent.com',
      'python-pillow.github.io',
      'streamlit.io',
      'www.svgrepo.com',
      'velog.velcdn.com',
      'upload.wikimedia.org',
      'logowik.com',
      'github.com',
      's3.amazonaws.com',
      'icon.icepanel.io',
      'www.gstatic.com',
      'geog-312.gishub.org',
      'image.pngaaa.com',
      'www.pngitem.com',
      'www.pngkey.com',
      'img.etimg.com',
      'i.pinimg.com',
      'logohistory.net',
      'www.google.com',
      'dash.plotly.com',
      'e7.pngegg.com',
      'powerbi.microsoft.com',
      'encrypted-tbn0.gstatic.com',
      'rasterio.readthedocs.io'
    ]
  }
};

module.exports = nextConfig;
