import React from 'react'

function TaskStatusOverview() {
  return (
<div className="container" style={{ width: "30vw" }}>
        <div id="bottom4" className="row">
            <div className="col-sm" style={{ paddingLeft: "0px" }}>
                <div className="row mt-4 pb-3 ">
                    <div className="col-sm-8 d-flex align-items-center">
                        Nedovršeni zadatci
                    </div>
                    <div className="col-sm-4 border border-secondary rounded ">
                        <p className="mb-0 p-2">
                            <label className="d-flex justify-content-center align-items-center">
                                5
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row pb-3 d-flex align-items-center">
                    <div className="col-sm-8 ">Dovršeni zadatci</div>
                    <div className="col-sm-4 border border-secondary rounded">
                        <p className="mb-0 p-2">
                            <label className="d-flex justify-content-center align-items-center">
                                5
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row pb-3 d-flex align-items-center">
                    <div className="col-sm-8">Zakašnjeli zadatci</div>
                    <div className="col-sm-4 border border-secondary rounded">
                        <p className="mb-0 p-2">
                            <label className="d-flex justify-content-center align-items-center">
                                5
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-sm-8 ">Ukupno zadataka</div>
                    <div className="col-sm-4 border border-secondary rounded">
                        <p className="mb-0 p-2">
                            <label className="d-flex justify-content-center align-items-center">
                                5
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm"></div>
        </div>
    </div>  )
}

export default TaskStatusOverview