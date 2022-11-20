import './App.css';
import Menu from "./components/Menu";
import recipse from "./data/recipes.json"
function App() {
  return (
    <Menu recipes={recipse}/>
  );
}

export default App;
