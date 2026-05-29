/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource'
    });

    // Jei kompiliuojamas serverio kodas, priverstinai ignoruojame Node vidinius kelius
    if (isServer) {
      config.externals.push('pino', 'swagger-ui-react', 'electron', '@playwright/browser-chromium', 'chromium-bidi', 'bufferutil', 'utf-8-validate');
    }

    return config;
  },
  experimental: {
    serverMinification: false,
    serverComponentsExternalPackages: ['pino', 'swagger-ui-react', 'electron', '@playwright/browser-chromium', 'chromium-bidi'],
  },
};  

export default nextConfig;
