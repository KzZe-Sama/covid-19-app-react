import axios from "axios";

const Covid19 = () => {
  axios.get("https://api.covid19api.com/summary").then(
    (dataCovid) => {
      summaryGlobalCovidGet(dataCovid.data.Global);
      countryStatsChange(dataCovid.data.Countries);
    },
    (error) => {
      console.log(error);
    }
  );
};

export default Covid19;
