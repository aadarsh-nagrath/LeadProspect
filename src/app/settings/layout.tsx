import Link from "next/link";
import { UserCircle, Bell, Briefcase, Settings2, Users, Receipt, ArrowDownToLine, Bot, Sparkles, LogOut, LayoutGrid } from "lucide-react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50/50 dark:bg-neutral-900/50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white dark:bg-neutral-950 dark:border-neutral-800">
        <div className="flex h-14 items-center border-b px-4 dark:border-neutral-800">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <LayoutGrid className="h-5 w-5" />
            <span>LeadProspect</span>
          </Link>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <div>
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Personal
            </h4>
            <nav className="flex flex-col gap-1">
              <Link href="/settings" className="flex items-center gap-2 rounded-md bg-gray-100 px-2 py-1.5 text-sm font-medium dark:bg-neutral-800">
                <UserCircle className="h-4 w-4" />
                Account
              </Link>
              <Link href="/settings/notifications" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Bell className="h-4 w-4" />
                Notifications
              </Link>
              <Link href="/settings/workspace" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Briefcase className="h-4 w-4" />
                Workspace
              </Link>
              <Link href="/settings/preferences" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Settings2 className="h-4 w-4" />
                Preferences
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Teammates
            </h4>
            <nav className="flex flex-col gap-1">
              <Link href="/settings/teammates" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Users className="h-4 w-4" />
                Identity
              </Link>
              <Link href="/settings/types" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Users className="h-4 w-4" />
                Types
              </Link>
            </nav>
          </div>

          <div>
            <nav className="flex flex-col gap-1">
              <Link href="/settings/billing" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Receipt className="h-4 w-4" />
                Plans and billing
              </Link>
              <Link href="/settings/import" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <ArrowDownToLine className="h-4 w-4" />
                Import
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              AI
            </h4>
            <nav className="flex flex-col gap-1">
              <Link href="/settings/agents" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Bot className="h-4 w-4" />
                Agents
              </Link>
              <Link href="/settings/skills" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-50">
                <Sparkles className="h-4 w-4" />
                Skills
              </Link>
            </nav>
          </div>
          
          <div className="mt-auto">
             <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/50">
               <LogOut className="h-4 w-4" />
               Log out
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto max-w-4xl p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
