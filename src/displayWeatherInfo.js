import { events } from "./events";

events.on("newCitySearched", loginfo);

function loginfo(data) {
  console.log(data);
}
