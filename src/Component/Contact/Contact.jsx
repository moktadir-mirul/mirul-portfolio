import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const ContactSection = () => {
  const handleMail = e => {
    e.preventDefault();
    toast.error("Sorry! Mailing is not available right now. You can contact me through email or phone!")
  }
  return (
    <div className="w-full dark:bg-gray-900 pt-10">
      <div className="w-11/12 mx-auto dark:bg-gray-900 text-gray-800 dark:text-gray-200 pb-10 px-6 rounded-xl">
        <h1 className="md:border-l-4 pl-4 border-orange-500 text-center md:text-left text-6xl font-bold play text-orange-500">
          Contact Me
        </h1>
        <div className="pt-10 grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side – Contact Info */}
          <div>
            <p className="mb-4 text-sm md:text-base">
              I’m available for part-time, or full-time opportunities
              — both remote and on-site.
            </p>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500 flex items-center gap-1">
                  <IoLocationOutline color="red" size={25} /> Location:
                </span>{" "}
                Uttara, Dhaka
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500 flex items-center gap-1">
                  <FaWhatsapp color="green" size={25} /> WhatsApp:
                </span>{" "}
                +8801711140802
              </li>
              <li>
                <span className="font-semibold text-orange-500">📞 Phone:</span>{" "}
                +8801711140802
              </li>
              <li>
                <span className="font-semibold text-orange-500">📧 Email:</span>{" "}
                <a
                  href="mailto:moktadir.mirul@gmail.com"
                  className="underline text-orange-500"
                >
                  moktadir.mirul@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-orange-500">
                  💼 Availability:
                </span>{" "}
                Open to hire
              </li>
            </ul>
          </div>

          {/* Right Side – Contact Form */}
          <form onSubmit={handleMail} className="grid gap-4 text-left">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">
              Send a Message
            </h2>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded border border-orange-500 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded border border-orange-500 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded border border-orange-500 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
