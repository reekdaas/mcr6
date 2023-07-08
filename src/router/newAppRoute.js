import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import IndividualResturant from "../pages/resturantPage/individualResturantPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<IndividualResturant />} />
    </Routes>
  );
}
