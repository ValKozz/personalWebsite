import "./contact.css";

export default function Contact() {
  // function sendEmail() {
  //   // TO-DO
  // }

  return (
    <>
      <div className="main light">
        <div id="main-contact light">
          <div id="section-title">
            <h1 className="sectionTitle" id="hover-title">
              Contact me
            </h1>
            <h3>Send me an e-mail!</h3>
          </div>
          <div id="contact-form">
            <form id="formid">
              <div id="name-div">
                <input
                  type="text"
                  className="input-field "
                  placeholder="Your Name"
                />
              </div>

              <div id="email-div">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your E-mail"
                />
              </div>

              <div id="personal-msg-div">
                <textarea
                  type="text"
                  className="input-field"
                  placeholder="Your personal message"
                />
              </div>

              <button id="submit">Submit!</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
