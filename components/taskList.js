"use client";
import React from "react";
import Tasks from "./Tasks";
import { useStore } from "@/store";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = () => {
  const tasks = useStore((state) => state.tasks);

  // Function to handle reordering of tasks
  const onDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    // Reorder tasks
    const reorderedTasks = Array.from(tasks);
    const [removedTask] = reorderedTasks.splice(startIndex, 1);
    reorderedTasks.splice(endIndex, 0, removedTask);

    // Update task order in the store
    useStore.setState({ tasks: reorderedTasks });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided, snapshot = {}) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable
                key={task.id.toString()}
                draggableId={task.id.toString()}
                index={index + 1}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Tasks task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
