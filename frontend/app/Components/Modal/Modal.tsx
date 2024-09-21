"use client";
import { useTasks } from "@/context/taskContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React, { useEffect } from "react";

function Modal() {
  const {
    task,
    handleInput,
    createTask,
    isEditing,
    closeModal,
    modalMode,
    activeTask,
    updateTask,
  } = useTasks();
  const ref = React.useRef(null);

  // Use the hook to detect clicks outside the modal
  useDetectOutside({
    ref,
    callback: () => {
      if (isEditing) {
        closeModal(); // Close modal if it is in add/edit mode
      }
    },
  });

  useEffect(() => {
    if (modalMode === "edit" && activeTask) {
      handleInput("setTask")(activeTask);
    }
  }, [modalMode, activeTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (modalMode === "edit") {
      updateTask(task);
    } else if (modalMode === "add") {
      createTask(task);
    }
    closeModal();
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#000000]/40 backdrop-blur-sm">
      <form
        action=""
        className="py-6 px-8 max-w-[540px] w-full flex flex-col gap-4 bg-[#FFFFFF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-[#37474F] font-semibold">
            Title
          </label>
          <input
            className="bg-[#E0F7FA] p-3 rounded-lg border border-[#00ACC1] focus:outline-none focus:border-[#00838F]"
            type="text"
            id="title"
            placeholder="Task Title"
            name="title"
            value={task.title}
            onChange={(e) => handleInput("title")(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-[#37474F] font-semibold">
            Description
          </label>
          <textarea
            className="bg-[#E0F7FA] p-3 rounded-lg border border-[#00ACC1] resize-none focus:outline-none focus:border-[#00838F]"
            name="description"
            placeholder="Task Description"
            rows={4}
            value={task.description}
            onChange={(e) => handleInput("description")(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="priority" className="text-[#37474F] font-semibold">
            Select Priority
          </label>
          <select
            className="bg-[#E0F7FA] p-3 rounded-lg border border-[#00ACC1] cursor-pointer focus:outline-none focus:border-[#00838F]"
            name="priority"
            value={task.priority}
            onChange={(e) => handleInput("priority")(e)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dueDate" className="text-[#37474F] font-semibold">
            Due Date
          </label>
          <input
            className="bg-[#E0F7FA] p-3 rounded-lg border border-[#00ACC1] focus:outline-none focus:border-[#00838F]"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={(e) => handleInput("dueDate")(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="completed" className="text-[#37474F] font-semibold">
            Task Completed
          </label>
          <div className="flex items-center justify-between bg-[#E0F7FA] p-3 rounded-lg border border-[#00ACC1]">
            <label htmlFor="completed" className="font-medium text-[#37474F]">
              Completed
            </label>
            <select
              className="bg-[#E0F7FA] p-2 rounded-md border border-[#00ACC1] cursor-pointer focus:outline-none focus:border-[#00838F]"
              name="completed"
              value={task.completed ? "true" : "false"}
              onChange={(e) => handleInput("completed")(e)}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className={`text-white py-3 rounded-md w-full hover:opacity-90 transition duration-300 ease-in-out ${
              modalMode === "edit" ? "bg-[#29B6F6]" : "bg-[#66BB6A]"
            }`}
          >
            {modalMode === "edit" ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
