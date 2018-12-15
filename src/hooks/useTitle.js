const name = `useTitle`;

const implementation = `const useTitle = title => {
  useEffect(
    () => {
      document.title = title;
    },
    [title]
  );
};`;

const usage = `function Demo() {
  useTitle("Hello world!");

  return null;
}`;

export default {
  name,
  implementation,
  usage
}