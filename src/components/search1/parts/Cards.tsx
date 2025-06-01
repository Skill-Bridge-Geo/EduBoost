import { useState } from "react";
import data from "../../../carts.json";
import next from "../../../assets/chevron_right_24px.png";
import prev from "../../../assets/chevron_right_24px (1).png";
import picture from "../../../assets/placeholder1.png";
import { useFilterContext } from "../FilterContext";
import "./Cards.css";
import personLogo from "../../../assets/person_outline_24px.png";
import fiveStars from "../../../assets/Group 7065.png";
import fourStars from "../../../assets/Group 7065 (1).png";
import threeStars from "../../../assets/Group 7066.png";

export default function Cards() {
  const CardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { selectedRating, selectedCategories } = useFilterContext();

  const filteredData = data.filter((item) => {
    const matchesRating = selectedRating ? item.rate >= selectedRating : true;
    const matchesCategory = selectedCategories.length
      ? selectedCategories.includes(item.category)
      : true;

    return matchesRating && matchesCategory;
  });

  const numberOfPage = Math.ceil(filteredData.length / CardsPerPage);
  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentPageCards = filteredData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handlePageChanger = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="Main-Container">
      <div className="Search-cards">
        {currentPageCards.map((item) => (
          <div key={item.id} className="search-card">
            <div className="image-container">
              <img src={picture} alt="card" className="image" />
              <div className="bestSellerDiv">
                <div className="bestSeller">
                  <p>Best Seller</p>
                </div>
                <div className="OFF">
                  <p>20% OFF</p>
                </div>
              </div>
              <img
                src={personLogo}
                alt="person outline"
                className="PersonLogo"
              />
            </div>
            <div className="text-container">
              <h3 className="card-title">{item.title}</h3>
              <h2 className="instructor">
                {" "}
                <img className="PersonLogo2" src={personLogo} />
                {item.instructor}
              </h2>
              <p className="card-text">{item.text}</p>
              <h1 className="card-rate">
                {item.rate === 4.5 ? (
                  <img className="stars" src={fiveStars} />
                ) : item.rate === 3.5 ? (
                  <img className="stars" src={fourStars} />
                ) : (
                  <img className="stars" src={threeStars} />
                )}
                ({item.reviews})
              </h1>
              <div className="card-price">
                {" "}
                <h5>{item.newPrice}</h5>
                <h5 className="oldPrice">{item.oldPrice}</h5>
              </div>
              <h2></h2>
            </div>
          </div>
        ))}
      </div>

      <div className="pages">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="pagechanger"
        >
          <img src={prev} alt="Previous" />
        </button>

        {Array.from({ length: numberOfPage }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChanger(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === numberOfPage}
          className="pagechanger"
        >
          <img src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
}
