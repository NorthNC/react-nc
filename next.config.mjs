/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: '/pdfs/:filename', // Global files
        destination: '/api/pdf/carouselPDF/:filename', // Maps to [...path] API route
      },
      {
        source: '/:country/pdf/:filename', // Country-specific files
        destination: '/api/pdf/:country/pdf/:filename', // Maps to [...path] API route
      },
      {
        source: '/api/pdfs/:path*',
        destination: '/api/pdf/:path*',
      },
    ];
  },
};

export default nextConfig;