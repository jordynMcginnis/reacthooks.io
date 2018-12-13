const name = `useArray`;

const implementation = `function useArray (initial) {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    add: useCallback((newVal) => {
      setValue(value.concat([newVal]));
    }),
    clear: useCallback(() => {
      setValue([]);
    }),
    removeIndex: useCallback((index) => {
      setValue((value) => {
        value.splice(index, 1);
        return value;
      })
    }),
    removeById: useCallback(() => {

    })
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