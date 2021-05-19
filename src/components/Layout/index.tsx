import React from "react";
import { AppBar } from "../AppBar";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="bg-primary">
      <AppBar />
      <div className="container">{children}</div>
    </main>
  );
};

export { Layout };
