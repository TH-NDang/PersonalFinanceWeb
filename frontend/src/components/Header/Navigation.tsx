import React from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const Navigation: React.FC = () => {
  const navItems: NavItem[] = [
    { label: "Trang chủ", path: "/" },
    { label: "Ngân sách", path: "/budget" },
    { label: "Giao dịch", path: "/transactions" },
    { label: "Báo cáo", path: "/reports" },
  ];

  return (
    <nav className="hidden md:flex space-x-10">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-base font-medium ${
              isActive ? "text-indigo-600" : "text-gray-500 hover:text-gray-900"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
