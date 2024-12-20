import "../styles/Portfolio.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    id: 1,
    title: "CineStream",
    desc: "Developed a seamless movie streaming platform using React.js for the frontend, Node.js for the backend, and integrated with the TMDb API. Implemented state management with Zustand and API interactions with Axios to ensure efficient data fetching and state handling.",
    img: "/cineStream.png",
  },
  {
    id: 2,
    title: "E-Commerce",
    desc: "Developed a dynamic e-commerce platform using React.js for the frontend, Node.js for the backend, and MongoDB for the database. Implemented state management with Zustand, API interactions with Axios, and added engaging animations with Framer Motion to enhance user experience.",
    img: "/eCommerce.png",
  },
  {
    id: 3,
    title: "DateApp",
    desc: "Developed a sophisticated dating application similar to Tinder using React.js for the frontend and Node.js for the backend. Utilized Zustand for state management, Axios for API interactions, and Socket.io for real-time communication to ensure a seamless and interactive user experience.",
    img: "/dateApp.png",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="titleContainer">
        <h1>Latest Works</h1>
        <h4>My Projects</h4>
      </div>
      <Swiper
        className="slider"
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {items.map((item) => (
          <div key={item.id}>
            <SwiperSlide className="swiperContainer">
                  <div className="imgContainer">
                    <img src={item.img} alt={item.title} />
                  </div>
                    <div className="descContainer">
                      <h2>{item.title}</h2>
                    <div className="parContainer">
                      <p>{item.desc}</p>
                    </div>
                    </div>
                
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
}

export default Portfolio;
