interface Window {
  UnicornStudio: {
    addScene: (config: any) => Promise<any>;
    isReady?: () => boolean;
  }
}
