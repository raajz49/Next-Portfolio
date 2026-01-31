"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const EmailSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setLoading(false);
    if (result.success) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccess(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h5 className="text-xl font-bold font-mono text-primary mb-2 uppercase tracking-widest">
            Post Match Presentation
          </h5>
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-md">
            I&apos;m currently looking for new opportunities/partnerships. 
            Whether you have a question or just want to discuss the latest test match, 
            my inbox is always open.
          </p>
          
          <div className="flex gap-4">
            <Link href="https://github.com/raajz49" className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/rajkoirala/" className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:smudge@gmail.com" className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <form className="flex flex-col gap-6 bg-card p-8 rounded-2xl border border-border shadow-lg" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Steve Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="smudge@cricket.com.au"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Let's talk about..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          
          {success === true && (
            <p className="text-green-500 text-sm font-medium text-center mt-2">
              Message sent successfully!
            </p>
          )}
          {success === false && (
            <p className="text-red-500 text-sm font-medium text-center mt-2">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
