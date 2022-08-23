const cardinals = ["st", "nd", "rd"];

function cleanDate(dt_txt) {
  const date = new Date(dt_txt);
  const dateNumberRemainder = (date.getDate() % 10) - 1;
  let cardinal = cardinals[dateNumberRemainder] === undefined ? "th" : cardinals[dateNumberRemainder];
  if (date.getDate() === new Date().getDate()) {
    return "Today " + date.getDate() + cardinal;
  } else {
    return date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric" }) + cardinal;
  }
}
export const filterData = (mockResponse) => {
  let response = [];
  let datesCovered = [];
  mockResponse.list.forEach((weatherEvent) => {
    const event = {};
    const eventDate = new Date(weatherEvent.dt_txt).getDate();
    if (!datesCovered.includes(eventDate)) {
      event.date = cleanDate(weatherEvent.dt_txt);
      event.description = weatherEvent.weather[0].description;
      event.temp = Math.round(weatherEvent.main.temp);
      event.type = weatherEvent.weather[0].description.replace(" ", "-");
      event.iconURL = "/icons/" + weatherEvent.weather[0].icon + ".svg";
      event.tempInF = Math.round(event.temp * (9 / 5) + 32);
      event.style = `background: linear-gradient($${event.type}-dark, $${event.type}-light);`;
      datesCovered.push(eventDate);
      response.push(event);
    }
  });
  return response;
};
