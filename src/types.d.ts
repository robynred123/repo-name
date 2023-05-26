export {};

declare module "*.svg" {
  const value: any;
  export = value;
}
declare module "*.jpg" {
  const value: any;
  export = value;
}
declare module "*.png" {
  const value: any;
  export = value;
}

declare global {
  interface Window {
    example: any;
    open: (url?: string | URL, target?: string, features?: string) => Window;
  }
}
