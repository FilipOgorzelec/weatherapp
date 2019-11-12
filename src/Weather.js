import React from "react";
import styled from "styled-components";

import { useAsync } from "./hooks/useAsync";

import List from "./List";

const StyledWait = styled.p`
  color: gray;
  font-family: "Inconsolata", monospace;
  font-size: 1em;
  text-align: center;
`;

const Weather = ({ latitude, longitude }) => {
  const [result, loading] = useAsync(latitude, longitude);

  if (loading === "false") {
    return <StyledWait>Please Allow Geolocation And Wait</StyledWait>;
  } else if (loading === "null") {
    return <StyledWait>Loading Error</StyledWait>;
  } else
    return (
      <>
        <List result={result} />
      </>
    );
};

export default Weather;
