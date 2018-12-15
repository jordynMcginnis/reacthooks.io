const name = `useOnUnmount`;

const implementation = `const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);`;

const usage = `function Demo() {
  useOnUnmount(() => console.log("goodbye world"));
  return <div />;
}`;

export default {
  name,
  implementation,
  usage
}