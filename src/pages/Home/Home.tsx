import { Header } from "components/Header";
import { WeatherPage } from "pages/Weather/WeatherPage";

export function Home() {
  return (
    <main id="HomePage">
      <Header />
      <WeatherPage />
    </main>
  );
}
