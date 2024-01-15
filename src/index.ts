import express from 'express'

export class Server {
  server: express.Application
  port: number;

  constructor() {
    this.server = express()
    this.port = 3000
  }

  startServer() {
    this.server.listen(this.port, () => console.log('server running with success on port ' + this.port))
  }
}


