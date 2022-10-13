// import React, {useState} from "react";
import { HiOutlineTrash }  from "react-icons/hi"
import { FiEdit }  from "react-icons/fi"

function TaskItem({task, handleDelete}) {
   
  return(
  
       <div className="overflow-y-auto w-[300px] h-[200px] bg-blue-200 p-4 rounded-lg relative">
        <div className="space-y-3 grid py-12">
          {/* <h1 className="uppercase text-gray-500 text-sm font-bold">hello</h1> */}
          <p className="flex-1 font-bold text-lg ">{task.text}</p>
        </div>
        <div className="absolute bottom-2 right-2">
          <div className="bg-blue-800 p-2 rounded-md" onClick={()=> handleDelete(task.id)}>
           <HiOutlineTrash height={19} color="white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <div className="bg-blue-800 p-2 rounded-md" onClick={()=> handleDelete(task.id)}>
           <FiEdit height={19} color="white" />
          </div>
        </div>
       </div>

  );
}


export default TaskItem;