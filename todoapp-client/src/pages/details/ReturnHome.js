import React from "react";
import { browserHistory } from "react-router";

function navigateHome() {
  // browserHistory.push("/home");
}

function ReturnHome() {
  return (
    <div className="container" id="return">
      <div className="row">
        <div className="mb-3 mx-auto" style={{ width: "40vw" }}>
          <button
            type="button"
            className="btn btn-sm d-flex btn-outline-secondary"
            onClick={navigateHome}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left my-auto"
              viewBox="0 0 16 16"
            >
              <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
            </svg>{" "}
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReturnHome;