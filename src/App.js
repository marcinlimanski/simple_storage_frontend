import SetBalanceForm from "./components/SetBalanceForm";
import GetBalanceForm from "./components/GetBalanceForm";
import './App.css';

function App() {

  return (
      <div className="App">
        <header className="App-header">
            <GetBalanceForm />
            <SetBalanceForm />
        </header>
      </div>
  );
}

export default App;