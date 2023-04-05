import React from "react";
import { Age, FirstName, LastName } from "../../App";

export const C = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lName) => {
                return (
                  <Age.Consumer>
                    {(age) => {
                      return (
                        <pre>
                          {fName} {lName} {age}
                        </pre>
                      );
                    }}
                  </Age.Consumer>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};
