const Papa = require("Papaparse");

/**
* Fetch COVID data from the US API endpoint
*/
async function fetchData() {
  const sourceUrl = "https://github.com/nytimes/covid-19-data/blob/master/live/us.csv";
  const res = await fetch(sourceUrl, {
      method: 'get',
      headers: {
        'content-type': 'text/csv;charset=UTF-8'
      }
  });
  const record = await res.text();

  document.getElementById("date").innerHTML = record.data[0].date;
  document.getElementById("areaName").innerHTML = record.data[0].areaName;
  document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
  document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
}
fetchData();
