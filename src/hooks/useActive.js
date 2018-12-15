const name = `useActive`;

const implementation= `function useActive({ onChange, refEl }) {
  const [value, setValue] = useState(false);
  const handleMouseDown = () => {
    setValue(true);
    onChange(true);
  };
  const handleMouseUp = () => {
    setValue(false);
    onChange(false);
  };
  useEffect(() => {
    if (refEl && refEl.current) {
      refEl.current.addEventListener("mousedown", handleMouseDown);
      refEl.current.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (refEl && refEl.current) {
        refEl.current.removeEventListener("mousedown", handleMouseDown);
        refEl.current.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);

  return value;
}`;

const usage = `function Demo() {
  const inputEl = useRef(null);
  const activeValue = useActive({ refEl: inputEl });

  return (
    <>
      <input ref={inputEl} type="text" />
      <div>{activeValue ? "Active" : "Nop"}</div>
    </>
  );
}`;

export default {
  name,
  implementation,
  usage
}