'use client'

import { useState } from 'react'
import Image from 'next/image'

// ─── Shared: Drift Icon (wordmark glyph) ─────────────────────────────────────

function DriftIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="22" height="5" rx="2.5" fill="currentColor" />
      <rect x="2.5" y="6.5" width="17" height="4.5" rx="2.25" fill="currentColor" opacity="0.55" />
      <rect x="5.5" y="12" width="11" height="4" rx="2" fill="currentColor" opacity="0.25" />
    </svg>
  )
}

// ─── Shared: Drift-Into-Tray illustration ─────────────────────────────────────

function DriftIntoTray({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const w = size === 'sm' ? 80 : 108
  const h = size === 'sm' ? 64 : 86
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 108 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
      aria-hidden="true"
    >
      {/* Tray */}
      <rect x="14" y="58" width="80" height="22" rx="5" fill="#F0EDE4" stroke="#C8C4B8" strokeWidth="2" />
      <line x1="14" y1="68" x2="94" y2="68" stroke="#D8D5CA" strokeWidth="1.2" />

      {/* Note card drifting in */}
      <rect
        x="32"
        y="18"
        width="44"
        height="30"
        rx="5"
        fill="white"
        stroke="#D0CCC0"
        strokeWidth="1.5"
        transform="rotate(-7 54 33)"
      />
      <rect x="38" y="24" width="24" height="4" rx="2" fill="#E0DDD4" transform="rotate(-7 54 33)" />
      <rect x="38" y="31" width="16" height="3" rx="1.5" fill="#EAE8E0" transform="rotate(-7 54 33)" />

      {/* Downward drift motion */}
      <path
        d="M54 50 L54 56"
        stroke="#C0BCB0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2.5"
      />
      <path
        d="M51 54 L54 57 L57 54"
        stroke="#C0BCB0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Hero Image (client — handles missing file gracefully) ───────────────────

function HeroImage() {
  const [error, setError] = useState(false)

  return (
    <div className="rounded-2xl overflow-hidden border border-[#E4E1D7] shadow-2xl shadow-[#B8B4A8]/20">
      {error ? (
        <div
          className="w-full bg-[#F4F2EB] flex flex-col items-center justify-center gap-3"
          style={{ aspectRatio: '16 / 10' }}
        >
          <DriftIcon className="text-[#C0BCB4] scale-150" />
          <span className="text-[#B0ADA6] text-sm font-mono tracking-wide">hero.png</span>
          <span className="text-[#C8C5BE] text-xs">Place your screenshot at /public/hero.png</span>
        </div>
      ) : (
        <Image
          src="/hero.png"
          alt="Driftarama — tasks, projects, and ideas in one calm place"
          width={1200}
          height={750}
          className="w-full h-auto block"
          onError={() => setError(true)}
          priority
        />
      )}
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F3]/95 backdrop-blur-sm border-b border-[#EAE7DE]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <DriftIcon className="text-[#2A2A27]" />
          <span className="text-[#1C1C19] font-bold text-xl tracking-tight">Driftarama</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#7A7870]">
          <a href="#how-it-works" className="hover:text-[#1C1C19] transition-colors duration-150">How It Works</a>
          <a href="#why" className="hover:text-[#1C1C19] transition-colors duration-150">Why Driftarama</a>
          <a href="#pricing" className="hover:text-[#1C1C19] transition-colors duration-150">Pricing</a>
          <a href="#about" className="hover:text-[#1C1C19] transition-colors duration-150">About</a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="hidden sm:block text-sm text-[#7A7870] hover:text-[#1C1C19] transition-colors duration-150 font-medium"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-sm bg-[#F0C040] text-[#1C1C19] font-semibold px-4 py-2 rounded-lg hover:bg-[#E8B830] transition-colors duration-150 whitespace-nowrap"
          >
            Drifting In
          </a>
        </div>

      </div>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left: copy */}
      <div className="space-y-7">

        <span className="inline-flex items-center gap-2 bg-[#FEF9E7] text-[#8A7020] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#F5D56A]/50">
          A simpler way to keep track of things
        </span>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#1C1C19]">
            Tasks, projects, ideas —<br />
            <span className="text-[#9A9890]">just drift them in.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B6860] leading-relaxed max-w-md">
            No pressure. No rigid systems. Just a calm place for everything on your mind.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-[#F0C040] text-[#1C1C19] font-semibold rounded-xl text-sm hover:bg-[#E8B830] transition-colors duration-150"
          >
            Start drifting things in
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3.5 text-[#5A5850] border border-[#DDDAD2] rounded-xl text-sm font-medium hover:bg-[#F4F2EB] transition-colors duration-150"
          >
            See how it works
          </a>
        </div>

        <p className="text-sm text-[#A8A69F] flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden="true">
            <rect x="3" y="6.5" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 6.5V4.5a2 2 0 0 1 4 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          Private by design. Yours and yours alone.
        </p>

      </div>

      {/* Right: hero image */}
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-xl">
          <HeroImage />
        </div>
      </div>

    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Add a drift',
      description: "Type anything — a task, a thought, or something you don't want to forget.",
    },
    {
      number: '02',
      title: 'Let it sit',
      description: "No deadlines. No reminders. It's there when you need it.",
    },
    {
      number: '03',
      title: 'Pick it up later',
      description: "With context, notes, and everything you've added along the way.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-[#F4F2EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C19]">
            How it works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-[#E8E5DC] shadow-sm"
            >
              <span className="text-6xl font-black text-[#EDE9DF] select-none block mb-5 leading-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-[#1C1C19] mb-3">{step.title}</h3>
              <p className="text-[#6B6860] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Three Columns ────────────────────────────────────────────────────────────

function ThreeColumns() {
  const driftTypes = ['a task', 'a follow-up', 'a note', 'an idea', 'something to remember']
  const sources = ['Emails', 'Conversations', 'Random thoughts', 'Reminders', 'And more']

  return (
    <section id="why" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

        {/* Col 1: What is a drift? */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-[#1C1C19]">What is a drift?</h3>
          <p className="text-[#6B6860] leading-relaxed">
            A drift is just something on your mind.
          </p>
          <div className="flex flex-wrap gap-2">
            {driftTypes.map(label => (
              <span
                key={label}
                className="text-xs font-medium px-3 py-1.5 bg-[#F4F2EB] text-[#6B6860] rounded-full border border-[#E2DFD6]"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#9A9890] leading-relaxed mt-auto pt-3 border-t border-[#EAE7DE]">
            Instead of organizing it perfectly, you just drift it in.
          </p>
        </div>

        {/* Col 2: It works the way you think */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-[#1C1C19]">It works the way you think</h3>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 p-3.5 bg-[#FFFBEA] rounded-xl border border-[#F5D56A]/50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5D56A] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#2A2A27] block leading-tight">In Progress</span>
                <span className="text-xs text-[#8A8880] mt-0.5 block">You&apos;re working on it.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-[#FFF5F5] rounded-xl border border-[#F5A5A5]/40">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E87070] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#2A2A27] block leading-tight">Needs Attention</span>
                <span className="text-xs text-[#8A8880] mt-0.5 block">This matters right now.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-[#F2FBF5] rounded-xl border border-[#98D4A3]/50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6DBF8B] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#2A2A27] block leading-tight">Done</span>
                <span className="text-xs text-[#8A8880] mt-0.5 block">It&apos;s complete. Nice.</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#9A9890] leading-relaxed mt-auto pt-3 border-t border-[#EAE7DE]">
            No checkboxes. No rigid workflow. Just a simple visual flow.
          </p>
        </div>

        {/* Col 3: Life drifts in */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-[#1C1C19]">Life drifts in</h3>
          <p className="text-[#6B6860] leading-relaxed">Things come from everywhere.</p>
          <div className="flex flex-wrap gap-2">
            {sources.map(source => (
              <span
                key={source}
                className="text-xs font-medium px-3 py-1.5 bg-[#F4F2EB] text-[#6B6860] rounded-full border border-[#E2DFD6]"
              >
                {source}
              </span>
            ))}
          </div>
          <div className="py-2">
            <DriftIntoTray size="sm" />
          </div>
          <p className="text-sm text-[#9A9890] leading-relaxed mt-auto pt-3 border-t border-[#EAE7DE]">
            They don&apos;t need a category. Just drift in. When you&apos;re ready, connect them to what matters.
          </p>
        </div>

      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const quotes = [
    {
      quote: "It's the first task list I don't avoid opening.",
      name: 'Sarah J.',
    },
    {
      quote: 'I just drop things in and move on.',
      name: 'Mark T.',
    },
    {
      quote: 'It feels like it keeps up with me instead of the other way around.',
      name: 'Priya K.',
    },
  ]

  return (
    <section className="py-24 bg-[#F4F2EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C19]">
            Loved by people who like to keep it simple
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-[#E8E5DC] flex flex-col gap-5"
            >
              <p className="text-[#2A2A27] text-lg leading-relaxed flex-1">
                &ldquo;{q.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#9A9890]">— {q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Closing CTA ──────────────────────────────────────────────────────────────

function ClosingCTA() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="max-w-lg mx-auto text-center space-y-8">
        <DriftIntoTray />
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1C19] leading-tight">
            Keep it simple.
          </h2>
          <p className="text-lg text-[#6B6860]">
            Start with a list. Let everything else come naturally.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F0C040] text-[#1C1C19] rounded-xl text-base font-semibold hover:bg-[#E8B830] transition-colors duration-150"
        >
          Start drifting things in
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#EAE7DE] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <DriftIcon className="text-[#2A2A27]" />
          <span className="text-[#1C1C19] font-bold text-lg tracking-tight">Driftarama</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#8A8880]">
          <a href="#pricing" className="hover:text-[#1C1C19] transition-colors duration-150">Pricing</a>
          <a href="#about" className="hover:text-[#1C1C19] transition-colors duration-150">About</a>
          <a href="#" className="hover:text-[#1C1C19] transition-colors duration-150">Privacy</a>
          <a href="#" className="hover:text-[#1C1C19] transition-colors duration-150">Terms</a>
          <a href="#" className="hover:text-[#1C1C19] transition-colors duration-150">Contact</a>
        </nav>
        <p className="text-sm text-[#C0BCB8] shrink-0">© 2025 Driftarama</p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#FAF8F3] text-[#1C1C19]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ThreeColumns />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
