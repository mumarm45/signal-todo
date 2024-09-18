import { TodoList } from "./components/TodoList";
import { Summary } from './components/Summary'
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <TodoList />
      <Summary />
    </div>
  );
}
