import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex gap-4 w-[420px] mb-8"
    >
      <input
        type="text"
        className="flex-1 bg-zinc-900 text-white rounded px-4 py-2 outline-none"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 text-white px-6 rounded"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
