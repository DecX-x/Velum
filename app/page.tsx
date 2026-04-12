import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 max-w-6xl mx-auto rounded-full mt-6 bg-[#131313]/80 backdrop-blur-xl shadow-[0_0_64px_rgba(190,253,93,0.06)]">
        <div className="text-2xl font-bold text-white tracking-tighter font-headline">
          Velum
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="text-[#befd5d] font-bold border-b-2 border-[#befd5d] pb-1 font-headline tracking-tight text-sm font-medium hover:scale-105 transition-all duration-300 ease-kinetic"
            href="#"
          >
            Solutions
          </a>
          <a
            className="text-white/70 hover:text-white font-headline tracking-tight text-sm font-medium hover:scale-105 transition-all duration-300 ease-kinetic"
            href="#"
          >
            Tech
          </a>
          <a
            className="text-white/70 hover:text-white font-headline tracking-tight text-sm font-medium hover:scale-105 transition-all duration-300 ease-kinetic"
            href="#"
          >
            Docs
          </a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-headline font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-300 ease-kinetic">
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container text-on-surface-variant font-label text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Built on iExec Nox
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container text-on-surface-variant font-label text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Confidential Tokens
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container text-on-surface-variant font-label text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                Arbitrum Sepolia
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container text-on-surface-variant font-label text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                AI-assisted with ChainGPT
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.95] mb-6">
              Private treasury allocation for{" "}
              <span className="text-primary">on-chain capital</span>.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl font-body leading-relaxed mb-8">
              Velum helps DAOs and on-chain treasuries allocate capital
              confidentially using iExec Nox and Confidential Tokens on Arbitrum
              Sepolia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base hover:scale-105 active:scale-95 transition-all duration-300 ease-kinetic shadow-[0_0_40px_rgba(178,240,81,0.15)]">
                Launch App
              </button>
              <button className="bg-transparent border border-outline-variant/40 text-white px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-white/5 transition-all duration-300 ease-kinetic">
                Watch Demo Flow
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <div className="flex flex-col items-end text-right">
              <div className="text-3xl font-headline font-medium text-white mb-2">
                Confidential
              </div>
              <div className="text-on-surface-variant font-label text-sm uppercase tracking-widest">
                Treasury Management
              </div>
            </div>
          </div>
        </div>

        {/* 3-Panel Product Mockup */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Panel 1 - Confidential Treasury Balance */}
          <div className="h-[420px] rounded-xl overflow-hidden relative group bg-surface-container border border-outline-variant/15">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="absolute top-6 left-6 right-6">
              <div className="text-on-surface-variant text-xs uppercase tracking-widest mb-4 font-label">
                Treasury Balance
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-body text-sm">ETH</span>
                  <span className="text-primary font-headline text-2xl font-bold tracking-wider">
                    ••••••
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-body text-sm">USDC</span>
                  <span className="text-primary font-headline text-2xl font-bold tracking-wider">
                    ••••••
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-body text-sm">ARB</span>
                  <span className="text-white font-headline text-xl font-medium">
                    12,450
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-label">
                  Decrypted for you
                </span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white/40 font-headline text-lg font-bold mb-1">
                Confidential Balance View
              </div>
              <p className="text-white/50 text-sm">
                Real-time treasury positions with privacy controls.
              </p>
            </div>
          </div>

          {/* Panel 2 - Strategy Allocation Cards */}
          <div className="h-[480px] md:-mt-6 rounded-xl overflow-hidden relative group bg-surface-container-high shadow-2xl border border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <div className="absolute top-6 left-6 right-6">
              <div className="text-on-surface-variant text-xs uppercase tracking-widest mb-4 font-label">
                Strategy Allocation
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-body text-sm font-medium">
                      Yield Farming
                    </span>
                    <span className="text-primary font-headline font-bold">
                      ••••••
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-body text-sm font-medium">
                      Liquidity Mining
                    </span>
                    <span className="text-primary font-headline font-bold">
                      ••••••
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-body text-sm font-medium">
                      Treasury Reserve
                    </span>
                    <span className="text-primary font-headline font-bold">
                      ••••••
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-tertiary-fixed rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white font-headline text-xl font-bold mb-1">
                Private Allocations
              </div>
              <p className="text-white/60 text-sm">
                Allocate capital without revealing your strategy.
              </p>
            </div>
          </div>

          {/* Panel 3 - Disclosure Panel */}
          <div className="h-[420px] rounded-xl overflow-hidden relative group bg-surface-container border border-outline-variant/15">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
            <div className="absolute top-6 left-6 right-6">
              <div className="text-on-surface-variant text-xs uppercase tracking-widest mb-4 font-label">
                Auditor Disclosure
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-surface-container-lowest/30 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-lg">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">
                        External Auditor
                      </div>
                      <div className="text-white/40 text-xs">Full access</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between bg-surface-container-lowest/30 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-white/60 text-lg">
                        schedule
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">
                        Finance Committee
                      </div>
                      <div className="text-white/40 text-xs">Pending</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-tertiary-fixed"></div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-surface-container-lowest/50">
                <div className="flex items-center gap-2 text-tertiary-fixed">
                  <span className="material-symbols-outlined text-sm animate-spin">
                    sync
                  </span>
                  <span className="text-xs">
                    Refreshing confidential state...
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-primary font-headline text-lg font-bold mb-1">
                Selective Disclosure
              </div>
              <p className="text-white/50 text-sm">
                Grant view access to authorized parties only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 max-w-2xl">
            Treasury allocations shouldn&apos;t be{" "}
            <span className="text-primary">public knowledge</span>.
          </h2>
          <p className="text-on-surface-variant text-lg mb-16 max-w-xl">
            Traditional on-chain treasuries expose every move. Velum keeps your
            strategy private while maintaining transparency where it matters.
          </p>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Traditional Treasury */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-error/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-error text-3xl">
                  warning
                </span>
                <div>
                  <div className="text-error font-headline font-bold text-sm uppercase tracking-widest">
                    Traditional Treasury
                  </div>
                  <div className="text-white/40 text-sm">Everything exposed</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <span className="material-symbols-outlined text-error text-xl">
                    close
                  </span>
                  <span>Public balances visible to anyone</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <span className="material-symbols-outlined text-error text-xl">
                    close
                  </span>
                  <span>Allocation sizes are on-chain data</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <span className="material-symbols-outlined text-error text-xl">
                    close
                  </span>
                  <span>Competitors can infer positioning</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <span className="material-symbols-outlined text-error text-xl">
                    close
                  </span>
                  <span>Large moves invite copy-trading</span>
                </div>
              </div>
            </div>

            {/* Velum Treasury */}
            <div className="bg-surface-container p-8 rounded-xl border-2 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  shield
                </span>
                <div>
                  <div className="text-primary font-headline font-bold text-sm uppercase tracking-widest">
                    Velum Treasury
                  </div>
                  <div className="text-white/60 text-sm">
                    Privacy with accountability
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check
                  </span>
                  <span>Public actions, confidential amounts</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check
                  </span>
                  <span>Private strategy allocation</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check
                  </span>
                  <span>Selective disclosure to auditors</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check
                  </span>
                  <span>Zero signaling risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-surface-container-high p-8 rounded-xl">
              <span className="material-symbols-outlined text-error text-4xl mb-4 block">
                visibility
              </span>
              <h3 className="text-xl font-headline font-bold mb-3">
                Treasury Allocations Are Public
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Every token transfer and balance is visible on-chain, making it
                easy for competitors to track your moves.
              </p>
            </div>
            <div className="md:col-span-1 bg-surface-container-high p-8 rounded-xl">
              <span className="material-symbols-outlined text-error text-4xl mb-4 block">
                sync_alt
              </span>
              <h3 className="text-xl font-headline font-bold mb-3">
                Competitors Can Infer Positioning
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Large allocations signal your market thesis, allowing others to
                front-run or copy your strategy.
              </p>
            </div>
            <div className="md:col-span-1 bg-surface-container-high p-8 rounded-xl">
              <span className="material-symbols-outlined text-error text-4xl mb-4 block">
                groups
              </span>
              <h3 className="text-xl font-headline font-bold mb-3">
                Auditors Still Need Visibility
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Privacy can&apos;t come at the cost of compliance. Auditors and
                committees require transparent access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 sticky top-32">
              How it <span className="text-primary">works</span>
            </h2>
            <p className="text-on-surface-variant">
              A simple four-step flow to confidential treasury management on
              Arbitrum Sepolia.
            </p>
          </div>
          <div className="md:w-2/3 space-y-20">
            {/* Step 1 */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(178,240,81,0.5)] flex items-center justify-center text-on-primary text-xs font-bold">
                1
              </div>
              <div className="text-primary font-headline font-bold mb-2">
                STEP 01
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">
                Wrap Tokens into Confidential Assets
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Convert your standard tokens into confidential tokens using the
                Nox protocol. Your assets remain on-chain but values are
                encrypted.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">
                2
              </div>
              <div className="text-primary font-headline font-bold mb-2">
                STEP 02
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">
                Deposit into Treasury
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Fund your treasury with confidential tokens. All deposits are
                recorded on-chain, but amounts remain private.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">
                3
              </div>
              <div className="text-primary font-headline font-bold mb-2">
                STEP 03
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">
                Allocate Privately Across Strategies
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Distribute capital to yield farming, liquidity mining, or other
                strategies without revealing allocation sizes to the public.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">
                4
              </div>
              <div className="text-primary font-headline font-bold mb-2">
                STEP 04
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">
                Grant Disclosure to Auditors
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Selectively reveal treasury positions to authorized auditors or
                committee members. Maintain compliance without public exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16 text-center">
            Built for <span className="text-primary">confidential</span>{" "}
            operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  account_balance_wallet
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">
                Confidential Treasury Balances
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Keep your treasury positions private. Only authorized viewers can
                see actual amounts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  pie_chart
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">
                Private Strategy Allocation
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Allocate across strategies without revealing your position sizes
                or market thesis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  key
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">
                Selective Disclosure
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Grant view access to specific auditors, committee members, or
                stakeholders on-demand.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  laptop_mac
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">
                Browser-Based Wallet Flow
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                No complex setup. Connect your wallet and manage confidential
                treasury directly in your browser.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  link
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">
                On-Chain Activity, Hidden Amounts
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                All actions are recorded on-chain for transparency, but amounts
                remain encrypted and confidential.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  smart_toy
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">
                AI Audit Assistant
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Powered by ChainGPT for intelligent audit assistance and
                compliance verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Architecture <span className="text-primary">Overview</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Velum encrypts treasury actions client-side, processes confidential
              logic on Nox-compatible infrastructure, and reveals values only to
              authorized viewers.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-surface-container p-8 md:p-12 rounded-xl border border-outline-variant/10">
            <div className="flex flex-col items-center gap-4">
              {/* Top Row */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-surface-container-lowest px-6 py-3 rounded-lg border border-outline-variant/20 text-center">
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    User
                  </div>
                  <div className="text-white font-headline font-bold">Wallet</div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-primary/20 px-6 py-3 rounded-lg border-2 border-primary text-center">
                  <div className="text-xs text-primary uppercase tracking-widest mb-1">
                    Application
                  </div>
                  <div className="text-white font-headline font-bold">
                    Velum App
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-surface-container-lowest px-6 py-3 rounded-lg border border-outline-variant/20 text-center">
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    SDK
                  </div>
                  <div className="text-white font-headline font-bold">
                    Nox JS SDK
                  </div>
                </div>
              </div>

              {/* Middle Row */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-surface-container-lowest px-6 py-3 rounded-lg border border-outline-variant/20 text-center">
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Smart Contracts
                  </div>
                  <div className="text-white font-headline font-bold">
                    Velum Contracts
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary">
                    sync_alt
                  </span>
                </div>
                <div className="bg-secondary/20 px-6 py-3 rounded-lg border-2 border-secondary text-center">
                  <div className="text-xs text-secondary uppercase tracking-widest mb-1">
                    Infrastructure
                  </div>
                  <div className="text-white font-headline font-bold">
                    Nox / TEE
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-tertiary-fixed/20 px-6 py-3 rounded-lg border border-tertiary-fixed/40 text-center">
                  <div className="text-xs text-tertiary-fixed uppercase tracking-widest mb-1">
                    Network
                  </div>
                  <div className="text-white font-headline font-bold">
                    Arbitrum Sepolia
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-primary">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-error/20 px-6 py-3 rounded-lg border border-error/40 text-center">
                  <div className="text-xs text-error uppercase tracking-widest mb-1">
                    AI Partner
                  </div>
                  <div className="text-white font-headline font-bold">
                    ChainGPT Auditor
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-outline-variant/20">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Client-Side Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span>TEE Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary-fixed"></span>
                  <span>L2 Settlement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error"></span>
                  <span>AI-Assisted Auditing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-8 text-center">
            Try the <span className="text-primary">live demo</span>
          </h2>
          <p className="text-on-surface-variant text-center text-lg mb-12 max-w-xl mx-auto">
            Experience confidential treasury management in minutes. No setup
            required.
          </p>

          {/* Checklist */}
          <div className="bg-surface-container p-8 rounded-xl mb-12 max-w-lg mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body">Connect wallet</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body">Wrap token</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body">Allocate privately</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check
                  </span>
                </div>
                <span className="text-white font-body">Reveal to auditor</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-headline font-bold text-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-kinetic shadow-[0_0_64px_rgba(178,240,81,0.2)]">
              Open the Live App
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#0e0e0e] border-t border-outline-variant/10 rounded-t-[32px]">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-black text-white font-headline">
            Velum
          </div>
          <p className="font-headline text-xs tracking-widest uppercase text-white/40">
            Confidential Treasury Management
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant text-xs">
              Arbitrum Sepolia
            </span>
            <span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant text-xs">
              Demo Environment
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-200"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-200"
            href="#"
          >
            Docs
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-200"
            href="#"
          >
            Demo Video
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-200"
            href="#"
          >
            X / Twitter
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-200"
            href="#"
          >
            Credits
          </a>
        </div>
      </footer>
    </div>
  );
}
