import { NextConfig } from "next";
import withNextIntl from "next-intl/plugin"; // Importando corretamente o plugin com 'import'

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilitar o modo estrito do React (opcional)
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  // i18n: {
  //   locales: ["en", "es", "fr", "pt", "ar", "zh"],
  //   defaultLocale: "en",
  // },
  // Outras configurações, se necessário
  ...withNextIntl(), // Espalhando a configuração do plugin
};

export default nextConfig;
