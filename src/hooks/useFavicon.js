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

const url = `https://github.com/streamich/react-use/blob/master/docs/useFavicon.md`;

const description = `This hook sets the favicon of the page.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}