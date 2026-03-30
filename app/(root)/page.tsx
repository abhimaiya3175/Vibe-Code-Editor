import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  FolderTree,
  Palette,
  Moon,
  LayoutTemplate,
  Globe,
  GitFork,
  Terminal,
  Search,
  Bot,
  Cpu,
  Zap,
  ChevronRight,
  Play,
  Layers,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Palette,
    title: "Modern UI",
    description:
      "Built with TailwindCSS & ShadCN UI for a polished, developer-first experience.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-500 dark:text-pink-400",
  },
  {
    icon: Moon,
    title: "Dark/Light Mode",
    description:
      "Seamlessly toggle between themes to match your coding preference.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-500 dark:text-indigo-400",
  },
  {
    icon: LayoutTemplate,
    title: "Project Templates",
    description:
      "Choose from React, Next.js, Express, Hono, Vue, or Angular starters.",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-500 dark:text-cyan-400",
  },
  {
    icon: FolderTree,
    title: "Custom File Explorer",
    description:
      "Create, rename, delete, and manage files/folders with an intuitive tree view.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500 dark:text-amber-400",
  },
  {
    icon: Code2,
    title: "Enhanced Monaco Editor",
    description:
      "Rich syntax highlighting, on-the-fly formatting, and intuitive keybindings.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    icon: Sparkles,
    title: "AI Suggestions",
    description:
      "Trigger local Ollama completions with Ctrl+Space and accept with Tab instantly.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-500 dark:text-violet-400",
  },
  {
    icon: Cpu,
    title: "WebContainers",
    description:
      "Boot and run full frontend/backend apps directly in your browser.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Bot,
    title: "Agentic AI Assistant",
    description:
      "An AI teammate that can read files, write code, and run terminal commands.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500 dark:text-rose-400",
  },
  {
    icon: Globe,
    title: "Community Discover",
    description:
      "Share projects publicly and get discovered through the global creator gallery.",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    textColor: "text-teal-500 dark:text-teal-400",
  },
  {
    icon: GitFork,
    title: "Template Forking",
    description:
      "Explore community builds by stack and fork any project into your workspace.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-500 dark:text-orange-400",
  },
  {
    icon: Terminal,
    title: "Interactive Shell",
    description:
      "A live xterm.js terminal synced with your running container in real-time.",
    color: "from-zinc-600 to-zinc-800",
    bgColor: "bg-zinc-500/10",
    textColor: "text-zinc-600 dark:text-zinc-300",
  },
  {
    icon: Search,
    title: "Masonry Discovery",
    description:
      "Browse a Pinterest-style discovery wall with real-time search across projects.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-500 dark:text-sky-400",
  },
];

const steps = [
  {
    step: "01",
    icon: LayoutTemplate,
    title: "Choose a Template",
    description:
      "Pick from React, Next.js, Express, Vue, Angular, or Hono to scaffold your project instantly.",
  },
  {
    step: "02",
    icon: Code2,
    title: "Write & Collaborate with AI",
    description:
      "Code in a powerful Monaco Editor with AI-powered autocomplete, suggestions, and an agentic assistant.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Run & Share",
    description:
      "See live preview via WebContainers, use the interactive terminal, and publish to the community gallery.",
  },
];

