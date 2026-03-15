'use client';

import { useState, useEffect } from 'react';
import { Camera, Plus, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [theme, setTheme] = useState('System');
  const [openInApp, setOpenInApp] = useState(true);
  const [timezone, setTimezone] = useState('UTC');
  const [startWeek, setStartWeek] = useState('Monday');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [workspaceLogo, setWorkspaceLogo] = useState('');
  const [plan, setPlan] = useState('Pro');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      if (res.ok) {
        const data = await res.json();
        const s = data.settings;
        setName(s.name || '');
        setEmail(s.email || '');
        setTheme(s.theme || 'System');
        setOpenInApp(s.openLinksInApp ?? true);
        setTimezone(s.timezone || 'UTC');
        setStartWeek(s.startWeekOn || 'Monday');
        setProfilePhoto(s.profilePhoto || '');
        setWorkspaceLogo(s.workspaceLogo || '');
        setPlan(s.plan || 'Pro');
      }
    } catch (error) {
      console.error('Failed to load settings', error);
      toast.error('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const handeSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          theme,
          openLinksInApp: openInApp,
          timezone,
          startWeekOn: startWeek,
        }),
      });

      if (res.ok) {
        toast.success('Settings saved successfully');
      } else {
        toast.error('Failed to save settings');
      }
    } catch (error) {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading settings...</div>;
  }

  const generateInitials = (fullName: string) => {
    if (!fullName) return 'U';
    return fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="mx-auto max-w-3xl space-y-12 pb-16">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Account</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Manage your personal information and account preferences.
        </p>
      </div>

      <div className="space-y-10 divide-y divide-gray-200 dark:divide-neutral-800">
        
        {/* Information Section */}
        <section className="pt-8 first:pt-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="text-base font-medium">Information</h2>
            </div>
            <div className="col-span-2 space-y-6">
              
              <div className="flex items-center gap-6">
                <div>
                  <h3 className="text-sm font-medium">Profile photo</h3>
                  <p className="text-sm text-gray-500">This image appears across your workspace.</p>
                </div>
                <div className="ml-auto flex items-center gap-4">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="h-16 w-16 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      {generateInitials(name)}
                    </div>
                  )}
                  <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800">
                    Change photo
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email address
                  </label>
                  <p className="mb-2 text-xs text-gray-500">Notifications will be sent to this address.</p>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Password Section */}
        <section className="pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="text-base font-medium">Password</h2>
            </div>
            <div className="col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">••••••••</p>
                  <p className="text-sm text-gray-500">Last changed recently.</p>
                </div>
                <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800">
                  Set password
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Appearance Section */}
        <section className="pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="text-base font-medium">Appearance</h2>
            </div>
            <div className="col-span-2 space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Theme
                </label>
                <div className="mt-2 flex gap-3">
                  {['Light', 'Dark', 'System'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`relative flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium ${
                        theme === t
                          ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200'
                      }`}
                    >
                      {t}
                      {theme === t && (
                        <Check className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 p-1 text-white shadow-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-neutral-800">
                <div>
                  <h3 className="text-sm font-medium">Open links in app</h3>
                  <p className="text-sm text-gray-500">When you click a link, open it in the app if possible.</p>
                </div>
                <button
                  onClick={() => setOpenInApp(!openInApp)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    openInApp ? 'bg-blue-500' : 'bg-gray-200 dark:bg-neutral-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      openInApp ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Location & Time Section */}
        <section className="pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="text-base font-medium">Location and time</h2>
            </div>
            <div className="col-span-2 space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <option>Saigon, Asia</option>
                  <option>UTC</option>
                  <option>New York, America</option>
                  <option>London, Europe</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Start weeks on
                </label>
                <p className="mb-2 text-xs text-gray-500">The first day of the week in your calendars.</p>
                <select
                  value={startWeek}
                  onChange={(e) => setStartWeek(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <option>Monday</option>
                  <option>Sunday</option>
                </select>
              </div>

            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="text-base font-medium">Authentication</h2>
            </div>
            <div className="col-span-2">
              <div className="mb-4">
                <h3 className="text-sm font-medium">Token</h3>
                <p className="text-sm text-gray-500">Manage your API key, a bearer authentication token.</p>
              </div>
              <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800">
                <Plus className="h-4 w-4" />
                Create authentication token
              </button>
            </div>
          </div>
        </section>

        {/* Workspace Section */}
        <section className="pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="text-base font-medium">Workspace</h2>
            </div>
            <div className="col-span-2 space-y-6">
              
              <div className="flex items-center gap-6">
                <div>
                  <h3 className="text-sm font-medium">Logo</h3>
                  <p className="text-sm text-gray-500">Your workspace logo.</p>
                </div>
                <div className="ml-auto flex items-center gap-4">
                  {workspaceLogo ? (
                    <img src={workspaceLogo} alt="Workspace Logo" className="h-16 w-16 rounded-lg object-cover" />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-gray-400 dark:bg-neutral-800">
                      <Camera className="h-6 w-6" />
                    </div>
                  )}
                  <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800">
                    Add logo
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
                 <div className="flex items-center gap-3">
                   <div className="flex h-8 w-8 items-center justify-center rounded border border-blue-200 bg-blue-100 text-blue-600 dark:border-blue-900 dark:bg-blue-900/30">
                     <span className="text-sm font-bold">{plan === 'Enterprise' ? 'ENT' : plan === 'Free' ? 'FREE' : 'PRO'}</span>
                   </div>
                   <div>
                     <p className="text-sm font-medium">{plan} plan</p>
                   </div>
                 </div>
                 <button className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                   Manage billing
                 </button>
              </div>

            </div>
          </div>
        </section>

      </div>
      
      {/* Save Changes Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-end gap-3 border-t bg-white px-8 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:left-64 dark:border-neutral-800 dark:bg-neutral-950">
        <button 
          onClick={fetchSettings}
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800"
        >
          Cancel
        </button>
        <button 
          onClick={handeSave}
          disabled={saving}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save changes'}
        </button>
      </div>

    </div>
  );
}
