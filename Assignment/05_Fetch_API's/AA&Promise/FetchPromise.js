import React, { useEffect, useState } from "react";
import "./FetchAPIs.css";

// Fetching data by using Promise..

export const FetchAPIUsingPromise = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <h1>Fetching API In Table Format</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {user.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>{value.company.name}</td>
                <td>{value.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

//------------------------------------------------------------------

// Fetching APIs by using Async Await..

export const FetchAPIUsingAsyncAwait = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");

    const data = await res.json();

    setComments(data);
  };

  return (
    <>
      <h1>Fecthing Data</h1>
      <ol>
        {comments.map((value) => {
          return <li key={value.id}>{value.body}</li>;
        })}
      </ol>
      <button onClick={fetchComments}>FetchData</button>
    </>
  );
};
