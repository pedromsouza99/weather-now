import styled from "styled-components";
import { Container } from "../../components/layout/Container";
import { WeatherCard } from "../../components/WeatherCard";

export function WeatherPage() {
  return (
    <Container>
      <Page>
        <CardsContainer>
          <WeatherCard cityCode="Nuuk,gl" />
          <WeatherCard cityCode="Urubici,br" showDetails />
          <WeatherCard cityCode="Nairobi,ke" />
        </CardsContainer>
      </Page>
    </Container>
  );
}

const Page = styled.div`
  min-height: calc(100vh - 46px);
  width: 100%;
  padding: var(--spacing-100);
  display: grid;
`;

const cardWidth = 220;
const CardsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  .weather-card {
    min-width: ${cardWidth}px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-100);

    .weather-card {
      width: 100%;
    }
  }
`;
