import Button from "./Button.jsx";

export default function ProjectSideBar({ onStartAddProject, isProjects,SelectProject,selectProjectID }) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2>Your Project</h2>
        <div>
          <Button onClick={onStartAddProject}>
            +Add Project
          </Button>
        </div>
        <ul className=" mt-8 ">
          {isProjects.map((project) => {
            const cssClasses = `w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ${
  project.id === selectProjectID ? 'bg-stone-800 text-stone-200' : 'bg-stone-400'
}`;
          return(
            <li key={project.id}>
              <button onClick={()=>SelectProject(project.id)} className={cssClasses}>
                {project.title}
              </button>
            </li>
          )})}
        </ul>
      </aside>
    </>
  );
}
