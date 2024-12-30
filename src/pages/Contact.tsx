import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif mb-6">Get In Touch</h1>
      <p className="text-gray-600 mb-12">
        Whether you're looking to discuss a new project, inquire about my services, or simply connect, feel free to reach out.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;