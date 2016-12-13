export const setVisibilityFilter = (filter) => {
  return {
    meta: { remote: true },
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const insertTodo = (todo) => {
	return {
		type: 'INSERT_TODO',
		todo: todo
	}
}

export const updateTodo = (todo) => {
	return {
		type: 'UPDATE_TODO',
		todo: todo
	}
}

export const deleteTodo = (todo) => {
	return {
		type: 'DELETE_TODO',
		todo: todo
	}
}
