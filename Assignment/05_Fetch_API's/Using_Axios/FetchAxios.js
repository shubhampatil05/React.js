import React, { useEffect, useState } from "react";
import axios from "axios";

// Fetching APIs using Axios..

export const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fetching.. APIs!!</h1>

      <ul>
        {data.map((value) => {
          return <li key={value.id}>{value.title}</li>;
        })}
      </ul>
    </>
  );
};

// --------------------------------------------------------------

// Fetching APIs using Axios by taking a input from user ans show the result based on user input value

export const FetchDataInput = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <h1>Fetching.. APIs!!</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <div>{data.title}</div>
    </>
  );
};

// --------------------------------------------------------------

export const FetchDataBtn = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <h1>Fetching.. APIs!!</h1>
      <div style={{ height: "30px", paddingLeft: "10px" }}>{data.title}</div>
      <button
        className="btn btn-danger"
        onClick={() => {
          setId(id + 1);
        }}
      >
        Fetch
      </button>
    </>
  );
};

// --------------------------------------------------------------

// Fetch data onClick btn and id is depending upon input Field

export const FetchDataUsingInputAndBtn = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [btnId, setBtnId] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)

      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [btnId]);

  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setBtnId(id);
          setId("");
        }}
      >
        Fetch Data
      </button>
      <div>{data.title}</div>
    </>
  );
};
