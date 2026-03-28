"use client";

import Image from "next/image";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitFork, Eye } from "lucide-react";
import { useState } from "react";
import { forkPublicProject } from "@/modules/dashboard/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Project } from "@/modules/dashboard/types";

interface PublicPlaygroundCardProps {
  project: Project;
}

export function PublicPlaygroundCard({ project }: PublicPlaygroundCardProps) {
  const [isForking, setIsForking] = useState(false);
  const router = useRouter();

  const handleFork = async () => {
    setIsForking(true);
    try {
      const newProject = await forkPublicProject(project.id);
      if (newProject) {
        toast.success("Successfully forked project!");
        router.push(`/playground/${newProject.id}`);
      } else {
        toast.error("Failed to fork project.");
      }
    } catch (error) {
      toast.error("An error occurred while forking.");
      console.error(error);
    } finally {
      setIsForking(false);
    }
  };

  return (
    <Card className="flex flex-col h-full bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1.5 min-w-0">
            <CardTitle className="text-xl font-bold tracking-tight truncate flex items-center gap-2">
              <Link href={`/playground/${project.id}`} className="hover:text-blue-400 transition-colors">
                {project.title}
              </Link>
            </CardTitle>
            <CardDescription className="line-clamp-2 text-sm text-zinc-400">
              {project.description || "No description provided."}
            </CardDescription>
          </div>
          <Badge variant="outline" className="shrink-0 bg-blue-500/10 text-blue-400 border-blue-500/20 px-2.5 py-0.5 font-medium tracking-wide">
            {project.template}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-grow pb-4">
        <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-800 shrink-0 ring-2 ring-zinc-800/50">
            {project.user?.image ? (
              <Image
                src={project.user.image}
                alt={project.user.name || "User avatar"}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs font-medium text-zinc-500">
                {project.user?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-zinc-300 truncate">
              {project.user?.name || "Anonymous User"}
            </span>
            <span className="text-xs text-zinc-500 truncate">
              {format(new Date(project.createdAt), "MMMM d, yyyy")}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex gap-2 w-full mt-auto">
         <Button
          variant="secondary"
          className="flex-1 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border-0"
          onClick={handleFork}
          disabled={isForking}
        >
          <GitFork className="w-4 h-4 mr-2" />
          {isForking ? "Forking..." : "Fork Workspace"}
        </Button>
      </CardFooter>
    </Card>
  );
}
