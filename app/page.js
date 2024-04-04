import AddTask from "@/components/addTask";
import Clock from "@/components/clock";
import TaskList from "@/components/taskList";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Todo List</h1>

      <AddTask />
      <TaskList />

      {/* <Clock/> */}
    </div>
  );
};

export default Home;
