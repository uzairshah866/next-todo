"use client";
import { useState } from "react";
import { useStore } from "@/store";
import EditIcon from "@/icons/editIcon";
import DeleteIcon from "@/icons/deleteIcon";
import CrossIcon from "@/icons/crossIcon";
import DragIcon from "@/icons/dragIcon";

const Tasks = ({ task }) => {
  const removeTask = useStore((state) => state.removeTask);
  const updateTaskText = useStore((state) => state.updateTaskText);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  // Task deletion
  const handleDelete = () => {
    if (confirmDelete) {
      removeTask(task.id);
    } else {
      setConfirmDelete(true);
    }
  };

  // Task editing
  const handleEdit = () => {
    setEditing(true);
  };

  // Update task
  const handleSaveEdit = () => {
    updateTaskText(task.id, editedText);
    setEditing(false);
  };

  return (
    <div className={`flex justify-center`}>
      <div className="flex items-center justify-between bg-slate-200 p-2 mb-2 rounded-lg md:w-5/12 w-full">
        {editing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleSaveEdit}
            autoFocus
          />
        ) : (
          <div className="flex items-center">
            <DragIcon color="black" width={20} height={20} />{" "}
            <span className="ml-6">{task.text}</span>
          </div>
        )}
        <div className="flex items-center space-x-4">
          <EditIcon
            color="black"
            width={20}
            height={20}
            onClick={() => handleEdit()}
          />

          <DeleteIcon
            color="red"
            width={20}
            height={20}
            onClick={() => setConfirmDelete(true)}
          />
        </div>
        {confirmDelete && (
          <DeleteConfirmation
            handleDelete={handleDelete}
            setConfirmDelete={setConfirmDelete}
          />
        )}
      </div>
    </div>
  );
};

const DeleteConfirmation = ({ handleDelete, setConfirmDelete }) => {
  return (
    <div className="bg-slate-100 shadow-lg w-11/12 sm:w-4/12 h-40 absolute rounded-lg inset-0 mx-auto my-auto flex flex-col items-center justify-center">
      <>
        <div className="text-lg cursor-pointer absolute top-2 right-4">
          <CrossIcon
            width={20}
            height={20}
            color="black"
            onClick={() => setConfirmDelete(false)}
          />
        </div>
        <div className="text-sm sm:text-lg font-semibold">
          Are you sure you want to delete this task?
        </div>
        <div className="mt-4 space-x-4">
          <button
            className="bg-white text-blue-500 border border-blue-500 px-4 py-2 w-28 rounded"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 w-28 rounded"
            onClick={() => setConfirmDelete(false)}
          >
            No
          </button>
        </div>
      </>
    </div>
  );
};

export default Tasks;
