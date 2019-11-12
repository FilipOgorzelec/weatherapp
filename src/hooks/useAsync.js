import { useState, useEffect } from "react";
export function useAsync(latitude, longitude) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    async function fetchOpenWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=0cca9fe5f9e55e3738e70ac09759c6be`
        );
        const json = await response.json();
        setResult(json);
        if (result !== []) {
          setLoading("true");
        }
      } catch (error) {
        setLoading("null");
      }
    }
    if (
      latitude !== undefined &&
      longitude !== undefined &&
      loading === "false"
    ) {
      fetchOpenWeather();
    }
  }, [latitude, longitude, result]);
  return [result, loading];
}
