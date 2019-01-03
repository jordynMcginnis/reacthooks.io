const name = `useDocumentTitle`;

const implementation = `function useDocumentTitle(title) {
  useEffect(
    () => {
      document.title = title;
    },
    [title]
  );
}`;

const usage = `function Demo() {
  useDocumentTitle("Page Title");
  return <div />;
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