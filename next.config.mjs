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
  },
  // Nurodome sistemai nepakuoti šių probleminių bibliotekų, kad išvengtume TypeError:
  serverExternalPackages: ['pino', 'swagger-ui-react', 'electron', '@playwright/browser-chromium', 'chromium-bidi'],
};  

export default nextConfig;
