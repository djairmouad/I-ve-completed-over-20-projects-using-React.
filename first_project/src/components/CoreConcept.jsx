
export function CoreConcept(props){
    return(
      <li>
        <img src={props.image} alt=""/>
        <h3>{props.title}</h3>
        <p>D{props.description}</p>
      </li>
    )
  }