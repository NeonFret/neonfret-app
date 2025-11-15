import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollIndicator from "./components/ScrollProgress/ScrollIndicator";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <div className="app-layout container">
      <ScrollIndicator />
      <Header />

      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
