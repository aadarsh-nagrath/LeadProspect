"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ProjectsContent } from "@/components/projects-content";

export default function ProjectsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <ProjectsContent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
