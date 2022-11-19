import React from "react";

function FilterButtons() {
  return (
    <div
      className="d-flex button-group mb-1"
      role="group"
      style={{ width: "30vw" }}
    >
      <button className="btn flex-fill ">Svi</button>
      <button className="btn flex-fill  ">Nedovršeni</button>
      <button className="btn flex-fill ">Dovršeni</button>
      <button className="btn flex-fill ">Zakašnjeli</button>
    </div>
  );
}

export default FilterButtons;
