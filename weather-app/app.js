const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=61c41a513aab481d6361520b0e06a68c&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  //   console.log(response);
  const data = JSON.parse(response.body);
  console.log(data.current);
});
