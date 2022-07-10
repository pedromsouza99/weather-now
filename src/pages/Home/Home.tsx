import { Header } from "../../components/layout/Header";
import Counter from "../../components/TestButton";
import { WeatherPage } from "../Weather/WeatherPage";

export function Home() {
  return (
    <main id="HomePage">
      <Header />
      <Counter />
      <WeatherPage />
    </main>
  );
}
