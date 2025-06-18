import { IoFastFood } from "react-icons/io5";
import { IoPizza } from "react-icons/io5";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { GiBerriesBowl } from "react-icons/gi";
import { LiaPepperHotSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";

function Header() {
  return (
    <>
      <section className="header">
        <div className="menu-wrapper">
          <div className="menu-item active">
            <IoFastFood />
            <p>All</p>
          </div>
          <div className="menu-item">
            <LiaGlassMartiniAltSolid />
            <p>Drinks</p>
          </div>
          <div className="menu-item">
            <IoPizza />
            <p>Pizza</p>
          </div>
          <div className="menu-item">
            <GiBerriesBowl />
            <p>Salad</p>
          </div>
          <div className="menu-item">
            <LiaPepperHotSolid />
            <p>Spicy</p>
          </div>
          <div className="menu-item">
            <RiCake3Line />
            <p>Sweets</p>
          </div>
        </div>
        <button className="button-cta">View All</button>
      </section>
    </>
  );
}

export default Header;
