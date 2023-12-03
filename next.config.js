const prod = process.env.NODE_ENV === "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: prod ? "https://davi-cesar.github.io/portifolio/" : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
