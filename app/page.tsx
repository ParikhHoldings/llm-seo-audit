import Link from "next/link";
import { Sparkles, Bot, Search, BarChart3, Crosshair, ArrowRight, ShieldCheck, Target, Zap, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">LLMBoost</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-slate-300 hover:text-white text-sm">How It Works</Link>
            <Link href="#pricing" className="text-slate-300 hover:text-white text-sm">Pricing</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white text-sm">Preview dashboard</Link>
            <Link href="mailto:nathan@happywp.co?subject=LLMBoost%20pilot" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors">
              Request pilot audit
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-900/50 text-indigo-300 border border-indigo-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
            <Sparkles className="w-3 h-3" /> The new era of SEO
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            You rank on Google.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              But are you invisible to AI?
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            400M+ people ask ChatGPT and Claude for recommendations. We audit your brand&apos;s visibility across major AI models and give you the exact playbook to show up in their answers.
          </p>
          
          <div className="bg-slate-800/80 p-2 rounded-xl max-w-2xl mx-auto mb-10 border border-slate-700 shadow-2xl flex flex-col sm:flex-row gap-2">
            <input type="text" placeholder="Your business name (e.g. Acme Plumbing)" className="flex-1 bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 outline-none focus:border-indigo-500" />
            <Link href="mailto:nathan@happywp.co?subject=LLMBoost%20pilot" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2">
              Request Pilot Audit <Zap className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-sm text-slate-500">Free baseline audit. See what AI says about you today.</p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 bg-slate-950 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The old SEO playbook is breaking.</h2>
              <p className="text-slate-400 mb-6 text-lg">Your customers used to search Google and click your website. Now, they ask Perplexity or ChatGPT, "Who is the best HVAC company in Dallas?"</p>
              <ul className="space-y-4">
                {[
                  "AI models don&apos;t just read your website. They read reviews, Reddit, citations, and PR.",
                  "If you aren't part of the AI's training data, you literally don&apos;t exist in the new search.",
                  "Your competitors are already optimizing for LLM visibility."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative shadow-xl">
              <div className="absolute -top-4 -left-4 bg-purple-600 text-xs font-bold px-3 py-1 rounded-full">REAL CHATGPT QUERY</div>
              <p className="text-slate-300 italic mb-4 font-mono text-sm border-l-2 border-slate-600 pl-4">
                "What is the bestquot;What is the best marketing agency for healthcare in Fort Worth?Fort Worth?"quot;
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300">
                <span className="text-green-400">ChatGPT:</span> Based on recent reviews and industry recognition, the top recommendations are:
                <br/><br/>
                1. Competitor A (Strong client testimonials)<br/>
                2. Competitor B (Specialized in medical practices)<br/>
                3. Competitor C (High local visibility)<br/><br/>
                <span className="text-red-400 font-bold">You are nowhere on this list.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How LLMBoost Works</h2>
            <p className="text-slate-400">Track, optimize, and dominate AI recommendations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Search className="w-6 h-6 text-indigo-400" />, title: "Cross-Model Auditing", desc: "We query ChatGPT, Claude, Perplexity, and Google Gemini with realistic customer questions to see where you rank." },
              { icon: <BarChart3 className="w-6 h-6 text-purple-400" />, title: "Visibility Scoring", desc: "Get a baseline AI Visibility Score (0-100) tracking your brand mentions, sentiment, and recommendation rate." },
              { icon: <Target className="w-6 h-6 text-pink-400" />, title: "Optimization Playbook", desc: "Actionable steps to inject your brand into AI training data: strategic citations, schema markup, and PR mentions." },
              { icon: <Crosshair className="w-6 h-6 text-blue-400" />, title: "Competitor Tracking", desc: "Monitor 3 competitors. See exactly why AI recommends them over you, and reverse-engineer their digital footprint." },
              { icon: <Bot className="w-6 h-6 text-teal-400" />, title: "Weekly Monitoring", desc: "AI models update constantly. We run automated checks every week to ensure your visibility score is climbing." },
              { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Done-For-You Services", desc: "Don't want to do the work? Our agency partners execute the GBP optimization, review strategy, and schema deployment." },
            ].map((f, i) => (
              <div key={i} className="bg-slate-800/50 p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition-colors">
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-800">{f.icon}</div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-slate-400 mb-12">Stop losing leads to invisible algorithms.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Free Audit", price: "$0", desc: "One-time check", features: ["1 Brand Name", "3 Keywords", "ChatGPT & Claude Check", "Basic Score Report"], cta: "Run Free Audit", hi: false },
              { name: "Monitor (SaaS)", price: "$99", period: "/mo", desc: "Track visibility over time", features: ["Weekly automated audits", "All major LLM models", "3 Competitors tracked", "Actionable recommendations", "Historical score charting"], cta: "Start Monitoring", hi: true },
              { name: "DFY Optimization", price: "$999", period: "/mo", desc: "We do the work for you", features: ["Everything in Monitor", "GBP Optimization", "Review & Citation Strategy", "Schema Markup Implementation", "Content targeting execution", "Monthly Strategy Call"], cta: "Book a Call", hi: false },
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border text-left flex flex-col ${plan.hi ? 'bg-indigo-900/20 border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.15)]' : 'bg-slate-900 border-slate-800'}`}>
                <div className="text-lg font-semibold text-slate-300 mb-2">{plan.name}</div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-400 ml-1">{plan.period}</span>}
                </div>
                <div className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">{plan.desc}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.hi ? 'text-indigo-400' : 'text-slate-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.name === "DFY Optimization" ? "mailto:nathan@happywp.co" : "mailto:nathan@happywp.co?subject=LLMBoost%20pilot"} className={`text-center py-3 rounded-lg font-bold transition-all ${plan.hi ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-12 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <Bot className="w-5 h-5" />
            <span className="font-bold tracking-tight">LLMBoost</span>
          </div>
          <div className="text-sm text-slate-500">© 2026 A HappyWP Product. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
