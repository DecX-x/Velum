"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Strategies() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen pb-24 page-transition">
      <Navbar variant="app" />

      {/* Main Content */}
      <main
        className={`max-w-7xl mx-auto pt-24 sm:pt-40 px-4 sm:px-8 ${
          isDrawerOpen ? "opacity-30 pointer-events-none" : ""
        }`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6 animate-fade-in-up">
          <div>
            <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tighter mb-2">
              Portfolio Allocation
            </h1>
            <p className="text-on-surface-variant text-sm sm:text-base max-w-md">
              Institutional-grade yield optimization across decentralized and
              real-world assets.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-surface-container-high rounded-full font-bold text-xs sm:text-sm hover:bg-surface-container-highest transition-all duration-300 border border-white/5 active:scale-95 btn-hover">
              Rebalance
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-primary text-on-primary rounded-full font-bold text-xs sm:text-sm shadow-[0_0_32px_rgba(178,240,81,0.2)] hover:bg-primary-dim transition-all duration-300 active:scale-95 btn-hover animate-pulse-glow">
              Allocate Capital
            </button>
          </div>
        </div>

        {/* Allocation Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Donut Chart & Breakdown */}
          <div className="lg:col-span-1 bg-surface-container rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center card-hover animate-fade-in-up delay-100">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6 sm:mb-8">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#1f1f1f"
                  strokeWidth="12"
                />
                {/* Stable Yield 45% */}
                <circle
                  className="donut-segment"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#b2f051"
                  strokeDasharray="251.2"
                  strokeDashoffset="138.16"
                  strokeWidth="12"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
                />
                {/* RWA Yield 35% */}
                <circle
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#dfec5f"
                  strokeDasharray="251.2"
                  strokeDashoffset="226.08"
                  strokeWidth="12"
                  style={{ transform: "rotate(72deg)", transformOrigin: "center" }}
                />
                {/* Reserve Buffer 20% */}
                <circle
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#fcef58"
                  strokeDasharray="251.2"
                  strokeDashoffset="200.96"
                  strokeWidth="12"
                  style={{ transform: "rotate(198deg)", transformOrigin: "center" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">
                  Total AUM
                </span>
                <span className="font-headline text-2xl sm:text-3xl font-bold tracking-tighter">
                  ••••••
                </span>
              </div>
            </div>
            <div className="w-full space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary"></div>
                  <span className="text-xs sm:text-sm font-medium">
                    Stable Yield
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-secondary"></div>
                  <span className="text-xs sm:text-sm font-medium">
                    RWA Yield
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold">35%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-tertiary-container"></div>
                  <span className="text-xs sm:text-sm font-medium">
                    Reserve Buffer
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold">20%</span>
              </div>
            </div>
          </div>

          {/* Strategy Detail Cards */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Stable Yield Strategy */}
            <div
              className="bg-surface-container-low rounded-xl p-6 sm:p-8 border border-white/5 relative overflow-hidden group hover:bg-surface-container transition-all duration-500 cursor-pointer card-hover animate-fade-in-right delay-100"
              onClick={() => setIsDrawerOpen(true)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12 gap-4">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary text-[9px] sm:text-[10px] font-bold uppercase">
                      Active
                    </span>
                    <h3 className="font-headline text-xl sm:text-2xl font-bold tracking-tight">
                      Stable Yield Strategy
                    </h3>
                  </div>
                  <p className="text-on-surface-variant text-xs sm:text-sm">
                    Low-volatility market making across major stablecoin pairs.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-primary font-headline text-xl sm:text-3xl font-bold">
                    ••••••
                  </div>
                  <div className="text-on-surface-variant text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Current Balance
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full mb-4 sm:mb-6 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 sm:gap-4">
                  <div className="text-[10px] sm:text-xs">
                    <div className="text-on-surface-variant mb-1">Target</div>
                    <div className="font-bold">45.0%</div>
                  </div>
                  <div className="text-[10px] sm:text-xs">
                    <div className="text-on-surface-variant mb-1">Actual</div>
                    <div className="font-bold">44.8%</div>
                  </div>
                </div>
                <button className="material-symbols-outlined p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base">
                  arrow_forward
                </button>
              </div>
            </div>

            {/* RWA Yield Strategy */}
            <div
              className="bg-surface-container-low rounded-xl p-6 sm:p-8 border border-white/5 group hover:bg-surface-container transition-all duration-500 cursor-pointer card-hover animate-fade-in-right delay-200"
              onClick={() => setIsDrawerOpen(true)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12 gap-4">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary text-[9px] sm:text-[10px] font-bold uppercase">
                      Active
                    </span>
                    <h3 className="font-headline text-xl sm:text-2xl font-bold tracking-tight">
                      RWA Yield
                    </h3>
                  </div>
                  <p className="text-on-surface-variant text-xs sm:text-sm">
                    Real-World Asset backed lending with over-collateralization.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-secondary font-headline text-xl sm:text-3xl font-bold">
                    ••••••
                  </div>
                  <div className="text-on-surface-variant text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Current Balance
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full mb-4 sm:mb-6 overflow-hidden">
                <div
                  className="bg-secondary h-full rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 sm:gap-4">
                  <div className="text-[10px] sm:text-xs">
                    <div className="text-on-surface-variant mb-1">Target</div>
                    <div className="font-bold">35.0%</div>
                  </div>
                  <div className="text-[10px] sm:text-xs">
                    <div className="text-on-surface-variant mb-1">Actual</div>
                    <div className="font-bold">35.2%</div>
                  </div>
                </div>
                <button className="material-symbols-outlined p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base">
                  arrow_forward
                </button>
              </div>
            </div>

            {/* Reserve Buffer */}
            <div
              className="bg-surface-container-low rounded-xl p-6 sm:p-8 border border-white/5 group hover:bg-surface-container transition-all duration-500 cursor-pointer card-hover animate-fade-in-right delay-300"
              onClick={() => setIsDrawerOpen(true)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12 gap-4">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant text-[9px] sm:text-[10px] font-bold uppercase">
                      Buffered
                    </span>
                    <h3 className="font-headline text-xl sm:text-2xl font-bold tracking-tight">
                      Reserve Buffer
                    </h3>
                  </div>
                  <p className="text-on-surface-variant text-xs sm:text-sm">
                    Highly liquid underlying assets for immediate redemptions.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-tertiary-container font-headline text-xl sm:text-3xl font-bold">
                    ••••••
                  </div>
                  <div className="text-on-surface-variant text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Current Balance
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full mb-4 sm:mb-6 overflow-hidden">
                <div
                  className="bg-tertiary-container h-full rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 sm:gap-4">
                  <div className="text-[10px] sm:text-xs">
                    <div className="text-on-surface-variant mb-1">Target</div>
                    <div className="font-bold">20.0%</div>
                  </div>
                  <div className="text-[10px] sm:text-xs">
                    <div className="text-on-surface-variant mb-1">Actual</div>
                    <div className="font-bold">20.0%</div>
                  </div>
                </div>
                <button className="material-symbols-outlined p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base">
                  arrow_forward
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Control Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up delay-200">
          {/* Risk Parameters */}
          <div className="sm:col-span-2 bg-surface-container-low rounded-xl p-6 sm:p-8 relative overflow-hidden h-48 sm:h-64 flex flex-col justify-end card-hover">
            <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10">
              <span className="material-symbols-outlined text-6xl sm:text-9xl">
                analytics
              </span>
            </div>
            <h4 className="font-headline text-xl sm:text-2xl font-bold mb-2">
              Risk Parameters
            </h4>
            <p className="text-on-surface-variant text-xs sm:text-sm mb-4 sm:mb-6">
              Manage institutional guardrails and auto-pause triggers.
            </p>
            <button className="w-fit px-4 sm:px-6 py-2 bg-surface-container-highest rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-outline-variant transition-colors">
              Configure
            </button>
          </div>

          {/* Emergency Stop */}
          <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 h-48 sm:h-64 flex flex-col items-center justify-center text-center card-hover">
            <span className="material-symbols-outlined text-error text-3xl sm:text-4xl mb-3 sm:mb-4">
              emergency_home
            </span>
            <h4 className="font-headline text-lg sm:text-xl font-bold mb-2">
              Emergency Stop
            </h4>
            <p className="text-on-surface-variant text-[10px] sm:text-xs mb-4 sm:mb-6">
              Pause all strategy inflows instantly.
            </p>
            <button className="px-6 sm:px-8 py-2 border border-error/30 text-error rounded-full text-[10px] sm:text-xs font-bold uppercase hover:bg-error/10 transition-all">
              Pause
            </button>
          </div>

          {/* Yield Boost */}
          <div className="bg-primary/10 rounded-xl p-6 sm:p-8 h-48 sm:h-64 flex flex-col items-center justify-center text-center border border-primary/20 card-hover animate-pulse-glow">
            <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              bolt
            </span>
            <h4 className="font-headline text-lg sm:text-xl font-bold mb-2 text-primary">
              Yield Boost
            </h4>
            <p className="text-on-surface-variant text-[10px] sm:text-xs mb-4 sm:mb-6">
              Current optimization active: 1.2x
            </p>
            <button className="px-6 sm:px-8 py-2 bg-primary text-on-primary rounded-full text-[10px] sm:text-xs font-bold uppercase hover:bg-primary-dim transition-all">
              Upgrade
            </button>
          </div>
        </div>
      </main>

      {/* Strategy Detail Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-[60] flex justify-end bg-black/40 backdrop-blur-sm"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="w-full md:w-[480px] bg-surface-container-low h-full shadow-[-24px_0_64px_rgba(0,0,0,0.8)] flex flex-col border-l border-white/5 p-6 sm:p-12 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8 sm:mb-12">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold">
                Strategy Detail
              </h2>
              <button
                className="material-symbols-outlined text-on-surface-variant hover:text-white transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                close
              </button>
            </div>

            <div className="space-y-6 sm:space-y-8 flex-1">
              {/* Performance Chart */}
              <div className="bg-surface-container-lowest rounded-xl p-4 sm:p-6">
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">
                  Performance
                </div>
                <div className="h-24 sm:h-32 flex items-end gap-1 sm:gap-2">
                  <div className="bg-primary/20 w-full h-[40%] rounded-t-sm"></div>
                  <div className="bg-primary/40 w-full h-[60%] rounded-t-sm"></div>
                  <div className="bg-primary/60 w-full h-[55%] rounded-t-sm"></div>
                  <div className="bg-primary/80 w-full h-[85%] rounded-t-sm"></div>
                  <div className="bg-primary w-full h-[100%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-medium">
                  <span>MAR 2024</span>
                  <span>APR 2024</span>
                </div>
              </div>

              {/* Allocation Gap */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="text-xs text-on-surface-variant mb-2">
                    Allocation Gap
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-1 bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold">-0.2%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 bg-surface-container rounded-lg">
                    <div className="text-[9px] sm:text-[10px] text-on-surface-variant uppercase mb-1">
                      Target Balance
                    </div>
                    <div className="font-bold text-sm sm:text-base">45.00%</div>
                  </div>
                  <div className="p-3 sm:p-4 bg-surface-container rounded-lg">
                    <div className="text-[9px] sm:text-[10px] text-on-surface-variant uppercase mb-1">
                      Current Balance
                    </div>
                    <div className="font-bold text-sm sm:text-base">44.82%</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="pt-6 sm:pt-8 border-t border-white/5 space-y-3 sm:space-y-4">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-on-surface-variant">Annualized Yield</span>
                  <span className="text-primary font-bold">12.4%</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-on-surface-variant">Drawdown (Max)</span>
                  <span className="font-bold">0.12%</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-on-surface-variant">Asset Composition</span>
                  <span className="font-bold">USDC, DAI, USDT</span>
                </div>
              </div>
            </div>

            <button className="w-full py-3 sm:py-4 bg-primary text-on-primary rounded-full font-bold mt-6 sm:mt-auto active:scale-95 duration-200 text-sm sm:text-base">
              Adjust Strategy
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 sm:mt-20 w-full bg-[#0e0e0e] border-t border-white/10 py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 animate-fade-in-up">
          <div className="font-headline font-bold text-zinc-200 text-sm sm:text-base">
            VELUM INSTITUTIONAL
          </div>
          <div className="flex gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-widest uppercase text-zinc-500 animate-fade-in-up delay-100">
            <a
              className="hover:text-[#befd5d] transition-colors duration-300 opacity-80 hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-[#befd5d] transition-colors duration-300 opacity-80 hover:opacity-100"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="hover:text-[#befd5d] transition-colors duration-300 opacity-80 hover:opacity-100"
              href="#"
            >
              Security Audit
            </a>
          </div>
          <div className="text-[10px] sm:text-xs tracking-widest uppercase text-zinc-500 animate-fade-in-up delay-200">
            © 2024 VELUM INSTITUTIONAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      <style jsx>{`
        .donut-segment {
          transform: rotate(-90deg);
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}
