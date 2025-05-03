// https://ducanh-next-pwa.vercel.app/docs/next-pwa/configuring

const withPWA = require('@ducanh2912/next-pwa').default({
  disable: process.env.NODE_ENV === 'development',
  register: true,

  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  fallbacks: {
    //image: "/static/images/fallback.png",
    // document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },

  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Remove all console logs in production builds.
    // Set to true to remove all console.* calls.
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // ... other options you like
};

module.exports = withPWA(nextConfig);
