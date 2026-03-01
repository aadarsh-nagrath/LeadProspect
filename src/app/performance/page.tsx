"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { PerformanceContent } from "@/components/performance-content";

export default function PerformancePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <PerformanceContent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
