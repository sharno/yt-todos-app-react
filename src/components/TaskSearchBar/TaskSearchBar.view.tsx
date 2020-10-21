import React, { useState } from "react";

import "./TaskSearchBar.style.scss";
import type { Task } from "../Tasks/Tasks.view";

type Props = {
  setTasks: (f: (prevState: Task[]) => Task[]) => void;
};
const TaskSearchBar = ({ setTasks }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const addNewTask = () => {
    if (inputValue) {
      //Add the new task then reset the value
      const id = new Date().getTime();

      setTasks((prevState: Task[]) => {
        const newData: Task[] = [
          ...prevState,
          {
            id,
            value: inputValue,
            done: false,
          },
        ];

        return newData;
      });
      setInputValue("");
    }
  };

  return (
    <div className="TaskSearchBar">
      <label htmlFor="search-input" className="TaskSearchBar__label">
        قائمة المهام
      </label>
      <div className="TaskSearchBar__searchContent">
        <input
          id="search-input"
          className="TaskSearchBar__input"
          value={inputValue}
          type="text"
          placeholder="قم بإضافة مهمه..."
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNewTask()}
        />
        <button className="TaskSearchBar__button" onClick={addNewTask}>
          إضافة
        </button>
      </div>
    </div>
  );
};

export default TaskSearchBar;
