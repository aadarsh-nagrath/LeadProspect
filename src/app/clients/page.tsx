"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ClientsContent } from "@/components/clients-content";

export default function ClientsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <ClientsContent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
