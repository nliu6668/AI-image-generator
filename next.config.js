const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
  },
};
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
