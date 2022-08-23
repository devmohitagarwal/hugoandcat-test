import { BrowserView, MobileView } from "react-device-detect";
import { useEffect, useState } from "react";
import { filterData } from "./Modifiers";
import FetchWeather from "../../API/FetchData";
import DesktopListView from "../ListView/DesktopListView";
import MobileListView from "../ListView/MobileListView";
import SearchBox from "../SearchBox";

import "./style.scss";

function MainView() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    FetchWeather().then((resp) => {
      debugger;
      setWeatherData(filterData(resp.data));
    });
  }, []);

  return (
    <div className="mainViewWrapper">
      <SearchBox></SearchBox>
      <BrowserView>
        <DesktopListView weatherData={weatherData}></DesktopListView>
      </BrowserView>
      <MobileView>
        <MobileListView weatherData={weatherData}></MobileListView>
      </MobileView>
    </div>
  );
}
export default MainView;
