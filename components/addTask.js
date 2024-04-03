"use client";
import { useState } from "react";
import { useStore } from "@/store";

const AddTask = () => {
  const addTask = useStore((state) => state.addTask);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex justify-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 px-2 py-2"
        placeholder="Enter task..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
