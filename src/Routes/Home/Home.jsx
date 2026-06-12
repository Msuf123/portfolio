import { Link } from "react-router-dom";
import TopSection from "./SubComponent/TopSection/TopSection";
import BottomSection from "./SubComponent/BottomSection/BottomSection";
import "./Home.css";
import { useRef, useState } from "react";
export default function Home() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const scrollToSection = (index) => {
    const container = containerRef.current;
    const targetY = index * window.innerHeight;

    container.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    setCurrent(index);
  };
  const handleWheel = (e) => {
    if (e.deltaY > 0 && current < 1) {
      scrollToSection(current + 1);
    } else if (e.deltaY < 0 && current > 0) {
      scrollToSection(current - 1);
    }
  };
  return (
    <div className="homeContainer" ref={containerRef} onWheel={handleWheel}>
      <section className="page">
        <TopSection />
      </section>
      <section className="page">
        <BottomSection />
      </section>
    </div>
  );
}
