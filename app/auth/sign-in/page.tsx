import { SignIn } from "@clerk/nextjs";
import { Bot } from "lucide-react";
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4"><div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div><span className="font-bold text-white text-lg">LLMBoost</span></div>
          <h1 className="text-2xl font-bold text-white">Sign in</h1>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
