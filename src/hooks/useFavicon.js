const name = `useFavicon`;

const implementation = `const useFavicon = href => {
  useEffect(
    () => {
      const link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = href;
      document.getElementsByTagName("head")[0].appendChild(link);
    },
    [href]
  );
};`;

const usage = `function Demo() {
  useFavicon("https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico");

  return null;
}`;

export default {
  name,
  implementation,
  usage
}