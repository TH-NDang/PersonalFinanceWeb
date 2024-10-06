import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Navigation />
          <AuthButtons />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
