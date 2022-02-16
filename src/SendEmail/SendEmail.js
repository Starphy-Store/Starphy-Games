import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2aw41dd",
        "template_pva3766",
        e.target,
        "user_iFFXolpdLWitDZI7daA9L"
      )
      .then(
        (result) => {},
        (error) => {}
      );
  }
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
