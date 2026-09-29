/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Bundle serveur autonome pour l'image Docker de production
  // (Next inclut uniquement les dépendances runtime nécessaires).
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
