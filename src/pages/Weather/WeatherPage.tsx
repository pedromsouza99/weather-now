import styled from "styled-components";
import { Container } from "../../components/layout/Container";
import { WeatherCard } from "../../components/WeatherCard";

export function WeatherPage() {
  return (
    <Container>
      <Page>
        <CardsContainer>
          <WeatherCard></WeatherCard>
          <WeatherCard></WeatherCard>
          <WeatherCard></WeatherCard>
        </CardsContainer>
      </Page>
    </Container>
  );
}

const Page = styled.div`
  height: 100vh;
  width: 100%;
`;

const CardsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
