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

export default {
  name,
  implementation,
  usage
}