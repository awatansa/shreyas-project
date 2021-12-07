import { useState } from "react";
import "./App.css";
import { useApi } from "./utils/hooks";

export default function App() {
  const { countries, isLoading, stateList, filterState } = useApi();
  const [isStateSelected, setIsStateSelected] = useState(false);

  function handleClick(e) {
    filterState(e.target.value);
    setIsStateSelected(true);
  }

  function Section() {
    return (
      <ul>
        {countries.map((item) => (
          <li key={item.country}>
            <button onClick={handleClick} value={item.country}>
              {item.country}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  function ShowStates() {
    console.log(stateList)
    return (
      <ul>
        {stateList.map((item) => {
          return <li key={item.state_code}>{item.name}</li>;
        })}
      </ul>
    );
  }

  return (
    <div className="flex-column center">
      <h1>Country List</h1>
      <div className={"flex"}>
        <div>{isLoading ? <h3>Loading...</h3> : <Section />}</div>
        <div>{isStateSelected ? <ShowStates /> : <></>}</div>
      </div>
    </div>
  );
}
