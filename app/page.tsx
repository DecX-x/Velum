import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 max-w-6xl mx-auto rounded-full mt-6 mx-4 bg-[#131313]/80 backdrop-blur-xl shadow-[0_0_64px_rgba(190,253,93,0.06)]">
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
            <span className="inline-block px-4 py-1 rounded-sm bg-secondary-container text-on-secondary-container font-label text-xs tracking-widest uppercase mb-6">
              Institutional Grade Architecture
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] mb-8">
              Kinetic <span className="text-primary">Capital</span> Control.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-xl font-body leading-relaxed">
              Velum provides the technical infrastructure for sub-millisecond
              execution and institutional-grade custody in the decentralized
              landscape.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <div className="flex flex-col items-end text-right">
              <div className="text-4xl font-headline font-medium text-white mb-2">
                $4.2B+
              </div>
              <div className="text-on-surface-variant font-label text-sm uppercase tracking-widest">
                Total Value Secured
              </div>
            </div>
          </div>
        </div>

        {/* 3-Panel Product Mockup */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-[500px] rounded-xl overflow-hidden relative group bg-surface-container border border-outline-variant/15">
            <Image
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEpUadjx73thj1iM4frgI3Afmcu4qgk3zccg8CEZG_Hd6jyEszVgFMJzJzcUIezIOywXGtHz2W-GwmSMqB2H5UDakmURAa04F391XIIqTkyVjqTOtyHtPYBgBc5XJC-w5_rgQ3m7FzE38T20YUn9H7y29jlxaz1_I6AYkvWXt2RMCUzgpDnXuXAmjOJllZ8eslisiOhELj97Rwp1-0J8vMmhh1mZ-0cNidUZMqPNPPo3rCTYTlM9j3J0jrPwgl03ZVperYG4fJ-Mk"
              alt="Terminal View"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-primary font-headline text-2xl font-bold mb-2">
                Terminal View
              </div>
              <p className="text-white/70 text-sm">
                Real-time liquidity monitoring across global decentralized pools.
              </p>
            </div>
          </div>

          <div className="h-[550px] md:-mt-10 rounded-xl overflow-hidden relative group bg-surface-container-high shadow-2xl border border-primary/20">
            <Image
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIo5zAhvSQE4kSM3OYe-eD80Sq16hGx3Lfx0P-DClvxsKkHwAWgKE7HHy-Osmq-1GjAaeCUCL60zmNq7VPFAgsTnO38UvR92GKAKJb6P4A1HNsuVg5NzG_Vd8DcOfQmXtf2Oz9dYi9M68mVZ-FbRT12BJsIZ5OsJxHqxeP4-nIwcrabwXFfZR_3r-TJVCb4EzHbp8JNtQbNEwpTgSVkuphYMAHSDHBrhZuZt_EDq1SCCNdZLuIPwAxLV-Jh-zeXoxtPpcsHx11glg"
              alt="Core Engine"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-white font-headline text-3xl font-bold mb-4">
                Core Engine
              </div>
              <p className="text-white/80 text-base">
                The proprietary consensus layer built for low-latency
                institutional settlement.
              </p>
            </div>
          </div>

          <div className="h-[500px] rounded-xl overflow-hidden relative group bg-surface-container border border-outline-variant/15">
            <Image
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJwQVdjXXNUPGPLGuTkwZpYAz2a7hHpEjQ55UzdetVhgla7HzK49jyGWqSX4r2xy41NWX8-jnvLhYKSmt-_LEJAv8tminFPMhTHKbxZf9cCgYAEUUTIbFK9JmVBE8PBX72YrK8KTfFEl9Q_8I4UBRmvZc2VTSq5zYWHPq91oiBPE7atLGE_bkpey9XXLe8JAp57ZzWm7DtiI_A9KJUO1l50Ovnd5O3uY3pqnG-drhLxzmNM2ozXbSMlQ33AciUJHraP9ZwRsHgyPU"
              alt="Security Mesh"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-primary font-headline text-2xl font-bold mb-2">
                Security Mesh
              </div>
              <p className="text-white/70 text-sm">
                Multi-signature authentication fused with hardware-level
                encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Cards - Asymmetric Bento */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16 max-w-2xl">
            The friction between <span className="text-primary">intent</span>{" "}
            and <span className="text-primary">execution</span> is over.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 */}
            <div className="md:col-span-8 bg-surface-container-lowest p-12 rounded-xl flex flex-col justify-between min-h-[400px]">
              <span className="material-symbols-outlined text-primary text-5xl">
                speed
              </span>
              <div>
                <h3 className="text-3xl font-headline font-bold mb-4">
                  Latency Bottlenecks
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg max-w-lg">
                  Current DeFi rails suffer from erratic block times. Velum
                  stabilizes execution with a guaranteed 200ms finality engine.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-4 bg-primary p-12 rounded-xl flex flex-col justify-between min-h-[400px]">
              <span className="material-symbols-outlined text-on-primary text-5xl">
                security
              </span>
              <div>
                <h3 className="text-3xl font-headline font-bold mb-4 text-on-primary">
                  Custody Gaps
                </h3>
                <p className="text-on-primary/80 leading-relaxed font-medium">
                  Bridging the gap between cold storage security and hot wallet
                  performance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-4 bg-surface-container-high p-12 rounded-xl flex flex-col justify-between min-h-[400px]">
              <span className="material-symbols-outlined text-white text-5xl">
                grid_view
              </span>
              <div>
                <h3 className="text-3xl font-headline font-bold mb-4">
                  Liquidity Fragmentation
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Aggregating fragmented pools into a single high-performance
                  execution layer.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-8 bg-surface-container p-12 rounded-xl flex flex-col justify-between min-h-[400px] border-l-4 border-primary">
              <span className="material-symbols-outlined text-primary text-5xl">
                analytics
              </span>
              <div>
                <h3 className="text-3xl font-headline font-bold mb-4">
                  Compliance Blindness
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg max-w-lg">
                  Integrated KYT and AML flows that don&apos;t compromise
                  transaction speed or user privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Architecture */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-headline font-bold mb-8 sticky top-32">
              The Path to <span className="text-primary">Dominance</span>
            </h2>
            <p className="text-on-surface-variant">
              Our roadmap follows a rigorous technical progression, from initial
              core development to global institutional scale.
            </p>
          </div>
          <div className="md:w-2/3 space-y-24">
            {/* Timeline Item 1 */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(178,240,81,0.5)]"></div>
              <div className="text-primary font-headline font-bold mb-2">
                PHASE 01 — Q4 2023
              </div>
              <h4 className="text-3xl font-headline font-bold mb-4 uppercase">
                Genesis Layer
              </h4>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Activation of the Velum core consensus protocol and initial
                private beta for institutional partners.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-surface-container-highest border border-primary"></div>
              <div className="text-white/50 font-headline font-bold mb-2">
                PHASE 02 — Q2 2024
              </div>
              <h4 className="text-3xl font-headline font-bold mb-4 uppercase">
                Liquidity Mesh
              </h4>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Cross-chain execution bridge launch with zero-slippage
                guarantees for major liquidity pairs.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-12 border-l border-outline-variant/30 opacity-40">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant"></div>
              <div className="text-white/50 font-headline font-bold mb-2">
                PHASE 03 — Q4 2024
              </div>
              <h4 className="text-3xl font-headline font-bold mb-4 uppercase">
                Global Settlement
              </h4>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Full public mainnet integration with traditional banking rails
                for seamless fiat on/off-ramps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-container p-12 rounded-xl relative overflow-hidden group border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <Image
                className="object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY4PK5-B2rzD43kdmBEW0yMp1TPmMi6XwMzgCChcLOin4j6IHWrmPjKk678tHM4Ol-MnrpNrZRLdftNnaNbl9lokHopPBbTQhvnYxbcjHiRrmsUkJ5aXGg0qcoM1JhSJZaGWgBa2DpGKDQWlAmM88Awpuz8xXegPKJvoE7fomSq-IKZkzqIwMt7D1xyQfPT1IEj4Z-Gk0UbWYqQvfK6BuIPy7j-bAC3w_jzwF-bckYrpFqC5ugt4kyr88wFE4sMyX7GMcegroseLM"
                alt="Architecture"
                fill
                sizes="50vw"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl font-headline font-bold mb-8">
                Proprietary <span className="text-primary">Stacks</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">layers</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-headline font-bold mb-2">
                      L-Zero Interoperability
                    </h5>
                    <p className="text-on-surface-variant">
                      Seamless message passing between disparate chains without
                      the vulnerability of traditional bridges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-headline font-bold mb-2">
                      Velum Engine (vE)
                    </h5>
                    <p className="text-on-surface-variant">
                      An EVM-compatible runtime optimized for parallel execution
                      and massive transaction throughput.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-12">
            The future is <span className="text-primary">kinetic.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-bold text-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_64px_rgba(178,240,81,0.2)]">
              Access Infrastructure
            </button>
            <button className="bg-transparent border border-outline-variant/30 text-white px-10 py-5 rounded-full font-headline font-bold text-xl hover:bg-white/5 transition-all duration-300">
              Read Documentation
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
            © 2024 Velum Institutional. Kinetic Performance.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-[#befd5d] transition-colors duration-200"
            href="#"
          >
            Twitter
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-[#befd5d] transition-colors duration-200"
            href="#"
          >
            Discord
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-[#befd5d] transition-colors duration-200"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-[#befd5d] transition-colors duration-200"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-[#befd5d] transition-colors duration-200"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-[#befd5d] transition-colors duration-200"
            href="#"
          >
            Legal
          </a>
        </div>
      </footer>
    </div>
  );
}
