import React from 'react'
import { connect } from 'react-redux'
import { insertEvent } from '../socket-events'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) { return }
        insertEvent({ name: input.value, completed: false })
        input.value = ''
      }}>
        <input ref={node => { input = node }} />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
