import "../../styles/Skills.scss";
import Backend from "./Backend";
import Frontend from "./Frontend";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="title">
        <h1>Skills</h1>
        <h4>My technical level</h4>
      </div>
      <div className="wrapper">
           <Frontend/> 
         <Backend/>
       </div>
    </div>
  );
}

export default Skills;
