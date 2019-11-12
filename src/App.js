import React, { useState } from "react";
import Layout from "../src/utitles/Layout";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//Sites
import Weather from "./Weather";

//Hooks
import { usePosition } from "./hooks/usePosition";

const StyledButton = styled.button`
  background-color: black;
  border: none;
  font-size: 2em;
  font-family: "Inconsolata", monospace;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  color: gray;
  text-decoration: none;
`;

const App = () => {
  const { latitude, longitude, error } = usePosition();
  const [clicked, setClick] = useState("Click to Geolocation Weather");
  return (
    <Router>
      <Layout>
        <StyledButton onClick={() => setClick("Geolocation Weather")}>
          <StyledLink to="/weather">{clicked}</StyledLink>
        </StyledButton>
      </Layout>

      <Switch>
        <Route path="/weather">
          <Weather latitude={latitude} longitude={longitude} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
