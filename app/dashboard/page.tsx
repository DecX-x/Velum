"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useReadContract } from "wagmi";
import Navbar from "../components/Navbar";
import { VELUM_TREASURY_ADDRESS, VELUM_TREASURY_ABI } from "@/lib/contracts";
import { getHandleClient } from "@/lib/nox";

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const [decryptedTreasury, setDecryptedTreasury] = useState<string | null>(null);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const { data: latestTreasuryHandleRaw } = useReadContract({
    address: VELUM_TREASURY_ADDRESS as `0x${string}`,
    abi: VELUM_TREASURY_ABI,
    functionName: "getTreasuryHandleRaw",
  });

  const handleDecryptTreasury = async () => {
    if (!latestTreasuryHandleRaw) return;
    try {
      setIsDecrypting(true);
      const handleClient = await getHandleClient();
      // latestTreasuryHandleRaw is a bytes32
      const decrypted = await handleClient.decrypt(latestTreasuryHandleRaw as `0x${string}`);
      setDecryptedTreasury(decrypted.toString());
    } catch (error) {
      console.error("Decryption failed:", error);
      alert("Decryption failed. Ensure you have viewer rights.");
    } finally {
      setIsDecrypting(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 page-transition">
      <Navbar variant="app" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 space-y-8 sm:space-y-12">
        {/* Header Summary Row */}
        <header className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-xl flex flex-col justify-between min-h-[120px] sm:min-h-[160px] card-hover animate-fade-in-up delay-100">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant font-label text-[10px] sm:text-sm uppercase tracking-widest">
                Total Treasury
              </span>
              <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                visibility_off
              </span>
            </div>
            <div className="text-2xl sm:text-4xl font-headline font-bold tracking-tighter text-on-surface">
              {decryptedTreasury ? `$${decryptedTreasury}` : latestTreasuryHandleRaw ? "••••••••" : "—"}
            </div>
          </div>
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-xl flex flex-col justify-between min-h-[120px] sm:min-h-[160px] card-hover animate-fade-in-up delay-200">
            <span className="text-on-surface-variant font-label text-[10px] sm:text-sm uppercase tracking-widest">
              Allocated Capital
            </span>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-xl sm:text-3xl font-headline font-bold text-on-surface">
                78.4%
              </div>
              <div className="text-[10px] sm:text-sm text-primary-dim">
                Institutional Vaults
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-xl flex flex-col justify-between min-h-[120px] sm:min-h-[160px] card-hover animate-fade-in-up delay-300">
            <span className="text-on-surface-variant font-label text-[10px] sm:text-sm uppercase tracking-widest">
              Unallocated
            </span>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-xl sm:text-3xl font-headline font-bold text-on-surface">
                21.6%
              </div>
              <div className="text-[10px] sm:text-sm text-on-surface-variant">
                Liquid Reserves
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-xl flex flex-col justify-between min-h-[120px] sm:min-h-[160px] card-hover animate-fade-in-up delay-400">
            <span className="text-on-surface-variant font-label text-[10px] sm:text-sm uppercase tracking-widest">
              Active Strategies
            </span>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-xl sm:text-3xl font-headline font-bold text-on-surface">
                12
              </div>
              <div className="text-[10px] sm:text-sm text-secondary">
                Across 4 Networks
              </div>
            </div>
          </div>
        </header>

        {/* Secondary Info Rail */}
        <section className="bg-surface-container-lowest rounded-full py-3 sm:py-4 px-4 sm:px-10 flex flex-wrap items-center justify-between gap-4 sm:gap-6 border border-white/5 animate-fade-in-up delay-200">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs text-on-surface-variant font-label">
              MY ROLE:
            </span>
            <span className="bg-secondary-container text-on-secondary px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm text-[10px] sm:text-xs font-bold tracking-tight">
              TREASURY MANAGER
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs text-on-surface-variant font-label">
              DISCLOSURE:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs sm:text-sm text-on-surface font-medium">
                Fully Confirmed
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs text-on-surface-variant font-label">
              NETWORK:
            </span>
            <span className="text-xs sm:text-sm text-on-surface font-medium flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-xs sm:text-sm">
                hub
              </span>
              Ethereum Mainnet
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs text-on-surface-variant font-label">
              LAST SYNC:
            </span>
            <span className="text-[10px] sm:text-sm text-on-surface-variant font-medium italic">
              4m ago via Confidential Node
            </span>
          </div>
        </section>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Treasury & Strategies */}
          <div className="lg:col-span-9 space-y-6 sm:space-y-8">
            {/* Treasury Overview Panel */}
            <div className="bg-surface-container rounded-xl p-6 sm:p-10 relative overflow-hidden card-hover animate-fade-in-up delay-300">
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-7xl sm:text-9xl">
                  account_balance
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-8 sm:mb-12">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-headline font-bold tracking-tight mb-1 sm:mb-2">
                    Treasury Overview
                  </h2>
                  <p className="text-on-surface-variant text-sm sm:text-base max-w-md">
                    Confidential institutional balance with last rebalance
                    occurring on Oct 24, 2026 at 14:30 UTC.
                  </p>
                </div>
                <button 
                  onClick={handleDecryptTreasury}
                  disabled={isDecrypting || !latestTreasuryHandleRaw}
                  className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-sm sm:text-base btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-base sm:text-lg">
                    {isDecrypting ? "sync" : "visibility"}
                  </span>
                  {isDecrypting ? "Decrypting..." : "Reveal Nominals"}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[65%] animate-shimmer"></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm font-label text-on-surface-variant">
                      Stablecoin Mix
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-on-surface">
                      65%
                    </span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[25%] animate-shimmer"></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm font-label text-on-surface-variant">
                      Liquid Staking
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-on-surface">
                      25%
                    </span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="bg-primary-dim h-full w-[10%] animate-shimmer"></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm font-label text-on-surface-variant">
                      Risk Assets
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-on-surface">
                      10%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy Allocation Grid */}
            <div className="animate-fade-in-up delay-400">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-headline font-bold">
                  Strategy Allocation
                </h3>
                <span className="text-xs sm:text-sm text-on-surface-variant">
                  Showing active buckets
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Bucket Card 1 */}
                <div className="bg-surface-container-high p-6 sm:p-8 rounded-xl group hover:bg-surface-bright transition-all duration-500 card-hover">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <span
                        className="material-symbols-outlined text-lg sm:text-xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        shield_moon
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded-sm">
                      +4.2% APY
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-headline font-bold mb-1">
                    Delta Neutral Stable
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
                    Cross-protocol arbitrage with low volatility profile.
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="text-xl sm:text-2xl font-bold font-headline">
                      42%
                    </div>
                    <div className="text-on-surface-variant text-[10px] sm:text-xs mb-1 uppercase tracking-tighter">
                      •••• ETH
                    </div>
                  </div>
                </div>

                {/* Bucket Card 2 */}
                <div className="bg-surface-container-high p-6 sm:p-8 rounded-xl group hover:bg-surface-bright transition-all duration-500 card-hover">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                      <span
                        className="material-symbols-outlined text-lg sm:text-xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        bolt
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-secondary px-2 py-1 bg-secondary/10 rounded-sm">
                      +18.4% APY
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-headline font-bold mb-1">
                    Kinetic Yield V3
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
                    Concentrated liquidity management on Uniswap V3.
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="text-xl sm:text-2xl font-bold font-headline">
                      28%
                    </div>
                    <div className="text-on-surface-variant text-[10px] sm:text-xs mb-1 uppercase tracking-tighter">
                      •••• USDC
                    </div>
                  </div>
                </div>

                {/* Bucket Card 3 */}
                <div className="bg-surface-container-high p-6 sm:p-8 rounded-xl group hover:bg-surface-bright transition-all duration-500 card-hover sm:col-span-2 lg:col-span-1">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary-dim group-hover:scale-110 transition-transform duration-300">
                      <span
                        className="material-symbols-outlined text-lg sm:text-xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        auto_awesome
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-primary-dim px-2 py-1 bg-primary-dim/10 rounded-sm">
                      +9.1% APY
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-headline font-bold mb-1">
                    Long-term Staking
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
                    Aggregated liquid staking through institutional validators.
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="text-xl sm:text-2xl font-bold font-headline">
                      30%
                    </div>
                    <div className="text-on-surface-variant text-[10px] sm:text-xs mb-1 uppercase tracking-tighter">
                      •••• LST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Sync */}
          <aside className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Quick Actions Rail */}
            <div className="bg-surface-container p-4 sm:p-6 rounded-xl space-y-3 sm:space-y-4 animate-fade-in-right delay-200">
              <h3 className="text-[10px] sm:text-xs font-label font-bold text-on-surface-variant px-2 uppercase tracking-widest">
                Management Actions
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                <Link
                  href="/wrap"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-surface-container-high hover:bg-surface-bright rounded-lg transition-all duration-300 text-left btn-hover"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-base sm:text-lg">
                      swap_horiz
                    </span>
                  </div>
                  <span className="font-bold text-sm sm:text-base">
                    Wrap Assets
                  </span>
                </Link>
                <Link
                  href="/treasury"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-surface-container-high hover:bg-surface-bright rounded-lg transition-all duration-300 text-left btn-hover"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-base sm:text-lg">
                      input
                    </span>
                  </div>
                  <span className="font-bold text-sm sm:text-base">
                    Deposit Funds
                  </span>
                </Link>
                <Link
                  href="/strategies"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-surface-container-high hover:bg-surface-bright rounded-lg transition-all duration-300 text-left btn-hover"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-base sm:text-lg">
                      lan
                    </span>
                  </div>
                  <span className="font-bold text-sm sm:text-base">
                    Allocate Capital
                  </span>
                </Link>
                <Link
                  href="/disclosure"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-surface-container-high hover:bg-surface-bright rounded-lg transition-all duration-300 text-left btn-hover"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-base sm:text-lg">
                      person_add
                    </span>
                  </div>
                  <span className="font-bold text-sm sm:text-base">
                    Add Auditor
                  </span>
                </Link>
              </div>
            </div>

            {/* Pending Actions / Sync */}
            <div className="bg-surface-container p-4 sm:p-6 rounded-xl space-y-4 sm:space-y-6 animate-fade-in-right delay-300">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] sm:text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">
                  System Sync
                </h3>
                <span className="text-[9px] sm:text-[10px] bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-bold">
                  2 PENDING
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[10px] sm:text-xs animate-spin">
                        sync
                      </span>
                    </div>
                    <div className="w-0.5 h-full bg-surface-variant my-1"></div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold">
                      Transaction Sync
                    </h4>
                    <p className="text-[10px] sm:text-xs text-on-surface-variant">
                      L2 batch 8,421 is being verified...
                    </p>
                    <div className="mt-2 w-full h-1 bg-surface-variant rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[82%] animate-shimmer"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[10px] sm:text-xs">
                        lock
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold">
                      Decryption Progress
                    </h4>
                    <p className="text-[10px] sm:text-xs text-on-surface-variant">
                      Confidential state update (4/5 sigs)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Visual Element */}
            <div className="rounded-xl overflow-hidden aspect-square relative grayscale contrast-125 opacity-40 animate-fade-in-up delay-400">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDynCApErHSPBWKCkpxUVsaj9LgiczO_3N5f7ZNd6-v5kLonwrTLRe-xiMKfl7aAgP9sceEVX0wP5lhzG9FYpv6bUmTbqshoo6wWQSTU529JtvC7wxmQ_0F4UuRNGQUJF7f8OxZtKE7a1wdERpgOTRhPhMmBU6doIEbRpHj9Hh-sLEJofW22vsRC8wkt5M7QaILQypHtia8iRN9KMELbrMSeNvTXGqGGXPSweTX4T_50ySyQ6qsiblvwZDca2AkQavsYXZO_oQXW0M"
                alt="Abstract digital network"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 sm:mt-24 w-full bg-[#0e0e0e] border-t border-zinc-800/20 py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="font-headline font-bold text-zinc-200 text-sm sm:text-base animate-fade-in-up">
            Velum Kinetic Institution
          </div>
          <div className="flex gap-4 sm:gap-8 font-body text-xs sm:text-sm animate-fade-in-up delay-100">
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              Security
            </a>
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              API Docs
            </a>
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              Governance
            </a>
          </div>
          <div className="text-zinc-500 font-body text-xs sm:text-sm animate-fade-in-up delay-200">
            © 2026 Velum Kinetic Institution
          </div>
        </div>
      </footer>
    </div>
  );
}
