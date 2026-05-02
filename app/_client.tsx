'use client'

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Show, UserButton, SignInButton, useUser } from '@clerk/nextjs'

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
      <rect x="14" y="58" width="80" height="22" rx="5" fill="#F0EDE4" stroke="#C8C4B8" strokeWidth="2" />
      <line x1="14" y1="68" x2="94" y2="68" stroke="#D8D5CA" strokeWidth="1.2" />
      <rect
        x="32" y="18" width="44" height="30" rx="5"
        fill="white" stroke="#D0CCC0" strokeWidth="1.5"
        transform="rotate(-7 54 33)"
      />
      <rect x="38" y="24" width="24" height="4" rx="2" fill="#E0DDD4" transform="rotate(-7 54 33)" />
      <rect x="38" y="31" width="16" height="3" rx="1.5" fill="#EAE8E0" transform="rotate(-7 54 33)" />
      <path d="M54 50 L54 56" stroke="#C0BCB0" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2.5" />
      <path d="M51 54 L54 57 L57 54" stroke="#C0BCB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Hero Image ───────────────────────────────────────────────────────────────

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
          alt="Driftarama — a simple place to keep track of tasks, projects, and follow-ups"
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
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Show when="signed-out">
            <SignInButton>
              <button className="text-sm bg-[#F0C040] text-[#1C1C19] font-semibold px-4 py-2 rounded-lg hover:bg-[#E8B830] transition-colors duration-150 whitespace-nowrap">
                Sign In
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
          <button className="hidden sm:block text-sm text-[#7A7870] hover:text-[#1C1C19] transition-colors duration-150 font-medium cursor-default">
            Drifting In
          </button>
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
            Got something to handle?
            <br />
            <span className="text-[#9A9890]">Jot it down before it slips.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B6860] leading-relaxed max-w-md">
            A simple, stress-free place to keep track of tasks, projects, and follow-ups — without turning your life into a system.
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

        <p className="text-sm text-[#A8A69F]">
          No pressure. No rigid structure. Just a place to start.
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

// ─── Supporting Copy ──────────────────────────────────────────────────────────

