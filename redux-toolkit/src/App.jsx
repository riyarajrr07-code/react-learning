import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 flex flex-col items-center pt-12">
      <h1 className="text-3xl font-semibold text-white mb-8">
        Todo-list
      </h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
