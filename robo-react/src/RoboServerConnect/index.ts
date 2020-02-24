import io from 'socket.io-client';
import packageJSON from '../../package.json'

export default class roboServer {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;
  private link: string = 'http://localhost:7777';

  constructor(link: string) {
    this.link = link
    console.log(`Connecting to ${this.link}`);
    this.socket = io(this.link);
    this.connect();
  }

  private connect(): void {
    this.socket.on('connect', () => {
      console.log(`Connected to ${this.link}`)

      this.socket.emit('identify', {type: 'web', name: 'robo-react', version: packageJSON.version});

      this.socket.on('latency', (startTime: any, cb: any) => {
        cb(startTime);
      }); 
    })

    this.socket.on('clients-latency', (data: any) => {
      // console.log(data)
    }); 

    this.socket.on('message', (message: string) => {
      console.log(message)
    })

    this.socket.on('disconnect', () => {
      console.warn(`Disconnected from ${this.link}`)
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