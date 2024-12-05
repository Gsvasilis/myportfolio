import { useState } from "react";
import "../styles/Contactme.scss";
import { Mail, Phone,ArrowRight } from "lucide-react";

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
    <div className="contact" id="contact">
      <div className="title">
        <h1>Contact me</h1>
      </div>
      <div className="contactContainer">
        <div className="contactDetails">
          <h3>Talk to me</h3>
          <div className="box">
            <p>
              <Mail />
            </p>
            <p>Email</p>
            <span>grkvasilis@gmail.com</span>
            <div className="write">
              <p>Write me</p>
              <p>
                <ArrowRight />
              </p>
            </div>
          </div>
          <div className="box">
            <p>
              <Phone />
            </p>
            <p>Phone</p> <span>+30 6973980631 </span>
            <div className="write">
              <p>Write me</p>
              <p>
                <ArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Insert Your Name" />

            <input type="email" name="email" placeholder="Insert Your Email" />

            <textarea
              rows={8}
              name="message"
              placeholder="Write Your Message"
            ></textarea>

            <button type="submit">Contact me</button>
            {result}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
