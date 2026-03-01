"use client";

import { Suspense } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { InboxPage } from "@/components/inbox/InboxPage";

export default function InboxRoutePage() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Suspense fallback={null}>
                    <InboxPage />
                </Suspense>
            </SidebarInset>
        </SidebarProvider>
    );
}
