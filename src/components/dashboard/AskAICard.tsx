"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Send, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";

interface QA {
  question: string;
  answer: string;
}

const presetQuestions: QA[] = [
  {
    question: "What are your top projects?",
    answer: `My featured projects are:
1. LabelBee: AI-powered name slip & sticker generator with payments and dynamic PDF rendering.
2. SignifyEd: Real-time sign language recognition using MediaPipe hand tracking and OpenCV.
3. Student Portal: Comprehensive university analytics and attendance assistant built with Next.js & Supabase.
4. PeerPay: PWA for peer expense splitting with receipt OCR.`,
  },
  {
    question: "What is your main tech stack?",
    answer: `Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion.
Backend: Python (FastAPI), Node.js, Express.
AI & ML: OpenCV, MediaPipe, TensorFlow, Scikit-Learn.
Databases: Supabase, PostgreSQL, Firebase.`,
  },
  {
    question: "Are you available for work?",
    answer: `Yes! I am currently open to full-time Software Engineering roles, AI/ML engineering positions, and selective contract opportunities. You can reach out directly via contact@muhdismailm.com.`,
  },
  {
    question: "Tell me about your background",
    answer: `I am a Software Engineer and final-year Computer Science student with 3+ years of building full-stack and AI applications. I won 1st Place at the National AI Innovation Hackathon 2025 and maintain open-source projects with 500+ GitHub stars.`,
  },
];

export default function AskAICard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [chatLog, setChatLog] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: "Hi! I'm Muhammed's portfolio assistant. Ask me anything about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (textToSend?: string) => {
    const q = (textToSend || input).trim();
    if (!q) return;

    const lower = q.toLowerCase();
    let answer = "";

    if (lower.includes("project") || lower.includes("built") || lower.includes("work")) {
      answer = `Muhammed has developed high-impact applications including LabelBee (AI sticker & PDF engine with Stripe), SignifyEd (real-time ASL computer vision), Student Portal, and PeerPay. Check out the Work page for detailed deep dives!`;
    } else if (lower.includes("tech") || lower.includes("stack") || lower.includes("skill") || lower.includes("react") || lower.includes("python")) {
      answer = `Core technologies include React, Next.js, TypeScript, Python, OpenCV, MediaPipe, TensorFlow, Node.js, and Supabase/PostgreSQL.`;
    } else if (lower.includes("hire") || lower.includes("contact") || lower.includes("available") || lower.includes("email")) {
      answer = `Muhammed is available for software engineering roles and projects! You can contact him at ${profileData.email} or through the Contact page form.`;
    } else if (lower.includes("education") || lower.includes("college") || lower.includes("degree")) {
      answer = `Muhammed is pursuing a B.Tech in Computer Science & Engineering (2022-2026) with a GPA of 8.8/10, specializing in AI, Web Technologies, and Data Structures.`;
    } else if (lower.includes("experience") || lower.includes("intern")) {
      answer = `He currently works as an AI & Full Stack Developer Intern at Tech Solutions Inc., developing real-time OpenCV & MediaPipe gesture tracking and responsive Next.js apps.`;
    } else {
      answer = `Muhammed is a Software Engineer specializing in AI-powered and full-stack web applications. Feel free to explore the Work and About sections to learn more, or message him directly!`;
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
      <div
        onClick={() => setModalOpen(true)}
        className="group relative p-5 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#FF1018]/40 hover:bg-[#151515] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
      >
        {/* Ambient subtle red corner light */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF1018]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF1018]/15 transition-all" />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF1018]/15 border border-[#FF1018]/30 text-[#FF1018]">
              <Bot size={17} />
            </div>
            <span className="badge-label text-[#A1A1A1] group-hover:text-white transition-colors">
              Ask My AI
            </span>
          </div>
          <ArrowUpRight
            size={16}
            className="text-[#6B6B6B] group-hover:text-[#FF1018] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        <div>
          <h4 className="text-sm md:text-base font-bold font-heading text-[#F5F5F5] mb-1">
            Ask About My Background
          </h4>
          <p className="text-xs text-[#A1A1A1] line-clamp-2">
            Chat with an intelligent assistant to quickly query projects, tech stack, and experience.
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#242424] flex items-center justify-between text-[11px] text-[#FF1018] font-medium">
          <span className="flex items-center gap-1.5">
            <Sparkles size={12} />
            Instant Responses
          </span>
          <span className="text-[#6B6B6B] group-hover:text-[#A1A1A1] transition-colors">
            Click to Chat →
          </span>
        </div>
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
                    <h3 className="text-sm font-bold font-heading text-white">
                      Ask About Muhammed
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#22C55E]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                      Online Portfolio Agent
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg text-[#A1A1A1] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Log */}
              <div className="p-4 overflow-y-auto flex-1 space-y-3 text-xs">
                {chatLog.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-[#FF1018] text-white"
                          : "bg-[#181818] border border-[#242424] text-[#F5F5F5]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Prompts */}
              <div className="px-4 py-2 border-t border-[#242424] bg-[#121212] overflow-x-auto gallery-scroll flex gap-1.5">
                {presetQuestions.map((pq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(pq.question)}
                    className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#1c1c1c] hover:bg-[#252525] border border-[#2e2e2e] text-[11px] text-[#A1A1A1] hover:text-white transition-colors"
                  >
                    {pq.question}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3 border-t border-[#242424] bg-[#141414] flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about projects, experience..."
                  className="flex-1 bg-[#0c0c0c] border border-[#242424] focus:border-[#FF1018] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#6B6B6B] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-[#FF1018] text-white hover:bg-[#FF2E35] transition-colors"
                  aria-label="Send query"
                >
                  <Send size={15} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
