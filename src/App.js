import SetBalanceForm from "./components/SetBalanceForm";
import GetBalanceForm from "./components/GetBalanceForm";
import './App.css';

function App() {
  return (
      <html lang="en" data-bs-theme="">
        <body>
            <main>
                <div className="container py-4">
                    <header className="pb-3 mb-4 border-bottom">
                        <h1>Smart Contract</h1>
                    </header>
                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                                <GetBalanceForm />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                                <SetBalanceForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
      </html>

  );
}

export default App;