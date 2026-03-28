"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState, useEffect } from "react";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      startTransition(() => {
        if (query) {
          router.push(`/playgrounds?q=${encodeURIComponent(query)}`);
        } else {
          router.push(`/playgrounds`);
        }
      });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, router]);

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-zinc-500" />
      </div>
      <Input
        type="search"
        placeholder="Search projects, templates..."
        className="block w-full p-4 pl-10 text-sm bg-zinc-900 border-zinc-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isPending && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <div className="w-4 h-4 rounded-full border-2 border-zinc-500 border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  );
}
