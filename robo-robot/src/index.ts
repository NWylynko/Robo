import * as io from 'socket.io-client';

export class roboServer {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;
  private link: string = 'http://localhost:7777';

  constructor(link) {
    this.link = link
    console.log(`Connecting to ${this.link}`);
    this.socket = io(this.link);
    this.connect();
  }

  private connect(): void {
    this.socket.on('connect', () => {
      console.log(`Connected to ${this.link}`)

      this.socket.emit('identify', 'robot');
    })

    this.socket.on('disconnect', () => {
      console.warn(`Disconnected to ${this.link}`)
    })

    this.socket.on('message', (message: any) => {
      console.log(message)
    })

    this.socket.on('clients', (message: any) => {
      console.log(message)
    })
  } 

  // send a message for the server to broadcast
  public send (message: any): void {
    console.log('emitting message: ' + message);
    this.socket.emit('message', message);
  }
}

new roboServer('http://localhost:7777')