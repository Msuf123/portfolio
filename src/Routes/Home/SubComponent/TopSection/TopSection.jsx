import AboutIntro from "../AboutIntro/AboutIntro";
import LaptopComponent from "../LaptopComponent/LaptopComponent";
import Mobile from "../MobileComponent/Mobile";
import "./topSection.css";
export default function TopSection() {
  return (
    <div className="parent-div">
      <div className="mobile-div">
        <Mobile></Mobile>
      </div>
      <div className="about-intro">
        <AboutIntro></AboutIntro>
      </div>
      <div className="laptop-div">
        <LaptopComponent></LaptopComponent>
      </div>
    </div>
  );
}
