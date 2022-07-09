import { Header } from "../../components/layout/Header";
import { WeatherPage } from "../Weather/WeatherPage";

export function Home() {
  return (
    <main id="HomePage">
      <Header />
      <WeatherPage />
    </main>
  );
}
