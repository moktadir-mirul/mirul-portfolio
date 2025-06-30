import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full dark:bg-gray-700 pt-10">
        <div className="w-11/12 mx-auto dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-12 px-6 rounded-xl">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side – Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Contact Information
          </h2>
          <p className="mb-4 text-sm md:text-base">
            I’m available for freelance, part-time, or full-time opportunities —
            both remote and on-site.
          </p>
          <ul className="space-y-3 text-sm md:text-base">
            <li>
              <span className="font-semibold text-orange-500">
                📍 Location:
              </span>{" "}
              Uttara, Dhaka
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
        <form className="grid gap-4 text-left">
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
