// components/Contact.tsx
import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <p className="text-center text-lg mb-10">
          Feel free to reach out to me via email, phone, or follow me on social media!
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start justify-center">
          {/* Email & Phone Section */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <a
                  href="mailto:fatimasaleem038@gmail.com"
                  className="text-blue-400 hover:underline"
                  aria-label="Email Fatima Saleem"
                >
                  fatimasaleem038@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <Phone className="text-green-500 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <a
                  href="tel:+923029056088"
                  className="text-green-400 hover:underline"
                  aria-label="Call Fatima Saleem"
                >
                  +92 302 9056088
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-6">Connect with Me</h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/dr-fatima-s-6820b2238/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:opacity-80 transition"
              >
                <Linkedin className="text-blue-500 w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
