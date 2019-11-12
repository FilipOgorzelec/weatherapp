import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledData = styled.p`
  color: gray;
  font-size: 1.5em;
  font-family: "Inconsolata", monospace;
  user-select: none;
`;

const StyledLi = styled.li`
  color: gray;
  font-size: 1.5em;
  font-family: "Inconsolata", monospace;
  list-style-type: none;
  user-select: none;
`;

const Span = styled.span`
  display: ${props => (props.display ? "inline" : "none")};
`;

const List = ({ result }) => {
  const weatherList = result.list;
  const [count, addCount] = useState(0);
  const [currentData, changeData] = useState(weatherList[count]);
  const [spanDisplay, setDisplay] = useState([false, true]);

  const kelvinToCelsius = (temp) => Math.floor(temp - 273.15);

  useEffect(()=>{
    changeData(weatherList[count])
    if(count===0){
      setDisplay([false,true]);
    }
    else if(count>0&&count<32){
      setDisplay([true,true]);
    }
    else setDisplay([true,false]);

  })
  
  return (
    <>
      <StyledContainer>
        <StyledData>
          <Span
            onClick={() => {
              if(count>0){
                addCount(count - 8);
              }
            }}
            display={spanDisplay[0]}
          >
            &#8249;
          </Span>
          {currentData.dt_txt.slice(5, 10)}
          <Span
            onClick={() => {
              if(count<32){
                addCount(count + 8);
              }
            }}
            display={spanDisplay[1]}
          >
            &#8250;
          </Span>
        </StyledData>
      </StyledContainer>
      <ul>
        <StyledLi> temperature: {kelvinToCelsius(currentData.main.temp)+String.fromCharCode(176)}C </StyledLi>
        <StyledLi> sky: {currentData.weather[0].description}</StyledLi>
        <StyledLi> wind: {currentData.wind.speed} m/s</StyledLi>
      </ul>
    </>
  );
};

export default List;
