import React, {useState} from "react"
import "../../styles/contact.css"
import sendEmail from "../../utils/sendEmail.js"

const FORM_ENDPOINT = ""

function Contact() {
  const [submitted,setSubmitted] = useState(false);
  const [name,setName] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    const subName = document.querySelector("#name").value.split(" ")[0];
    setName(subName)
    setTimeout(()=>{
      setSubmitted(true)
    },100)
    sendEmail("sent")
  }
  if (submitted){
    return(
      <>
      <h2>Thank You, {name}!</h2>
      <p>
      I will be reaching out soon.
      </p>
      </>
    )
  }

    return (
      <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      >
        <div>
          <input type="text" placeholder="Your Name" name="name" id="name" required/>
          <input type="email" placeholder="E-mail" name="email" required/>
        </div>

        <div>
          <textarea placeholder="Your Message" name="message" required>

          </textarea>
        </div>
        <div>
          <button>
            Send a message
          </button>
        </div>

      </form>
    );
  }
  
  export default Contact;