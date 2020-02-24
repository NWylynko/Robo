import React from "react";

export function Client() {
  return (
    <>
      <h1 className="text" id="main-header">Dashboard - Robotics GUI</h1>
      <p id="marker"></p>
      <img src="http://10.0.0.10:8080" alt="" width="auto" height="auto"></img>
      <canvas id="flippers" width="350" height="300" style={{ display: 'inline-block' }}></canvas>
      <div style={{ display: 'inline-block' }}>
        <p id="leftWheelsDirection">Left wheels: forwards</p>
        <p id="rightWheelsDirection">Right wheels: forwards</p>
        <p id="flipperDirection">Flippers: front</p>
      </div>
      <div className="slidecontainer">
        <button type="button" name="lookLeft" onClick={cameraLeft}>Look left</button>
        <button type="button" name="lookCenter" onClick={centerCamera}>Center the camera</button>
        <button type="button" name="move" onClick={cameraRight}>Look right</button>
        <button type="button" name="move" onClick={moveStraight}>Move forward</button>
        <button type="button" name="button" onClick={stopMovement}>Stop</button>
        <h4>Grabber Direction </h4>
        <p id="grabberPositionDisplay">Grabber position: 0%</p>
        <form id="grabberParent">
          <input type="checkbox" name="Servo 1" value="1" defaultChecked />
          <label htmlFor="1">Grabber Servo 1</label>
          <br />
          <input type="checkbox" name="Servo 2" value="2" defaultChecked />
          <label htmlFor="2">Grabber Servo 2</label>
          <br />
          <input type="checkbox" name="Servo 3" value="3" defaultChecked />
          <label htmlFor="3">Grabber Servo 3</label>
        </form>
      </div>
      <div className="text-content">
        <label className="form-switch">
          Hazmat Detection
          <input type="checkbox" id="check1" />
          <i></i>
        </label>
        <br />
        <label className="form-switch">
          General Detection
          <input type="checkbox" id="check2" />
          <i></i>
        </label>

        <label className="form-switch">
          Code Scanning
          <input type="checkbox" id="check3" />
          <i></i>
        </label>

        <label className="form-switch">
          Point Tracking
          <input type="checkbox" id="check4" />
          <i></i>
        </label>
      </div>
    </>
  )
}

function cameraLeft() {

}

function centerCamera() {

}

function cameraRight() {

}

function moveStraight() {

}

function stopMovement() {

}