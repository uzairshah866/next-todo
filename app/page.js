import AddTask from "@/components/addTask";
import Clock from "@/components/clock";
import TaskList from "@/components/taskList";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="absolute right-5">
        <Clock />
      </div>
      <h1 className="text-2xl text-center font-bold mb-4">Todo List</h1>

      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
