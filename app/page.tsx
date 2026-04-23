// ─── Driftarama Landing Page ─────────────────────────────────────────────────

function DriftIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg mx-auto"
      aria-hidden="true"
    >
      {/* soft ambient glow */}
      <ellipse cx="260" cy="210" rx="230" ry="190" fill="#F0EEE6" />
      <ellipse cx="260" cy="210" rx="160" ry="130" fill="#EEF0E0" opacity="0.4" />

      {/* drift card 1 — neutral */}
      <rect x="60" y="80" width="200" height="52" rx="12" fill="#FFFFFF" stroke="#E6E5DF" strokeWidth="1.5" />
      <rect x="76" y="96" width="96" height="9" rx="4.5" fill="#D8D7CF" />
      <rect x="76" y="111" width="62" height="7" rx="3.5" fill="#E8E7E0" />

      {/* drift card 2 — yellow / in progress */}
      <rect x="96" y="156" width="220" height="52" rx="12" fill="#FFFBEA" stroke="#F5D56A" strokeWidth="1.5" />
      <rect x="112" y="172" width="112" height="9" rx="4.5" fill="#E8C84A" />
      <rect x="112" y="187" width="76" height="7" rx="3.5" fill="#F0DC90" />
      <rect x="300" y="171" width="6" height="6" rx="3" fill="#F5D56A" />

      {/* drift card 3 — neutral, slightly faded */}
      <rect x="48" y="232" width="190" height="52" rx="12" fill="#FFFFFF" stroke="#E6E5DF" strokeWidth="1.5" opacity="0.85" />
      <rect x="64" y="248" width="106" height="9" rx="4.5" fill="#D8D7CF" />
      <rect x="64" y="263" width="70" height="7" rx="3.5" fill="#E8E7E0" />

      {/* drift card 4 — incoming, floating, lighter */}
      <rect x="256" y="124" width="174" height="46" rx="12" fill="#FFFFFF" stroke="#E6E5DF" strokeWidth="1.5" opacity="0.65" />
      <rect x="270" y="139" width="82" height="8" rx="4" fill="#D8D7CF" opacity="0.8" />
      <rect x="270" y="153" width="54" height="6" rx="3" fill="#E8E7E0" opacity="0.7" />

      {/* drift card 5 — farthest, most transparent */}
      <rect x="292" y="192" width="148" height="40" rx="10" fill="#FFFFFF" stroke="#E6E5DF" strokeWidth="1" opacity="0.4" />
      <rect x="304" y="206" width="72" height="7" rx="3.5" fill="#D8D7CF" opacity="0.5" />
      <rect x="304" y="218" width="48" height="5" rx="2.5" fill="#E8E7E0" opacity="0.4" />

      {/* soft dots — suggests more things still coming */}
      <circle cx="328" cy="288" r="5" fill="#E0DFD7" opacity="0.7" />
      <circle cx="346" cy="288" r="5" fill="#E0DFD7" opacity="0.45" />
      <circle cx="364" cy="288" r="5" fill="#E0DFD7" opacity="0.25" />

      {/* add button hint */}
      <circle cx="148" cy="318" r="22" fill="#2A2A27" opacity="0.07" />
      <line x1="139" y1="318" x2="157" y2="318" stroke="#2A2A27" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
      <line x1="148" y1="309" x2="148" y2="327" stroke="#2A2A27" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-[#EDECE5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#2A2A27] font-semibold text-lg tracking-tight select-none">
          Driftarama
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#8A8A82]">
          <a
            href="#how-it-works"
            className="hover:text-[#2A2A27] transition-colors duration-150"
          >
            How it works
          </a>
          <a
            href="#preview"
            className="hover:text-[#2A2A27] transition-colors duration-150"
          >
            Preview
          </a>
        </nav>
        <a
          href="#"
          className="text-sm bg-[#2A2A27] text-[#FAF9F6] px-4 py-2 rounded-lg hover:bg-[#3D3D38] transition-colors duration-150"
        >
          Get started
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="space-y-8">
        <div className="space-y-5">
          <h1 className="text-5xl md:text-[3.5rem] lg:text-6xl font-semibold leading-[1.08] tracking-tight text-[#2A2A27]">
            Before it slips,
            <br />
            <span className="text-[#9A9A92]">just drift it in.</span>
          </h1>
          <p className="text-xl text-[#7A7A72] leading-relaxed max-w-md">
            A lightweight place to hold everything on your mind — so you
            don&apos;t have to.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#2A2A27] text-[#FAF9F6] rounded-xl text-sm font-medium hover:bg-[#3D3D38] transition-colors duration-150"
          >
            Get started
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 text-[#5A5A52] border border-[#DDDCD5] rounded-xl text-sm font-medium hover:bg-[#F3F2ED] transition-colors duration-150"
          >
            See how it works
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <DriftIllustration />
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add a drift",
      description:
        "Drop anything in — a task, a thought, something you don't want to forget.",
    },
    {
      number: "02",
      title: "Let it sit",
      description: "No pressure. Come back when you're ready.",
    },
    {
      number: "03",
      title: "Pick up the thread",
      description: "Everything is still there — with context.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F3F2ED]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2A2A27]">
            How it works
          </h2>
          <p className="text-[#8A8A82] text-lg">
            Three steps. No learning curve.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#FAF9F6] rounded-2xl p-8 border border-[#EDECE5] shadow-sm"
            >
              <span className="text-5xl font-bold text-[#EDECE5] select-none block mb-6 leading-none">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-[#2A2A27] mb-3">
                {step.title}
              </h3>
              <p className="text-[#7A7A72] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Value Props ──────────────────────────────────────────────────────────────

function ValueProps() {
  const props = [
    {
      title: "Nothing slips",
      description:
        "Capture anything, anytime. Every thought gets a home — no matter how small or half-formed.",
    },
    {
      title: "No system to maintain",
      description:
        "No folders. No tags required. No rituals. Just drift things in and breathe.",
    },
    {
      title: "Your context stays with it",
      description:
        "Add notes, links, or details to any drift. It's all right there when you return.",
    },
    {
      title: "Private and simple.",
      description:
        "Yours alone. No sharing dashboards, no team chaos. A quiet space that belongs to you.",
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-5">
        {props.map((prop, i) => (
          <div
            key={i}
            className="bg-[#F8F7F2] rounded-2xl p-8 border border-[#EDECE5]"
          >
            <h3 className="text-xl font-semibold text-[#2A2A27] mb-3">
              {prop.title}
            </h3>
            <p className="text-[#7A7A72] leading-relaxed">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── UI Preview ───────────────────────────────────────────────────────────────

const drifts = [
  { id: 1, title: "Follow up with Sara re: contract", tag: null },
  { id: 2, title: "Research new onboarding flow", tag: "in-progress" },
  { id: 3, title: "Find a better standing desk", tag: null },
  { id: 4, title: "Read the Figma article", tag: null },
  { id: 5, title: "Dentist appointment — book it", tag: "urgent" },
  { id: 6, title: "Rename the main branch", tag: "done" },
];

function UIPreview() {
  return (
    <section id="preview" className="py-24 bg-[#F3F2ED]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2A2A27]">
            Simple by design
          </h2>
          <p className="text-[#8A8A82] text-lg max-w-sm mx-auto">
            A quiet list. A focused view. Nothing in the way.
          </p>
        </div>

        {/* Browser frame */}
        <div
          className="max-w-4xl mx-auto bg-[#FAF9F6] rounded-2xl shadow-xl border border-[#EDECE5] overflow-hidden"
          aria-hidden="true"
        >
          {/* Titlebar */}
          <div className="bg-[#F0EFE9] px-5 py-3.5 flex items-center gap-2 border-b border-[#EDECE5]">
            <span className="w-3 h-3 rounded-full bg-[#F5A5A5]" />
            <span className="w-3 h-3 rounded-full bg-[#F5D56A]" />
            <span className="w-3 h-3 rounded-full bg-[#98D4A3]" />
            <div className="ml-4 flex-1 max-w-50 bg-[#FAF9F6] border border-[#E6E5DF] rounded-md px-3 py-1 text-xs text-[#AEADA6] text-center">
              driftarama.app
            </div>
          </div>

          {/* App layout */}
          <div className="flex" style={{ height: "460px" }}>
            {/* Left: list pane */}
            <div className="w-64 md:w-72 shrink-0 border-r border-[#EDECE5] flex flex-col">
              <div className="px-4 py-3 border-b border-[#EDECE5] flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#AEADA6] uppercase tracking-widest">
                  My drifts
                </span>
                <div className="w-6 h-6 rounded-md bg-[#2A2A27] flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="1.5" x2="5" y2="8.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                {drifts.map((drift) => {
                  const isActive = drift.tag === "in-progress";
                  return (
                    <div
                      key={drift.id}
                      className={`mx-2 mb-1 px-3 py-2.5 rounded-lg flex items-start gap-2.5 ${
                        isActive
                          ? "bg-[#FFFBEA] border border-[#F5D56A]/60"
                          : "hover:bg-[#F3F2ED]"
                      }`}
                    >
                      <span className="text-xs text-[#C8C7BF] font-mono mt-0.5 w-4 shrink-0 text-right">
                        {drift.id}
                      </span>
                      <span
                        className={`text-sm leading-snug flex-1 ${
                          isActive
                            ? "text-[#2A2A27] font-medium"
                            : "text-[#6B6B64]"
                        }`}
                      >
                        {drift.title}
                      </span>
                      {drift.tag === "urgent" && (
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#F5A5A5]" />
                      )}
                      {drift.tag === "done" && (
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#98D4A3]" />
                      )}
                      {drift.tag === "in-progress" && (
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#F5D56A]" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: detail pane */}
            <div className="flex-1 p-6 overflow-y-auto space-y-5">
              <div>
                <span className="text-[10px] font-semibold text-[#AEADA6] uppercase tracking-widest">
                  Drift
                </span>
                <h3 className="text-xl font-semibold text-[#2A2A27] mt-1.5 leading-snug">
                  Research new onboarding flow
                </h3>
              </div>

              <div className="bg-[#F3F2ED] rounded-xl p-4">
                <p className="text-sm text-[#7A7A72] leading-relaxed">
                  Looking at what Notion, Linear, and Superhuman do in their first
                  5 minutes. What&apos;s the moment of delight? How do they build
                  the habit?
                </p>
              </div>

              <div className="space-y-2.5">
                <span className="text-[10px] font-semibold text-[#AEADA6] uppercase tracking-widest block">
                  Notes
                </span>
                <div className="space-y-2 text-sm text-[#6B6B64]">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#C8C7BF] mt-0.5 shrink-0">—</span>
                    <span>
                      Linear sends an email 2 days in asking what you&apos;re
                      using it for
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#C8C7BF] mt-0.5 shrink-0">—</span>
                    <span>Notion progressive disclosure model is worth studying</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#C8C7BF] mt-0.5 shrink-0">—</span>
                    <span>Talk to 3 people who churned in week 1</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#FFFBEA] text-[#9A8030] border border-[#F5D56A]/50 font-medium">
                  in progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Drifting In ──────────────────────────────────────────────────────────────

function DriftingIn() {
  const sources = [
    { label: "An email thread that sparked an idea" },
    { label: "A thought that surfaced in the shower" },
    { label: "Something a colleague said in passing" },
    { label: "A link someone sent you" },
    { label: "A task you don't want to forget" },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2A2A27] leading-tight">
            Things come from everywhere.
          </h2>
          <p className="text-lg text-[#7A7A72] leading-relaxed">
            They don&apos;t need to be organized immediately. They just drift
            in — and you attach context later, when you&apos;re ready.
          </p>
          <p className="text-[#9A9A92] leading-relaxed">
            No inbox to zero. No system to maintain. Just a quiet, waiting
            place that holds things exactly as you left them.
          </p>
        </div>
        <div className="space-y-2.5">
          {sources.map((source, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#F8F7F2] rounded-xl px-5 py-4 border border-[#EDECE5]"
              style={{ opacity: Math.max(0.35, 1 - i * 0.15) }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <circle cx="7" cy="7" r="6" stroke="#C8C7BF" strokeWidth="1.5" />
                <circle cx="7" cy="7" r="2.5" fill="#C8C7BF" />
              </svg>
              <span className="text-[#6B6B64] text-sm">{source.label}</span>
              <span className="ml-auto text-[#C8C7BF] text-xs tracking-wide shrink-0">
                drifts in →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const quotes = [
    {
      quote: "I finally stopped worrying about forgetting things.",
      name: "Maya L.",
      role: "Designer",
    },
    {
      quote: "It's the first tool that doesn't make me feel behind.",
      name: "Daniel O.",
      role: "Engineer",
    },
    {
      quote: "I just drop things in and move on. That's it.",
      name: "Sam R.",
      role: "Founder",
    },
  ];

  return (
    <section className="py-24 bg-[#F3F2ED]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="bg-[#FAF9F6] rounded-2xl p-8 border border-[#EDECE5] flex flex-col gap-6"
            >
              <p className="text-[#3A3A35] text-lg leading-relaxed flex-1">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-[#2A2A27]">{q.name}</p>
                <p className="text-sm text-[#AEADA6]">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Closing CTA ──────────────────────────────────────────────────────────────

function ClosingCTA() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#2A2A27] leading-tight">
          Carry less.
          <br />
          Keep everything.
        </h2>
        <p className="text-lg text-[#8A8A82]">
          Start drifting things in. No setup. No commitment.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2A2A27] text-[#FAF9F6] rounded-xl text-base font-medium hover:bg-[#3D3D38] transition-colors duration-150"
        >
          Start drifting things in
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#EDECE5] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[#2A2A27] font-semibold tracking-tight">
          Driftarama
        </span>
        <p className="text-sm text-[#AEADA6]">
          A quiet place for things that matter.
        </p>
        <p className="text-sm text-[#C8C7BF]">© 2025 Driftarama</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#FAF9F6] text-[#2A2A27]">
      <Nav />
      <Hero />
      <HowItWorks />
      <ValueProps />
      <UIPreview />
      <DriftingIn />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
