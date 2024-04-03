"use client";
import Tasks from "./tasks";
import { useStore } from "@/store";
import { useDrop } from "react-dnd";

const TaskList = () => {
  const tasks = useStore((state) => state.tasks);
  const updateTaskOrder = useStore((state) => state.updateTaskOrder);

  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item, monitor) => {
      const draggedId = item.id;
      const targetIndex = tasks.findIndex((task) => task.id === draggedId);
      const hoverIndex = tasks.findIndex(
        (task) => task.id === monitor.getItem().id
      );

      if (draggedId === monitor.getItem().id) {
        return;
      }

      updateTaskOrder(draggedId, targetIndex, hoverIndex);
    },
  });

  return (
    <div ref={drop}>
      {tasks.map((task) => (
        <Tasks key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
