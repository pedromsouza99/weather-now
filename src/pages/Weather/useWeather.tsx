import axios from "axios";
import { useCallback, useState } from "react";

const example = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
  ],
  base: "stations",
  main: {
    temp: 290.85,
    feels_like: 290.66,
    temp_min: 288.46,
    temp_max: 292.21,
    pressure: 1030,
    humidity: 76,
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 100 },
  clouds: { all: 18 },
  dt: 1657405297,
  sys: {
    type: 2,
    id: 2019646,
    country: "GB",
    sunrise: 1657338843,
    sunset: 1657397816,
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200,
};
export type ResponseType = typeof example;

export type CityWeather = {
  city: string;
  cityCode: string;
  country: string;
  humidity: number;
  pressure: number;
  temperature: number;
  updatedAt: Date;
};

const weatherApiKey = "d04fb74ea277d323d70fa9f198572aae";
const baseUrl = "api.openweathermap.org/data/2.5/";

export function useWeather(cityCode: string) {
  const [city, setCity] = useState<CityWeather>(() => {
    // retrieve cached city data
    const city = localStorage.getItem(cityCode);
    if (city) {
      let cityData: CityWeather = JSON.parse(city);
      const cacheTimer = 1000 * 60 * 10; // 10 minutes
      const now = new Date().valueOf();
      const cachedAt = new Date(cityData.updatedAt).valueOf();
      // if data was cached more than 10 minutes ago, discard it
      if (now - cachedAt > cacheTimer) {
        localStorage.removeItem(cityCode);
      } else {
        return JSON.parse(city);
      }
    }
    return undefined;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cacheCityData = useCallback(
    (data: CityWeather) => {
      try {
        localStorage.setItem(cityCode, JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    },
    [cityCode]
  );

  const getCityWeather = useCallback(async () => {
    try {
      const data = await axios.get<ResponseType>(
        `https://${baseUrl}weather?q=${cityCode}&APPID=${weatherApiKey}`
      );
      const cityData = data.data;
      const _city: CityWeather = {
        cityCode: cityCode,
        city: cityData.name,
        country: cityData.sys.country,
        temperature: Math.floor(cityData.main.temp - 273.15), // convert from kelvin to celsius
        pressure: cityData.main.pressure,
        humidity: cityData.main.humidity,
        updatedAt: new Date(),
      };
      setCity(_city);
      setLoading(false);
      setError(false);
      cacheCityData(_city);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }, [cacheCityData, cityCode]);

  return {
    city,
    loading,
    setLoading,
    error,
    getCityWeather,
  };
}
