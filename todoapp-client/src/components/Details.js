import React from "react";
import "./css/details.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

function Details() {
  return (
    <>
      <div className="details-form-container">
        <div className="mb-50 py-5">
          <p>
            <label>Header/navbar</label>
          </p>
        </div>
        <div id="zadatak-komponenta" className=" container">
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
        </div>
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
                        id="dropdown-split-basic"
                      />

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
                        id="dropdown-split-basic"
                      />

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
                      placeholder="DateRange"
                      //   value={date}
                      //   onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div id="detaljniOpisZadatka">
          <div className="container mt-2" style={{ width: "40vw" }}>
            <div class="form-group">
              <label for="detaljniOpisZadatka" className="pt-1 pb-1">
                Opis zadatka
              </label>
              <textarea
                class="form-control"
                id="detaljniOpisZadatka"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
