import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
const TodoList = () => {
    return(`
        <ul>
        ${
            todos.map(todo => <h1>h</h1>
            )
        }
        </ul>
    `);
}
export default TodoList;