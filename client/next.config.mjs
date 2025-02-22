
// /** @type {import('next').NextConfig} */
// const nextConfig = {

//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.css$/,
//       use: ["style-loader", "css-loader"],
//     });
//     return config;
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Remove the custom CSS loader setup to avoid conflicts
    return config;
  },
};

export default nextConfig;
