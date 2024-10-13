import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSalary, setEnteredSalary] = useState("");
  const [error, setError] = useState();

  const minSalary = 1000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0) {
      setError({
        title:"Something went wrong!",
        message: "Please enter a valid name.",
      })
      return;
    }

    if (+enteredSalary < minSalary) {
      setError({
        title:"Something went wrong!",
        message: `Salary must be at least $${minSalary}.`,
      })
      return;
    }

    setEnteredName("");
    setEnteredSalary("");

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        salary: enteredSalary,
      },
      ...prevState,
    ]);
  };

  const errorHandler = () =>{
   setError(null);
  }

  return (
    <div>
        {error && <ErrorModal onConfirm={errorHandler} error={error}/>}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-4" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-semibold text-lg">
            Worker Name:
          </label>
          <input
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            id="name"
            type="text"
            placeholder="Enter Worker Name"
            onChange={(e) => setEnteredName(e.target.value)}
            value={enteredName}
          />
          <label htmlFor="salary" className="font-semibold text-lg">
            Amount of salary:
          </label>
          <input
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            id="salary"
            type="number"
            placeholder="Enter Amount of salary"
            onChange={(e) => setEnteredSalary(e.target.value)}
            value={enteredSalary}
          />
          <Button type="submit">Add Worker</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddWorker;
