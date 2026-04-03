import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Bot, BarChart3, Search, Target, Zap, ArrowRight, Crosshair } from "lucide-react";

export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) redirect("/auth/sign-in");
  const user = await currentUser();
  const firstName = user?.firstName || "there";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2"><div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div><span className="font-bold tracking-tight">LLMBoost</span></div>
          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link href="/dashboard" className="text-white flex items-center gap-2"><BarChart3 className="w-4 h-4" />Overview</Link>
            <Link href="/audit" className="text-slate-400 hover:text-white flex items-center gap-2"><Search className="w-4 h-4" />Audits</Link>
            <Link href="/competitors" className="text-slate-400 hover:text-white flex items-center gap-2"><Crosshair className="w-4 h-4" />Competitors</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10"><h1 className="text-3xl font-bold">Welcome, {firstName}</h1><p className="text-slate-400 mt-2">Track your AI visibility across ChatGPT, Perplexity, and Claude.</p></div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-10 flex flex-col items-center justify-center text-center shadow-xl">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-700">
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No Audits Run Yet</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Enter your business details and keywords to see how often you are recommended by major AI models.</p>
          <Link href="/audit/new" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2">
            Run Your First Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Bot className="w-5 h-5 text-indigo-400" />, title: "Overall Visibility Score", val: "—", sub: "Out of 100" },
            { icon: <Search className="w-5 h-5 text-purple-400" />, title: "Brand Mentions", val: "0", sub: "In AI responses" },
            { icon: <Target className="w-5 h-5 text-pink-400" />, title: "Competitor Rank", val: "—", sub: "Vs top 3 competitors" }
          ].map((s, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">{s.icon} <span className="font-semibold text-slate-300">{s.title}</span></div>
              <div className="text-4xl font-bold mb-1">{s.val}</div>
              <div className="text-sm text-slate-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
