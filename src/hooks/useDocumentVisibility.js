
const name = `useDocumentVisibility`;

const implementation = `function getVisibility() {
  if (typeof document === "undefined") return true;
  return document.visibilityState;
}

function useDocumentVisibility() {
  let [documentVisibility, setDocumentVisibility] = useState(getVisibility());

  function handleVisibilityChange() {
    setDocumentVisibility(getVisibility());
  }

  useEffect(() => {
    window.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return documentVisibility;
}`;

const usage = `function MyComponent() {
  let documentVisibility = useDocumentVisibility();
  // documentVisibility = "hidden" | "visible" | "prerender"

  // ...
}`;

const url = `https://github.com/rehooks/document-visibility`;

const description = ``;

export default {
  name,
  implementation,
  usage,
  url,
  description
}