const name = `useLocation`;

const implementation = `const useLifecycles = (mount, unmount) => {
  useEffect(() => {
    if (mount) mount();
    return () => {
      if (unmount) unmount();
    };
  }, []);
};
`;

const usage = ``;

export default {
  name,
  implementation,
  usage
}