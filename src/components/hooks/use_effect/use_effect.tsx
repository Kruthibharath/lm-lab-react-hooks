// make an api call using useEffect

import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const APICall: React.FC = () => {
  const [jsonData, setJsonData] = useState<Todo | null>(null);
  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      setJsonData(data);
      console.log(data);
    };
    fetchTodo();
  }, []);

  return (
    <>
      <h2>useEffect to fetch ToDo</h2>
      {jsonData ? (
        <div>
          <h3>{jsonData.title}</h3>
          <p>User ID: {jsonData.userId}</p>
          <p>Completed: {jsonData.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};
