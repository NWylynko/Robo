import React from "react";
import './Robot.css'

export function Robot() {
  return (
    <>
      <select name="robots" id="robot-select"></select>
      <input type="text" id="name" />
      <button onClick={saveRobot}>Save Robot!</button>
      <button id="delete" onClick={deleteRobot} style={{ display: 'none' }}>Delete Robot!</button>
      <table id="parent">
        <tr>
          <th>ID</th>
          <th>Model</th>
          <th>Protocol</th>
          <th>Mode</th>
          <th>Min</th>
          <th>Max</th>
          <th>Groups</th>
          <th><button onClick={addRow}>+</button></th>
          <th><button onClick={() => removeLastRow(2)}>-</button></th>
          <th><button onClick={resetLastRow}>↺</button></th>
        </tr>
      </table>
    </>
  )
}

function saveRobot() {

}

function deleteRobot() {

}

function addRow() {

}

function removeLastRow(n: number) {

}

function resetLastRow() {

}