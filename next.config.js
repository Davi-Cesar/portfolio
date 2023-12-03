const prod = process.env.NODE_ENV === "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: prod ? "https://davi-cesar.github.io/portifolio/" : "",
  reactStrictMode: true,
};

// module.exports = {
//   reactStrictMode: true,
//   // outras opções permitidas
// };

module.exports = nextConfig;
