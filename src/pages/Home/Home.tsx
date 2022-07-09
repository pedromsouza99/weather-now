import { Header } from "../../components/layout/Header";
import { WeatherPage } from "../Weather/WeatherPage";

export function Home() {
  return (
    <div id="HomePage">
      <Header />
      <WeatherPage />
    </div>
  );
}
