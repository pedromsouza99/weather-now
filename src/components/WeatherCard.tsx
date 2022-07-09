import { useMemo } from "react";
import styled from "styled-components";
import { Card } from "./layout/Card";
import { CardContent } from "./layout/CardContent";
import { CardFooter } from "./layout/CardFooter";
import { CardHeader } from "./layout/CardHeader";
import { Text } from "./layout/Text";

interface WeatherCardProps {
  color?: "blue" | "red" | "yellow";
}

export function WeatherCard(props: WeatherCardProps) {
  let details = false;
  let value = Math.floor(Math.random() * 30);

  const color = useMemo(() => {
    let c = "blue";
    if (value > 5) c = "yellow";
    if (value > 25) c = "red";
    return c;
  }, [value]);

  return (
    <Card className="weather-card">
      <CardHeader>
        <Text align="center" dBlock>
          Urubici, BR
        </Text>
      </CardHeader>
      <CardContent>
        <Text color={color} align="center" dBlock fontSize="6em">
          {value}º
        </Text>
      </CardContent>
      <CardFooter>
        {!details ? (
          <DetailsRow>
            <div className="detail">
              <Text dBlock fontSize="0.9em" color="grey">
                HUMIDITY
              </Text>
              <div>
                <Text>75</Text>
                <Text fontSize="0.7em">%</Text>
              </div>
            </div>
            <div className="detail">
              <Text dBlock fontSize="0.9em" color="grey">
                PRESSURE
              </Text>
              <div>
                <Text>892</Text>
                <Text fontSize="0.7em">hPa</Text>
              </div>
            </div>
          </DetailsRow>
        ) : null}
        <Text dBlock align="center" color="grey" fontSize="0.7em">
          Updated at 02:48:32 PM
        </Text>
      </CardFooter>
    </Card>
  );
}

const DetailsRow = styled.div`
  display: flex;
  padding-bottom: var(--spacing-100);

  .detail {
    flex: 0 0 50%;
    text-align: center;
  }
`;
