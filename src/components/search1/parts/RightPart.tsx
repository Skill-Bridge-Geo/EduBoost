import { useState } from "react";
import "./RightPart.css";
import arrow from "../../../assets/chevron_up_24px.png";
import Cards from "./Cards";

export default function RightPart() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Container">
      <div className="title">
        <div>
          <h2>Showing 2,312 results of UI Design</h2>
        </div>
        <div className="dropdown">
          <button className="dropdownButton" onClick={toggleOpen}>
            Most Popular
            <img
              src={arrow}
              className={`arrow ${isOpen ? "rotate" : ""}`}
              alt="arrow"
            />
          </button>
          {isOpen && (
            <ul>
              <li>All</li>
              <li>Most Popular</li>
            </ul>
          )}
        </div>
      </div>
      <Cards />
    </div>
  );
}
