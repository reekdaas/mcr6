import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage";
import Hero from "../pages/heroPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Hero />} />
    </Routes>
  );
}
