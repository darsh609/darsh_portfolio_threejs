// import { Button, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";

// import "./Contact.css";


// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
  

//   const contactFormHandler = (e) => {
//     e.preventDefault();
//     // 
//   };

 
//   return (
//     <div className="contact">
//       <div className="contactRightBar"></div>

//       <div className="contactContainer">
//         <form className="contactContainerForm" onSubmit={contactFormHandler}>
//           <Typography variant="h4">Contact Us</Typography>

//           <input
//             type="text"
//             placeholder="Name"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <textarea
//             placeholder="Message"
//             required
//             cols="30"
//             rows="10"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//           <Button variant="contained" type="submit" >
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactFormHandler = (e) => {
    e.preventDefault();

    // Build the template parameters for your EmailJS template.
    // Your EmailJS template is:
    // <p>Hello {{to_name}},</p>
    // <p>You got a new message from {{from_name}}:</p>
    // <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
    //   {{{message}}}
    // </p>
    // <p>
    //   Best wishes,<br>EmailJS team
    // </p>
    // We replace the sender with "Darsh Kumar".
    const templateParams = {
      subject: "Thank you for contacting me!",
      from_name: "Darsh Kumar",
      to_name: name,
      message: message,
      to_email: email
    };

    // EmailJS credentials
    const serviceID = "service_7hjn6js";
    const templateID = "template_gjwgr1o";
    const userID = "uiGHdaPyFGAlH0LgK";

    // Send the email with toast notifications
    toast.promise(
      emailjs.send(serviceID, templateID, templateParams, userID),
      {
        pending: 'Sending your message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message.'
      }
    ).then(() => {
      // Clear form fields on success
      setName("");
      setEmail("");
      setMessage("");
    }).catch((err) => {
      console.error("Error sending email: ", err);
    });
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
