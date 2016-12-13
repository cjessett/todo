import socket from '../socket'

export default function (store) {
  socket.on('INSERT_TODO', (todo) => {
    store.dispatch({
      type: 'INSERT_TODO',
      todo: todo
    })
  })

  socket.on('UPDATE_TODO', (todo) => {
    store.dispatch({
      type: 'UPDATE_TODO',
      todo: todo
    })
  })

  socket.on('DELETE_TODO', (todo) => {
    store.dispatch({
      type: 'DELETE_TODO',
      todo: todo
    })
  })
}
