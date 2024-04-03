import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

let id = 0;

const useStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (text) =>
        set((state) => ({ tasks: [...state.tasks, { id: ++id, text }] })),
      removeTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
      updateTaskText: (taskId, newText) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, text: newText } : task
          ),
        })),
      updateTaskOrder: (draggedId, targetIndex, hoverIndex) => {
        set((state) => {
          const { tasks } = state;
          const draggedTask = tasks.find((task) => task.id === draggedId);

          const filteredTasks = tasks.filter((task) => task.id !== draggedId);

          const reorderedTasks = [
            ...filteredTasks.slice(0, targetIndex),
            draggedTask,
            ...filteredTasks.slice(targetIndex),
          ];

          const finalHoverIndex =
            targetIndex > hoverIndex ? hoverIndex : hoverIndex + 1;

          return {
            tasks: [
              ...reorderedTasks.slice(0, finalHoverIndex),
              ...reorderedTasks.slice(finalHoverIndex),
            ],
          };
        });
      },
    }),
    {
      name: "selteq-test-tasks",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export { useStore };
