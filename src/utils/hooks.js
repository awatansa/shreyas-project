import { useEffect, useState } from "react";

export function useApi() {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [fullData, setFullData] = useState([]); //====
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    if (isLoading) {
      fetch("https://countriesnow.space/api/v0.1/countries")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data.data);
        })
        .catch((e) => {
          setIsError(true);
          setError(e);
        });

      // fetch("https://countriesnow.space/api/v0.1/countries/states", {
      //   method: "POST",
      //   data: JSON.stringify({ country: "India" }),
      //   mode: "no-cors",
      //   headers: { "content-type": "application/json" },
      // })
      //   .then((res) => res.json())
      //   .then((data) => setStateList(data.states));


      // ====
      fetch("https://countriesnow.space/api/v0.1/countries/states")
        .then((res) => res.json())
        .then((data) => {
          setFullData(data.data);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsError(true);
          setError(e);
        });
        // ====
    }
  });


// ====
  function filterState(country) {
    let states = fullData.filter((c) => c.name == country);
    console.log(stateList);
    setStateList(() => {
      return states.states;
    });
  }
  // ====

  return {
    countries,
    stateList,
    isLoading,
    isError,
    error,
    filterState, //+++++
  };
}
