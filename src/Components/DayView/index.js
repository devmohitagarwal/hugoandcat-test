import "./style.scss";

function Day(props) {
  const { weatherInstance } = props;
  return (
    <div className={"weather-item " + weatherInstance.type} key={weatherInstance.date} style={{ width: "80vw" }}>
      <div className="weather-item__date">{weatherInstance.date}</div>
      <div className="weather-item__icon">
        <img src={weatherInstance.iconURL} alt={weatherInstance.type}></img>
      </div>
      <div className="weather-item__clouds">{weatherInstance.description}</div>
      <div className="weather-item__degree-temp">
        <div className="degree__number">{weatherInstance.temp}</div>

        <div className="degree__icon">° </div>
        <div className="degree__text">c </div>
      </div>
      <div className="weather-item__faren-temp">
        <div className="faren__number">{weatherInstance.tempInF}</div>

        <div className="faren__icon">° </div>
        <div className="faren__text">F </div>
      </div>
      <div className="weather-icon__floating">
        <div className="overlay__image">
          <img src={weatherInstance.iconURL} alt={weatherInstance.type}></img>
        </div>
      </div>
    </div>
  );
}
export default Day;
