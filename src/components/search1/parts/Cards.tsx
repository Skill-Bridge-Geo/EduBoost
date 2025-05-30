import { useState } from "react";
import data from "../../../carts.json";
import next from "../../../assets/chevron_right_24px.png";
import prev from "../../../assets/chevron_right_24px (1).png";
import picture from "../../../assets/placeholder1.png";
import { useFilterContext } from "../FilterContext";

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
    <div>
      <div className="cards">
        {currentPageCards.map((item) => (
          <div key={item.id} className="card">
            <img src={picture} alt="card" />
            {/* <h2>{item.text}</h2> */}
          </div>
        ))}
      </div>

      <div className="pages">
        <button onClick={handlePrev} disabled={currentPage === 1}>
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

        <button onClick={handleNext} disabled={currentPage === numberOfPage}>
          <img src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
}
