import app from '@adonisjs/core/services/app'
import Ws from '#services/ws'
import { Socket } from 'socket.io'

app.ready(() => {
  Ws.boot()
  const io = Ws.io
  io?.on('connection', (socket) => {
    console.log(socket.id)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    io.on('disconnect', (socket: Socket) => {
      console.log('disconnected ', socket.id)
    })
  })
})
