import Header from "./components/Header";
import TaskList from "./components/TaskList";

const li = [
  {
    taskName: "Buy a new gaming laptop",
  },
  {
    taskName: "Complete a previous task",
  },
  {
    taskName: "Create video for YouTube",
  },
  {
    taskName: "Create a new portfolio site",
  },
];
function App() {
  return (
    <>
      <Header title="Todo App" />
      <TaskList list={li} />
    </>
  );
}

export default App;
