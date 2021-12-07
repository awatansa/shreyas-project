export function useApi() {
  // const [fullData, setFullData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState({});
  // const [countryList, setCountryList] = useState([]);
  // const [stateList, setStateList] = useState([]);
  // const [isCountrySelected, setIsCountrySelected] = useState(false);
  // useEffect(() => {
  //   if (isLoading) {
  //     fetch("https://countriesnow.space/api/v0.1/countries/states")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setFullData(data);
  //         setCountryList(() => {
  //           let countries = [];
  //           data.data.forEach((country) => {
  //             countries.push(country.name);
  //           });
  //           return countries;
  //         });
  //         setIsLoading(false);
  //       })
  //       .catch((e) => {
  //         setIsError(true);
  //         setError(e);
  //       });
  //   }
  // }, []);
  // function fetchStates(country) {
  //   fetch("https://countriesnow.space/api/v0.1/countries/states", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ country: country }),
  //     mode: "no-cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }
  // function setCountry(countryName) {
  //   setIsCountrySelected(true);
  //   setStateList(() => {
  //     return fullData.data
  //       .filter((country) => country.name === countryName)[0]
  //       .states.map((state) => ({ id: state.state_code, name: state.name }));
  //   });
  // }
  // return {
  //   isLoading,
  //   countryList,
  //   stateList,
  //   isError,
  //   error,
  //   setCountry,
  //   isCountrySelected,
  //   fetchStates,
  // };
}
