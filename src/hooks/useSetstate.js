const name = `useSetstate`;

const implementation = `const useSetState = (initialState = {}) => {
  const [state, set] = useState(initialState);
  const setState = patch => {
    Object.assign(state, patch);
    set(state);
  };

  return [state, setState];
};`;

const usage = `function Demo() {
  const [state, setState] = useSetState({});

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({ hello: "world" })}>hello</button>
      <button onClick={() => setState({ foo: "bar" })}>foo</button>
    </div>
  );
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useSetState.md`;

const description = `This hook creates a setState method which works similar to how this.setState works in class components—it merges object changes into current state.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}