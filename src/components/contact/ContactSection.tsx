"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, CheckCircle2, Copy, Sparkles, Mail, MessageSquare, User } from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactSection() {
  // Terminal Emulator State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<
    Array<{ command: string; output: string | React.ReactNode }>
  >([
    {
      command: "welcome",
      output: "Type 'help' to view all available commands (about, contact, github, linkedin, resume).",
    },
  ]);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let res: React.ReactNode = "";

    switch (cmd) {
      case "help":
        res = (
          <div className="space-y-1">
            <p>Available commands:</p>
            <p className="text-primary">• help - List commands</p>
            <p className="text-accent">• about - Developer profile summary</p>
            <p className="text-emerald-400">• contact - Get email & social links</p>
            <p className="text-amber-400">• github - Open GitHub profile</p>
            <p className="text-indigo-400">• linkedin - Open LinkedIn profile</p>
            <p className="text-pink-400">• resume - Download PDF resume</p>
            <p className="text-slate-400">• clear - Clear terminal log</p>
          </div>
        );
        break;
      case "about":
        res = profileData.bio;
        break;
      case "contact":
        res = `Email: ${profileData.email} | Location: ${profileData.location}`;
        break;
      case "github":
        window.open(profileData.github, "_blank");
        res = `Redirecting to ${profileData.github}...`;
        break;
      case "linkedin":
        window.open(profileData.linkedin, "_blank");
        res = `Redirecting to ${profileData.linkedin}...`;
        break;
      case "resume":
        window.open(profileData.resumeUrl, "_blank");
        res = `Downloading resume...`;
        break;
      case "clear":
        setTerminalOutput([]);
        setTerminalInput("");
        return;
      default:
        res = `Command not found: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalOutput((prev) => [...prev, { command: cmd, output: res }]);
    setTerminalInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Contact & <span className="text-primary">Terminal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Side: Developer Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel rounded-3xl border border-white/10 bg-slate-950/90 overflow-hidden shadow-2xl flex flex-col h-[480px]"
          >
            {/* Terminal Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal size={14} className="text-primary" />
                <span>terminal@portfolio:~$</span>
              </span>
              <div className="w-12" />
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-xs text-slate-200 overflow-y-auto flex-1 space-y-3">
              {terminalOutput.map((item, i) => (
                <div key={i} className="space-y-1">
                  {item.command !== "welcome" && (
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <span>terminal@portfolio:~$</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div className="text-slate-300 pl-2 border-l border-white/10">
                    {item.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Command Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-slate-900/80 border-t border-white/10 font-mono text-xs">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help'..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-500"
              />
              <button type="submit" className="px-3 py-1 rounded bg-primary/20 hover:bg-primary/30 text-primary text-[10px] font-bold">
                Run
              </button>
            </form>
          </motion.div>

          {/* Right Side: Modern Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 border border-white/10 bg-slate-900/80 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Have a project or opportunity? Let&apos;s build together.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-primary/40 transition-colors"
                >
                  {copiedEmail ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-slate-950/80 border border-white/10 px-10 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl bg-slate-950/80 border border-white/10 px-10 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Muhammed, I'd like to discuss a project..."
                        className="w-full rounded-xl bg-slate-950/80 border border-white/10 px-10 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold transition-all duration-300 shadow-lg shadow-primary/25"
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
