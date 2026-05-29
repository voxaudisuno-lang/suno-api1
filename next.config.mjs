/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource'
    });
    return config;
  },
  experimental: {
    serverMinification: false, // the server minification unfortunately breaks the selector class names
    // Next.js 14 versijai šis nustatymas privalo būti čia ir vadintis būtent taip:
    serverComponentsExternalPackages: ['pino', 'swagger-ui-react', 'electron', '@playwright/browser-chromium', 'chromium-bidi'],
  },
};  

export default nextConfig;
