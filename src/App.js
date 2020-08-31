import React, { useState, useEffect } from "react";
import { Container, Segment, Label, Header } from "semantic-ui-react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import CountrySegment from "./components/Home/components/CountrySegment";

//css
import "./css/style.css";
function App() {
  const [user, userGet] = useState(null);
  const [summaryGlobalCovid, summaryGlobalCovidGet] = useState(null);
  const [countrySearched, countrySearchedSet] = useState(false);
  const [countryStats, countryStatsChange] = useState([]);
  const [countryInput, countrySet] = useState(null);
  const [search, clickedSearched] = useState(false);
  const [countriesList, setCountryList] = useState([]);
  useEffect(() => {
    if (countryStats !== null) {
      const countryName = [];
      countryStats.map((data) => countryName.push(data.Country));

      setCountryList(countryName);
    }
    ApiHandler();
  }, [countryStats]);
  useEffect(() => {
    const countriesAddList = async () => {
      let dataCovid = await axios.get("https://api.covid19api.com/summary");
      countryStatsChange(dataCovid.data.Countries);
    };
    countriesAddList();
  }, []);
  const ApiHandler = async () => {
    let dataUser = await axios.get("https://api.github.com/users/KzZe-Sama");
    console.log(dataUser.data);
    userGet(dataUser.data);
    let dataCovid = await axios.get("https://api.covid19api.com/summary");
    summaryGlobalCovidGet(dataCovid.data.Global);
  };
  let getCountry = (event) => {
    event.preventDefault();
    let name = event.target.elements.country.value;

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
      <Nav />

      <Container className="container-width-fix">
        <Switch>
          <Route path="/about">
            <About data={user} />
          </Route>

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
