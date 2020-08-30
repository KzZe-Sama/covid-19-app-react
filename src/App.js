import React, { useState, useEffect } from "react";
import { Container, Segment, Label, Header } from "semantic-ui-react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";

import Axios from "axios";
import { Route, Switch } from "react-router-dom";
import CountrySegment from "./components/Home/components/CountrySegment";
// import SearchExampleStandard from "./components/Home/components/SearchInput";

//css
import "./css/style.css";
function App() {
  const [user, userGet] = useState(null);
  const [summaryGlobalCovid, summaryGlobalCovidGet] = useState(null);
  const [countrySearched, countrySearchedSet] = useState(false);
  const [countryStats, countryStatsChange] = useState(null);
  const [countryInput, countrySet] = useState(null);
  const [search, clickedSearched] = useState(false);
  const [countriesList, setCountryList] = useState([]);
  useEffect(() => {
    Axios.get(`https://api.github.com/users/KzZe-Sama`).then((dataUser) => {
      userGet(dataUser.data);
    });
    Axios.get("https://api.covid19api.com/summary").then((dataCovid) => {
      summaryGlobalCovidGet(dataCovid.data.Global);
      countryStatsChange(dataCovid.data.Countries);
    });
    if (countryStats !== null) {
      const countryName = [];
      countryStats.map((data) => countryName.push(data.Country));
      // console.log(countryName);
      setCountryList(countryName);
    }
  }, [countryStats]);
  let getCountry = (event) => {
    event.preventDefault();
    let name = event.target.elements.country.value;

    // countryStats.map((data) => countriesList.push(data.Country));
    // console.log(countriesList);
    let countryFound = false;
    for (let i = 0; i <= countriesList.length; i++) {
      if (countriesList[i] === name) {
        countryFound = true;
        break;
      }
    }
    if (countryFound === true) {
      let countrySetObj = countryStats.filter(
        (country) => country.Country === name
      );
      countrySet(countrySetObj[0]);
      countrySearchedSet(true);
    } else {
      clickedSearched(true);
      countrySearchedSet(false);
    }
  };
  return (
    <>
      {/* {console.log(countriesList)} */}
      <Nav />
      {/* <Link to="/dev">Dev</Link> */}
      <Container className="container-width-fix">
        <Switch>
          <Route path="/about">
            <About data={user} />
          </Route>
          {/* <Route path="/dev">
            <SearchExampleStandard data={countriesList}></SearchExampleStandard>
          </Route> */}
          <Route path="/">
            <Home
              data={summaryGlobalCovid}
              country={getCountry}
              countries={countriesList}
            />
            {countrySearched ? (
              <Segment inverted padded="very" raised>
                <Label
                  color="teal"
                  pointing="below"
                  size="huge"
                  attached="top left"
                >
                  {countryInput && countryInput.Country}
                </Label>
                <CountrySegment data={countryInput} />
              </Segment>
            ) : search ? (
              <Segment inverted padded="very">
                <Header as="h2">Country Not Found in Database.</Header>
              </Segment>
            ) : (
              <></>
            )}
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
