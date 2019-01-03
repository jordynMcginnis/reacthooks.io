const name = `useMemento`;

const implementation = `
function Button({ onClick, isDisabled, children }) {
  return (
    <button
      style={{
        backgroundColor: isDisabled ? 'transparent' : '#333333',
        border: 'none',
        color: isDisabled ? '#a2a2a2' : '#e0e0e0',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontSize: '12px',
        padding: '4px 12px',
      }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

class Memento extends React.Component {
  render() {
    if (!this.node) {
      const id = 'react-memento-container';
      const container = document.getElementById(id);
      if (!container) {
        this.node = document.createElement('div');
        this.node.setAttribute('id', id);
        this.node.setAttribute('style', 'position:fixed;right:16px;bottom:16px;');
      } else {
        this.node = container;
      }
      document.body.appendChild(this.node);
    }

    return ReactDOM.createPortal(
      <div
        style={{
          alignContent: 'center',
          backgroundColor: '#333333',
          borderBottom: 'solid #3d3d3d 1px',
          color: '#e0e0e0',
          display: 'flex',
          fontSize: '12px',
          justifyContent: 'space-between',
        }}
      >
        <strong style={{ padding: '0 8px', margin: 'auto 0' }}>{this.props.label || ''}</strong>
        <span>
          <Button
            isDisabled={this.props.index === 0}
            onClick={() => this.props.setIndex(this.props.index - 1)}
          >
            prev
          </Button>
          <Button
            isDisabled={this.props.index >= this.props.history.length - 1}
            onClick={() => this.props.setIndex(this.props.index + 1)}
          >
            next
          </Button>
        </span>
      </div>,
      this.node
    );
  }
}

function useMemento(initialValue, label) {
  const [value, setValue] = React.useState(initialValue);
  const [history, setHistory] = React.useState([initialValue]);
  const [index, setIndex] = React.useState(0);

  function inspectSetValue(nextValue) {
    console.log(nextValue);
    setValue(nextValue);

    if (nextValue !== value) {
      const nextHistory = [...history.slice(0, index + 1), nextValue];
      setHistory(nextHistory);
      setIndex(nextHistory.length - 1);
    }
  }

  function handleIndexChange(nextIndex) {
    setIndex(nextIndex);
    setValue(history[nextIndex]);
  }

  return [
    value,
    inspectSetValue,
    <Memento label={label} history={history} index={index} setIndex={handleIndexChange} />,
  ];
}`;

const usage = `function App() {
  const [count, setCount, memento] = useMemento(0, 'count');

  return (
    <button onClick={() => setCount(count + 1)}>{increment}</button>
    <p>{count}</p>

    {memento}
  );
}`;

const url = `https://github.com/chasestarr/react-memento`;

const description = `This hook maintains a similar api to react's state hook. In addition to the current value, and a setter, it provides a memento component to display the debugger UI. The function also accepts an optional label to identify multiple mementos rendered to the page.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}