import { useState } from "react";
import "../styles/Portfolio.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  {
    id: 1,
    title: "CineStream",
    desc: "Developed a seamless movie streaming platform using React.js for the frontend, Node.js for the backend, and integrated with the TMDb API. Implemented state management with Zustand and API interactions with Axios to ensure efficient data fetching and state handling.",
    img: "/portfolio1.png",
  },
  {
    id: 2,
    title: "E-Commerce",
    desc: "Developed a dynamic e-commerce platform using React.js for the frontend, Node.js for the backend, and MongoDB for the database. Implemented state management with Zustand, API interactions with Axios, and added engaging animations with Framer Motion to enhance user experience.",
    img: "/portfolio2.png",
  },
  {
    id:3,
    title: "DateApp",
    desc: "Developed a sophisticated dating application similar to Tinder using React.js for the frontend and Node.js for the backend. Utilized Zustand for state management, Axios for API interactions, and Socket.io for real-time communication to ensure a seamless and interactive user experience.",
    img:"/dateApp.png"
  },
];

function Portfolio() {
  const [current, setCurrent] = useState(0);
  const length = items.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="title">
        <h1>Featured Works</h1>
      </div>
      <div className="slider">   
        {items.map((item, index) => (
          <div key={item.id}>
            {index === current && (
              <div className="sliderContainer">
                <div className="imgContainer">
                  <div className="container">
                    <img src={item.img} alt={item.title} />
                  </div>
                </div>
                <div className="description">
                  <h2>{item.title}</h2> <p>{item.desc}</p>
                </div>
                <div className="arrows">
                    <ArrowLeft className="sliderArrow" onClick={prevSlide} />
                    <ArrowRight  className="sliderArrow"  onClick={nextSlide} />
                  </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
