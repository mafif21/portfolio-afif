type Route = {
  path: string;
  label: string;
};

export const routes: Route[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];
