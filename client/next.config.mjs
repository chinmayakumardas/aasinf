// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['assets.aceternity.com','pbs.twimg.com'],
//     },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      });
      return config;
    },
  };
  
  export default nextConfig;
  