import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'


const App = () => (
  <div className="App">
    <Footer />
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App
