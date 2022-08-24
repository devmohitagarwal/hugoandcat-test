import "./style.scss";

function Day(props) {
  const { weatherInstance } = props;
  return (
    <div className={"weather-item " + weatherInstance.type} key={weatherInstance.date} style={{ width: "80vw" }}>
      <div className="weather-item__date" data-testid="date">
        {weatherInstance.date}
      </div>
      <div className="weather-item__icon">
        <img src={weatherInstance.iconURL} alt={weatherInstance.type} data-testid="iconURL"></img>
      </div>
      <div className="weather-item__clouds" data-testid="description">
        {weatherInstance.description}
      </div>
      <div className="weather-item__degree-temp">
        <div className="degree__number" data-testid="averageTemprature">
          {weatherInstance.averageTemprature}
        </div>

        <div className="degree__icon">° </div>
        <div className="degree__text">c </div>
      </div>
      <div className="weather-item__faren-temp">
        <div className="faren__number" data-testid="tempratureInFahrenheit">
          {weatherInstance.tempInF}
        </div>

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
