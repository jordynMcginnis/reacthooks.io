const name = `useOnMount`;

const implementation = `const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount();
  }, []);`;

const usage = `function Demo() {
  useOnMount(() => console.log("hello world"));
  return <div />;
}`;
export default {
  name,
  implementation,
  usage
}