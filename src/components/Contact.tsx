import React from 'react';
import { Send, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in collaborating or have a question? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-input"
                    placeholder="Your message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn btn-accent inline-flex items-center justify-center space-x-2 hover:shadow-lg"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <p className="text-gray-600 mb-8">
                  I'm always interested in hearing about new opportunities and collaborations in the data solutions space.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/eduardo-salvador-1b7953191/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <br />
                  <a
                    href="https://github.com/Esalvador1998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Based in Charlotte, NC
                  <br />
                  Available for remote collaboration worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}