# Cypress Code Camp — Course Schedule & Requirements

## Overview

**Event:** Cypress Code Camp
**Date:** February 28
**Location:** Eric's House
**Duration:** 11:00 AM – 8:30 PM (9.5 hours)
**Format:** One-day intensive, hands-on bootcamp
**Focus:** AI-powered software development using Cursor IDE and Claude

---

## Course Schedule

### 11:00 – 11:30 | Arrival + Setup Verification

Get settled and confirm every tool is working before the day begins.

- Confirm all accounts are created and logged in (GitHub, Vercel, Anthropic, Cursor)
- Verify core installs: `git --version`, `node -v`, `npm -v`
- Ensure Cursor IDE is installed, open, and authenticated
- Troubleshoot any remaining setup issues with group support

### 11:30 – 12:00 | The Reframe: What an LLM Actually Does

Understand how the AI tools you'll use all day actually work under the hood.

- **Token prediction** — LLMs predict the next most likely token, not "think" or "understand"
- **Hallucinations** — Why models confidently generate incorrect information and how to catch it
- **Context windows** — How much the model can "see" at once and why it matters
- **Long conversation drift** — Why longer chats degrade in quality and when to start fresh
- **Prompt structure** — How the way you write instructions directly affects output quality

### 12:00 – 12:30 | AI Modes + Problem Compression Workshop

Learn the three primary ways to interact with AI coding agents and how to scope problems tightly.

- **Plan Mode** — Ask the AI to outline an approach before writing code
- **Ask Mode** — Query the AI for explanations, debugging help, or knowledge
- **Agent Mode** — Let the AI autonomously execute multi-step tasks
- **Problem compression** — Reduce any idea to a one-page tool with hard constraints:
  - No authentication
  - No database
  - One function
  - Ship in under an hour

### 12:30 – 2:00 | Build #1: GitHub Pages Tool (Ship a Live URL)

Your first hands-on build. Go from zero to a live, publicly accessible URL.

- Generate and edit HTML, CSS, and JavaScript inside Cursor with AI assistance
- Debug issues using AI — learn the feedback loop of Spec → Generate → Test → Debug → Refine
- Commit and push your code to a GitHub repository
- Enable GitHub Pages to deploy your tool
- Share your live link with the group

**Outcome:** A working personal tool hosted at a live GitHub Pages URL.

### 2:00 – 2:30 | Late Lunch / Reset

Step away from screens. Refuel, stretch, and chat.

- Review what others have built so far
- Discuss approaches and share tips
- Recharge for the afternoon sessions

### 2:30 – 4:30 | Build #2: Mini App (Next.js + Vercel)

Level up from a static tool to a real application framework.

- Start from a Next.js starter template
- Convert your static tool into React components
- Add state management and input validation
- Deploy to Vercel with a single push
- Get a production-grade URL for your app

**Outcome:** A deployed Next.js application on Vercel with interactive functionality.

### 4:30 – 5:00 | Architecture Made Simple

Demystify the infrastructure behind what you just built.

- **Static vs. app hosting** — When to use GitHub Pages vs. Vercel vs. something else
- **Client vs. server** — What runs in the browser vs. what runs on a server
- **What "deploy" actually means** — The pipeline from local code to live URL

### 5:00 – 6:00 | AI as a General Partner (Not Just Coding)

Expand your understanding of AI beyond code generation.

- **AI as Builder** — Generating code, scaffolding projects, writing boilerplate
- **AI as Critic** — UX critique, code review, identifying edge cases
- **AI as Strategist** — Brainstorming features, evaluating trade-offs, planning architecture
- **Model landscape** — Comparing Claude, GPT, Codex, Gemini and understanding their strengths
- Practice using AI to critique and improve your own builds from earlier in the day

### 6:00 – 6:30 | Dinner Break

Recharge and discuss progress with the group.

### 6:30 – 7:30 | Contribute to the ERIC App + Git Workflow

Work on a real production application and learn professional collaboration workflows.

- Meet the ERIC app — a real, production codebase
- Clone and explore the repository structure
- Pick a contribution (bug fix, feature, documentation)
- Create a feature branch and make your changes
- Open a Pull Request using proper git workflow
- Introduction to **Claude Code** — terminal-native AI for professional development

