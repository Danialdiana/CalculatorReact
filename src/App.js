import './component/calculator.css';
import Calculator from "./component/calculator";
import Theme from "./component/theme";

function App() {
  return (
    <div className="App">
        <div className="calc">
            <Theme></Theme>
            <Calculator/>
        </div>
    </div>
  );
}

export default App;
