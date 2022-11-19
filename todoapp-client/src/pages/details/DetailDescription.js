
import React from 'react'

function DetailDescription() {
  return (
<div id="detaljniOpisZadatka">
    <div className="container mt-2 mb-3" style={{ width: "40vw" }}>
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
  </div>  )
}

export default DetailDescription