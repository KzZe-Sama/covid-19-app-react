import React from "react";
import { Segment, Grid, Statistic } from "semantic-ui-react";

//css
import "./style.css";
// Icons
import {
  FaSkull,
  FaUserInjured,
  FaHeartbeat,
  FaPlusSquare,
  FaGlobeAfrica,
} from "react-icons/fa";

// Custom React Components
import Search from "./components/Search";
import Label from "./components/Label";
export default function Home(props) {
  // console.log(props.countries);
  let total_cases = Number(parseInt(props.data && props.data.TotalConfirmed));
  let total_recovered = Number(
    parseInt(props.data && props.data.TotalRecovered)
  );
  let total_deaths = Number(parseInt(props.data && props.data.TotalDeaths));
  const currentCases = () => {
    return total_cases - (total_recovered + total_deaths);
  };
  return (
    <>
      <Segment inverted padded="very">
        <Grid>
          <Statistic.Group>
            <FaGlobeAfrica size="35px" color="green" />
            <Statistic>
              <Statistic.Value className="white-text-global">
                {props.data && props.data.TotalConfirmed}{" "}
                <FaUserInjured color="teal" />
              </Statistic.Value>
              <Statistic.Label className="white-text-global">
                Total Cases Confirmed
              </Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value className="white-text-global">
                {props.data && props.data.TotalRecovered}{" "}
                <FaHeartbeat
                  color="red"
                  className="animate__animated animate__heartBeat animate__infinite"
                />
              </Statistic.Value>
              <Statistic.Label className="white-text-global">
                Total Recovered
              </Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value className="white-text-global">
                {currentCases()} <FaPlusSquare color="orangered" />
              </Statistic.Value>
              <Statistic.Label className="white-text-global">
                Currently Infected
              </Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value className="white-text-global">
                {props.data && props.data.TotalDeaths}{" "}
                <FaSkull
                  color="SILVER"
                  className="animate__animated animate__infinite animate__pulse"
                />
              </Statistic.Value>
              <Statistic.Label className="white-text-global">
                Total Deaths
              </Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Grid>
      </Segment>
      <Segment inverted className="search-bar-segment">
        <Label>Search For Specific Country</Label>
        <Search
          getCountry={props.country}
          name="country"
          data={props.countries}
        />
      </Segment>
    </>
  );
}
