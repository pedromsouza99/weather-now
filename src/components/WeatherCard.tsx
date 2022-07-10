import { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { useWeather } from "../pages/Weather/useWeather";
import { Button } from "./layout/Button";
import { Card } from "./layout/Card";
import { CardContent } from "./layout/CardContent";
import { CardFooter } from "./layout/CardFooter";
import { CardHeader } from "./layout/CardHeader";
import { Loader } from "./layout/Loader";
import { Text } from "./layout/Text";

interface WeatherCardProps {
  cityCode: string;
  showDetails?: boolean;
}

export function WeatherCard(props: WeatherCardProps) {
  const { city, getCityWeather, loading, setLoading, error } = useWeather(
    props.cityCode
  );
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    getCityWeather();
    const minute = 60 * 1000;
    intervalRef.current = setInterval(getCityWeather, minute * 10);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [getCityWeather]);

  const refresh = () => {
    setLoading(true);
    getCityWeather();
  };

  const color = useMemo(() => {
    if (!city) return "";
    let c = "blue";
    if (city?.temperature > 5) c = "yellow";
    if (city?.temperature > 25) c = "red";
    return c;
  }, [city]);

  const updatedAt = useMemo(() => {
    if (!city) return "";
    return new Date(city?.updatedAt).toLocaleTimeString();
  }, [city]);

  return (
    <WeatherCardStyle className="weather-card">
      <CardHeader>
        <Text align="center" dBlock>
          {city ? `${city.city}, ${city.country}` : " "}
        </Text>
      </CardHeader>
      <CardContent className="weather-card-content">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center">
            <Text dBlock align="center" color="red">
              Something went wrong
            </Text>
            <div className="mt-2">
              <Button onClick={refresh}>Try Again</Button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <Text color={color} align="center" dBlock fontSize="4.5em">
                {city?.temperature}º
              </Text>
            </div>
          </>
        )}
      </CardContent>
      {!loading && !error && (
        <CardFooter>
          {props.showDetails ? (
            <DetailsRow>
              <div className="detail">
                <Text dBlock fontSize="0.8em" color="grey">
                  HUMIDITY
                </Text>
                <div>
                  <Text>{city?.humidity}</Text>
                  <Text fontSize="0.7em">%</Text>
                </div>
              </div>
              <div className="detail">
                <Text dBlock fontSize="0.8em" color="grey">
                  PRESSURE
                </Text>
                <div>
                  <Text>{city?.pressure}</Text>
                  <Text fontSize="0.7em">hPa</Text>
                </div>
              </div>
            </DetailsRow>
          ) : null}
          <Text dBlock align="center" color="grey" fontSize="0.7em">
            Updated at {updatedAt}
          </Text>
        </CardFooter>
      )}
    </WeatherCardStyle>
  );
}

const WeatherCardStyle = styled(Card)`
  .weather-card-content {
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DetailsRow = styled.div`
  display: flex;
  padding-bottom: var(--spacing-100);

  .detail {
    flex: 0 0 50%;
    text-align: center;
  }
`;