**Outcome:** A real Pull Request submitted to a production codebase.

### 7:30 – 8:30 | Showcase + Next Steps

Celebrate what you shipped and plan what comes next.

- **Lightning demos** — Each participant shows what they built and deployed
- **PR showcase** — Walk through your contribution to the ERIC app
- **3-week roadmap** — A personalized plan for what to build next on your own
- **Part 2 preview** — What's coming in the advanced session (professional workflows, deeper architecture, testing, scaling)

---

## Course Requirements

### What to Bring

| Item | Required | Notes |
|------|----------|-------|
| MacBook | Yes | Mac-only to keep setup consistent across all participants |
| Charger | Yes | Full-day event — keep your machine powered |
| Internet access | Yes | Reliable Wi-Fi or personal hotspot |
| 20 GB free disk space | Yes | Minimum needed for tools, repos, and dependencies |
| Headphones | Optional | For focused work sessions |

### Accounts (Create Before Arrival)

| Account | Purpose | URL |
|---------|---------|-----|
| GitHub | Code hosting, version control, GitHub Pages deployment | github.com |
| Vercel | Application hosting and deployment | vercel.com (sign in with GitHub) |
| Anthropic | Access to Claude AI | anthropic.com |
| Cursor | AI-powered IDE | cursor.com |

### Software to Install

Install and verify each of the following before the event:

**Git**
```bash
git --version
```
Expected: Any recent version (e.g., `git version 2.x.x`)

**Node.js (LTS)**
```bash
node -v && npm -v
```
Expected: Node 18+ and npm 9+

**Cursor IDE**
- Download from cursor.com
- Install and log in with your Cursor account
- Verify it opens and connects to AI services

**macOS**
- Update to the latest stable release of macOS

### Sanity Checks (Verify Before Arrival)

Complete these three checks to confirm your environment is ready:

1. **Create a GitHub repo** — Go to github.com, create a new repository, confirm it appears on your profile
2. **Clone it locally** — Run `git clone <your-repo-url>` in your terminal and confirm the folder appears
3. **Run a Node command** — Run `node -e "console.log('ready')"` and confirm it prints `ready`

If all three succeed, you're good to go.

---

## What You'll Ship

By the end of the day, every participant will have:

1. **A live personal tool** — Hosted on GitHub Pages with a shareable URL
2. **A deployed mini app** — Built with Next.js and deployed on Vercel
3. **A repeatable method** — The Spec → Generate → Test → Debug → Refine → Ship workflow
4. **A real open-source contribution** — A Pull Request on the ERIC app
5. **A continuation roadmap** — A plan for what to build next, plus a preview of Part 2

---

## Prerequisites

**No prior coding experience is required.** This camp is designed for people who are curious, can follow instructions, and want to learn how to build with AI. The AI generates the code — you learn to supervise, direct, and ship it.

---

## Frequently Asked Questions

**Can I attend without coding experience?**
Yes. You need curiosity and the ability to follow instructions. The AI writes the code; your job is to guide it and make decisions.

**Is this just prompt engineering?**
No. You'll learn how to specify what you want, debug what comes back, and ship real products. Prompt engineering is one small piece of that.

**What if I don't finish a project?**
The day is designed so that everyone ships. The constraints are intentionally strict to keep scope small and achievable.

**Will we use VSCode?**
No. The primary tool is Cursor IDE with Claude (by Anthropic). Other models like GPT, Codex, and Gemini are discussed for landscape knowledge.

**Can Windows users attend?**
This event is Mac-only to keep the setup process consistent and minimize troubleshooting during the day.

**Is there a Part 2?**
Yes. Part 2 covers professional workflows including contributing to real codebases, deeper architecture patterns, testing strategies, and scaling applications.

**Can I use what I learn for my career?**
Absolutely — if you keep building. You'll leave with a roadmap to guide your continued growth.

---

## Core Philosophy

> "English is the new programming language."

- The ability to build software is no longer reserved for traditional engineers
- AI amplifies clarity — or chaos, if your instructions are vague
- Shipping beats syntax memorization every time
- The best way to learn is to build, break, fix, and ship — in that order
