import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/vite.svg"
        alt="FinanceTracker Logo"
        className="h-8 w-auto sm:h-10"
      />
      <span className="ml-2 text-xl font-bold text-gray-800">
        FinanceTracker
      </span>
    </Link>
  );
};

export default Logo;
