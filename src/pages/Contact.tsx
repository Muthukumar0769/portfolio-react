import { useState } from "react"

interface ContactData {
  name: string
  email: string
  contact: string
  message: string
}

export const Contact=() =>{

  const [form, setForm] = useState<ContactData>({
    name: "",
    email: "",
    contact: "",
    message: ""
  })

  const [show, setShow] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent) {

    e.preventDefault()

    const existing = localStorage.getItem("messages")
    const messages = existing ? JSON.parse(existing) : []

    messages.push(form)

    localStorage.setItem("messages", JSON.stringify(messages))

    setShow(true)

    setTimeout(() => {
      setShow(false)
    }, 3000)

    setForm({
      name: "",
      email: "",
      contact: "",
      message: ""
    })

  }

  return (

    <div className="contact">

      {/* SUCCESS MESSAGE */}

      {show && (
        <div className="successMessage">
          Message sent successfully!
        </div>
      )}

      <div className="contact-container">

        {/* CONTACT FORM */}

        <div className="contact-form">

          <h2>Contact Me</h2>

          <form onSubmit={handleSubmit}>

            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="contact"
              placeholder="Contact"
              value={form.contact}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button>Send Message</button>

          </form>

        </div>


        {/* EMAIL SECTION */}

        <div className="email-box">

          <h2>Join us in my Mail</h2>

          <p>
            If you want to collaborate or discuss any project,
            feel free to send me an email.
          </p>

          <a
            href="mailto:muthukumar220769@gmail.com?subject=Portfolio Contact&body=Hello Muthukumar,"
            className="email-btn"
          >
            Send Email
          </a>

        </div>

      </div>

    </div>

  )

}