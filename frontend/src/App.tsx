import { Routes, Route } from "react-router-dom";
import DashboradPage from "./pages/DashboradPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashboradPage />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
