import { Routes, Route } from "react-router-dom";
import DashboradPage from "./pages/DashboradPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<DashboradPage />} />
        <Route path="*" element={<ErrorPage />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
