import {
  Routes,
  BrowserRouter as Router,
  Route,
  // Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";

// pages
import Home from "./pages/Home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