const techStack = [
  { name: "Next.js 15", icon: "/nextjs-icon.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "TypeScript", icon: null },
  { name: "Monaco Editor", icon: null },
  { name: "Ollama", icon: null },
  { name: "WebContainers", icon: null },
  { name: "xterm.js", icon: null },
  { name: "MongoDB", icon: null },
  { name: "Prisma", icon: null },
  { name: "TailwindCSS", icon: null },
];

export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 pt-8 pb-20 sm:pt-16 sm:pb-28">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-rose-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="animate-fade-in-up relative z-10 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              AI-Powered Web IDE
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 relative z-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center tracking-tight leading-[1.1] max-w-4xl">
          <span className="text-gradient bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400 animate-gradient-shift">
            Vibe Code
          </span>
          <br />
          <span className="text-zinc-900 dark:text-zinc-100">
            With Intelligence
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 relative z-10 mt-6 text-lg sm:text-xl text-center text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          A blazing-fast web IDE with{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">
            AI-powered code completions
          </span>
          , WebContainers runtime, and an{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">
            agentic AI assistant
          </span>{" "}
          — all running entirely in your browser.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Button
            asChild
            variant="brand"
            size="lg"
            className="text-base px-8 py-6 rounded-xl shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-300 animate-pulse-glow"
          >
            <Link href="/dashboard">
              Start Building
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 rounded-xl border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
          >
            <Link href="/playgrounds">
              <Globe className="w-4 h-4 mr-1" />
              Explore Community
            </Link>
          </Button>
        </div>

        {/* Hero Mockup */}
        <div className="animate-fade-in-up delay-500 relative z-10 mt-16 w-full max-w-5xl">
          <div className="relative group">
            {/* Glowing backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Editor mockup card */}
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Vibecode Editor</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    AI Active
                  </div>
                </div>
              </div>

              {/* Editor content mockup */}
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:block w-48 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Explorer
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: "src/", indent: 0, isFolder: true },
                      { name: "App.tsx", indent: 1, isFolder: false },
                      { name: "index.css", indent: 1, isFolder: false },
                      { name: "main.tsx", indent: 1, isFolder: false },
                      { name: "package.json", indent: 0, isFolder: false },
                    ].map((file, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 ${
                          file.indent ? "pl-4" : ""
                        } ${
                          file.name === "App.tsx"
                            ? "text-rose-500 dark:text-rose-400 font-medium"
                            : ""
                        }`}
                      >
                        {file.isFolder ? (
                          <FolderTree className="w-3 h-3 text-amber-500" />
                        ) : (
                          <Code2 className="w-3 h-3" />
                        )}
                        {file.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code area */}
                <div className="flex-1 p-4 font-mono text-xs sm:text-sm leading-relaxed">
                  <div className="space-y-1">
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">
                        import
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {" "}
                        React{" "}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400">
                        from
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {" "}
                        &apos;react&apos;
                      </span>
                      <span className="text-zinc-400">;</span>
                    </div>
                    <div className="h-1" />
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        export default function
                      </span>
                      <span className="text-amber-600 dark:text-amber-400">
                        {" "}
                        App
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-400">
                        () {"{"}
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-600 dark:text-purple-400">
                        return
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {" "}
                        (
                      </span>
                    </div>
                    <div className="pl-8">
                      <span className="text-zinc-400">&lt;</span>
                      <span className="text-rose-600 dark:text-rose-400">
                        div
                      </span>
                      <span className="text-zinc-400">&gt;</span>
                    </div>
                    <div className="pl-12 flex items-center gap-2">
                      <span className="text-zinc-500 dark:text-zinc-500 opacity-60">
                        Hello, Vibecoder! ✨
                      </span>
                      <span className="inline-block w-0.5 h-4 bg-rose-500 animate-typing-cursor" />
                    </div>

                    {/* AI suggestion ghost text */}
                    <div className="pl-12 flex items-center gap-2">
                      <span className="text-zinc-400/40 dark:text-zinc-600/60 italic">
                        {"// AI: consider adding useState hook"}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-500 dark:text-violet-400 font-medium">
                        Tab ↹
                      </span>
                    </div>
                    <div className="pl-8">
                      <span className="text-zinc-400">&lt;/</span>
                      <span className="text-rose-600 dark:text-rose-400">
                        div
                      </span>
                      <span className="text-zinc-400">&gt;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-600 dark:text-zinc-400">
                        );
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {"}"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Preview panel */}
                <div className="hidden md:block w-64 border-l border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500">
                    <Play className="w-3 h-3 text-emerald-500" />
                    <span>Preview</span>
                    <span className="ml-auto text-[10px] text-emerald-500">
                      ● Live
                    </span>
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center h-32 text-center">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Hello, Vibecoder! ✨
                    </p>
                    <p className="text-[10px] text-zinc-400 mt-2">
                      localhost:3000
                    </p>
                  </div>
                </div>
              </div>

              {/* Terminal strip */}
              <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-950 px-4 py-2.5 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-xs text-zinc-500 font-mono">
                  $ npm run dev
                </span>
                <span className="text-xs text-emerald-500 font-mono ml-auto">
                  Server ready on :3000
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Everything you need
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Packed with{" "}
            <span className="text-gradient bg-gradient-to-r from-rose-500 to-pink-500">
              powerful features
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From AI-powered code completions to a full in-browser runtime — everything
            you need to build, test, and ship.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover-lift cursor-default animate-fade-in-up`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Gradient hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                   style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}} />
              
              <div
                className={`w-10 h-10 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-5 h-5 ${feature.textColor}`} />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Simple workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Get started in{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-500 to-cyan-500">
              3 steps
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-zinc-300 dark:from-zinc-700 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover-lift">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white font-bold text-lg mb-5 shadow-lg shadow-rose-500/20">
                  {step.step}
                </div>

                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />
                </div>

                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="w-full py-16 sm:py-20 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Built with the modern stack
          </h3>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 px-8 py-3 shrink-0"
              >
                {tech.icon ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="opacity-60 dark:invert"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-md bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                    <Code2 className="w-3.5 h-3.5 text-zinc-500" />
                  </div>
                )}
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY CTA ===== */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 animate-gradient-shift" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="relative z-10 flex flex-col items-center text-center py-16 px-8 sm:px-16">
            <Globe className="w-12 h-12 text-white/80 mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Join the Community
            </h2>
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              Share your projects, discover what others are building, and fork
              templates to kickstart your next idea.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-rose-600 hover:bg-white/90 text-base px-8 py-6 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link href="/playgrounds">
                  <Search className="w-4 h-4 mr-2" />
                  Explore Discover Hub
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Link href="/dashboard">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
