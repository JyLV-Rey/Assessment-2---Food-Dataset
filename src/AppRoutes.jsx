import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Items from "./pages/items/Items";
import Temporal from "./pages/temporal/Temporal";
import Advanced from "./pages/advanced/Advanced";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/items" element={<Items />} />
      <Route path="/temporal" element={<Temporal />} />
      <Route path="/advanced" element={<Advanced />} />
    </Routes>
  );
}
