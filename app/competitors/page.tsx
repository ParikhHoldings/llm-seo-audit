import Link from "next/link";
import { Bot } from "lucide-react";
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/dashboard" className="flex items-center gap-2"><div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div><span className="font-bold text-white">LLMBoost</span></Link>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-white mb-6 capitalize">competitors</h1>
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-12 text-center">
          <Bot className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Coming in Phase 2</h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">Building soon.</p>
        </div>
      </main>
    </div>
  );
}
