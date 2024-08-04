import ProjectSideBar from "./components/ProjectSideBar";
import NewProjects from "./components/NewProjects.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectProjectID: undefined,
    project: [],
    tasks:[]
  });

  function handelAddTask(text) {
    setProjectState(prevProject => {
      const taskId=Math.random();
      let newTask = {
        id:taskId,
        projectId:prevProject.selectProjectID,
        text: text, // Corrected line
      };
      return {
        ...prevProject,
        tasks: [newTask,...prevProject.tasks ]
      };
    });
  }
  

  function handelDeleteTask(id) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter((task) => task.id !== id),
      };
    });
  }
  
  function handleStartProject() {
    setProjectState(prevProject => {
      return {
        ...prevProject,
        selectProjectID: null // Update to null
      };
    });
  }
  function handelSelectProject(id){
    setProjectState(prevProject => {
      return {
        ...prevProject,
        selectProjectID: id // Update to null
      };
    });
  }
  function handelDeleteProject(){
    setProjectState(prevProject => {
      return {
        ...prevProject,
        selectProjectID: undefined,
        project:prevProject.project.filter((project)=>{
        project.id!==prevProject.selectProjectID;
        })
      };
    })
  }
  function handelCancelAddProject(){
    setProjectState(prevProject => {
      return {
        ...prevProject,
        selectProjectID: undefined // Update to null
      };
    })
}
  function handelAddProject(projectData){
    setProjectState(prevProject=>{
      const projectId=Math.random();
      const newProject={
        ...projectData,
        id:projectId}
        console.log(newProject);
      return{
        ...prevProject,
        selectProjectID:undefined,
        project:[...prevProject.project,newProject]
      }
    })
  }
 
  let selectProject=projectState.project.find(project=>project.id===projectState.selectProjectID);
  let selectTasks = projectState.tasks.filter(task => task.projectId === projectState.selectProjectID);
  // const tasks = selectTasks ? selectTasks.tasks : [];
  let content=<SelectProject 
  project={selectProject} 
  tasks={selectTasks}
  onDelete={handelDeleteProject} 
  addTask={handelAddTask}
  deleteTask={handelDeleteTask}
  selectProject={projectState.selectProjectID}
  />;
  if (projectState.selectProjectID === null) {
    content = <NewProjects onAdd={handelAddProject} onCancel={handelCancelAddProject} />;
  } else if (projectState.selectProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject}  />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
      onStartAddProject={handleStartProject} 
      isProjects={projectState.project}
      SelectProject={handelSelectProject} 
      />
      {content}
    </main>
  );
}

export default App;
