"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Terminal as TerminalIcon,
  ArrowUpRight,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full Stack Development",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<
    Array<{ command: string; output: string | React.ReactNode }>
  >([
    {
      command: "welcome",
      output:
        "Developer CLI online. Type 'help' to inspect commands (about, projects, skills, contact, clear).",
    },
  ]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.message) return;

    setSubmitting(true);
    // Simulate real submission handling / mailto fallback
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // Optional mailto link fallback
      const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `Project Inquiry: ${formData.service} from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let res: React.ReactNode = "";

    switch (cmd) {
      case "help":
        res = (
          <div className="space-y-1 text-xs">
            <p className="text-[#A1A1A1]">Available terminal commands:</p>
            <p className="text-[#FF1018]">• help - Display command manual</p>
            <p className="text-[#F5F5F5]">• about - Developer profile & philosophy</p>
            <p className="text-[#22C55E]">• projects - List featured applications</p>
            <p className="text-[#FF1018]">• contact - Show email & coordinates</p>
            <p className="text-[#A1A1A1]">• github - Open GitHub repository profile</p>
            <p className="text-[#A1A1A1]">• linkedin - Open LinkedIn profile</p>
            <p className="text-[#6B6B6B]">• clear - Reset terminal log</p>
          </div>
        );
        break;
      case "about":
        res = profileData.bio;
        break;
      case "projects":
        res = "1. LabelBee (AI Sticker generator) | 2. SignifyEd (Real-time ASL CV) | 3. Student Portal | 4. PeerPay (Expense splitter)";
        break;
      case "contact":
        res = `Direct: ${profileData.email} | Location: ${profileData.location}`;
        break;
      case "github":
        window.open(profileData.github, "_blank");
        res = `Navigating to ${profileData.github}...`;
        break;
      case "linkedin":
        window.open(profileData.linkedin, "_blank");
        res = `Navigating to ${profileData.linkedin}...`;
        break;
      case "clear":
        setTerminalOutput([]);
        setTerminalInput("");
        return;
      default:
        res = `Command '${cmd}' not recognized. Type 'help' for command manual.`;
    }

    setTerminalOutput((prev) => [...prev, { command: cmd, output: res }]);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 max-w-2xl"
      >
        <span className="badge-label text-[#FF1018] block mb-2">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.1]">
          Let&apos;s Build <br />
          Something <span className="text-[#FF1018]">Exceptional</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1A1] mt-3 leading-relaxed">
          Whether you have a technical opportunity, an AI web product in development, or want to collaborate, feel free to drop a message.
        </p>
      </motion.div>

      {/* 2-Column Responsive Layout: Form (Left/Right) + Direct Info & Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Column: Contact Form (Section 28) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#202020]">
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-white">
                Send a Message
              </h2>
              <p className="text-xs text-[#A1A1A1] mt-0.5">
                Direct inquiry dispatched straight to my inbox
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#161616] border border-[#262626] text-xs text-[#A1A1A1] hover:text-white hover:border-[#FF1018]/40 transition-colors"
            >
              {copiedEmail ? (
                <CheckCircle2 size={13} className="text-[#22C55E]" />
              ) : (
                <Copy size={13} />
              )}
              <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-[#161616] border border-[#22C55E]/30 text-center space-y-3">
              <CheckCircle2 size={40} className="text-[#22C55E] mx-auto" />
              <h3 className="text-lg font-bold font-heading text-white">
                Thank You for Reaching Out!
              </h3>
              <p className="text-xs text-[#A1A1A1] max-w-sm mx-auto">
                Your message has been formatted. If your email client didn&apos;t open automatically, you can always write to {profileData.email}.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-xl bg-[#202020] text-xs text-white hover:bg-[#282828] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="badge-label text-[#A1A1A1] block mb-1.5">
                  Your Name *
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-3.5 text-[#6B6B6B]" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl bg-[#0c0c0c] border border-[#242424] px-10 py-3 text-xs sm:text-sm text-white placeholder-[#555555] focus:border-[#FF1018] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="badge-label text-[#A1A1A1] block mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-3.5 text-[#6B6B6B]" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl bg-[#0c0c0c] border border-[#242424] px-10 py-3 text-xs sm:text-sm text-white placeholder-[#555555] focus:border-[#FF1018] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="badge-label text-[#A1A1A1] block mb-1.5">
                  Inquiry Focus / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl bg-[#0c0c0c] border border-[#242424] px-4 py-3 text-xs sm:text-sm text-white focus:border-[#FF1018] focus:outline-none transition-colors"
                >
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="AI & Computer Vision">AI & Computer Vision</option>
                  <option value="Backend & Scalable APIs">Backend & Scalable APIs</option>
                  <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                  <option value="Other Collaboration">Other Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="badge-label text-[#A1A1A1] block mb-1.5">
                  Project Details / Message *
                </label>
                <div className="relative">
                  <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-[#6B6B6B]" />
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project scope, timeline, and goals..."
                    className="w-full rounded-xl bg-[#0c0c0c] border border-[#242424] px-10 py-3 text-xs sm:text-sm text-white placeholder-[#555555] focus:border-[#FF1018] focus:outline-none transition-colors resize-y"
                  />
                </div>
              </div>

              {/* Submit Button (Primary RED button) */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF1018] hover:bg-[#FF2E35] text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(255,16,24,0.3)] transition-all disabled:opacity-50"
              >
                <span>{submitting ? "Preparing Message..." : "Send Message →"}</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Channels & Interactive Developer Terminal */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          
          {/* Direct Details Card */}
          <div className="p-6 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] space-y-4">
            <span className="badge-label text-[#A1A1A1] block">Direct Details</span>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-[#222222]">
                <Mail size={16} className="text-[#FF1018] shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-[#6B6B6B] block font-mono">Email</span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-white hover:text-[#FF1018] transition-colors truncate block"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-[#222222]">
                <MapPin size={16} className="text-[#FF1018] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#6B6B6B] block font-mono">Location</span>
                  <span className="text-white">{profileData.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#151515] border border-[#222222] hover:border-[#FF1018]/40 transition-colors text-xs text-white"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={14} className="text-[#A1A1A1]" />
                    GitHub
                  </span>
                  <ArrowUpRight size={12} className="text-[#6B6B6B]" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#151515] border border-[#222222] hover:border-[#FF1018]/40 transition-colors text-xs text-white"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon size={14} className="text-[#A1A1A1]" />
                    LinkedIn
                  </span>
                  <ArrowUpRight size={12} className="text-[#6B6B6B]" />
                </a>
              </div>
            </div>
          </div>

          {/* Developer CLI Terminal Emulator */}
          <div className="rounded-2xl md:rounded-3xl bg-[#0c0c0c] border border-[#242424] overflow-hidden flex flex-col flex-1 min-h-[300px]">
            <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-[#202020]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF1018]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#404040]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#404040]" />
              </div>
              <span className="text-[11px] font-mono text-[#A1A1A1] flex items-center gap-1.5">
                <TerminalIcon size={12} className="text-[#FF1018]" />
                ismail@portfolio:~$
              </span>
              <span className="text-[10px] font-mono text-[#6B6B6B]">bash</span>
            </div>

            {/* Output Log */}
            <div className="p-4 font-mono text-xs text-[#A1A1A1] overflow-y-auto flex-1 space-y-2.5 max-h-[220px]">
              {terminalOutput.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.command !== "welcome" && (
                    <div className="flex items-center gap-1.5 text-white font-semibold">
                      <span className="text-[#FF1018]">$</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div className="text-[#d1d1d1] pl-2 border-l border-[#242424] leading-relaxed">
                    {item.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Command Input */}
            <form
              onSubmit={handleCommand}
              className="p-3 border-t border-[#202020] bg-[#111111] flex items-center gap-2 font-mono text-xs"
            >
              <span className="text-[#FF1018] font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help'..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder-[#555555]"
              />
              <button
                type="submit"
                className="px-2.5 py-1 rounded bg-[#1c1c1c] text-[#FF1018] font-bold text-[10px] hover:bg-[#252525]"
              >
                RUN
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
