import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskList, setTaskList] = useState(TASKS);


  const filteredTasks =
    selectedCategory !== "All"
      ? taskList.filter((task) => task.category === selectedCategory)
      : taskList;


  function handleTaskFormSubmit(newTask) {
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>


      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />


      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />


      <TaskList tasks={filteredTasks} setTaskList={setTaskList} />
    </div>
  );
}

export default App;