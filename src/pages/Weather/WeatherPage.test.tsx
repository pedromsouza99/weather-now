import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import { weatherResponseExample } from "features/weather/useWeather";
import { WeatherPage } from "./WeatherPage";

it("lists 3 weather cards", async () => {
  const mockAxiosGet = jest.spyOn(axios, "get");

  mockAxiosGet.mockResolvedValue({
    data: weatherResponseExample,
  });

  render(<WeatherPage />);
  const cardList = await waitFor(() => screen.findAllByTestId("weather-card"));
  expect(cardList).toHaveLength(3);
});
