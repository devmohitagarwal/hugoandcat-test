const cardinals = ["st", "nd", "rd"];

function formatDate(dt_txt) {
  const date = new Date(dt_txt);
  const dateNumberRemainder = (date.getDate() % 10) - 1;
  let cardinal = cardinals[dateNumberRemainder] === undefined ? "th" : cardinals[dateNumberRemainder];
  if (date.getDate() === new Date().getDate()) {
    return "Today " + date.getDate() + cardinal;
  } else {
    return date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric" }) + cardinal;
  }
}

/**
 *
 * @param {String} dt_txt date-time value
 * @param {Array} forecast
 * @returns
 */
function getAverageTemprature(dt_txt, forecast) {
  const date = dt_txt.split(" ")[0];
  const dateSpecificForcast = forecast.filter((day) => day.dt_txt.split(" ")[0] === date);
  const totalTemprature = dateSpecificForcast.reduce((sum, forecast) => {
    return sum + forecast.main.temp;
  }, 0);
  const average = Math.round(totalTemprature / dateSpecificForcast.length);
  return average;
}

export const filterData = (mockResponse) => {
  let response = [];
  let datesCovered = [];

  mockResponse.list.forEach((weatherEvent) => {
    const event = {};
    const eventDate = new Date(weatherEvent.dt_txt).getDate();
    if (!datesCovered.includes(eventDate)) {
      event.date = formatDate(weatherEvent.dt_txt);
      event.averageTemprature = getAverageTemprature(weatherEvent.dt_txt, mockResponse.list);
      event.description = weatherEvent.weather[0].description;
      event.type = weatherEvent.weather[0].description.replace(" ", "-");
      event.iconURL = "/icons/" + weatherEvent.weather[0].icon + ".svg";
      event.tempInF = Math.round(event.averageTemprature * (9 / 5) + 32);
      event.style = `background: linear-gradient($${event.type}-dark, $${event.type}-light);`;
      datesCovered.push(eventDate);
      response.push(event);
    }
  });
  return response;
};
