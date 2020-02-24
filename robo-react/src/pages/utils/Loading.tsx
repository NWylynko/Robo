import React from "react";
import './Loading.css'

export function Loading() {
  return (
    <>
    <div className="loadingAnimation">
      <div className="content">
        <div className="planet">
          <div className="ring"></div>
          <div className="cover-ring"></div>
          <div className="spots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p id="loading-text"></p>
      </div>
    </div>
    <h1 style={{ textAlign: 'center'}}>Loading...</h1>
    </>
  )
}
