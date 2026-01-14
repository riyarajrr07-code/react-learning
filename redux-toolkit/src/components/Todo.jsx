import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-[520px]">
      <h2 className="text-center text-white mb-4">Todos</h2>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-zinc-900 px-5 py-3 rounded-lg"
          >
            <span className="text-white">{todo.text}</span>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 p-2 rounded"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
