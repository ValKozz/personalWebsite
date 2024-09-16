import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-custom-alert";
import "react-custom-alert/dist/index.css";

export default function Contact() {
  const sendWarning = () => toast.error("Too many emails sent.");
  const sendInfo = () => toast.success("Email Sent.");
  var messages_sent = 0;

  const sendEmail = (e) => {
    // Prevent refresh on Submit
    e.preventDefault();
    if (messages_sent < 2) {
      messages_sent = messages_sent + 1;
      emailjs.sendForm(
        "service_jjew7x3",    // Bad practice, but this is the only way it would work
        "template_fp3gf9v",
        e.target,
        "_mHX7xlw4gS_IzzOd"
      );
      sendInfo();
    } else {
      sendWarning();
    }
  };

  return (
    <section className="scroller-end">
      <ToastContainer
        toastStyle={{
          backgroundColor: "#222831",
          Color: "#eeeeee",
          filter: "drop-shadow(0 0 10em #646cffaa)",
          boxShadow: "0 0 10em #646cffaa, 0 0 8px 0 #cbcbcb",
        }}
        floatingTime={5000}
      />
      <div className="main light">
        {/* Layout starts here */}
        <div id="main-contact">
          <div id="contact-title">
            <h1 className="sectionTitle" id="hover-title">
              Contact me
            </h1>
            <h3>Send me an e-mail!</h3>
          </div>

          <div id="contact-form">
            <form id="formid" onSubmit={sendEmail}>
              <div id="name-div">
                <input
                  type="text"
                  name="from_name"
                  className="input-field"
                  placeholder="Your Name"
                />
              </div>

              <div id="email-div">
                <input
                  name="from_email"
                  type="email"
                  className="input-field"
                  placeholder="Your E-mail"
                  required
                />
              </div>

              <div id="personal-msg-div">
                <textarea
                  name="message"
                  type="text"
                  className="input-field"
                  placeholder="Your personal message"
                  required
                />
              </div>

              <button type="submit" name="submit" id="submit">
                Send!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
