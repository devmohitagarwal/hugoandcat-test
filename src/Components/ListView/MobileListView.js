import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Day from "../DayView";

function MobileListView(data) {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
  };
  return (
    <div className="weather-view slider-container">
      <Slider {...settings}>
        {data.weatherData.map((weatherInstance) => {
          return <Day weatherInstance={weatherInstance} key={weatherInstance.date}></Day>;
        })}
      </Slider>
    </div>
  );
}

export default MobileListView;
