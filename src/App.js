import { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Product/Products";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState(
    localStorage.getItem("workers")
      ? JSON.parse(localStorage.getItem("workers"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]);

  return (
    <div className="App">
      <Products />
      <div>
        <h1 className="text-center mt-6 text-3xl font-bold">
          Salary Automation
        </h1>
        <AddWorker setWorkers={setWorkers} />
        <WorkerList workers={workers} setWorkers={setWorkers} />
      </div>
    </div>
  );
}

export default App;
