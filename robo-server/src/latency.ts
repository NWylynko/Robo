// import { client, identity } from './types';


export class Latency {
  private io: SocketIO.Server;
  private latency;

  constructor(io: SocketIO.Server) {
    this.io = io;
    this.latency = {};
    this.listen()
  }

  /**
   * removes the client from the list of clients
   * @param socket the socket the client connects on
   */
  private removeDeadClient(socket: SocketIO.Socket): void {
    
  }

  /**
   * emits the array of clients to all clients listening on the clients event
   */
  private BroadcastClients(): void {
    this.io.emit('clients-latency', this.latency)
  }

  /**
   * Adds the client to the list of clients
   * @param socket the socket the client connects on
   */
  private AddClient(socket: SocketIO.Socket): void {
    this.latency[socket.id] = 0
    this.BroadcastClients()

  }

  private listen() {
    this.io.on('connection', (socket: SocketIO.Socket) => {

      this.AddClient(socket)

      setInterval(() => {
        socket.emit('latency', Date.now(), (startTime) => {
          this.latency[socket.id] = Date.now() - startTime;
          this.BroadcastClients()
        });
      }, 1000)
      

      socket.on('disconnect', () => {
        this.removeDeadClient(socket)
        this.BroadcastClients()
      });

    });
  }


}