function SupportingCopy() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="max-w-lg border-l-2 border-[#F0C040] pl-6 space-y-1">
        <p className="text-lg text-[#3A3830] font-medium">You don&apos;t need to plan it all out.</p>
        <p className="text-lg text-[#6B6860]">Just write it down.</p>
        <p className="text-lg text-[#9A9890]">You can figure out the rest later.</p>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Jot it down',
      description: 'Write the thing you need to handle — however it comes to mind.',
    },
    {
      number: '02',
      title: 'Let it grow',
      description: 'As things come up, add to it. No structure needed.',
    },
    {
      number: '03',
      title: 'Work through it',
      description: 'Everything stays in one place, so nothing slips.',
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
  const driftTypes = ['a task', 'a follow-up', 'a quick note', 'an idea', 'something to remember']
  const moments = ['after a meeting', 'mid-task', 'when you remember something', 'out of nowhere', 'all the time']

  return (
    <section id="why" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

        {/* Col 1: What is a drift? */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-[#1C1C19]">What is a drift?</h3>
          <p className="text-[#6B6860] leading-relaxed">
            A drift is simply something you need to handle.
          </p>
          <p className="text-sm text-[#8A8880]">It might start as:</p>
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
          <p className="text-sm text-[#8A8880] leading-relaxed">
            Then over time — it becomes whatever it needs to be.
          </p>
          <p className="text-sm text-[#9A9890] leading-relaxed mt-auto pt-3 border-t border-[#EAE7DE]">
            You don&apos;t have to define it upfront. Just start.
          </p>
        </div>

        {/* Col 2: It works the way you already think */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-[#1C1C19]">It works the way you already think</h3>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 p-3.5 bg-[#FFFBEA] rounded-xl border border-[#F5D56A]/50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5D56A] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#2A2A27] block leading-tight">In Progress</span>
                <span className="text-xs text-[#8A8880] mt-0.5 block">you&apos;re working on it.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-[#FFF5F5] rounded-xl border border-[#F5A5A5]/40">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E87070] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#2A2A27] block leading-tight">Needs Attention</span>
                <span className="text-xs text-[#8A8880] mt-0.5 block">this needs attention.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-[#F2FBF5] rounded-xl border border-[#98D4A3]/50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6DBF8B] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#2A2A27] block leading-tight">Done</span>
                <span className="text-xs text-[#8A8880] mt-0.5 block">it&apos;s done — and it feels good to see it there.</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#9A9890] leading-relaxed mt-auto pt-3 border-t border-[#EAE7DE]">
            No checkboxes. No rigid structure. Just a simple way to see what&apos;s going on.
          </p>
        </div>

        {/* Col 3: Life drifts in */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-[#1C1C19]">Life drifts in</h3>
          <p className="text-[#6B6860] leading-relaxed">Things come up throughout the day.</p>
          <div className="flex flex-wrap gap-2">
            {moments.map(moment => (
              <span
                key={moment}
                className="text-xs font-medium px-3 py-1.5 bg-[#F4F2EB] text-[#6B6860] rounded-full border border-[#E2DFD6]"
              >
                {moment}
              </span>
            ))}
          </div>
          <div className="py-2">
            <DriftIntoTray size="sm" />
          </div>
          <p className="text-sm text-[#9A9890] leading-relaxed mt-auto pt-3 border-t border-[#EAE7DE]">
            You don&apos;t need to organize it. Just jot it down before you forget.
          </p>
        </div>

      </div>
    </section>
  )
}

// ─── Micro Example ────────────────────────────────────────────────────────────

function MicroExample() {
  return (
    <section className="py-20 bg-[#F4F2EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto">

          <p className="text-sm font-semibold text-[#A8A69F] uppercase tracking-widest text-center mb-8">
            For example
          </p>

          <div className="bg-white rounded-2xl border border-[#E8E5DC] shadow-sm overflow-hidden">

            {/* Starting point */}
            <div className="px-7 pt-7 pb-5 border-b border-[#F0EDE4]">
              <p className="text-xs text-[#B0ADA6] mb-3">You jot down one thing:</p>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5D56A] shrink-0" />
                <span className="text-base font-semibold text-[#1C1C19]">Do 2025 taxes</span>
              </div>
            </div>

            {/* Grows over time */}
            <div className="px-7 py-5">
              <p className="text-xs text-[#B0ADA6] mb-4">Over time, it grows into:</p>
              <div className="space-y-3 pl-1">
                {['Call accountant', 'Gather documents', 'Send files'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8D5CC] shrink-0" />
                    <span className="text-sm text-[#5A5850]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <div className="px-7 py-4 bg-[#FAFAF8] border-t border-[#F0EDE4]">
              <p className="text-sm text-[#9A9890]">
                No planning required. It just builds as you go.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Value Props ──────────────────────────────────────────────────────────────

function ValueProps() {
  const props = [
    {
      title: 'Start simple',
      description: 'Just write it down. No setup needed.',
    },
    {
      title: 'No pressure',
      description: 'Nothing is pushing you or reminding you constantly.',
    },
    {
      title: 'Everything stays together',
      description: 'Notes, updates, and steps stay with the thing itself.',
    },
    {
      title: 'Come back anytime',
      description: 'Pick up where you left off — without starting over.',
    },
  ]

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {props.map((prop, i) => (
          <div
            key={i}
            className="bg-[#F8F6F0] rounded-2xl p-6 border border-[#EAE7DE]"
          >
            <h3 className="text-base font-bold text-[#1C1C19] mb-2">{prop.title}</h3>
            <p className="text-sm text-[#6B6860] leading-relaxed">{prop.description}</p>
          </div>
        ))}
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
      quote: "I just jot things down and deal with them when I'm ready.",
      name: 'Mark T.',
    },
    {
      quote: 'It feels like it keeps track of things without stressing me out.',
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
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1C19] leading-tight">
            Got something to handle?
          </h2>
          <p className="text-lg text-[#6B6860]">
            Jot it down. Come back to it later.
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

// ─── App Nav (authenticated) ──────────────────────────────────────────────────

function AppNav({ activeView, onViewChange, isAdmin }: {
  activeView: 'open' | 'done' | 'universe'
  onViewChange: (v: 'open' | 'done' | 'universe') => void
  isAdmin: boolean
}) {
  return (
    <header className="no-print sticky top-0 z-50 bg-[#FAF8F3]/95 backdrop-blur-sm border-b border-[#EAE7DE]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <a href="/" aria-label="Home">
            <DriftIcon className="text-[#2A2A27]" />
          </a>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onViewChange('open')}
              className={`text-sm font-medium px-3 py-1 rounded-md transition-colors duration-150 ${activeView === 'open' ? 'text-[#2A2A27] bg-[#EEEAE0]' : 'text-[#A8A49C] hover:bg-[#F0EDE4] hover:text-[#6B6860]'}`}
            >
              Open
            </button>
            <button
              onClick={() => onViewChange('done')}
              className={`text-sm font-medium px-3 py-1 rounded-md transition-colors duration-150 ${activeView === 'done' ? 'text-[#2A2A27] bg-[#EEEAE0]' : 'text-[#A8A49C] hover:bg-[#F0EDE4] hover:text-[#6B6860]'}`}
            >
              Done
            </button>
            {/* Admin-only tab — not rendered for non-admin users */}
            {isAdmin && (
              <button
                onClick={() => onViewChange('universe')}
                className={`text-sm font-medium px-3 py-1 rounded-md transition-colors duration-150 ${activeView === 'universe' ? 'text-[#2A2A27] bg-[#EEEAE0]' : 'text-[#A8A49C] hover:bg-[#F0EDE4] hover:text-[#6B6860]'}`}
              >
                The Universe
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="text-[#B0ACA4] hover:text-[#5A5850] hover:bg-[#F0EDE4] p-1.5 rounded-md transition-colors duration-150"
            aria-label="Print"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M4.5 5V2.5h6V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="1.5" y="5" width="12" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <rect x="4.5" y="9" width="6" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" fill="white" />
              <circle cx="11.5" cy="8" r="0.7" fill="currentColor" />
            </svg>
          </button>
          <button
            className="text-sm text-[#6B6860] border border-[#DDDAD2] px-4 py-1.5 rounded-lg hover:bg-[#F4F2EB] transition-colors duration-150"
          >
            Drifting In
          </button>
          <UserButton />
        </div>

      </div>
    </header>
  )
}

// ─── Focus View ───────────────────────────────────────────────────────────────

type FocusViewProps = {
  drift: SubDriftData
  parentTitle?: string
  siblingDrifts: SubDriftData[]
  editTitle: string
  setEditTitle: (t: string) => void
  editBody: string
  setEditBody: (b: string) => void
  scheduleAutoSave: (id: string, title: string, body: string) => void
  flushSave: (id: string, title: string, body: string) => void
  onCreateSubDrift: (title: string) => Promise<void>
  onOpenDrift: (drift: SubDriftData) => void
  onBack: () => void
}

const SLASH_OPTIONS = [
  { label: 'Add Sub Drift', action: 'add-sub-drift' as const },
]

// ─── useSlashMenu ──────────────────────────────────────────────────────────────

function useSlashMenu({
  driftId,
  editTitle,
  editBody,
  setEditBody,
  scheduleAutoSave,
  onCreateSubDrift,
}: {
  driftId: string
  editTitle: string
  editBody: string
  setEditBody: (body: string) => void
  scheduleAutoSave: (id: string, title: string, body: string) => void
  onCreateSubDrift: (title: string) => Promise<void>
}) {
  const [showSlashMenu, setShowSlashMenu]     = useState(false)
  const [slashQuery, setSlashQuery]           = useState('')
  const [slashMenuIndex, setSlashMenuIndex]   = useState(0)
  const [menuPos, setMenuPos]                 = useState({ top: 0, left: 0 })
  const textareaRef   = useRef<HTMLTextAreaElement>(null)
  const slashStartPos = useRef<number | null>(null)

  const filterWord      = slashQuery.split(' ')[0]
  const filteredOptions = filterWord
    ? SLASH_OPTIONS.filter(o => o.label.toLowerCase().includes(filterWord.toLowerCase()))
    : SLASH_OPTIONS

  const closeSlashMenu = () => {
    setShowSlashMenu(false)
    setSlashQuery('')
    setSlashMenuIndex(0)
    slashStartPos.current = null
  }

  const selectOption = (label: string) => {
    if (slashStartPos.current !== null) {
      const content = slashQuery.split(' ').slice(1).join(' ').trim()
      const title   = content || 'Untitled sub-drift'
      const placeholder = `↳ ${title}`

      const before       = editBody.slice(0, slashStartPos.current)
      const after        = editBody.slice(slashStartPos.current + 1 + slashQuery.length)
      const newBody      = before + placeholder + after
      const newCursorPos = slashStartPos.current + placeholder.length

      setEditBody(newBody)
      scheduleAutoSave(driftId, editTitle, newBody)

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus()
          textareaRef.current.setSelectionRange(newCursorPos, newCursorPos)
        }
      }, 0)

      if (label === 'Add Sub Drift') onCreateSubDrift(title)
    }
    closeSlashMenu()
  }

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value
    const pos = e.target.selectionStart ?? val.length

    setEditBody(val)
    scheduleAutoSave(driftId, editTitle, val)

    if (showSlashMenu) {
      if (slashStartPos.current !== null && pos > slashStartPos.current) {
        setSlashQuery(val.slice(slashStartPos.current + 1, pos))
        setSlashMenuIndex(0)
      } else {
        closeSlashMenu()
      }
      return
    }

    if (val[pos - 1] === '/') {
      slashStartPos.current = pos - 1
      if (textareaRef.current) {
        const rect = textareaRef.current.getBoundingClientRect()
        setMenuPos({ top: rect.top + 28, left: rect.left })
      }
      setShowSlashMenu(true)
      setSlashQuery('')
      setSlashMenuIndex(0)
    }
  }

  const handleBodyKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!showSlashMenu) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSlashMenuIndex(i => Math.min(i + 1, filteredOptions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSlashMenuIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const opt = filteredOptions[slashMenuIndex]
      if (opt) selectOption(opt.label)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      closeSlashMenu()
    }
  }

  const SlashMenuNode = showSlashMenu && filteredOptions.length > 0 ? (
    <>
      <div className="fixed inset-0 z-40" onClick={closeSlashMenu} />
      <div
        className="fixed z-50 bg-[#FAF9F4] border border-[#E4E1D7] rounded-lg shadow-md py-1 min-w-40"
        style={{ top: menuPos.top, left: menuPos.left }}
      >
        {filteredOptions.map((opt, i) => (
          <button
            key={opt.action}
            onMouseDown={e => { e.preventDefault(); selectOption(opt.label) }}
            className={`w-full text-left text-sm px-4 py-1.5 transition-colors duration-100 ${i === slashMenuIndex ? 'bg-[#EEEAE0] text-[#2A2A27]' : 'text-[#3A3830] hover:bg-[#F0EDE4]'}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </>
  ) : null

  return { textareaRef, handleBodyChange, handleBodyKeyDown, SlashMenuNode }
}

// ─── BodyDisplay ──────────────────────────────────────────────────────────────

function BodyDisplay({
  body,
  siblingDrifts,
  onOpenDrift,
  onFocus,
  placeholder,
  className,
}: {
  body: string
  siblingDrifts: SubDriftData[]
  onOpenDrift: (drift: SubDriftData) => void
  onFocus: () => void
  placeholder: string
  className: string
}) {
  return (
    <div onClick={onFocus} className={className}>
      {body ? (
        body.split('\n').map((line, i, arr) => {
          if (line.startsWith('↳ ')) {
            const title = line.slice(2).trim()
            const match = siblingDrifts.find(s => s.title === title)
            if (match) {
              return (
                <span key={i}>
                  <span
                    onClick={e => { e.stopPropagation(); onOpenDrift(match) }}
                    className="text-[#4A4840] underline-offset-2 hover:underline cursor-pointer transition-colors duration-100"
                  >
                    {line}
                  </span>
                  {i < arr.length - 1 && '\n'}
                </span>
              )
            }
          }
          return (
            <span key={i}>
              {line || ' '}
              {i < arr.length - 1 && '\n'}
            </span>
          )
        })
      ) : (
        <span className="text-[#C8C5BE]">{placeholder}</span>
      )}
    </div>
  )
}

function FocusView({ drift, parentTitle, siblingDrifts, editTitle, setEditTitle, editBody, setEditBody, scheduleAutoSave, flushSave, onCreateSubDrift, onOpenDrift, onBack }: FocusViewProps) {
  const [bodyFocused, setBodyFocused] = useState(false)

  // Reset display mode when navigating to a different drift
  useEffect(() => { setBodyFocused(false) }, [drift.id])

  const { textareaRef, handleBodyChange, handleBodyKeyDown, SlashMenuNode } = useSlashMenu({
    driftId: drift.id,
    editTitle,
    editBody,
    setEditBody,
    scheduleAutoSave,
    onCreateSubDrift,
  })

  return (
    <div className="min-h-screen bg-[#FAF9F4]">
      {/* no-print: hide nav chrome when printing Focus Mode */}
      <div className="no-print sticky top-0 z-10 bg-[#FAF9F4]/95 backdrop-blur-sm border-b border-[#EAE7DE] px-6 h-12 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-sm text-[#8A8880] hover:text-[#2A2A27] transition-colors duration-150 flex items-center gap-1.5"
        >
          <span>←</span>
          <span>Back</span>
        </button>
        <button
          onClick={() => window.print()}
          className="text-[#B0ACA4] hover:text-[#5A5850] hover:bg-[#F0EDE4] p-1.5 rounded-md transition-colors duration-150"
          aria-label="Print"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M4.5 5V2.5h6V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="1.5" y="5" width="12" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <rect x="4.5" y="9" width="6" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" fill="white" />
            <circle cx="11.5" cy="8" r="0.7" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div className="max-w-185 mx-auto px-8 pt-14 pb-24">
        <input
          type="text"
          value={editTitle}
          onChange={e => {
            setEditTitle(e.target.value)
            scheduleAutoSave(drift.id, e.target.value, editBody)
          }}
          onBlur={() => flushSave(drift.id, editTitle, editBody)}
          className="w-full text-3xl md:text-4xl font-bold text-[#1C1C19] bg-transparent border-none outline-none focus:outline-none mb-3 leading-snug"
        />

        {parentTitle && (
          <p className="text-xs text-[#B8B4AC] mb-8">Attached to: {parentTitle}</p>
        )}

        {drift.description && (
          <p className="mb-8 text-base text-[#8A8880] leading-relaxed">
            {drift.description}
          </p>
        )}

        {bodyFocused ? (
          <textarea
            ref={textareaRef}
            autoFocus
            value={editBody}
            onChange={handleBodyChange}
            onKeyDown={handleBodyKeyDown}
            onBlur={() => {
              flushSave(drift.id, editTitle, editBody)
              setBodyFocused(false)
            }}
            placeholder="Start writing…"
            rows={20}
            className="w-full resize-none text-base text-[#5A5850] leading-relaxed bg-transparent border-none outline-none focus:outline-none placeholder:text-[#C8C5BE]"
          />
        ) : (
          <BodyDisplay
            body={editBody}
            siblingDrifts={siblingDrifts}
            onOpenDrift={onOpenDrift}
            onFocus={() => setBodyFocused(true)}
            placeholder="Start writing…"
            className="min-h-72 cursor-text text-base text-[#5A5850] leading-relaxed whitespace-pre-wrap"
          />
        )}
      </div>

      {SlashMenuNode}
    </div>
  )
}

// ─── App View (authenticated main screen) ─────────────────────────────────────

// ─── Drift Types ──────────────────────────────────────────────────────────────

type SubDriftData = {
  id: string
  title: string
  body: string | null
  description: string | null
  highlight: string
}

type DriftData = SubDriftData & {
  children: SubDriftData[]
}

// Marker highlight styles — flat background, no borders, sits behind text
const highlightClass: Record<string, string> = {
  yellow: 'bg-[#F5E6A8] px-[5px] -mx-[5px]',
  green:  'bg-[#CDE8D5] px-[5px] -mx-[5px]',
  red:    'bg-[#F2C6C6] px-[5px] -mx-[5px]',
  mute:   'opacity-40',
}

type ContextMenuState = {
  driftId:  string
  parentId: string | null   // null = top-level drift
  x: number
  y: number
}

function AppView() {
  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date())

  const [activeView, setActiveView]   = useState<'open' | 'done' | 'universe'>('open')
  const [isAdmin, setIsAdmin]         = useState(false)
  const [drifts, setDrifts]           = useState<DriftData[]>([])
  const [selectedDrift, setSelectedDrift] = useState<SubDriftData | null>(null)
  const [selectedParentDrift, setSelectedParentDrift] = useState<{ id: string; title: string } | null>(null)
  const [editTitle, setEditTitle]     = useState('')
  const [editBody, setEditBody]       = useState('')
  const [paneBodyFocused, setPaneBodyFocused] = useState(false)
  const [isAdding, setIsAdding]       = useState(false)
  const [inputValue, setInputValue]   = useState('')
  const [isAddingSub, setIsAddingSub] = useState(false)
  const [subInputValue, setSubInputValue] = useState('')
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null)
  const [menuPos, setMenuPos]         = useState({ top: 0, left: 0 })
  const [focusMode, setFocusMode] = useState(false)
  const debounceRef    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)

  const switchView = (v: 'open' | 'done' | 'universe') => {
    setActiveView(v)
    setSelectedDrift(null)
    setSelectedParentDrift(null)
    setFocusMode(false)
    setIsAdding(false)
    setInputValue('')
  }

  // Fetch current user's role once on mount to gate admin-only UI
  useEffect(() => {
    fetch('/api/me')
      .then(res => res.json())
      .then(data => setIsAdmin(data.role === 'admin'))
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch(`/api/drifts?view=${activeView}`)
      .then(res => res.json())
      .then(data => setDrifts(data.drifts ?? []))
      .catch(() => {})
  }, [activeView])

  // Sync edit fields when a different drift is selected
  useEffect(() => {
    if (selectedDrift) {
      setEditTitle(selectedDrift.title)
      setEditBody(selectedDrift.body ?? '')
      setPaneBodyFocused(false)
    }
  }, [selectedDrift?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  // Cleanup debounce on unmount
  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current) }, [])

  const patchDrift = useCallback(async (id: string, updates: { title?: string; body?: string | null }) => {
    try {
      const res = await fetch(`/api/drifts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })
      if (!res.ok) throw new Error('PATCH failed')
      setDrifts(prev => prev.map(d => {
        if (d.id === id) return { ...d, ...updates }
        return { ...d, children: d.children.map(c => c.id === id ? { ...c, ...updates } : c) }
      }))
      setSelectedDrift(prev => prev?.id === id ? { ...prev, ...updates } : prev)
    } catch (err) {
      console.error('Failed to save drift:', err)
    }
  }, [])

  const scheduleAutoSave = useCallback((id: string, title: string, body: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => patchDrift(id, { title, body: body || null }), 500)
  }, [patchDrift])

  const flushSave = useCallback((id: string, title: string, body: string) => {
    if (debounceRef.current) { clearTimeout(debounceRef.current); debounceRef.current = null }
    patchDrift(id, { title, body: body || null })
  }, [patchDrift])

  const cancelAdd = () => {
    setIsAdding(false)
    setInputValue('')
  }

  const submitDrift = async (title: string) => {
    try {
      // Pass view so the API knows which system drift to parent under
      const payload: Record<string, string> = { title }
      if (activeView === 'universe') payload.view = 'universe'
      const res = await fetch('/api/drifts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('POST /api/drifts failed')
      const data = await res.json()
      setDrifts(prev => [...prev, { ...data.drift, children: [] }])
    } catch (err) {
      console.error('Failed to create drift:', err)
    } finally {
      cancelAdd()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') { cancelAdd(); return }
    if (e.key === 'Enter') {
      const trimmed = inputValue.trim()
      if (trimmed) submitDrift(trimmed)
      else cancelAdd()
    }
  }

  const handleBlur = () => cancelAdd()

  const cancelSub = () => { setIsAddingSub(false); setSubInputValue('') }

  const submitSubDrift = async (title: string) => {
    if (!selectedDrift) return
    try {
      const res = await fetch('/api/drifts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, parentId: selectedDrift.id }),
      })
      if (!res.ok) throw new Error('POST sub-drift failed')
      const data = await res.json()
      const newSub: SubDriftData = {
        id:          data.drift.id,
        title:       data.drift.title,
        body:        data.drift.body ?? null,
        description: data.drift.description ?? null,
        highlight:   data.drift.highlight,
      }
      setDrifts(prev => prev.map(d =>
        d.id === selectedDrift.id
          ? { ...d, children: [...d.children, newSub] }
          : d
      ))
    } catch (err) {
      console.error('Failed to create sub-drift:', err)
    } finally {
      cancelSub()
    }
  }

  const handleSubKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') { cancelSub(); return }
    if (e.key === 'Enter') {
      const trimmed = subInputValue.trim()
      if (trimmed) submitSubDrift(trimmed)
      else cancelSub()
    }
  }

  const handleSubBlur = () => cancelSub()

  const openContextMenu = (e: React.MouseEvent, driftId: string, parentId: string | null) => {
    e.preventDefault()
    e.stopPropagation()
    // Seed with raw position; useLayoutEffect will clamp before first paint
    setMenuPos({ top: e.clientY, left: e.clientX })
    setContextMenu({ driftId, parentId, x: e.clientX, y: e.clientY })
  }

  // Clamp the context menu to the viewport before the browser paints.
  // useLayoutEffect runs synchronously after the DOM update so the user
  // never sees the unclamped position.
  useLayoutEffect(() => {
    if (!contextMenu || !contextMenuRef.current) return
    const MARGIN = 8
    const { width, height } = contextMenuRef.current.getBoundingClientRect()
    let x = contextMenu.x
    let y = contextMenu.y
    if (x + width  + MARGIN > window.innerWidth)  x = window.innerWidth  - width  - MARGIN
    if (y + height + MARGIN > window.innerHeight) y = window.innerHeight - height - MARGIN
    setMenuPos({ top: Math.max(MARGIN, y), left: Math.max(MARGIN, x) })
  }, [contextMenu])

  const applyHighlight = async (highlight: string) => {
    if (!contextMenu) return
    const { driftId, parentId } = contextMenu
    setContextMenu(null)

    setDrifts(prev => prev.map(d => {
      if (parentId === null) {
        return d.id === driftId ? { ...d, highlight } : d
      }
      if (d.id !== parentId) return d
      return { ...d, children: d.children.map(c => c.id === driftId ? { ...c, highlight } : c) }
    }))

    try {
      await fetch(`/api/drifts/${driftId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ highlight }),
      })
    } catch (err) {
      console.error('Failed to update highlight:', err)
    }
  }

  const createSubDriftFromFocus = async (title: string) => {
    if (!selectedDrift) return
    // If a sub-drift is focused, attach the new child to its parent (sibling), not to itself
    const targetParentId = selectedParentDrift ? selectedParentDrift.id : selectedDrift.id
    try {
      const res = await fetch('/api/drifts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, parentId: targetParentId }),
      })
      if (!res.ok) throw new Error('POST sub-drift (focus) failed')
      const data = await res.json()
      const newSub: SubDriftData = {
        id:          data.drift.id,
        title:       data.drift.title,
        body:        data.drift.body ?? null,
        description: data.drift.description ?? null,
        highlight:   data.drift.highlight,
      }
      setDrifts(prev => prev.map(d =>
        d.id === targetParentId
          ? { ...d, children: [...d.children, newSub] }
          : d
      ))
    } catch (err) {
      console.error('Failed to create sub-drift from Focus Mode:', err)
    }
  }

  const paneSlash = useSlashMenu({
    driftId:          selectedDrift?.id ?? '',
    editTitle,
    editBody,
    setEditBody,
    scheduleAutoSave,
    onCreateSubDrift: createSubDriftFromFocus,
  })

  const focusTargetParentId = selectedParentDrift ? selectedParentDrift.id : selectedDrift?.id
  const focusSiblingDrifts  = drifts.find(d => d.id === focusTargetParentId)?.children ?? []

  const openDriftFromFocus = (target: SubDriftData) => {
    if (!selectedDrift) return
    flushSave(selectedDrift.id, editTitle, editBody)
    const parentId    = selectedParentDrift ? selectedParentDrift.id    : selectedDrift.id
    const parentTitle = selectedParentDrift ? selectedParentDrift.title : selectedDrift.title
    setSelectedDrift(target)
    setSelectedParentDrift({ id: parentId, title: parentTitle })
  }

  // Direct children of the selected top-level drift — used by the print container.
  // Empty for sub-drifts (they have no children in the data model).
  const driftPrintChildren: SubDriftData[] =
    selectedDrift && !selectedParentDrift
      ? (drifts.find(d => d.id === selectedDrift.id)?.children ?? [])
      : []

  if (focusMode && selectedDrift) {
    return (
      <FocusView
        drift={selectedDrift}
        parentTitle={selectedParentDrift?.title}
        siblingDrifts={focusSiblingDrifts}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editBody={editBody}
        setEditBody={setEditBody}
        scheduleAutoSave={scheduleAutoSave}
        flushSave={flushSave}
        onCreateSubDrift={createSubDriftFromFocus}
        onOpenDrift={openDriftFromFocus}
        onBack={() => {
          flushSave(selectedDrift.id, editTitle, editBody)
          setFocusMode(false)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#E8E3D8] print:bg-white">
      <AppNav activeView={activeView} onViewChange={switchView} isAdmin={isAdmin} />
      {/* no-print added when a drift is selected so the list is suppressed on print */}
      <main className={`max-w-180 mx-auto px-6 md:px-10 pt-12 pb-28 bg-[#FAF9F4] min-h-[calc(100vh-3.5rem)] shadow-[0_1px_16px_rgba(40,36,28,0.07),0_0_0_1px_rgba(40,36,28,0.04)] print:bg-white print:shadow-none print:max-w-none print:px-10 print:pt-8${selectedDrift ? ' no-print' : ''}`}>

        <div className="print-area">

        {/* Date */}
        <p className="text-4xl md:text-5xl font-semibold tracking-tight text-[#2A2A27] mb-6">
          {today}
        </p>

        {/* Add drift entry point — Open view only */}
        <div className={`no-print mb-7${activeView === 'done' ? ' hidden' : ''}`}>
          {isAdding ? (
            <div className="flex items-baseline gap-3">
              <span className="text-base text-[#C8C5BE] font-bold tabular-nums w-5 shrink-0 text-right select-none">
                {drifts.length + 1}
              </span>
              <input
                autoFocus
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder="Type something to handle…"
                className="flex-1 text-base text-[#1C1C19] font-semibold leading-normal bg-transparent border-b border-[#D8D5CC] outline-none placeholder:text-[#C8C5BE] placeholder:font-normal"
              />
            </div>
          ) : (
            <button
              onClick={() => setIsAdding(true)}
              className="pl-8 text-sm text-[#8A8880] hover:text-[#3A3830] hover:underline underline-offset-2 transition-colors duration-150"
            >
              {activeView === 'universe' ? '+ Drift something into the Universe…' : '+ Add a drift…'}
            </button>
          )}
        </div>

        <div className="space-y-5">
          {drifts.map((drift, i) => (
            <div
              key={drift.id}
              onClick={() => { setSelectedDrift(drift); setSelectedParentDrift(null); setIsAddingSub(false) }}
              onContextMenu={e => openContextMenu(e, drift.id, null)}
              className="cursor-pointer group"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className={`text-base font-bold tabular-nums w-5 shrink-0 text-right select-none transition-colors duration-100 ${selectedDrift?.id === drift.id ? 'text-[#5A5850]' : 'text-[#3A3830]'}`}>
                  {i + 1}
                </span>
                <span className={`text-base font-semibold leading-normal transition-colors duration-100 ${selectedDrift?.id === drift.id ? 'text-[#2A2A27]' : 'text-[#1C1C19] group-hover:text-[#2A2A27]'}${drift.highlight !== 'none' ? ' ' + (highlightClass[drift.highlight] ?? '') : ''}`}>
                  {drift.title}
                </span>
              </div>
              <div className="space-y-1.5 pl-8">
                {drift.children.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={e => {
                      e.stopPropagation()
                      setSelectedDrift(sub)
                      setSelectedParentDrift({ id: drift.id, title: drift.title })
                      setIsAddingSub(false)
                    }}
                    onContextMenu={e => openContextMenu(e, sub.id, drift.id)}
                    className="flex items-baseline gap-2.5 cursor-pointer"
                  >
                    <span className="text-[#C8C5BE] text-xs shrink-0 select-none">•</span>
                    <span className={`text-sm text-[#8A8880] leading-relaxed hover:text-[#5A5850] transition-colors duration-100${sub.highlight !== 'none' ? ' ' + (highlightClass[sub.highlight] ?? '') : ''}`}>
                      {sub.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        </div> {/* /print-area */}

      </main>

      {/* ── Drift Panel ── */}
      {selectedDrift && (
        <aside className="no-print fixed top-14 right-0 bottom-0 w-80 bg-[#FAF9F4] border-l border-[#EAE7DE] z-40 overflow-y-auto">
          <div className="pt-10 px-7 pb-16">

            {/* Drift Panel header: title (shrinkable) + controls (fixed) */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
              <input
                type="text"
                value={editTitle}
                onChange={e => {
                  setEditTitle(e.target.value)
                  scheduleAutoSave(selectedDrift.id, e.target.value, editBody)
                }}
                onBlur={() => flushSave(selectedDrift.id, editTitle, editBody)}
                className="flex-1 min-w-0 text-[1.05rem] font-semibold text-[#1C1C19] leading-snug bg-transparent border-none outline-none focus:outline-none"
              />
              <div className="flex items-center gap-2 shrink-0 mt-0.5">
                <button
                  onClick={() => setFocusMode(true)}
                  className="text-xs text-[#A8A49C] border border-[#DDDAD2] px-2.5 py-1 rounded-md hover:text-[#5A5850] hover:border-[#B8B4AC] transition-colors duration-150"
                >
                  Focus
                </button>
                <button
                  onClick={() => { setSelectedDrift(null); setSelectedParentDrift(null); setFocusMode(false) }}
                  aria-label="Close"
                  className="text-[#B0ADA6] hover:text-[#5A5850] transition-colors duration-150 text-xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Parent context — sub-drifts only */}
            {selectedParentDrift && (
              <p className="text-xs text-[#B8B4AC] -mt-4 mb-5">
                Attached to: {selectedParentDrift.title}
              </p>
            )}

            {/* Sub-drift entry — parent drifts only, sits near the top */}
            {!selectedParentDrift && (
              <div className="mb-3">
                {isAddingSub ? (
                  <input
                    autoFocus
                    type="text"
                    value={subInputValue}
                    onChange={e => setSubInputValue(e.target.value)}
                    onKeyDown={handleSubKeyDown}
                    onBlur={handleSubBlur}
                    placeholder="Type a next step…"
                    className="w-full text-sm text-[#5A5850] bg-transparent border-b border-[#D8D5CC] outline-none placeholder:text-[#C8C5BE]"
                  />
                ) : (
                  <button
                    onClick={() => setIsAddingSub(true)}
                    className="text-sm text-[#6B6860] hover:text-[#3A3830] hover:underline underline-offset-2 transition-colors duration-150"
                  >
                    + Add sub-drift…
                  </button>
                )}
              </div>
            )}

            {/* Divider — separates action row from notes body */}
            {!selectedParentDrift && (
              <div className="border-t border-[#EAE7DE] mb-5" />
            )}

            {/* Description — read-only */}
            {selectedDrift.description && (
              <div className="bg-[#F0EDE4] rounded-xl px-4 py-3 mb-5">
                <p className="text-sm text-[#6B6860] leading-relaxed">
                  {selectedDrift.description}
                </p>
              </div>
            )}

            {/* Body / notes — expands to fill available panel space */}
            {paneBodyFocused ? (
              <textarea
                ref={paneSlash.textareaRef}
                autoFocus
                value={editBody}
                onChange={paneSlash.handleBodyChange}
                onKeyDown={paneSlash.handleBodyKeyDown}
                onInput={e => {
                  // Auto-grow: let the panel scroll rather than the textarea
                  const el = e.currentTarget
                  el.style.height = 'auto'
                  el.style.height = `${el.scrollHeight}px`
                }}
                onFocus={e => {
                  // Set correct height when the textarea first mounts (autoFocus)
                  const el = e.currentTarget
                  el.style.height = 'auto'
                  el.style.height = `${el.scrollHeight}px`
                }}
                onBlur={() => {
                  flushSave(selectedDrift.id, editTitle, editBody)
                  setPaneBodyFocused(false)
                }}
                placeholder="Start writing notes…"
                style={{ minHeight: '12rem', overflow: 'hidden' }}
                className="w-full resize-none text-sm text-[#5A5850] leading-relaxed bg-transparent border-none outline-none focus:outline-none placeholder:text-[#C8C5BE]"
              />
            ) : (
              <BodyDisplay
                body={editBody}
                siblingDrifts={focusSiblingDrifts}
                onOpenDrift={openDriftFromFocus}
                onFocus={() => setPaneBodyFocused(true)}
                placeholder="Start writing notes…"
                className="min-h-48 cursor-text text-sm text-[#5A5850] leading-relaxed whitespace-pre-wrap"
              />
            )}

          </div>
        </aside>
      )}

      {paneSlash.SlashMenuNode}

      {/* ── Context menu ── */}
      {contextMenu && (
        <>
          <div
            className="no-print fixed inset-0 z-40"
            onClick={() => setContextMenu(null)}
          />
          <div
            ref={contextMenuRef}
            className="no-print fixed z-50 bg-[#FAF9F4] border border-[#E4E1D7] rounded-lg shadow-md py-1 min-w-30"
            style={{ top: menuPos.top, left: menuPos.left }}
          >
            {/* Move to Done / Move to Open — parent drifts only, not shown in Universe */}
            {contextMenu.parentId === null && activeView !== 'universe' && (
              <>
                <button
                  onClick={() => {
                    const { driftId } = contextMenu
                    const target = activeView === 'open' ? 'done' : 'open'
                    setContextMenu(null)
                    if (selectedDrift?.id === driftId) setSelectedDrift(null)
                    setDrifts(prev => prev.filter(d => d.id !== driftId))
                    fetch(`/api/drifts/${driftId}`, {
                      method: 'PATCH',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ moveTo: target }),
                    }).catch(err => console.error(`Failed to move to ${target}:`, err))
                  }}
                  className="w-full text-left text-sm text-[#3A3830] px-4 py-1.5 hover:bg-[#F0EDE4] transition-colors duration-100"
                >
                  {activeView === 'open' ? 'Move to Done' : 'Move to Open'}
                </button>
                <div className="my-1 mx-3 border-t border-[#EAE7DE]" />
              </>
            )}
            {([
              { label: 'Yellow', value: 'yellow' },
              { label: 'Green',  value: 'green'  },
              { label: 'Red',    value: 'red'    },
              { label: 'Clear',  value: 'none'   },
              { label: 'Mute',   value: 'mute'   },
            ] as const).map(({ label, value }) => (
              <button
                key={value}
                onClick={() => applyHighlight(value)}
                className="w-full text-left text-sm text-[#3A3830] px-4 py-1.5 hover:bg-[#F0EDE4] transition-colors duration-100"
              >
                {label}
              </button>
            ))}

            {/* Delete — always visible, parent or sub */}
            <div className="my-1 mx-3 border-t border-[#EAE7DE]" />
            <button
              onClick={() => {
                const { driftId, parentId } = contextMenu
                const ok = window.confirm('Delete this drift? You can restore deleted drifts later.')
                if (!ok) { setContextMenu(null); return }
                setContextMenu(null)
                // Optimistic update
                if (parentId === null) {
                  if (selectedDrift?.id === driftId) setSelectedDrift(null)
                  setDrifts(prev => prev.filter(d => d.id !== driftId))
                } else {
                  setDrifts(prev => prev.map(d =>
                    d.id === parentId
                      ? { ...d, children: d.children.filter(c => c.id !== driftId) }
                      : d
                  ))
                }
                fetch(`/api/drifts/${driftId}`, { method: 'DELETE' })
                  .catch(err => console.error('Failed to delete drift:', err))
              }}
              className="w-full text-left text-sm text-[#E87070] px-4 py-1.5 hover:bg-[#FFF5F5] transition-colors duration-100"
            >
              Delete
            </button>
          </div>
        </>
      )}

      {/* ── Drift print container ─────────────────────────────────────────────
          Screen: always hidden (display:none via .drift-print-container CSS).
          Print:  visible only when this node is in the DOM, i.e. when a drift
                  is selected. The main list is suppressed via no-print on
                  <main> above, so only this content reaches the printer.
      ──────────────────────────────────────────────────────────────────────── */}
      {selectedDrift && (
        <div className="drift-print-container">
          <h1 className="drift-print-title">{editTitle}</h1>

          {selectedParentDrift && (
            <p className="drift-print-parent">Attached to: {selectedParentDrift.title}</p>
          )}

          {selectedDrift.description && (
            <p className="drift-print-description">{selectedDrift.description}</p>
          )}

          {editBody && (
            <div className="drift-print-body">{editBody}</div>
          )}

          {driftPrintChildren.length > 0 && (
            <>
              <p className="drift-print-children-label">Sub-drifts</p>
              <ul className="drift-print-children">
                {driftPrintChildren.map(child => (
                  <li
                    key={child.id}
                    className={`drift-print-child${child.highlight !== 'none' ? ' ' + (highlightClass[child.highlight] ?? '') : ''}`}
                  >
                    {child.title}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClientPage() {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) return <div className="min-h-screen bg-[#FAF8F3]" />

  if (isSignedIn) return <AppView />

  return (
    <main className="bg-[#FAF8F3] text-[#1C1C19]">
      <Navbar />
      <Hero />
      <SupportingCopy />
      <HowItWorks />
      <ThreeColumns />
      <MicroExample />
      <ValueProps />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
