import React from "react";

export function Servo() {
  return (
    <>
      <p id="invalid_url" style={{ display: 'none' }}>Invalid URL!</p>
      <form>
        <input type="text" id="url"></input>
      </form>
      <button id="download" onClick={getFile}>Download the file!</button>
      <button id="save" style={{ display: 'none' }}>Save changes!</button>
      <button id="upload" onClick={uploadFile} style={{ display: 'none' }} ></button>
      <br />
      <table id="parent" style={{ display: 'none' }}>
        <tr>
          <th>Value</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </table>
    </>
  )
}

function getFile() {

}

function uploadFile() {

}