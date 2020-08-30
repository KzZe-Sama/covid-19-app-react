import React from "react";
import { Grid, Statistic } from "semantic-ui-react";
import "./style.css";
import {
  FaSkull,
  FaUserInjured,
  FaHeartbeat,
  FaPlusSquare,
} from "react-icons/fa";

export default function Country(props) {
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
      <Grid>
        <Statistic.Group>
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
    </>
  );
}
