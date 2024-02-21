import Task from "./Task";

export default function TaskList({ list }) {
  return (
    <>
      <ul>
        {list.map((element, index) => {
          return <Task key={index} taskName={element.taskName} />;
        })}
      </ul>
    </>
  );
}
