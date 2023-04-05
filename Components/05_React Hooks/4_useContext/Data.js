import { createContext } from "react";
import { PassData } from "./PassData";

const FirstName = createContext();
const LastName = createContext();

export const Data = () => {
  return (
    <>
      <FirstName.Provider value={"Shubham"}>
        <LastName.Provider value={"Patil"}>
          <PassData />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export { FirstName, LastName };
