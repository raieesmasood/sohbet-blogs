import React, { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setTodo(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "90vh" }}>
      <h1>Welcome to Sohbats</h1>
      <p>Explore various blogs on different topics.</p>

      {/* Displaying Fetched API Data */}
      {todo ? (
        <div className="card p-3 shadow-sm">
          <h3>Todo ID: {todo.id}</h3>
          <p><strong>Title:</strong> {todo.title}</p>
          <p><strong>Status:</strong> {todo.completed ? "Completed ✅" : "Pending ❌"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
