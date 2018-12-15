const name = `useLifecycles`;

const implementation = `const useLifecycles = (mount, unmount) => {
  useEffect(() => {
    if (mount) mount();
    return () => {
      if (unmount) unmount();
    };
  }, []);
};`;

const usage = `function Demo() {
  useLifecycles(() => console.log("MOUNTED"), () => console.log("UNMOUNTED"));
  return null;
}`;

export default {
  name,
  implementation,
  usage
}