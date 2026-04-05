import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("")
const [alertMessage, setAlertMessage] = useState("")
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  const showAlertMessage = (type , message)=>{
    setAlertType(type);
      setAlertMessage(message);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form Submitted:", formData)
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    to_name: "Psalmer",
    from_email: formData.email,
    to_email: "clarabalsalmer@gmail.com",
    message: formData.message
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      setIsLoading(false);
       showAlertMessage("Success", "Your message has been sent!");
      setFormData({name: "" , email:"", message:"" });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("Failed", "Something went wrong :<");
    }
  }

  return (
    <section id="Contact" className="relative flex items-center c-space section-spacing">
      <Particles className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">Whether You're looking to build new website improve your existing platform or bring unique project to life, I'm here to help</p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input id="name" name="name" type="text" className="field-input field-input-focus" placeholder="Fullname" autoComplete="name" value={formData.name} onChange={handleChange} required/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input id="email" name="email" type="email" className="field-input field-input-focus" placeholder="example@email.com" autoComplete="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea id="message" name="message" className="field-input field-input-focus" placeholder="Share your thoughts." value={formData.message} onChange={handleChange} required/>
          </div>
          <button type="submit" disabled={isLoading} className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact