"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setLoading(false);
    // setSuccess(result.success);
    if (result.success) {
      setSuccess(true);
      // Clear the form fields
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccess(false);
    }
  };

  return (
    <section
    id="contact"
    className=" relative bg-[#121212] text-white grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 "
  >
           <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 bg-gradient-radial from-teal-800 to-transparent opacity-30 w-80 h-80 rounded-full pointer-events-none" />
     <div className="">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/raajz49">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/rajkoirala/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      

      {/* <h2>Contact Me</h2> */}
      <form className="flex flex-col"  onSubmit={handleSubmit}>
      {/* <h5 className="block md:hidden text-xl font-bold text-white my-2">
      Contact Me</h5> */}
      <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Name
              </label>
        <input
          type="text"
          placeholder="Steve Smith"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                
        />
        </div>
        <div className="mb-6">
              <label
                htmlFor="Email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Email
              </label>
        <input
          type="email"
          placeholder="smudge@gmail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                
        />
        </div>
        <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
        <textarea
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Let's talk about..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        </div>
        <button type="submit" disabled={loading} 
         className="w-full py-3 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {success === true && <p>Your message has been sent!</p>}
        {success === false && <p>Failed to send message. Try again later.</p>}
      </form>
    </section>
  );
};

export default ContactForm;
