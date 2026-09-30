/** @type {import('next').NextConfig} */
// Pages de l'ancien site statique (Vite/React puis HTML) : redirigées en 301
// vers l'accueil pour conserver l'autorité des liens entrants existants.
const legacyPages = ["2048", "Bdanse", "Compil", "Dac", "GTSRB", "Info", "IsiWeb", "MNIST", "MisoMania", "PersoWeb", "Polycars", "Processor", "Snake", "Sudoku", "Vin", "about", "index"];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Bundle serveur autonome pour l'image Docker de production
  // (Next inclut uniquement les dépendances runtime nécessaires).
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: `/:page(${legacyPages.join("|")}).html`,
        destination: "/",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
