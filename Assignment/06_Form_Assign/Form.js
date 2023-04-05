import React, { useState } from "react";

export const Form = () => {
  const [state, setState] = useState({
    Name: "",
    Email: "",
    HotelName: "",
    Location: "India",
  });

  const InputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };
  const SubmitForm = (e) => {
    e.preventDefault();

    setState({
      Name: "",
      Email: "",
      Location: "India",
    });
    alert(`You Selected ${state.HotelName} As Your Hotel`);
    console.log(state);
  };

  return (
    <>
      <div className="container mt-4">
        <h1>Book Your Hotel..</h1>

        <form onSubmit={SubmitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              onChange={InputEvent}
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="namelHelp"
              autoComplete="off"
              value={state.Name}
              name="Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={InputEvent}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              value={state.Email}
              name="Email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Select Hotel
            </label>
            <div className="mb-3">
              <select
                onChange={InputEvent}
                className="form-select"
                aria-label="Default select example"
                value={state.HotelName}
                name="HotelName"
              >
                <option>Select Hotel</option>
                <option>JW Marriott Hotel Pune</option>
                <option>The Leela Ambience</option>
                <option>Taj Resort And Palace</option>
                <option>Rambagh Palace, Jaipur</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Location
            </label>
            <input
              onChange={InputEvent}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="Location"
              value={state.Location}
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
