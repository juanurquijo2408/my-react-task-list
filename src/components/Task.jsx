export default function Task({ taskName }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{taskName}</p>
    </li>
  );
}
