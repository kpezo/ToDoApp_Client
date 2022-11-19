import React from 'react'

function FilterInputField() {
  return (
<div className="input-group mb-1" style={{ width: "30vw" }}>
        <input
            type="text"
            className="form-control"
            placeholder="Traži"
            aria-label="Traži"
            aria-describedby="basic-addon2"
        ></input>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
                Traži
            </button>
        </div>
    </div>  )
}

export default FilterInputField