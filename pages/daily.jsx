import React, { useState } from "react";
import {v4 as uuid} from "uuid";
// import { set } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskItem from "../components/TaskItem";
import { useNameContext } from "../context/nameContext";

// const getTasksFromLocalStorage = ()  =>{
// // const [ tasks, setTasks] = useState(() => {
//   //get the task from the localStorage
//   const savedTasks = localStorage.getItem("tasks");
//   console.log("savedTasks");
//   if (!savedTasks) return []
//   return JSON.parse(savedTasks);
//}

export default function Daily () {
  // const [tasks, setTasks] = useState(getTasksFromLocalStorage)
  const {data, setValue} = useLocalStorage("tasks", []);
  const [input, setInput]  = useState("");
  const { name } = useNameContext();

  const handleSubmit = (e) => {
    e.preventDefault();
      if(input === "") return;


    const newTask ={
      id: uuid(),
      text: input,
      completed: false,
    };

    setValue(newTask);
    setInput("");
  };

  const handleDelete = (id) => {
    const newTasks = data.filter((task) => task.id ===id);
    setValue(newTasks);
  };
  

  // useEffect(() =>{
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  return(
    <div className="">
      <div className="grid gap-4 justify-center align-center">
       <div className="text-center">
        <h3 className="bg-grey-800">Welcome, {name}!</h3>
        <h1 className="text-2xl font-bold">Add a new thing to do</h1>
       </div>
       <div className="">
          <form onSubmit={handleSubmit} className=" space-y-5 w-[30rem] mb-10 ">
            <input placeholder="Input a task here" onChange={e => setInput(e.target.value )} value ={input} type="text-area" className="border-blue-400 rounded-md outline-none border-2 p-2 text-center w-full" />
            <button type="submit" disable={input===0} className="bg-blue-600 p-2 rounded-md text-white text-lg w-full" >Add</button>  
          </form>
        </div>
      </div>
  
  <div className="flex justify-center ">
   <div className="flex flex-wrap gap-5 max-w-[70%] justify-start pl-10">

            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum deleniti repudiandae, non quos sequi ratione voluptates nisi tempore obcaecati rerum soluta vel mollitia at ad, eveniet iure cumque magnam?</p> */}
          {
            data.map((task) => 
              <TaskItem task={task} handleDelete={handleDelete} />
            )
          }
          </div>
    </div>

    </div>
  )
}


