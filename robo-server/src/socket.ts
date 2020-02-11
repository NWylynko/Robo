import express from 'express';
import socketIo from 'socket.io';
import path from 'path';
import { createServer, Server } from 'http';

/**
 * very simply sets up a socketio server and
 * hosts the react client
 * @param port network port to bind to
 */
export class socket {
  private PORT: number;
  private app: express.Application;
  private server: Server;
  public io: SocketIO.Server;

  constructor(port: number) {
    this.app = express();
    this.PORT = port
    this.server = createServer(this.app);
    this.io = socketIo(this.server);
    this.listen();
  }

  private listen(): void {
    this.server.listen(this.PORT, () => {
      console.log('Listening on port %s', this.PORT);
    });

    // this.app.use(express.static(path.join(__dirname, 'robo-react-build')));
  }

  
  
}