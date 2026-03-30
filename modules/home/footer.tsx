import Link from "next/link";
import {
  Github as LucideGithub,
  Code2,
  Heart,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Vibecode" width={36} height={36} />
            <div className="flex flex-col">
              <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                Vibecode Editor
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                AI-Powered Web IDE
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <Link
              href="/dashboard"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/playgrounds"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Discover
            </Link>
            <Link
              href="#"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Docs
            </Link>
          </nav>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
            >
              <LucideGithub className="w-5 h-5" />
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
              &copy; {new Date().getFullYear()} Vibecode
              <span className="hidden sm:inline">
                — Built with <Heart className="w-3 h-3 text-rose-500 inline" />{" "}
                and <Code2 className="w-3 h-3 text-blue-500 inline" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
