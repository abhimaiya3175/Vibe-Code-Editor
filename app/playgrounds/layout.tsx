import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions";
import { DashboardSidebar } from "@/modules/dashboard/components/dashboard-sidebar";

export default async function PlaygroundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const playgroundData = await getAllPlaygroundForUser();

  const technologyIconMap: Record<string, string> = {
    REACT: "Zap",
    NEXTJS: "Lightbulb",
    EXPRESS: "Database",
    VUE: "Compass",
    HONO: "FlameIcon",
    ANGULAR: "Terminal",
  }

  const safePlaygroundData = (playgroundData ?? []) as Array<{
    id: string;
    title: string;
    template: string;
    Starmark?: Array<{ isMarked: boolean }>;
  }>;

  const formattedPlaygroundData = safePlaygroundData.map((item)=>({
    id:item.id,
    name:item.title,
    starred:item.Starmark?.[0]?.isMarked || false,
    icon:technologyIconMap[item.template] || "Code2"
  }))

  return (
  <SidebarProvider>
    <div className="flex min-h-screen w-full overflow-x-hidden">
      <DashboardSidebar initialPlaygroundData={formattedPlaygroundData}/>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  </SidebarProvider>
  )
}
