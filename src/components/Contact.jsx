import "../styles/Contact.scss";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d15ca9ac-5af6-41df-a91c-c34c0de10e96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setTimeout(() => {
      setResult("");
    }, 3000);
  };
  return (
    <section className="contact" id="contact">
      <div className="titleContainer">
        <h1>Contact me</h1>
        <h4>Get in Touch</h4>
      </div>
      <div className="contactContainer">
        <div className="left">
          <div className="contactDetails">
            <div className="box">
              <p>
              <MdAlternateEmail size={25} />
              </p>
              <p>Email</p>
              <span>grkvasilis@gmail.com</span>
              <div className="write">
                <p>Write me</p>
                <p>
                  <FaArrowRightLong size={25} />
                </p>
              </div>
            </div>
            <div className="box">
              <p>
                <FaPhoneAlt size={25}  />
              </p>
              <p>Phone</p> <span>+30 6973980631 </span>
              <div className="write">
                <p>Write me</p>
                <p>
                  <FaArrowRightLong size={25} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Insert Your Name" required/>
            <input type="email" name="email" placeholder="Insert Your Email" required/>
            <textarea
              rows={8}
              name="message"
              placeholder="Write Your Message"
              required
            >
            </textarea>

            <button type="submit">Contact me</button>
            {result}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
