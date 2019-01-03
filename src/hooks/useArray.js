const name = `useArray`;

const implementation = `function useArray (initial) {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    add: useCallback(newVal => setValue(value.concat([newVal]))),
    clear: useCallback(() => setValue([])),
    removeIndex: useCallback(index => {
      setValue(value => {
        value.splice(index, 1);
        return value;
      })
    }),
    removeById: useCallback(id => {
      setValue(value => {
        return value.filter(v => {
          return v.id !== id
        })
      })
    }),
  }
}`;

const usage = `function Usage () {
  const friends = useArray(['Jordyn', 'Tyler', 'Bob']);
  return (
    <div>
      {friends.value.map(friend => <div>{friend}</div>)}
      <button onClick={() => friends.clear()}>clear</button>
    </div>
  )
}`;

const url = `https://github.com/kitze/react-hanger`;

const description = `This hook has methods that allow you to modify an array. Methods include add, clear, removeIndex and RemoveByIndex.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}