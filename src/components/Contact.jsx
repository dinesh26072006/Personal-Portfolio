import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from "emailjs-com";
// import { Send } from "react-feather";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    emailjs
      .send(
        "service_t7gge0a", // from EmailJS
        "template_0oeadlm", // from EmailJS
        formData,
        "8YATou47f4fPl9FRe" // from EmailJS
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("Failed to send message. Please try again.");
      });
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '', phone: ''});
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Velammal Engineering College,Chennai',
      link: '#'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '6369627212',
      link: 'tel:6369627212'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'dineshprabakaran2509@gmail.com',
      link: 'mailto:dineshprabakaran2509@gmail.com'
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="bold text-3xl sm:text-6xl font-50 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <br></br>
            <p className="text-lg text-white dark:text-gray-300">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="bold text-3xl sm:text-3xl font-50 text-[#34d399]">
                Let's Connect
              </h3>
              <br></br>
              <p className="text-white dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you're a company looking to hire, or just want to have a chat,
                feel free to reach out!
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-xl mr-4">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <a href={item.link}>
                        <p className="text-white dark:text-gray-300">
                          {item.details}
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 justify-left gap-9">
                {/* GitHub */}
                <a
                  href="https://github.com/dinesh26072006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.67-5.48 5.97.43.37.81 1.1.81 2.23v3.3c0 .32.21.7.82.58A12 12 0 0 0 12 0z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dinesh-prabakaran-491659306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 
        0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 18.34H5.67V9h2.67v9.34zM7 
        7.67C6.11 7.67 5.4 6.96 5.4 6.07S6.11 4.47 7 4.47s1.6.71 1.6 1.6S7.89 
        7.67 7 7.67zM18.34 18.34h-2.67v-4.8c0-1.14-.02-2.61-1.6-2.61-1.6 
        0-1.84 1.25-1.84 2.54v4.87h-2.67V9h2.56v1.28h.04c.36-.68 1.26-1.4 
        2.6-1.4 2.78 0 3.29 1.83 3.29 4.21v5.25z" />
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:dineshprabakaran2509@gmail.com"
                  className="p-2 bg-red-500 rounded-full hover:bg-red-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M502.3 190.8L327.4 338.3 502.3 485.8c6.3-9.6 9.7-20.9 
        9.7-32.7V223.5c0-11.8-3.4-23.1-9.7-32.7zM480 96H32C14.3 96 0 
        110.3 0 128v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 
        32-32V128c0-17.7-14.3-32-32-32zm0 64L256 288 32 160v-32l224 
        128L480 128v32z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone no
                  </label>
                  <input
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Phone no"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-colors duration-200"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;