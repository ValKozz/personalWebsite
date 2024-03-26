import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import PageTitle from "./components/Title/PageTitle";

export default function App() {
  const injectCursorPos = ({ x, y }) => {
    document.documentElement.style.setProperty("--x", Math.round(x));
    document.documentElement.style.setProperty("--y", Math.round(y));
  };

  useEffect(() => document.body.addEventListener("mousemove", injectCursorPos));

  return (
    <div className="light">
      <PageTitle />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
