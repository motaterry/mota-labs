/** @type {import('next').NextConfig} */
/**
 * GitHub Pages (project site): build with BASE_PATH=/your-repo-name so /_next assets resolve.
 * Example: `BASE_PATH=/mota-labs-web npm run build`
 */
const basePath = process.env.BASE_PATH || "";

// Static export → deploy the `out/` folder (not `.next`). Use `npm run start` to preview `out/`.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
