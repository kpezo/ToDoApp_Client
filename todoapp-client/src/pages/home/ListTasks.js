import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import data from "../../data/data";

function ListTasks() {
  return (
    <div
      id="listaZadataka"
      className="listContainer border rounded"
      style={{ width: "30vw", height: "40vh" }}
    >
      <div className="row">
        <div className="col">
          <div
            className="list-group"
            style={{
              height: "300px",
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            <li
              className="list-group-item clearfix py-2 font"
              style={{
                fontSize: "1.1rem",
              }}
            >
              Lista zadataka
            </li>

            <li
              className="list-group-item d-flex "
              style={{
                fontSize: "1rem",
                paddingTop: "2px",
                paddingBottom: "2px",
                // paddingLeft: "10px",
              }}
            >
              <p className="p-0 m-0 flex-grow-1">Zadatak 1</p>
              <span>
                <button
                  className="btn btn-sm btn-outline-secondary py-0"
                  onclick="herePutFucntion"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="fa-2xs" />
                </button>
              </span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTasks;
