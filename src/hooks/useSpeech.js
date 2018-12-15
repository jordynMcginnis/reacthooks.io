const name = `useSpeech`;

const implementation = `const useSetState = (initialState = {}) => {
  const [state, set] = useState(initialState);
  const setState = patch => {
    Object.assign(state, patch);
    set(state);
  };

  return [state, setState];
};

const useSpeech = (text, opts = {}) => {
  const [state, setState] = useSetState({
    isPlaying: false,
    volume: opts.volume || 1
  });

  const uterranceRef = useRef(null);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = opts.volume || 1;
    utterance.onstart = () => setState({ isPlaying: true });
    utterance.onresume = () => setState({ isPlaying: true });
    utterance.onend = () => setState({ isPlaying: false });
    utterance.onpause = () => setState({ isPlaying: false });
    uterranceRef.current = utterance;
    window.speechSynthesis.speak(uterranceRef.current);
  }, []);

  return state;
};
`;

const usage = `function Demo() {
  const state = useSpeech("Hello world!");

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}`;

export default {
  name,
  implementation,
  usage
}