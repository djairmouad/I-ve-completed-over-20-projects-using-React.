import Tasks from "./Tasks.jsx";
export default function SelectProject({project,onDelete,addTask,deleteTask, tasks}){
    const formateDate=new Date(project.DueDat).toLocaleDateString("en-US",{
        year:"numeric",
        month:"short",
        day:"numeric"
    })
return(
    <div className="w-[35rem] mt-16">
        <header  className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
            <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
         </div>
         <p className="mb-4 text-stone-400">{formateDate}</p>
         <p className="text-stone-600 whitespace-pre-wrap">{project.Description}</p>
        </header>
    <Tasks addTask={addTask} deleteTask={deleteTask}  tasks={tasks}/>
    </div>
)
}