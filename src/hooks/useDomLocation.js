const name = `useDomLocation`;

const implementation = `const useDomLocation = (element) =>  {
  let [elementlocation,setElementlocation] = useState(getlocation(element));
  useEffect(()=>{
    element.addEventListener('resize',handleResize);
    return ()=>{
      element.removeEventListener('resize', handleResize);
    }
  },[]);
  function handleResize(){
    setElementlocation(getlocation(element));
  }
  function getlocation(E){
    let rect = E.getBoundingClientRect()
    let top = document.documentElement.clientTop
    let left= document.documentElement.clientLeft
    return{
        top    :   rect.top - top,
        bottom :   rect.bottom - top,
        left   :   rect.left - left,
        right  :   rect.right - left
    };
  }
  return elementlocation

}`;

const usage = `function App() {
  let element = document.getElementsByTagName('body')[0];
  let obj = useDomLocation(element);
  console.log(obj);
  return (
    <div>
      <h1>{111}</h1>
    </div>
  );
}

//ReactDOM.render(<App />, window.root);
`;

const url = `https://github.com/forthealllight/dom-location`;

const description = ``;

export default {
  name,
  implementation,
  usage,
  url,
  description
}