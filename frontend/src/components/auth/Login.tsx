import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormWrapper from "./FormWrapper";
import Input from "./../Input";
import Button from "./../Button";
import SocialLogin from "./SocialLogin";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      // Xử lý đăng nhập
      console.log("Đăng nhập với:", email, password);
    } catch (err) {
      setError(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập của bạn."
      );
    }
  };

  return (
    <FormWrapper title="Đăng nhập vào tài khoản của bạn">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Địa chỉ email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Ghi nhớ đăng nhập
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Quên mật khẩu?
            </a>
          </div>
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <Button type="submit" fullWidth>
          Đăng nhập
        </Button>
      </form>

      <SocialLogin />

      <div className="mt-6">
        <p className="text-center text-sm text-gray-600">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default Login;
