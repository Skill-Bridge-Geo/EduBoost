import "../CSS/showList.css";

const ShowList: React.FC<{
  showList: string;
  setShowList: React.Dispatch<React.SetStateAction<string>>;
}> = ({ showList, setShowList }) => {
  function handleListClick(str: string) {
    setShowList(str);
  }

  return (
    <div className="show-list">
      <div
        className={`${showList === "all" ? "active" : "inactive"}`}
        onClick={() => handleListClick("all")}
      >
        <h1 className="p1">
          All<span className="tablet-span">&nbsp;Recommendation</span>
        </h1>
      </div>
      <div
        className={`${showList === "illustrator" ? "active" : "inactive"}`}
        onClick={() => handleListClick("illustrator")}
      >
        <h1 className="p1">
          <span className="tablet-span">Adobe&nbsp;</span>Illustrator
        </h1>
      </div>
      <div
        className={`${showList === "photoshop" ? "active" : "inactive"}`}
        onClick={() => handleListClick("photoshop")}
      >
        <h1 className="p1">
          <span className="tablet-span">Adobe&nbsp;</span>Photoshop
        </h1>
      </div>
      <div
        className={`${showList === "ui design" ? "active" : "inactive"}`}
        onClick={() => handleListClick("ui design")}
      >
        <h1 className="p1">UI Design</h1>
      </div>
      <div
        className={`${showList === "web" ? "active" : "inactive"}`}
        onClick={() => handleListClick("web")}
      >
        <h1 className="p1">
          Web<span className="tablet-span">&nbsp;Programming</span>
        </h1>
      </div>
      <div
        className={`${showList === "mobile" ? "active" : "inactive"}`}
        onClick={() => handleListClick("mobile")}
      >
        <h1 className="p1">
          Mobile<span className="tablet-span">&nbsp;Programming</span>
        </h1>
      </div>
      <div
        className={`${showList === "backend" ? "active" : "inactive"}`}
        onClick={() => handleListClick("backend")}
      >
        <h1 className="p1">
          Backend<span className="tablet-span">&nbsp;Development</span>
        </h1>
      </div>
      <div
        className={`${showList === "vue js" ? "active" : "inactive"}`}
        onClick={() => handleListClick("vue js")}
      >
        <h1 className="p1">Vue JS</h1>
      </div>
    </div>
  );
};

export default ShowList;
