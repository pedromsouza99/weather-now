import { render, waitFor, screen } from "@testing-library/react";
import { weatherResponseExample } from "features/weather/useWeather";
import { WeatherCard } from "./WeatherCard";
import axios from "axios";

describe("renders WeatherCard with data", () => {
  it("shows city temperature", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");

    mockAxiosGet.mockResolvedValue({
      data: weatherResponseExample,
    });

    render(<WeatherCard cityCode="london,uk" />);

    expect(mockAxiosGet).toHaveBeenCalled();
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);

    const temperatureElement = await waitFor(() =>
      screen.findByTestId("card-temperature")
    );

    expect(temperatureElement).toHaveTextContent(
      `${Math.floor(weatherResponseExample.main.temp - 273.15)}º`
    );
  });

  it("shows city humidity and pressure details", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");

    mockAxiosGet.mockResolvedValue({
      data: weatherResponseExample,
    });

    render(<WeatherCard cityCode="london,uk" showDetails />);

    expect(mockAxiosGet).toHaveBeenCalled();
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);

    const temperatureElement = await waitFor(() =>
      screen.findByTestId("card-temperature")
    );
    expect(temperatureElement).toHaveTextContent(
      `${Math.floor(weatherResponseExample.main.temp - 273.15)}º`
    );
    const details = await screen.findByTestId("details-row");
    expect(details).toBeTruthy();
  });

  it("shows loader while request runs", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");

    mockAxiosGet.mockResolvedValue({
      data: weatherResponseExample,
    });

    render(<WeatherCard cityCode="london,uk" />);
    const loader = await screen.findByTestId("loader");

    expect(loader).toBeTruthy();
  });

  it("shows error message when rejected", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");

    mockAxiosGet.mockRejectedValueOnce({
      data: undefined,
    });

    render(<WeatherCard cityCode="london,uk" />);

    expect(mockAxiosGet).toHaveBeenCalled();
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);

    const errorMessage = await screen.findByTestId("error-message");
    expect(errorMessage).toBeTruthy();
  });
});
