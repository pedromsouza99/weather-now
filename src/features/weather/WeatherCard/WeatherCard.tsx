import { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { useWeather } from "features/weather/useWeather";
import { Button } from "components/Button";
import { Card } from "components/Card";
import { CardContent } from "components/CardContent";
import { CardFooter } from "components/CardFooter";
import { CardHeader } from "components/CardHeader";
import { Loader } from "components/Loader";
import { Text } from "components/Text";

export interface WeatherCardProps {
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
    <WeatherCardStyle data-testid="weather-card" className="weather-card">
      <CardHeader data-testid="card-header">
        <Text align="center" dBlock>
          {city ? `${city.city}, ${city.country}` : " "}
        </Text>
      </CardHeader>
      <CardContent className="weather-card-content">
        {loading ? (
          <Loader data-testid="loader" />
        ) : error ? (
          <div className="text-center" data-testid="error-message">
            <Text dBlock align="center" color="red">
              Something went wrong
            </Text>
            <div className="mt-2">
              <Button onClick={refresh}>Try Again</Button>
            </div>
          </div>
        ) : (
          <div>
            <Text
              data-testid="card-temperature"
              color={color}
              align="center"
              dBlock
              fontSize="4.5em"
            >
              {city?.temperature}º
            </Text>
          </div>
        )}
      </CardContent>
      {!loading && !error && (
        <CardFooter data-testid="card-footer">
          {props.showDetails ? (
            <DetailsRow data-testid="details-row">
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
