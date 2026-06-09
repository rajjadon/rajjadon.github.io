import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, TextField, Avatar, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { motion, AnimatePresence } from "framer-motion";
import { CopilotPlatform } from "@kaily-ai/chat-sdk";

type ChatRole = "user" | "assistant";
interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

const TOKEN = import.meta.env.VITE_COPILOT_TOKEN || "";
const uid = () => Math.random().toString(36).slice(2);

const KailyChat = () => {
  const [open, setOpen] = useState(false);
  const [booted, setBooted] = useState(false);
  const [sending, setSending] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: uid(), role: "assistant", content: "Hi! I'm Raj's Kaily assistant 👋 Ask me anything about his work, projects, or experience." },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const botRef = useRef<any>(null);
  const threadRef = useRef<string | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to newest message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // Lazy-initialise the SDK only when the panel is first opened
  useEffect(() => {
    if (!open || booted || !TOKEN) return;
    let cancelled = false;
    (async () => {
      try {
        const platform = CopilotPlatform.getInstance({
          environment: "production",
          surfaceClient: "web",
        });
        const bot = await platform.createBotInstance(TOKEN);
        if (cancelled) return;
        botRef.current = bot;
        setBooted(true);
      } catch (err) {
        console.error("[KailyChat] init failed", err);
        if (!cancelled) {
          setBooted(true);
          setMessages((m) => [
            ...m,
            { id: uid(), role: "assistant", content: "⚠️ I couldn't connect right now. Please reach out via LinkedIn in the Contact section." },
          ]);
        }
      }
    })();
    return () => { cancelled = true; };
  }, [open, booted]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || sending) return;
    setInput("");

    const userMsg: ChatMessage = { id: uid(), role: "user", content: text };
    const assistantId = uid();
    setMessages((m) => [...m, userMsg, { id: assistantId, role: "assistant", content: "" }]);
    setSending(true);

    const appendToAssistant = (chunk: string, replace = false) =>
      setMessages((m) =>
        m.map((msg) =>
          msg.id === assistantId
            ? { ...msg, content: replace ? chunk : msg.content + chunk }
            : msg
        )
      );

    try {
      const bot = botRef.current;
      if (!bot) throw new Error("Bot not ready");

      await bot.message(
        { text, path: window.location.pathname, thread_id: threadRef.current },
        {
          deltaListener: (res: any) => {
            const c = res?.data?.content;
            if (c) appendToAssistant(c);
          },
          progressListener: () => {},
          toolMessageListener: () => {},
          toolComponentMessageListener: () => {},
          replyListener: (res: any) => {
            if (res?.thread_id) threadRef.current = res.thread_id;
            // If no streaming delta arrived, fall back to the final message content.
            const finalText = (res?.data?.messages || [])
              .map((mm: any) => mm?.content)
              .filter(Boolean)
              .join("\n\n");
            setMessages((m) =>
              m.map((msg) =>
                msg.id === assistantId && !msg.content && finalText
                  ? { ...msg, content: finalText }
                  : msg
              )
            );
          },
        }
      );
    } catch (err) {
      console.error("[KailyChat] message failed", err);
      appendToAssistant("⚠️ Something went wrong. Try again, or reach me on LinkedIn.", true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Launcher button */}
      <Box
        component={motion.button}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          zIndex: 1300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0f172a",
          background: "linear-gradient(135deg, #6366f1, #22d3ee)",
          boxShadow: "0 8px 28px rgba(99,102,241,0.5)",
        }}
      >
        {open ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
      </Box>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            sx={{
              position: "fixed",
              bottom: { xs: 0, sm: 96 },
              right: { xs: 0, sm: 24 },
              width: { xs: "100%", sm: 380 },
              height: { xs: "80vh", sm: 560 },
              maxHeight: "85vh",
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: { xs: "16px 16px 0 0", sm: 4 },
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
              zIndex: 1300,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                color: "#0f172a",
              }}
            >
              <Avatar src="/profile.jpg" sx={{ width: 36, height: 36, border: "2px solid rgba(15,23,42,0.2)" }} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                  Raj's Kaily Assistant
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Powered by Kaily.ai
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: "#0f172a" }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Messages */}
            <Box ref={scrollRef} sx={{ flex: 1, overflowY: "auto", p: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
              {messages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                    px: 1.75,
                    py: 1.25,
                    borderRadius: 2.5,
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    color: msg.role === "user" ? "#0f172a" : "text.primary",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #6366f1, #22d3ee)"
                        : "rgba(51,65,85,0.5)",
                    border: msg.role === "assistant" ? "1px solid #334155" : "none",
                  }}
                >
                  {msg.content || (sending ? <CircularProgress size={14} sx={{ color: "text.secondary" }} /> : "…")}
                </Box>
              ))}
            </Box>

            {/* Input */}
            <Box sx={{ p: 1.5, borderTop: "1px solid", borderColor: "divider", display: "flex", gap: 1, alignItems: "center" }}>
              <TextField
                fullWidth
                size="small"
                placeholder={booted || !TOKEN ? "Ask about Raj's work…" : "Connecting…"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                disabled={!TOKEN}
                sx={{
                  "& .MuiOutlinedInput-root": { borderRadius: 999, bgcolor: "rgba(15,23,42,0.6)" },
                }}
              />
              <IconButton
                onClick={handleSend}
                disabled={sending || !input.trim()}
                sx={{
                  color: "#0f172a",
                  background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                  "&:hover": { opacity: 0.9 },
                  "&.Mui-disabled": { background: "#334155", color: "#64748b" },
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

export default KailyChat;
