"use client";
import { useTasks } from "@/context/taskContext";
import useRedirect from "@/hooks/useUserRedirect";
import Filters from "./Components/Filters/Filters";
import TaskItem from "./Components/TaskItem/TaskItem";
import { Task } from "@/utils/types";
import { filteredTasks } from "@/utils/utilities";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/utils/animations";

export default function Home() {
  useRedirect("/login");

  const { tasks, openModalForAdd, priority, setPriority } = useTasks();

  const filtered = filteredTasks(tasks, priority);

  useEffect(() => {
    setPriority("all");
  }, []);

  return (
    <main className="m-6 h-full bg-[#f0f4f8] text-[#000000]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-[#000000]">
          All Tasks
        </h1>
        <Filters />
      </div>

      <motion.div
        className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((task: Task, i: number) => (
          <TaskItem key={i} task={task} />
        ))}
        <motion.button
          className="h-[16rem] w-full py-4 rounded-lg text-lg font-semibold text-[#335bab] border-dashed border-4 border-[#3aafae]
          hover:bg-[#3aafae] hover:text-white hover:border-transparent transition duration-200 ease-in-out"
          onClick={openModalForAdd}
          variants={item}
        >
          + Add New Task
        </motion.button>
      </motion.div>
    </main>
  );
}
