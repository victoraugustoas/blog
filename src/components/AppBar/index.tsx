import Link from "next/link";
import React from "react";
import { Routes } from "../../config/routesConfig";

const AppBar: React.FC = () => {
  return (
    <header className="bg-primary w-full p-5">
      <div className="container">
        <div className="flex w-full justify-end">
          <Link href={Routes.HOME}>
            <a className="text-black font-medium px-4">ínicio</a>
          </Link>
          <Link href={Routes.ABOUT}>
            <a className="text-black font-medium px-4">sobre</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export { AppBar };
