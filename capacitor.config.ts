import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.priere.malikite",
  appName: "Prière Malikite",
  webDir: "dist",
  backgroundColor: "#fafaf9",
  android: {
    allowMixedContent: false,
    webContentsDebuggingEnabled: false,
  },
  ios: {
    contentInset: "always",
    backgroundColor: "#fafaf9",
  },
  server: {
    androidScheme: "https",
  },
};

export default config;
