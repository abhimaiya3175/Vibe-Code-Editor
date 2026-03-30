import { getPublicPlaygrounds } from "@/modules/dashboard/actions";
import { PublicPlaygroundCard } from "@/modules/playgrounds/components/public-playground-card";
import { Globe } from "lucide-react";
import { SearchInput } from "@/modules/playgrounds/components/search-input";
import type { Project } from "@/modules/dashboard/types";

export const metadata = {
  title: "Discover Playgrounds | Vibecode",
  description: "Browse and fork community coding environments."
};

export default async function PlaygroundsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const publicPlaygrounds = await getPublicPlaygrounds();

  const filteredPlaygrounds = publicPlaygrounds.filter((p: Project) => 
    !q || 
    p.title.toLowerCase().includes(q.toLowerCase()) || 
    (p.description && p.description.toLowerCase().includes(q.toLowerCase())) ||
    p.template.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-6 py-10 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Globe className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Community Discover</h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Explore templates, projects, and environments created by the Vibecode community. 
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-auto flex-shrink-0">
           <SearchInput />
        </div>
      </div>

      {filteredPlaygrounds.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-20 text-center bg-zinc-900/40 rounded-2xl border border-zinc-800/60 shadow-inner">
           <Globe className="w-16 h-16 text-zinc-600 mb-6 max-w-md mx-auto" />
           <h2 className="text-2xl font-bold text-zinc-300 mb-3">
              {q ? "No Matching Results" : "The Gallery is Empty"}
           </h2>
           <p className="text-zinc-500 max-w-md">
              {q 
                ? `We couldn't find any community templates matching "${q}". Try adjusting your search query.` 
                : 'There are currently no public playgrounds available. Be the first to share your workspace with the community!'}
           </p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredPlaygrounds.map((project: Project) => (
            <div key={project.id} className="break-inside-avoid">
              <PublicPlaygroundCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
