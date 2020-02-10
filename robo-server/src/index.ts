import * as express from 'express';
import * as socketIo from 'socket.io';
import * as types from './types';
import { createServer, Server } from 'http';

export class MiddleServer {
  private PORT: number;
  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private clients: types.client[];

  constructor(port) {
    this.clients = [];
    this.app = express();
    this.PORT = port
    this.server = createServer(this.app);
    this.initSocket();
    this.listen();
  }

  private initSocket(): void {
    this.io = socketIo(this.server);
  }

  private AddLiveClient(socket: { id: string; }, identity: string): void {
    this.clients.push({ id: socket.id, identity, connected: true })
  }

  private removeDeadClient(socket: any): void {
    this.clients = this.clients.filter(function (obj: types.client) {
      return obj.id !== socket.id;
    });
  }

  private BroadcastClients(): void {
    this.io.emit('clients', this.clients)
  }

  private handleIdentification(socket: any, identity: string): void {
    socket.join(identity)
    console.log(`${identity} is Connected`)
    this.AddLiveClient(socket, identity)
    this.BroadcastClients()
  }

  private listen(): void {
    this.server.listen(this.PORT, () => {
      console.log('Running server on port %s', this.PORT);
    });

    this.io.on('connection', (socket: any) => {

      socket.on('identify', (identity: string) => {
        this.handleIdentification(socket, identity)
      });

      socket.on('message', (message: any) => {
        console.log(JSON.stringify(message));
      });

      socket.on('disconnect', () => {
        this.removeDeadClient(socket)
        this.BroadcastClients()
      });

    });

  }
}

new MiddleServer(7777)