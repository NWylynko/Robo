import { client, identity } from './types';

/**
 * api for clients to identify themselves 
 * on connect a client should emit an event 'identify'
 * with the information {type, name, version}
 * this gets recorded and sent back out to every client
 * any time a client connects of disconnectes all clients are updated
 * @param io the socketio object
 */
export class Identification {
  private io: SocketIO.Server;
  private clients: client[];

  constructor(io: SocketIO.Server) {
    this.io = io;
    this.clients = [];
    this.listen()
  }

  /**
   * removes the client from the list of clients
   * @param socket the socket the client connects on
   */
  private removeDeadClient(socket: SocketIO.Socket): void {
    this.clients = this.clients.filter(function (obj: client) {
      return obj.id !== socket.id;
    });
  }

  /**
   * emits the array of clients to all clients listening on the clients event
   */
  private BroadcastClients(): void {
    this.io.emit('clients', this.clients)
  }

  /**
   * Adds the client to the list of clients
   * @param socket the socket the client connects on
   * @param identity eg {type: 'web', name: 'robo-react', version '2.3.2'}
   */
  private AddClient(socket: SocketIO.Socket, identity: identity): void {
    socket.join(identity.type) // join a room for easy seperation between web and robot clients
    this.clients.push({ id: socket.id, identity }) // add to clients array
    this.BroadcastClients()
    console.log(`${identity.type} | ${identity.name} | ${identity.version} Connected`)

  }

  private GetClientFromSocket(socket: SocketIO.Socket) {
    return this.clients.filter(function (obj: client) {
      return obj.id === socket.id;
    })[0].identity
  }

  private listen() {
    this.io.on('connection', (socket: SocketIO.Socket) => {

      socket.on('identify', (identity: identity) => {
        this.AddClient(socket, identity)
      });

      socket.on('disconnect', () => {
        const clientInfo = this.GetClientFromSocket(socket)
        console.log(`${clientInfo.type} | ${clientInfo.name} | ${clientInfo.version} Disconnected`)
        this.removeDeadClient(socket)
        this.BroadcastClients()
      });

    });
  }


}