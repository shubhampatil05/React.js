import { useState } from "react";

export function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      HookCounterThree:
      <form>
        <div>
          <input
            type="text"
            name="firstname"
            value={name.firstname}
            onChange={(e) => setName({ firstname: e.target.value })}
          ></input>
          <br></br>
          <input
            type="text"
            name="lastname"
            value={name.lastname}
            onChange={(e) =>
              setName((preValue) => {
                const { value, name } = e.target;
                return {
                  ...preValue,
                  [name]: value,
                };
              })
            }
          ></input>
        </div>
        Your First Name :: {name.firstname} <br></br>
        Your Last Name :: {name.lastname}
      </form>
    </div>
  );
}
