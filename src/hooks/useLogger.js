const name = `useLogger`;

const implementation = `const useLifecycles = (mount, unmount) => {
  useEffect(() => {
    if (mount) mount();
    return () => {
      if (unmount) unmount();
    };
  }, []);
};

const useLogger = (name, props) => {
  useLifecycles(
    () => console.log(`${name} mounted`),
    () => console.log(`${name} un-mounted`)
  );
  useEffect(() => {
    console.log(`${name} props updated`, props);
  });
};`;

const usage = `function Demo(props) {
  useLogger("Demo", props);
  return null;
}`;

export default {
  name,
  implementation,
  usage
}