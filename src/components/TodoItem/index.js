// Write your code here

const TodoItem = props => {
  const {todoDetails} = props
  const {id, title} = todoDetails

  return (
    <li>
      <p> {title} </p>
      <button type="button"> Delete </button>
    </li>
  )
}

export default TodoItem
