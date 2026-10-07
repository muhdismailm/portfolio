"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Send, X } from "lucide-react";
import { profileData } from "@/data/profile";

interface QA {
  question: string;
  answer: string;
}

const presetQuestions: QA[] = [
  {
    question: "What are your top projects?",
    answer: `My top projects are:
1. SignifyEd: Web accessibility platform converting text/audio/video into Indian Sign Language (ISL) using Python Flask, OpenCV, MediaPipe, and Three.js.
2. LabelBee: SaaS platform for print-ready stickers and name slips with AI designs, PDF/PNG export, and payment gateway integration.
3. Workify: Flutter mobile application connecting clients with local workers with real-time Firebase sync.`,
  },
  {
    question: "What is your main tech stack?",
    answer: `Languages: Python, Dart, JavaScript, C.
Frontend: React.js, Three.js, Flutter, HTML5, CSS3.
Backend: Django, Flask, Node.js.
Databases: MySQL, Firebase, Supabase.`,
  },
  {
    question: "Are you available for work?",
    answer: `Yes! I am open to full-stack web and Flutter mobile development opportunities, freelance projects, and internships. Reach out via ${profileData.email} or call +91 ${profileData.phone}.`,
  },
  {
    question: "Tell me about your education & experience",
    answer: `I am pursuing B.Tech in Computer Science and Design at Government Engineering College Kozhikode (2022–2026). Currently, I am a Python Full Stack Intern at SMEC Technologies, Kochi, and previously served as TinkerHub GECK Co-Lead and VIBE GECK Mentor.`,
  },
];

export default function AskAICard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [chatLog, setChatLog] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: `Hi! I'm ${profileData.shortName}'s AI assistant. Ask me anything about his projects, skills, or experience!`,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (textToSend?: string) => {
    const q = (textToSend || input).trim();
    if (!q) return;

    const lower = q.toLowerCase();
    let answer = "";

    if (lower.includes("project") || lower.includes("built") || lower.includes("work")) {
      answer = `Ismail built SignifyEd (ISL sign language recognition with MediaPipe & Python Flask), LabelBee (AI sticker & PDF SaaS with Razorpay), and Workify (Flutter on-demand worker app with Firebase). Check the Work page for live demos!`;
    } else if (lower.includes("flutter") || lower.includes("mobile") || lower.includes("app")) {
      answer = `Ismail is skilled in Flutter & Dart development, having won the Flutter + AI Hackathon 2025 and built Workify, an on-demand worker platform with Firebase.`;
    } else if (lower.includes("tech") || lower.includes("stack") || lower.includes("skill") || lower.includes("python") || lower.includes("react")) {
      answer = `Core stack: Python (Django, Flask), React.js, Three.js, Flutter, Dart, Firebase, Supabase, MySQL, and Git.`;
    } else if (lower.includes("hire") || lower.includes("contact") || lower.includes("available") || lower.includes("email") || lower.includes("phone")) {
      answer = `Ismail is currently available for opportunities! Contact him at ${profileData.email} or call +91 ${profileData.phone}.`;
    } else if (lower.includes("education") || lower.includes("college") || lower.includes("degree")) {
      answer = `Ismail is pursuing a B.Tech in Computer Science and Design (CSD) at Government Engineering College Kozhikode (2022-2026).`;
    } else if (lower.includes("experience") || lower.includes("intern")) {
      answer = `He is currently a Python Full Stack Intern at SMEC Technologies in Kochi, Kerala, developing data-driven web apps with Python, React, and SQL.`;
    } else {
      answer = `Muhammed Ismail M is a Python Full Stack & Flutter Developer based in Ernakulam, Kerala. Feel free to explore the Work page or reach out!`;
    }

    setChatLog((prev) => [
      ...prev,
      { sender: "user", text: q },
      { sender: "ai", text: answer },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Trigger Card - Exact Match to Screenshot */}
      <div
        onClick={() => setModalOpen(true)}
        className="group relative p-6 h-full rounded-[28px] bg-[#121212] border border-[#202020] hover:border-[#ff2a38]/40 hover:bg-[#151515] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Subtle red ambient glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF1018]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF1018]/15 transition-all" />

        {/* Red Bot Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#280c0f] border border-[#48141a] text-[#ff2a38] group-hover:scale-105 transition-transform duration-300">
          <Bot size={22} />
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mt-3 group-hover:text-white transition-colors">
          Ask my AI
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-neutral-400 mt-1">
          Know more about me
        </p>
      </div>

      {/* AI Assistant Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#111111] border border-[#242424] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#242424] bg-[#141414]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF1018]/15 border border-[#FF1018]/30 text-[#FF1018]">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Ask Ismail&apos;s AI</h3>
                    <p className="text-[10px] text-[#A1A1A1]">Live Portfolio Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-full text-[#A1A1A1] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 p-5 overflow-y-auto space-y-3.5 text-xs">
                {chatLog.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#FF1018] text-white rounded-br-sm"
                          : "bg-[#181818] border border-[#282828] text-[#F5F5F5] rounded-bl-sm whitespace-pre-line"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Preset Query Chips */}
              <div className="p-3 bg-[#131313] border-t border-[#222222] flex flex-wrap gap-1.5">
                {presetQuestions.map((q) => (
                  <button
                    key={q.question}
                    onClick={() => handleSend(q.question)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#1b1b1b] hover:bg-[#252525] text-[#A1A1A1] hover:text-white border border-[#2b2b2b] transition-all"
                  >
                    {q.question}
                  </button>
                ))}
              </div>

              {/* Input Footer */}
              <div className="p-3.5 bg-[#141414] border-t border-[#242424] flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about projects, tech stack, or experience..."
                  className="flex-1 bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#666666] focus:outline-none focus:border-[#FF1018]"
                />
                <button
                  onClick={() => handleSend()}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF1018] text-white hover:bg-[#d60e15] transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
