import { useEffect, useState } from "react";
import { API } from "../api";

export default function Dashboard(){
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const userId = "demo-user"; // later replace with real user id

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${userId}`);
    setTasks(res.data);
  };

  const addTask = async () => {
    await API.post("/tasks", { userId, title });
    fetchTasks();
  };

  useEffect(()=>{ fetchTasks(); }, []);

  return (
    <div>
      <h1>Task Dashboard</h1>
      <input placeholder="New task" onChange={e=>setTitle(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      {tasks.map(t=>(
        <div key={t._id}>
          {t.title} - {t.status}
        </div>
      ))}
    </div>
  );
}
