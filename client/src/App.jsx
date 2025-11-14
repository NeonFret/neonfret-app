import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app-layout container">
      <Header />

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}
