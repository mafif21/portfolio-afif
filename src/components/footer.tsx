import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="text-muted-foreground mb-8 text-sm text-center">
      © {new Date().getFullYear()}{" "}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href="https://github.com/mafif21">Muhammad Afif</a>
      </Button>
      . All rights reserved.
    </footer>
  );
};
