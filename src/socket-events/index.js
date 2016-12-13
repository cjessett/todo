import socket from '../socket'

export const updateEvent = (todo) => {
  socket.emit('todo:client:update', {
    completed: !todo.completed,
    id: todo.id
  })
}

export const insertEvent = (todo) => {
  socket.emit('todo:client:insert', {
    completed: false,
    name: todo.name
  })
}
