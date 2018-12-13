const name = `useArray`;

const implementation = `function useArray (initial) {
  const [value, setValue] = useState(initial);
  return {
    value,
  }
}`;

const usage = `function Usage () {
  const todos = useArray(["Item 1"]);
  return todos.value.map(todo => <div>{todo}</div>);
}`;

export default {
  name,
  implementation,
  usage
}