import { useEffect, useState } from "react";

export function useApiMutation(countryName) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "*/*",
      Connection: "keep-alive",
    },
    data: JSON.parse(JSON.stringify({ country: countryName })),
  };

  fetch("https://countriesnow.space/api/v0.1/countries/states", options)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsError(true), setError(error);
    });
  return { data, isLoading, isError, error };
}

export function useApiQuery() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsError(true);
      });
  });

  return { data, isLoading, isError, error };
}
