import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvqdlyq");
  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more informatiomn and get notified when i publish
        something new.
      </p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <div className="email-box flex">
            <label htmlFor="email">Email Adress :</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message-box flex">
            <label htmlFor="message">Your message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "submitting...." : "submit"}
          </button>
          {state.succeeded && (
            <p className="flex success-message">
              <Lottie
                style={{ height: 37 }}
                loop={false}
                animationData={doneAnimation}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 350 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
