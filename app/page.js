"use client";
import AddTask from "@/components/addTask";
import Clock from "@/components/clock";
import TaskList from "@/components/taskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Todo List</h1>
      <DndProvider backend={HTML5Backend}>
        <AddTask />
        <TaskList />
      </DndProvider>
      {/* <Clock /> */}
    </div>
  );
};

export default Home;
