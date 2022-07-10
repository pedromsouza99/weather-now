import { render, waitFor, screen } from "@testing-library/react";
import { WeatherPage } from "./WeatherPage";

jest.mock("axios");

it("lists 3 weather cards", async () => {
  render(<WeatherPage />);
  const cardList = await waitFor(() => screen.findAllByTestId("weather-card"));
  expect(cardList).toHaveLength(3);
});
