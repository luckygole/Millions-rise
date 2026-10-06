// import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';
// export default defineConfig({plugins:[react()],server:{proxy:{'/api':'http://localhost:5000'}}});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [react()],
//   server: { proxy: { "/api": "http://localhost:5000" } },
// });

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  };
});