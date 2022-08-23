import Day from "../DayView";

function DesktopListView(data) {
  return (
    <div className="weather-view slider-container desktop-view">
      {data.weatherData.map((weatherInstance) => {
        return <Day weatherInstance={weatherInstance} key={weatherInstance.date}></Day>;
      })}
    </div>
  );
}

export default DesktopListView;
