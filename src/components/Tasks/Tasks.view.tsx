import React, { Fragment, useState } from "react";
import TaskSearchBar from "../TaskSearchBar/TaskSearchBar.view";
import TaskList from "../TaskList/TaskList.view";
import { fetchData, saveToDB } from "../../helpers";

export type Task = {
  id: number;
  value: string;
  done: boolean;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(fetchData("tasks") || []);
  React.useEffect(() => {
    saveToDB("tasks", tasks);
  }, [tasks]);

  return (
    <Fragment>
      <TaskSearchBar setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Fragment>
  );
};

export default Tasks;
