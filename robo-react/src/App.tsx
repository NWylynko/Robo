import React from 'react';
import roboServer from './RoboServerConnect'

export default function App() {

  new roboServer('http://localhost:7777')

  return (
    <>
      <p>hey</p>
    </>
  );
}
