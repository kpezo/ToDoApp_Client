import React from "react";

function AddNewTask() {
  return (
    <>
      <div className="input-group mb-1" style={{ width: "30vw" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Dodaj novi zadatak"
          aria-label="Dodaj novi zadatak"
          aria-describedby="basic-addon2"
        ></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Dodaj
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNewTask;
