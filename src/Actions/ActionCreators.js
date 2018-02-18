export const GETFORECAST = "GETFORECAST";

const urlForecast =
  "http://api.openweathermap.org/data/2.5/forecast?q=city&units=metric&mode=json&APPID=b57750b61d184fe48f10456a380f0dc5";

export function getForecast(daysOfForecast) {
  return {
    type: GETFORECAST,
    payload: daysOfForecast
  };
}

export function getForecastData(city) {
  let newUrl = urlForecast.replace("city", city);
  return dispatch => {
    fetch(newUrl, {})
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(getForecast(JSON.parse(data)));
      });
  };
}
