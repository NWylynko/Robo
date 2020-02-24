import React from "react";
import './Profile.css'

export function Profile() {
  return (
  <>
    <p className="inline">Controller: </p>
    <select name="controllers" id="controller-select"></select>
    <p className="inline">running on robot: </p>
    <select name="robots" id="robot-select"></select>
    <br />
    <br />
    <div className="sidebar" id="controller-nodes"></div>
    <div id='conf-container'></div>
  </>
  )
}
