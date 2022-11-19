import React from 'react'

function TaskName() {
  return (
<div id="zadatak-komponenta" className="container">
    <div className="row">
      <p className="mx-auto  mb-1" style={{ width: "40vw" }}>
        <label className="ml-0">Naziv zadatka</label>
      </p>
    </div>
    <div className="row">
      <div className="mx-auto  " style={{ width: "40vw" }}>
        <input
          type="text"
          class="form-control"
          aria-label="Naziv zadatka"
          aria-describedby="basic-addon1"
        ></input>
      </div>
    </div>
  </div>  )
}

export default TaskName