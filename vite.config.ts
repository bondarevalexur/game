import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   // plugins: [react()],
//   server: {
//     watch: {
//       usePolling: true, // Включение отслеживания файлов
//     },
//     hmr: {
//       overlay: false, // Отключить ошибки на экране
//     },
//   },
// });

// vite.config.js

export default {
  server: {
    // порт dev-сервера
    port: "3000",
    // отключить инкрементацию порта (всегда запускать dev-server на одном и том же порте)
    strictPort: true,
    // заголовки ответа (Response) на запросы
    headers: {
      "X-App-Mode": "development",
    },
    watch: {
      usePolling: false, // Включение отслеживания файлов
    },
    hmr: {
      overlay: true, // Отключить ошибки на экране
    },
    // проксирование запросов: localhost:8080/products -> dummyjson.com/products
    proxy: {
      "/ products": "https://dummyjson.com",
      // конфигурация proxy в виде объекта
      "/ api": {
        // ...
      },
    },
  },
};
