import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import tasks from "../../data/data";
import { Link } from "react-router-dom";

function ListTasksv2() {
  return (
    <div id="listaZadataka" className="listContainer border rounded">
      <div className="list-group" style={{ width: "30vw", height: "40vh" }}>
        <p className="my-auto ">
          <label
            className="list-group-item"
            style={{
              fontSize: "1.1rem",
              //   paddingLeft: "10px",
            }}
          >
            Lista zadataka
          </label>
        </p>
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <div
            className="tasks"
            style={{ width: "100%", height: "100%", overflowY: "auto" }}
          >
            {tasks.map((task) => {
              return (
                <li
                  className="list-group-item d-flex "
                  key={task.id}
                  style={{
                    fontSize: "1rem",
                    paddingTop: "2px",
                    paddingBottom: "2px",

                    // paddingLeft: "10px",
                  }}
                >
                  <p className="p-0 m-0 flex-grow-1">{task.name}</p>
                  <span>
                    <Link
                      to={`/details/${task.id}`}
                      className="btn btn-sm btn-outline-secondary py-0"
                      onclick="herePutFucntion"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="fa-2xs"
                      />
                    </Link>
                  </span>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTasksv2;
