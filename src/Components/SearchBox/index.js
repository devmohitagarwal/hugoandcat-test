import "./style.scss";

function SearchBox() {
  return (
    <div className="search-box">
      <div className="search-box__input">
        <input type="text" placeholder="London, GB"></input>
      </div>
      <div className="search-box__button">
        <div className="search-box__button__text">Find</div>
      </div>
    </div>
  );
}
export default SearchBox;
