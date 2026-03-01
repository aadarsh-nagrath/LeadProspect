"use client";

import { Suspense } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MyTasksPage } from "@/components/tasks/MyTasksPage";

export default function TasksPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Suspense fallback={null}>
          <MyTasksPage />
        </Suspense>
      </SidebarInset>
    </SidebarProvider>
  );
}
