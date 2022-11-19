import React from "react";
import "./css/details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ReturnHome from "../pages/details/ReturnHome";
import TaskName from "../pages/details/TaskName";
import TripleDropdown from "../pages/details/TripleDropdown";
import DetailDescription from "../pages/details/DetailDescription";
import UpdateDelete from "../pages/details/UpdateDelete";

function Details() {
  return (
    <>
      <div className="details-form-container">
        <Header></Header>
        <ReturnHome></ReturnHome>
        <TaskName></TaskName>
        <TripleDropdown></TripleDropdown>
        <DetailDescription />
        <UpdateDelete />
      </div>
    </>
  );
}

export default Details;
