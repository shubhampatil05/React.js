import { useEffect, useState } from "react";

export const SearchApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchApi = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    let result = await res.json();
    setData(result);
    console.log(data);
  };

  const HandleEvent = (e) => {
    setSearch(e.target.value);
  };

  const searchUser = () => {
    fetchApi();
    setSearch("");
  };
  return (
    <>
      <input type="text" value={search} onChange={HandleEvent} />
      <button onClick={searchUser}>Click</button>

      {data.map((ele) => {
        if (ele.id == search) {
          return (
            <div key={ele.id}>
              <p> id--:::--{ele.id}</p>
              <p>name--:::--{ele.name}</p>
              <p>address--:::--{ele.address.street}</p>
              <p>e-mail--:::--{ele.email}</p>
              <p>phone--:::--{ele.phone}</p>
            </div>
          );
        }
      })}
    </>
  );
};
