import { render, waitFor, screen } from "@testing-library/react";
import {
  CityWeatherResponse,
  weatherResponseExample,
} from "features/weather/useWeather";
import { WeatherCard } from "./WeatherCard";
jest.mock("axios");
// eslint-disable-next-line import/first
import axios from "axios";

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockResponse = weatherResponseExample;

describe("renders WeatherCard with data", () => {
  it("shows city temperature", async () => {
    render(<WeatherCard cityCode="london,uk" />);
    const loader = await screen.findByTestId("loader");
    expect(loader).toBeVisible();

    mockedAxios.get.mockResolvedValue({
      data: mockResponse,
    });

    const temperatureElement = await screen.findByTestId("card-temperature");

    expect(temperatureElement).toHaveTextContent(
      `${weatherResponseExample.main.temp - 273.15}º`
    );
  });
});
