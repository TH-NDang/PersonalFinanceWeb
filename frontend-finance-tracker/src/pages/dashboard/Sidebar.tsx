import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  DollarSign,
  Target,
  Wallet,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { SidebarProps, NavItem } from "../../types/props";

export const Sidebar: FC<SidebarProps> = ({
  setActiveItem,
  isExpanded,
  setIsExpanded,
}) => {
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      icon: <LayoutDashboard size={24} />,
      text: "Tổng quan",
      href: "/dashboard",
      description: "Xem tóm tắt và thông tin tài chính của bạn",
    },
    {
      icon: <DollarSign size={24} />,
      text: "Giao dịch",
      href: "/dashboard/transactions",
      description: "Theo dõi thu nhập và chi tiêu",
    },
    {
      icon: <Wallet size={24} />,
      text: "Ngân sách",
      href: "/dashboard/budget",
      description: "Thiết lập và giám sát hạn mức chi tiêu",
    },
    {
      icon: <Target size={24} />,
      text: "Mục tiêu",
      href: "/dashboard/goals",
      description: "Theo dõi mục tiêu tiết kiệm",
    },
  ];

  const bottomNavItems: NavItem[] = [
    {
      icon: <Settings size={24} />,
      text: "Cài đặt",
      href: "/dashboard/settings",
      description: "Tùy chỉnh theo sở thích của bạn",
    },
  ];

  const NavItemComponent: FC<{
    item: NavItem;
    index: number;
  }> = ({ item }) => (
    <div className="relative group">
      <Link
        to={item.href}
        className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200
          ${
            location.pathname === item.href
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          }
          ${isExpanded ? "" : "justify-center"}`}
        onClick={() => setActiveItem(item.text)}
      >
        <div className={`flex items-center ${isExpanded ? "w-full" : ""}`}>
          <span className="flex-shrink-0">{item.icon}</span>
          {isExpanded && (
            <span className="ml-3 text-sm font-medium">{item.text}</span>
          )}
        </div>

        {/* Enhanced Tooltip */}
        {!isExpanded && (
          <div className="invisible group-hover:visible absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap z-50">
            <div className="font-medium">{item.text}</div>
            <div className="text-xs text-gray-300 mt-1">{item.description}</div>
            <div
              className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 
              border-4 border-transparent border-r-gray-900"
            ></div>
          </div>
        )}
      </Link>
    </div>
  );

  return (
    <nav
      className={`bg-white shadow-lg fixed h-full z-40 flex flex-col justify-between 
      transition-all duration-300 ${isExpanded ? "w-64" : "w-20"}`}
    >
      {/* Logo and Brand */}
      <div>
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center">
            <img src="/icon.png" alt="Logo" className="w-10 h-10" />
            {isExpanded && (
              <span className="ml-3 font-bold text-xl text-gray-800">
                FinanceTracker
              </span>
            )}
          </div>
        </div>

        {/* Search Bar - Only when expanded */}
        {isExpanded && (
          <div className="px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm nhanh..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>
        )}

        {/* Main Navigation Items */}
        <div className="px-2 py-2 space-y-1">
          {navItems.map((item, index) => (
            <NavItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Navigation Items */}
      <div className="border-t">
        <div className="px-2 py-2 space-y-1">
          {bottomNavItems.map((item, index) => (
            <NavItemComponent
              key={`bottom-${index}`}
              item={item}
              index={navItems.length + index}
            />
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 
          bg-white rounded-full p-1.5 border shadow-md hover:shadow-lg 
          transition-shadow duration-200"
          title={isExpanded ? "Thu gọn thanh bên" : "Mở rộng thanh bên"}
        >
          {isExpanded ? (
            <ChevronLeft size={16} className="text-gray-600" />
          ) : (
            <ChevronRight size={16} className="text-gray-600" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
