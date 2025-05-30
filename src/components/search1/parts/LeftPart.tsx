import { useState } from "react";
import arrow from "../../../assets/chevron_up_24px.png";
import fiveStars from "../../../assets/Group 7065.png";
import fourStars from "../../../assets/Group 7065 (1).png";
import threeStars from "../../../assets/Group 7066.png";
import { useFilterContext } from "../FilterContext";
import "./LeftPart.css";

export default function LeftPart() {
  const {
    selectedRating,
    setSelectedRating,
    selectedCategories,
    toggleCategory,
    selectedVideoDurations,
    toggleVideoDuration,
    handleClear,
    selectedLevel,
    setSelectedLevel,
  } = useFilterContext();

  const [ratingActive, setRatingActive] = useState(true);
  const [videoDurationActive, setVideoDurationActive] = useState(true);
  const [categoryActive, setCategoryActive] = useState(true);
  const [softwareActive, setSoftwareActive] = useState(false);
  const [levelActive, setLevelActive] = useState(true);
  const [languageActive, setLanguageActive] = useState(false);

  const categories = [
    "Design (3.2K)",
    "Programming (1.4K)",
    "Business & Marketing (809)",
    "Finance (548)",
    "Music & Film (1.9K)",
    "Photo & Video (2.3K)",
    "Writing (753)",
  ];

  const level = ["All Levels", "Beginner", "Intermidate", "Advanced"];
  return (
    <div className="leftpart">
      <div className="allFilter">
        <div className="filter">
          <h1 className="filterH1">Filter</h1>
          <button className="Clear" onClick={handleClear}>
            Clear
          </button>
        </div>
        <hr />
        {/* Rating */}
        <div id="box" onClick={() => setRatingActive(!ratingActive)}>
          <h1 id="h1">Rating</h1>
          <img
            src={arrow}
            className={`arrow ${ratingActive ? "rotate" : ""}`}
            alt="arrow"
          />
        </div>
        {ratingActive && (
          <div className="label">
            {[
              { rate: 4.5, label: "5.0 & up" },
              { rate: 3.5, label: "4.0 & up" },
              { rate: 2.5, label: "3.0 & up" },
            ].map(({ rate, label }) => (
              <label key={rate} className="ratingLabel">
                <label className="btn">
                  <input
                    type="radio"
                    name="rating"
                    value={rate}
                    checked={selectedRating === rate}
                    onChange={() => setSelectedRating(rate)}
                  />
                  <span className="checkmark"></span>
                </label>

                <img
                  className={
                    rate === 4.5
                      ? "fiveStars"
                      : rate === 3.5
                      ? "fourStars"
                      : "threeStars"
                  }
                  id="stars"
                  src={
                    rate === 4.5
                      ? fiveStars
                      : rate === 3.5
                      ? fourStars
                      : threeStars
                  }
                  alt={`${rate} stars`}
                />
                <h2
                  className={`ratingH2${
                    rate === 4.5 ? "first" : rate === 3.5 ? "second" : "third"
                  }`}
                  id="ratingh2"
                >
                  {label}
                </h2>
              </label>
            ))}
          </div>
        )}
        <hr />
        {/* Video Duration */}
        <div
          id="box"
          onClick={() => setVideoDurationActive(!videoDurationActive)}
        >
          <h1 id="h1">Video Duration</h1>
          <img
            src={arrow}
            className={`arrow ${videoDurationActive ? "rotate" : ""}`}
            alt="arrow"
          />
        </div>
        {videoDurationActive && (
          <div className="video">
            {[
              { label: "0-2 Hours (9.4K)", value: "short" },
              { label: "3-5 Hours (4.1K)", value: "medium" },
              { label: "6-12 Hours (3.8K)", value: "long" },
              { label: "12+ Hours (1K)", value: "verylong" },
            ].map(({ label, value }) => (
              <label key={value} className="videoDurationLabel">
                <input
                  type="checkbox"
                  name="videoDuration"
                  value={value}
                  checked={selectedVideoDurations.includes(value)}
                  onChange={() => toggleVideoDuration(value)}
                />
                <h2 className="text">{label}</h2>
              </label>
            ))}
          </div>
        )}
        <hr />
        {/* Category */}
        <div id="box" onClick={() => setCategoryActive(!categoryActive)}>
          <h1 id="h1">Category</h1>
          <img
            src={arrow}
            className={`arrow ${categoryActive ? "rotate" : ""}`}
            alt="arrow"
          />
        </div>
        {categoryActive &&
          categories.map((category) => (
            <label key={category} className="category">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span className="text">{category}</span>
            </label>
          ))}
        <hr />
        {/* software */}
        <div id="box" onClick={() => setSoftwareActive(!softwareActive)}>
          <h1 id="h1">Software</h1>
          <img
            src={arrow}
            className={`arrow ${softwareActive ? "rotate" : ""}`}
            alt="arrow"
          />
        </div>
        {/* level */}
        <hr />
        <div id="box" onClick={() => setLevelActive(!levelActive)}>
          <h1 id="h1">Level</h1>
          <img
            src={arrow}
            className={`arrow ${levelActive ? "rotate" : ""}`}
            alt="arrow"
          />
        </div>
        {levelActive &&
          level.map((level) => (
            <label key={level} className="level">
              <label className="btn">
                <input
                  type="radio"
                  value={level}
                  checked={selectedLevel.includes(level)}
                  onChange={() => setSelectedLevel([level])}
                />
                <span className="checkmark"></span>
              </label>
              <span className="text">{level}</span>
            </label>
          ))}
        <hr />
        <div id="box" onClick={() => setLanguageActive(!languageActive)}>
          <h1 id="h1">Language</h1>
          <img
            src={arrow}
            className={`arrow ${languageActive ? "rotate" : ""}`}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}
