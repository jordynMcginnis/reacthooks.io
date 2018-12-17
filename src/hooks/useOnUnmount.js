const name = `useOnUnmount`;

const implementation = `const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);`;

const usage = `function Demo() {
  useOnUnmount(() => console.log("goodbye world"));
  return <div />;
}`;

const url = `https://github.com/kitze/react-hanger`;

export default {
  name,
  implementation,
  usage,
  url
}