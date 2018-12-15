const name = `useUnmount`;

const implementation = `const useUnmount = unmount => {
  useEffect(
    () => () => {
      if (unmount) unmount();
    },
    []
  );
};`;

const usage = `function Demo() {
  useUnmount(() => console.log("UNMOUNTED"));
  return null;
}`;

export default {
  name,
  implementation,
  usage
}