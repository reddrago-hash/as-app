import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'as_app',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // in ms
      launchAutoHide: true,
      backgroundColor: "#C51A4A",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: false,
      splashImmersive: false
    }
  }
};

export default config;
