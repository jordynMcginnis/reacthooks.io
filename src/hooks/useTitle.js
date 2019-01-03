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

const url = `https://github.com/streamich/react-use/blob/master/docs/useTitle.md`;

const description = `This hook sets the title of a page.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}