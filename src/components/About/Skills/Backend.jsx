import "../../../styles/Backend.scss"
import { FaSquareCheck } from "react-icons/fa6";
function Backend() {
  return (
    <div className="backend">
    <div className="box">
    <div className="title">
      <h3>Backend Developer</h3>
    </div>
    <div className="boxContainer">
      <div className="box-skills">
        <div className="skill">
          <div className="box-icon">
          <FaSquareCheck />
          </div>
          <div className="subskill">
            <h3>Node Js</h3>
            <p>Basic</p>
          </div>
        </div>
        <div className="skill">
          <div className="box-icon">
          <FaSquareCheck />
          </div>
          <div className="subskill">
            <h3>Sql</h3>
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
            <h3>Php</h3>
            <p>Basic</p>
          </div>
        </div>
        <div className="skill">
          <div className="box-icon">
          <FaSquareCheck />
          </div>
          <div className="subskill">
            <h3>MySql</h3>
            <p>Basic</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Backend