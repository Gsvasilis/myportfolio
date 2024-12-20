import "../../../styles/Frontend.scss"
import { FaSquareCheck } from "react-icons/fa6";

function Frontend() {
  return (
    <div className="frontend">
    <div className="box">
      <div className="title">
        <h3>Frontend Developer</h3>
      </div>

      <div className="boxContainer">
        <div className="box-skills">
          <div className="skill">
            <div className="box-icon">
            <FaSquareCheck />
            </div>
            <div className="subskill">
              <h3>Html</h3>
              <p>Basic</p>
            </div>
          </div>
          <div className="skill">
            <div className="box-icon">
            <FaSquareCheck />
            </div>
            <div className="subskill">
              <h3>JavaScript</h3>
              <p>Basic</p>
            </div>
          </div>
         
        </div>
        <div className="box-skills">
          <div className="skill">
            <div className="box-icon">
            <FaSquareCheck />
            </div>
            <div className="subskill">
              <h3>Sass</h3>
              <p>Basic</p>
            </div>
          </div>
          <div className="skill">
            <div className="box-icon">
            <FaSquareCheck />
            </div>
            <div className="subskill">
              <h3>ReactJs</h3>
              <p>Basic</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Frontend