const baseURL = "gaucho-sports-analytics.ucsb.edu";

const routes = {
  "/": true,
  "/about": true,
  "/projects": true,
  "/workshops": true,
  "/people": true,
  "/work": false,
  "/blog": false,
  "/gallery": false,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/team-performance-analytics": true,
};

const style = {
  theme: "dark", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "blue", // Using navy blue for UCSB
  accent: "yellow", // Using gold for UCSB
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "conservative", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: 2,
    color: "accent-on-background-weak", // Changed to use accent color (gold)
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: false,
  time: false,
};

const mailchimp = {
  action: "https://ucsb.us1.list-manage.com/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
