import { useFetchStatesMutation, useGetCountriesQuery } from "service";
import "./App.css";

export default function App() {
  const { data, isLoading } = useGetCountriesQuery();
  const [trigger, options] = useFetchStatesMutation();
  const { isLoading: isFetchLoading, data: stateData } = options;

  console.log(stateData);

  return (
    <div className={"flex-column align-center p-1"}>
      <h1>Countries and Their States</h1>
      <div className={"flex justify-center"}>
        <div>
          <p className={"p-1"}>List of Countries</p>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <ul>
              {data.data.map((item) => {
                return (
                  <li key={item.country}>
                    <button onClick={() => trigger(item.country)}>
                      {item.country}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div>
          <p className={"p-1"}>List of States</p>
          {isFetchLoading ? (
            <h3>Loading...</h3>
          ) : (
            <ul>
              {stateData?.data?.states.map((state) => {
                return <li key={state.state_code}>{state.name}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
