import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function TripleDropdown() {
  return (
<div id="dropdownsStatusPriorityDueDate " className="mt-3">
    <div className="row" style={{ width: "40vw" }}>
      <div className="col-5">
        <div className="container ">
          <div className="row pb-3">
            <div className="col-4" style={{ paddingLeft: "0px" }}>
              <p className=" h-100 d-flex flex-column justify-content-center ">
                <label className="">Prioritet</label>
              </p>
            </div>
            <div className="col-8">
              <Dropdown as={ButtonGroup}>
                <Button
                  variant="outline-secondary"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  High
                </Button>

                <Dropdown.Toggle
                  split
                  variant="outline-secondary"
                  id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">High</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Normal</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Low</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="col-4" style={{ paddingLeft: "0px" }}>
              <p className="h-100 d-flex flex-column justify-content-center">
                <label>Status</label>
              </p>
            </div>
            <div className="col-8">
              <Dropdown as={ButtonGroup}>
                <Button
                  variant="outline-secondary"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  In-Progress
                </Button>

                <Dropdown.Toggle
                  split
                  variant="outline-secondary"
                  id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Done</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    In-Progress
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="col-5">
        <div className="row ">
          <div className="col">
            <p className="h-100 d-flex flex-column justify-content-center">
              <label>DueDate</label>
            </p>
          </div>
          <div className="col">
            <div>
              <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  </div>  )
}

export default TripleDropdown