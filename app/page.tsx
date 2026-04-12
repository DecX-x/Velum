"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-headline font-bold tracking-tighter leading-[0.95] sm:leading-tight mb-4 sm:mb-6">
              Private treasury allocation for{" "}
              <span className="text-primary">on-chain capital</span>.
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-xl max-w-xl font-body leading-relaxed mb-6 sm:mb-8">
              Velum helps DAOs and on-chain treasuries allocate capital
              confidentially using iExec Nox and Confidential Tokens on Arbitrum
              Sepolia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/dashboard"
                className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-headline font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all duration-300 ease-kinetic shadow-[0_0_40px_rgba(178,240,81,0.15)] text-center animate-pulse-glow"
              >
                Launch App
              </Link>
              <button className="bg-transparent border border-outline-variant/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-headline font-bold text-sm sm:text-base hover:bg-white/5 transition-all duration-300 ease-kinetic btn-hover">
                Watch Demo Flow
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end animate-fade-in-right delay-200">
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
              <div className="text-2xl sm:text-3xl font-headline font-medium text-white mb-2">
                Confidential
              </div>
              <div className="text-on-surface-variant font-label text-xs sm:text-sm uppercase tracking-widest">
                Treasury Management
              </div>
            </div>
          </div>
        </div>

        {/* 3-Panel Product Mockup */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Panel 1 - Confidential Treasury Balance */}
          <div className="h-[380px] sm:h-[420px] rounded-xl overflow-hidden relative group bg-surface-container border border-outline-variant/15 card-hover animate-fade-in-up delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="text-on-surface-variant text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 font-label">
                Treasury Balance
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-body text-xs sm:text-sm">
                    ETH
                  </span>
                  <span className="text-primary font-headline text-lg sm:text-2xl font-bold tracking-wider">
                    ••••••
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-body text-xs sm:text-sm">
                    USDC
                  </span>
                  <span className="text-primary font-headline text-lg sm:text-2xl font-bold tracking-wider">
                    ••••••
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-body text-xs sm:text-sm">
                    ARB
                  </span>
                  <span className="text-white font-headline text-base sm:text-xl font-medium">
                    12,450
                  </span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] sm:text-xs font-label">
                  Decrypted for you
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="text-white/40 font-headline text-base sm:text-lg font-bold mb-1">
                Confidential Balance View
              </div>
              <p className="text-white/50 text-xs sm:text-sm">
                Real-time treasury positions with privacy controls.
              </p>
            </div>
          </div>

          {/* Panel 2 - Strategy Allocation Cards */}
          <div className="h-[420px] sm:h-[480px] md:-mt-4 lg:-mt-6 rounded-xl overflow-hidden relative group bg-surface-container-high shadow-2xl border border-primary/20 card-hover animate-fade-in-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="text-on-surface-variant text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 font-label">
                Strategy Allocation
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-surface-container-lowest/50 rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-body text-xs sm:text-sm font-medium">
                      Yield Farming
                    </span>
                    <span className="text-primary font-headline text-sm sm:text-base font-bold">
                      ••••••
                    </span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-body text-xs sm:text-sm font-medium">
                      Liquidity Mining
                    </span>
                    <span className="text-primary font-headline text-sm sm:text-base font-bold">
                      ••••••
                    </span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-body text-xs sm:text-sm font-medium">
                      Treasury Reserve
                    </span>
                    <span className="text-primary font-headline text-sm sm:text-base font-bold">
                      ••••••
                    </span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-tertiary-fixed rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="text-white font-headline text-lg sm:text-xl font-bold mb-1">
                Private Allocations
              </div>
              <p className="text-white/60 text-xs sm:text-sm">
                Allocate capital without revealing your strategy.
              </p>
            </div>
          </div>

          {/* Panel 3 - Disclosure Panel */}
          <div className="h-[380px] sm:h-[420px] rounded-xl overflow-hidden relative group bg-surface-container border border-outline-variant/15 card-hover animate-fade-in-up delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="text-on-surface-variant text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 font-label">
                Auditor Disclosure
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between bg-surface-container-lowest/30 rounded-lg p-2.5 sm:p-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm sm:text-lg">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-xs sm:text-sm font-medium">
                        External Auditor
                      </div>
                      <div className="text-white/40 text-[10px] sm:text-xs">
                        Full access
                      </div>
                    </div>
                  </div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between bg-surface-container-lowest/30 rounded-lg p-2.5 sm:p-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-white/60 text-sm sm:text-lg">
                        schedule
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-xs sm:text-sm font-medium">
                        Finance Committee
                      </div>
                      <div className="text-white/40 text-[10px] sm:text-xs">
                        Pending
                      </div>
                    </div>
                  </div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-tertiary-fixed"></div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-lg bg-surface-container-lowest/50">
                <div className="flex items-center gap-2 text-tertiary-fixed">
                  <span className="material-symbols-outlined text-xs sm:text-sm animate-spin">
                    sync
                  </span>
                  <span className="text-[10px] sm:text-xs">
                    Refreshing confidential state...
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="text-primary font-headline text-base sm:text-lg font-bold mb-1">
                Selective Disclosure
              </div>
              <p className="text-white/50 text-xs sm:text-sm">
                Grant view access to authorized parties only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4 sm:mb-6 max-w-2xl animate-fade-in-up">
            Treasury allocations shouldn&apos;t be{" "}
            <span className="text-primary">public knowledge</span>.
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg mb-8 sm:mb-16 max-w-xl animate-fade-in-up delay-100">
            Traditional on-chain treasuries expose every move. Velum keeps your
            strategy private while maintaining transparency where it matters.
          </p>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Traditional Treasury */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-error/30 card-hover animate-fade-in-left delay-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-error text-2xl sm:text-3xl">
                  warning
                </span>
                <div>
                  <div className="text-error font-headline font-bold text-xs sm:text-sm uppercase tracking-widest">
                    Traditional Treasury
                  </div>
                  <div className="text-white/40 text-xs sm:text-sm">
                    Everything exposed
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-error text-lg sm:text-xl">
                    close
                  </span>
                  <span>Public balances visible to anyone</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-error text-lg sm:text-xl">
                    close
                  </span>
                  <span>Allocation sizes are on-chain data</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-error text-lg sm:text-xl">
                    close
                  </span>
                  <span>Competitors can infer positioning</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-error text-lg sm:text-xl">
                    close
                  </span>
                  <span>Large moves invite copy-trading</span>
                </div>
              </div>
            </div>

            {/* Velum Treasury */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-xl border-2 border-primary card-hover animate-fade-in-right delay-200">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                  shield
                </span>
                <div>
                  <div className="text-primary font-headline font-bold text-xs sm:text-sm uppercase tracking-widest">
                    Velum Treasury
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    Privacy with accountability
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                    check
                  </span>
                  <span>Public actions, confidential amounts</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                    check
                  </span>
                  <span>Private strategy allocation</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                    check
                  </span>
                  <span>Selective disclosure to auditors</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                    check
                  </span>
                  <span>Zero signaling risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-surface-container-high p-6 sm:p-8 rounded-xl card-hover animate-fade-in-up delay-200">
              <span className="material-symbols-outlined text-error text-3xl sm:text-4xl mb-3 sm:mb-4 block">
                visibility
              </span>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                Treasury Allocations Are Public
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Every token transfer and balance is visible on-chain, making it
                easy for competitors to track your moves.
              </p>
            </div>
            <div className="bg-surface-container-high p-6 sm:p-8 rounded-xl card-hover animate-fade-in-up delay-300">
              <span className="material-symbols-outlined text-error text-3xl sm:text-4xl mb-3 sm:mb-4 block">
                sync_alt
              </span>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                Competitors Can Infer Positioning
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Large allocations signal your market thesis, allowing others to
                front-run or copy your strategy.
              </p>
            </div>
            <div className="bg-surface-container-high p-6 sm:p-8 rounded-xl card-hover animate-fade-in-up delay-400 sm:col-span-2 lg:col-span-1">
              <span className="material-symbols-outlined text-error text-3xl sm:text-4xl mb-3 sm:mb-4 block">
                groups
              </span>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                Auditors Still Need Visibility
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Privacy can&apos;t come at the cost of compliance. Auditors and
                committees require transparent access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20">
          <div className="md:w-1/3 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-4 sm:mb-8 md:sticky md:top-32">
              How it <span className="text-primary">works</span>
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base">
              A simple four-step flow to confidential treasury management on
              Arbitrum Sepolia.
            </p>
          </div>
          <div className="md:w-2/3 space-y-12 sm:space-y-16 md:space-y-20">
            {/* Step 1 */}
            <div className="relative pl-10 sm:pl-12 border-l border-outline-variant/30 animate-fade-in-up delay-100">
              <div className="absolute -left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(178,240,81,0.5)] flex items-center justify-center text-on-primary text-[10px] sm:text-xs font-bold animate-pulse-glow">
                1
              </div>
              <div className="text-primary font-headline font-bold text-xs sm:text-sm mb-2">
                STEP 01
              </div>
              <h4 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4">
                Wrap Tokens into Confidential Assets
              </h4>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Convert your standard tokens into confidential tokens using the
                Nox protocol. Your assets remain on-chain but values are
                encrypted.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-10 sm:pl-12 border-l border-outline-variant/30 animate-fade-in-up delay-200">
              <div className="absolute -left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary text-[10px] sm:text-xs font-bold">
                2
              </div>
              <div className="text-primary font-headline font-bold text-xs sm:text-sm mb-2">
                STEP 02
              </div>
              <h4 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4">
                Deposit into Treasury
              </h4>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Fund your treasury with confidential tokens. All deposits are
                recorded on-chain, but amounts remain private.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-10 sm:pl-12 border-l border-outline-variant/30 animate-fade-in-up delay-300">
              <div className="absolute -left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary text-[10px] sm:text-xs font-bold">
                3
              </div>
              <div className="text-primary font-headline font-bold text-xs sm:text-sm mb-2">
                STEP 03
              </div>
              <h4 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4">
                Allocate Privately Across Strategies
              </h4>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Distribute capital to yield farming, liquidity mining, or other
                strategies without revealing allocation sizes to the public.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative pl-10 sm:pl-12 border-l border-outline-variant/30 animate-fade-in-up delay-400">
              <div className="absolute -left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary text-[10px] sm:text-xs font-bold">
                4
              </div>
              <div className="text-primary font-headline font-bold text-xs sm:text-sm mb-2">
                STEP 04
              </div>
              <h4 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4">
                Grant Disclosure to Auditors
              </h4>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Selectively reveal treasury positions to authorized auditors or
                committee members. Maintain compliance without public exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-8 sm:mb-16 text-center animate-fade-in-up">
            Built for <span className="text-primary">confidential</span>{" "}
            operations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Feature 1 */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 card-hover animate-fade-in-up delay-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                  account_balance_wallet
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                Confidential Treasury Balances
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Keep your treasury positions private. Only authorized viewers can
                see actual amounts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 card-hover animate-fade-in-up delay-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                  pie_chart
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                Private Strategy Allocation
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Allocate across strategies without revealing your position sizes
                or market thesis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 card-hover animate-fade-in-up delay-300 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                  key
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                Selective Disclosure
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Grant view access to specific auditors, committee members, or
                stakeholders on-demand.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 card-hover animate-fade-in-up delay-400">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                  laptop_mac
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                Browser-Based Wallet Flow
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                No complex setup. Connect your wallet and manage confidential
                treasury directly in your browser.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 card-hover animate-fade-in-up delay-500">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                  link
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                On-Chain Activity, Hidden Amounts
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                All actions are recorded on-chain for transparency, but amounts
                remain encrypted and confidential.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 card-hover animate-fade-in-up delay-600 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                  smart_toy
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-headline font-bold mb-2 sm:mb-3">
                AI Audit Assistant
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Powered by ChainGPT for intelligent audit assistance and
                compliance verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 sm:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4 sm:mb-6">
              Architecture <span className="text-primary">Overview</span>
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base max-w-2xl mx-auto">
              Velum encrypts treasury actions client-side, processes confidential
              logic on Nox-compatible infrastructure, and reveals values only to
              authorized viewers.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-surface-container p-4 sm:p-8 md:p-12 rounded-xl border border-outline-variant/10 overflow-x-auto animate-fade-in-up delay-200 card-hover">
            <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[300px]">
              {/* Top Row */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                <div className="bg-surface-container-lowest px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-outline-variant/20 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(178,240,81,0.1)]">
                  <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mb-0.5 sm:mb-1">
                    User
                  </div>
                  <div className="text-white font-headline font-bold text-sm sm:text-base">
                    Wallet
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl animate-pulse">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-primary/20 px-3 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-primary text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,240,81,0.2)]">
                  <div className="text-[10px] sm:text-xs text-primary uppercase tracking-widest mb-0.5 sm:mb-1">
                    Application
                  </div>
                  <div className="text-white font-headline font-bold text-sm sm:text-base">
                    Velum App
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl animate-pulse">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-surface-container-lowest px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-outline-variant/20 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(178,240,81,0.1)]">
                  <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mb-0.5 sm:mb-1">
                    SDK
                  </div>
                  <div className="text-white font-headline font-bold text-sm sm:text-base">
                    Nox JS SDK
                  </div>
                </div>
              </div>

              {/* Middle Row */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                <div className="bg-surface-container-lowest px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-outline-variant/20 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(178,240,81,0.1)]">
                  <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mb-0.5 sm:mb-1">
                    Smart Contracts
                  </div>
                  <div className="text-white font-headline font-bold text-sm sm:text-base">
                    Velum Contracts
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl animate-pulse">
                    sync_alt
                  </span>
                </div>
                <div className="bg-secondary/20 px-3 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-secondary text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(223,236,95,0.2)]">
                  <div className="text-[10px] sm:text-xs text-secondary uppercase tracking-widest mb-0.5 sm:mb-1">
                    Infrastructure
                  </div>
                  <div className="text-white font-headline font-bold text-sm sm:text-base">
                    Nox / TEE
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="bg-tertiary-fixed/20 px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-tertiary-fixed/40 text-center transition-all duration-300 hover:border-tertiary-fixed/60">
                  <div className="text-[10px] sm:text-xs text-tertiary-fixed uppercase tracking-widest mb-0.5 sm:mb-1">
                    Network
                  </div>
                  <div className="text-white font-headline font-bold text-sm sm:text-base">
                    Arbitrum Sepolia
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl animate-pulse">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-error/20 px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-error/40 text-center transition-all duration-300 hover:border-error/60">
                  <div className="text-[10px] sm:text-xs text-error uppercase tracking-widest mb-0.5 sm:mb-1">
                    AI Partner
                  </div>
                  <div className="text-white font-headline font-bold text-sm sm:text-base">
                    ChainGPT Auditor
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-12 pt-6 sm:pt-8 border-t border-outline-variant/20">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-on-surface-variant">
                <div className="flex items-center gap-1.5 sm:gap-2 animate-fade-in delay-100">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse"></span>
                  <span>Client-Side Encryption</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 animate-fade-in delay-200">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary animate-pulse"></span>
                  <span>TEE Processing</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 animate-fade-in delay-300">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-tertiary-fixed animate-pulse"></span>
                  <span>L2 Settlement</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 animate-fade-in delay-400">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-error animate-pulse"></span>
                  <span>AI-Assisted Auditing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter mb-4 sm:mb-8 text-center animate-fade-in-up">
            Try the <span className="text-primary">live demo</span>
          </h2>
          <p className="text-on-surface-variant text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto animate-fade-in-up delay-100">
            Experience confidential treasury management in minutes. No setup
            required.
          </p>

          {/* Checklist */}
          <div className="bg-surface-container p-6 sm:p-8 rounded-xl mb-8 sm:mb-12 max-w-lg mx-auto card-hover animate-fade-in-up delay-200">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm sm:text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body text-sm sm:text-base">
                  Connect wallet
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm sm:text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body text-sm sm:text-base">
                  Wrap token
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm sm:text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body text-sm sm:text-base">
                  Allocate privately
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm sm:text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body text-sm sm:text-base">
                  Reveal to auditor
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-up delay-300">
            <Link
              href="/dashboard"
              className="bg-primary text-on-primary px-8 sm:px-12 py-4 sm:py-5 rounded-full font-headline font-bold text-base sm:text-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-kinetic shadow-[0_0_64px_rgba(178,240,81,0.2)] animate-pulse-glow"
            >
              Open the Live App
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 sm:py-16 px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 bg-[#0e0e0e] border-t border-outline-variant/10 rounded-t-[32px]">
        <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 animate-fade-in-up">
          <div className="text-lg sm:text-xl font-black text-white font-headline">
            Velum
          </div>
          <p className="font-headline text-[10px] sm:text-xs tracking-widest uppercase text-white/40">
            Confidential Treasury Management
          </p>
          <div className="flex items-center gap-2 mt-1 sm:mt-2">
            <span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant text-[10px] sm:text-xs">
              Arbitrum Sepolia
            </span>
            <span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant text-[10px] sm:text-xs">
              Demo Environment
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 animate-fade-in-up delay-100">
          <a
            className="font-headline text-[10px] sm:text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-headline text-[10px] sm:text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300"
            href="#"
          >
            Docs
          </a>
          <a
            className="font-headline text-[10px] sm:text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300"
            href="#"
          >
            Demo Video
          </a>
          <a
            className="font-headline text-[10px] sm:text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300"
            href="#"
          >
            X / Twitter
          </a>
          <a
            className="font-headline text-[10px] sm:text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300"
            href="#"
          >
            Credits
          </a>
        </div>
      </footer>
    </div>
  );
}
