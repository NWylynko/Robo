// script sets up the websocket server
import { socket } from './socket' 
// simple communication to identify if client is a webclient or a robot
import { Identification } from './identity' 
import { Latency } from './latency'
import * as types from './types';


export class App {
  private io: SocketIO.Server;

  constructor(port: number) {
    this.io = new socket(port).io // create websocket server
    new Identification(this.io) // apply simple identification api
    new Latency(this.io)
    this.listen()
  }

  private listen() {
    this.io.on('connection', (socket: any) => {

      socket.on('message', (message: any) => {
        console.log(JSON.stringify(message));
      });

    });
  }


}

new App(7777)