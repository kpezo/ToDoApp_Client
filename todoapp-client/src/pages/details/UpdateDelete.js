import React from 'react'

function UpdateDelete() {
  return (
<div id="deleteUpdateButtons">
    <div className="container" style={{ width: "40vw" }}>
      <div className="mx-auto">
        <div className="d-flex flex-row-reverse">
          <div className="mx-3">
            {" "}
            <button
              type="button"
              className=" col btn btn-sm btn-outline-secondary"
            >
              Update
            </button>
          </div>
          <div>
            {" "}
            <button
              type="button"
              className=" col btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

export default UpdateDelete