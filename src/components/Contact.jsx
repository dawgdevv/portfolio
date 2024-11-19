import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "../constants/index";

function Contact() {
  const [formdata, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: formdata.email,
      message: formdata.message,
    };

    emailjs
      .send(
        "service_xwzw7ac",
        "template_am62r7h",
        templateParams,
        "vYvha6S6B9d_1wKSP"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent Successfully");
        setFormData({
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Message Sending Failed");
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Have a question or want to get in touch i am just one click away?
            Shoot me a message!
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="your@email.com"
                required
                className="w-full"
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                required
                className="w-full "
                value={formdata.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
              <p>{CONTACT.address}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <p>{CONTACT.phoneNo}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <p>{CONTACT.email}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <p>{CONTACT.eduemail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
