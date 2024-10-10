import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-next-app-router",
  webDir: "out",
  server: {
    url: "http://192.168.1.13:3000",
    cleartext: true,
  },
};

export default config;
