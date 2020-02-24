import React from "react";

export function Wizard() {
  return (
  <>
    <div id="select">
      <select id="model"></select>
      <input type="text" id="id" placeholder="ID" />
      <input type="text" id="protocol" placeholder="Protocol #" />
      <button type="submit" onClick={openTable}>Go!</button>
    </div>
    <table id="control_table"></table>
  </>
  )
}

function openTable() {

}
