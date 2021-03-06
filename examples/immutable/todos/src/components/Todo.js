import React from 'react'
import PropTypes from '../proptypes'
import actions from '../actions'


const Todo = ({ todo }) => (
  <li
    onClick={() => actions.todos.toggleItem(todo.get('id'))}
    style={{
      textDecoration: todo.get('completed') ? 'line-through' : 'none'
    }}
  >
    {todo.get('text')}
  </li>
)

Todo.propTypes = {
  todo: PropTypes.immutable.map.isRequired,
}

export default Todo
