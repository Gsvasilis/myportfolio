
import "../styles/Services.scss";



function Services() {



  return (
    <div  className="services" id="services">
      <div className="top">
        <div className="pContainer">
          <p>
            I focus on helping your brand grow <br />
            and move forward
          </p>
          <hr />
        </div>
      </div>
      <div  className="center">
        <div  className="titleContainer">
            <div className="imgContainer">
                <img src="/people.webp" alt="" />
            </div>
            <h1>Unique Ideas</h1>
        </div>
        <div  className="title">
          <h1>  For Your Business </h1>
          <button><a href="#portfolio">What We Do?</a></button>
        </div>
      </div>
      <div  className="bottom">
        <div  className="boxContainer">
            <div  className="box">
                <h3>Web Development</h3>
                <p>Transforming ideas into visually stunning and fully functional websites is my passion. I specialize in building responsive, user-friendly web applications that provide seamless experiences across all devices. Utilizing the latest web technologies and best practices, I ensure your online presence stands out and performs optimally.</p>
            </div>
            <div  className="box">
                <h3>React Development</h3>
                <p>Harnessing the power of React, I create dynamic single-page applications that are fast, scalable, and maintainable. My expertise in React allows me to build intuitive and interactive user interfaces, ensuring a smooth user experience. From state management to component-based architecture, I have the skills to bring your project to life.</p>
            </div>
            <div  className="box">
                <h3>Backend Development</h3>
                <p>A robust backend is the backbone of any successful web application. I specialize in creating efficient and secure backend solutions using technologies like Node.js, Express, and MongoDB. By focusing on performance and scalability, I ensure your application can handle growing traffic and complex data requirements.</p>
            </div>
            <div  className="box">
                <h3>FullStack Development</h3>
                <p>As a FullStack Developer, I bridge the gap between front-end and back-end development to deliver complete, end-to-end solutions. Whether it's building a feature-rich client interface or architecting a resilient server infrastructure, I have the expertise to manage all aspects of the development process. My holistic approach ensures that every part of your application works seamlessly together.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
