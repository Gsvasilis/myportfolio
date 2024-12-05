import "../../styles/Frontend.scss";
import { SquareCheck } from "lucide-react";

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
                <SquareCheck />
              </div>
              <div className="subskill">
                <h3>HTML</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className="skill">
              <div className="box-icon">
                <SquareCheck />
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
                <SquareCheck />
              </div>
              <div className="subskill">
                <h3>SCSS</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className="skill">
              <div className="box-icon">
                <SquareCheck />
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
  );
}

export default Frontend;
