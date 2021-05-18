import React from "react";

const AppBar: React.FC = () => {
  return (
    <header className="bg-primary w-full p-5">
      <div className="container">
        <div className="flex w-full justify-end">
          <a href="" className="text-black font-medium px-4">
            ínicio
          </a>
          <a href="" className="text-black font-medium px-4">
            artigos
          </a>
          <a href="" className="text-black font-medium px-4">
            sobre
          </a>
        </div>
      </div>
    </header>
  );
};

export { AppBar };
