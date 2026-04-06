import Link from "next/link";
import { Bot } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4"><div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div><span className="font-bold text-white text-lg">LLMBoost</span></div>
        <h1 className="text-2xl font-bold text-white mb-3">Private beta</h1>
        <p className="text-slate-400 mb-6">Sign in is disabled on this staging build while deployment credentials are being refreshed.</p>
        <Link href="mailto:nathan@happywp.co?subject=LLMBoost%20beta" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500">Request beta access</Link>
      </div>
    </div>
  );
}
