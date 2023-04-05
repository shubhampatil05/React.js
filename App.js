import { useState } from "react";
export const App = () => {
  const [state, setState] = useState();
  const [condition, setCondition] = useState(false);

  const data = [
    { name: "India", value: "IN", cities: ["Mumbai", "Delhi"] },
    { name: "England", value: "Eng", cities: ["London", "Yorkshire"] },
    { name: "Australia", value: "Aus", cities: ["Sydney", "Brisbane"] },
  ];

  const handleClick = (e) => {
    setState(e.target.value);
    setCondition(true);
  };

  // console.log(data[1].cities);

  return (
    <>
      <select onClick={handleClick}>
        {data.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {condition ? (
        <select>
          {data[state].cities.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      ) : null}
    </>
  );
};
