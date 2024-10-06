import React from "react";
import { Link } from "react-router-dom";

const AuthButtons: React.FC = () => {
  // Giả sử chúng ta có một hàm để kiểm tra trạng thái đăng nhập
  const isLoggedIn = false; // Thay đổi logic này dựa trên hệ thống xác thực của bạn

  return (
    <div className="flex items-center">
      {isLoggedIn ? (
        <button
          onClick={() => {
            /* Xử lý đăng xuất */
          }}
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Đăng xuất
        </button>
      ) : (
        <>
          <Link
            to="/login"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Đăng ký
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
