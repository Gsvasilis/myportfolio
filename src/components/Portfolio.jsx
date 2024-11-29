import { useState } from "react";
import "../styles/Portfolio.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  {
    id: 1,
    title: "CineStream",
    desc: " I created a comprehensive video streaming platform for watching movies and series on various devices. I developed the frontend using React for a dynamic and fast user experience. I used react-router-dom for navigation within the application, enabling smooth transitions between pages. I connected the frontend to the backend using Axios for secure and efficient HTTP requests. I utilized Zustand for state management, providing efficient and flexible state management.",
    img: "/portfolio1.png",
  },
  {
    id: 2,
    title: "E-Commerce",
    desc: "I created an e-commerce platform for buying and selling products online. The frontend was developed using React to create a dynamic and user-friendly experience. For navigation within the application, I used react-router-dom, allowing smooth and fast transitions between pages. I connected the frontend to the backend via Axios, enabling secure and efficient data exchange. Zustand was utilized for state management, providing efficient and flexible state handling.",
    img: "/portfolio2.png",
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
  <h1>Featured Works</h1>
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
