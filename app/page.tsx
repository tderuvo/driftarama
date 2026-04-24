'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Show, UserButton, SignInButton } from '@clerk/nextjs'

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
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
