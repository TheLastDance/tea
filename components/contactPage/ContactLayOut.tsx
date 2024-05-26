import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";

const ContactLayout = () => {
  return (
    <div className="contact-container">
      <ContactInformation />
      <ContactForm />
    </div>
  );
};

export default ContactLayout;
