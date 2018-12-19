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

const url = `https://github.com/rehooks/device-orientation`;

const description = ``;

export default {
  name,
  implementation,
  usage,
  url,
  description
}