"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Wrap() {
  const [isWrapping, setIsWrapping] = useState(false);
  const [amount, setAmount] = useState("");

  const handleWrap = () => {
    if (amount) {
      setIsWrapping(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar variant="app" />

      {/* Main Content */}
      <main
        className={`flex-grow max-w-7xl mx-auto w-full px-4 sm:px-8 pt-8 sm:pt-16 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 ${
          isWrapping ? "opacity-30 pointer-events-none" : ""
        }`}
      >
        {/* Left Content: Wrap Interface */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
          <header className="animate-fade-in-up">
            <div className="flex items-center gap-2 sm:gap-4 mb-2">
              <span className="px-2 sm:px-3 py-1 bg-secondary-container text-on-secondary text-[9px] sm:text-[10px] font-bold tracking-widest uppercase rounded-sm">
                Institutional Privacy
              </span>
              <span className="text-zinc-500 font-label text-xs sm:text-sm">
                v2.4.0 Optimized
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-headline font-bold tracking-tighter leading-none mb-3 sm:mb-4">
              Wrap Assets
            </h1>
            <p className="text-zinc-400 text-sm sm:text-lg max-w-lg leading-relaxed">
              Securely shield your liquidity with end-to-end client-side
              encryption. Velum Kinetic ensures zero-knowledge proof submission
              for all institutional wraps.
            </p>
          </header>

          {/* Stepper Indicator */}
          <div className="flex justify-between items-center bg-surface-container-low p-4 sm:p-6 rounded-lg animate-fade-in-up delay-100">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs sm:text-sm animate-pulse-glow">
                1
              </div>
              <span className="text-on-background font-medium text-[10px] sm:text-sm">
                Select
              </span>
            </div>
            <div className="flex-grow mx-2 sm:mx-4 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface-container-highest text-zinc-500 flex items-center justify-center font-bold text-xs sm:text-sm">
                2
              </div>
              <span className="text-zinc-500 font-medium text-[10px] sm:text-sm hidden sm:block">
                Amount
              </span>
            </div>
            <div className="flex-grow mx-2 sm:mx-4 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface-container-highest text-zinc-500 flex items-center justify-center font-bold text-xs sm:text-sm">
                3
              </div>
              <span className="text-zinc-500 font-medium text-[10px] sm:text-sm hidden sm:block">
                Encrypt
              </span>
            </div>
            <div className="flex-grow mx-2 sm:mx-4 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface-container-highest text-zinc-500 flex items-center justify-center font-bold text-xs sm:text-sm">
                4
              </div>
              <span className="text-zinc-500 font-medium text-[10px] sm:text-sm hidden sm:block">
                Finalize
              </span>
            </div>
          </div>

          {/* Wrap Form Card */}
          <div className="bg-surface-container rounded-xl p-6 sm:p-10 relative overflow-hidden card-hover animate-fade-in-up delay-200">
            {/* Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="space-y-6 sm:space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Token Select */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                    Base Token
                  </label>
                  <div className="group flex items-center justify-between bg-surface-container-lowest p-3 sm:p-4 rounded-lg border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-base sm:text-lg">
                          token
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-lg">USDC</div>
                        <div className="text-[10px] sm:text-xs text-zinc-500">
                          USD Coin (ERC-20)
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors text-base sm:text-lg">
                      expand_more
                    </span>
                  </div>
                </div>
                {/* Balance Info */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                    Available Liquidity
                  </label>
                  <div className="bg-surface-container-low p-3 sm:p-4 rounded-lg flex flex-col justify-center h-[60px] sm:h-[74px]">
                    <span className="text-xl sm:text-2xl font-headline font-semibold text-on-background">
                      1,240,500.00
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">
                      MAX CAPACITY FOR WRAPPING
                    </span>
                  </div>
                </div>
              </div>

              {/* Amount Input */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-end ml-1">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Wrap Amount
                  </label>
                  <button
                    className="text-[9px] sm:text-[10px] font-bold text-primary hover:underline"
                    onClick={() => setAmount("1240500.00")}
                  >
                    USE MAX
                  </button>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-lowest border-none text-2xl sm:text-4xl font-headline font-bold py-6 sm:py-8 px-4 sm:px-6 rounded-lg focus:ring-1 focus:ring-primary placeholder-zinc-800 transition-all text-white"
                    placeholder="0.00"
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-zinc-400 font-bold text-base sm:text-xl">
                    USDC
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low/50 p-3 sm:p-4 rounded-lg border border-outline-variant/10">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="material-symbols-outlined text-primary-dim text-base sm:text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    security
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-snug italic">
                    "Amounts are encrypted client-side before submission. Your
                    private financial data never leaves your secure enclave until
                    fully shielded."
                  </p>
                </div>
              </div>

              <button
                onClick={handleWrap}
                className="w-full py-4 sm:py-6 bg-primary text-on-primary font-bold text-base sm:text-xl rounded-full shadow-[0_10px_30px_rgba(178,240,81,0.2)] hover:scale-[0.98] transition-transform flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <span>Encrypt amount</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg sm:text-xl">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content: Stats & History */}
        <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
          {/* Institutional Badge / Status Card */}
          <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 border-l-4 border-primary card-hover animate-fade-in-right delay-100">
            <h3 className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
              Encryption Status
            </h3>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                <div
                  className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary text-xl sm:text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </span>
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-headline">
                  Ready to Shield
                </div>
                <p className="text-xs sm:text-sm text-zinc-500">
                  ZKP generation engine initialized
                </p>
              </div>
            </div>
          </div>

          {/* Recent Wrap History */}
          <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col h-full card-hover animate-fade-in-right delay-200">
            <div className="p-4 sm:p-8 border-b border-outline-variant/10 flex justify-between items-center">
              <h2 className="font-headline font-bold text-base sm:text-xl">
                Recent Wrap History
              </h2>
              <span className="material-symbols-outlined text-zinc-600 text-lg sm:text-xl">
                history
              </span>
            </div>
            <div className="p-2 flex-grow">
              <div className="space-y-1">
                {/* History Item */}
                <div className="flex items-center justify-between p-3 sm:p-4 hover:bg-surface-container-high rounded-lg transition-colors group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                      <span
                        className="material-symbols-outlined text-zinc-500 text-xs sm:text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        encrypted
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-xs sm:text-sm">
                        Wrap USDC
                      </div>
                      <div className="text-[10px] sm:text-xs text-zinc-500">
                        2 mins ago • ID: 0x4f...a29
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary text-xs sm:text-sm">
                      +25,000.00
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-zinc-600 uppercase font-bold">
                      COMPLETED
                    </div>
                  </div>
                </div>
                {/* History Item */}
                <div className="flex items-center justify-between p-3 sm:p-4 hover:bg-surface-container-high rounded-lg transition-colors group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                      <span
                        className="material-symbols-outlined text-zinc-500 text-xs sm:text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        encrypted
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-xs sm:text-sm">
                        Wrap USDC
                      </div>
                      <div className="text-[10px] sm:text-xs text-zinc-500">
                        14 mins ago • ID: 0x81...f12
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary text-xs sm:text-sm">
                      +120,000.00
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-zinc-600 uppercase font-bold">
                      COMPLETED
                    </div>
                  </div>
                </div>
                {/* History Item */}
                <div className="flex items-center justify-between p-3 sm:p-4 hover:bg-surface-container-high rounded-lg transition-colors group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                      <span
                        className="material-symbols-outlined text-zinc-500 text-xs sm:text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        encrypted
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-xs sm:text-sm">
                        Wrap USDC
                      </div>
                      <div className="text-[10px] sm:text-xs text-zinc-500">
                        1 hour ago • ID: 0x92...c04
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary text-xs sm:text-sm">
                      +8,240.00
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-zinc-600 uppercase font-bold">
                      COMPLETED
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-surface-container-low text-center">
              <button className="text-xs sm:text-sm font-bold text-zinc-400 hover:text-primary transition-colors flex items-center justify-center gap-2 w-full">
                View Audit Log
                <span className="material-symbols-outlined text-xs sm:text-sm">
                  open_in_new
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Wrapping Modal */}
      {isWrapping && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* Modal-noir glow background effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,240,81,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

          <div className="relative z-10 w-full max-w-2xl bg-surface-container rounded-xl p-6 sm:p-10 shadow-2xl border border-outline-variant/10">
            {/* Stepper Progress */}
            <div className="flex items-center justify-between mb-8 sm:mb-12 px-2 sm:px-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-xs sm:text-sm">
                    check
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] mt-2 font-bold tracking-widest text-zinc-500">
                  INITIATE
                </span>
              </div>
              <div className="h-[2px] flex-grow mx-2 sm:mx-4 bg-primary/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-xs sm:text-sm">
                    check
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] mt-2 font-bold tracking-widest text-zinc-500">
                  APPROVE
                </span>
              </div>
              <div className="h-[2px] flex-grow mx-2 sm:mx-4 bg-primary/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-xs sm:text-sm">
                    check
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] mt-2 font-bold tracking-widest text-zinc-500">
                  SIGN
                </span>
              </div>
              <div className="h-[2px] flex-grow mx-2 sm:mx-4 bg-primary/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary-dim flex items-center justify-center text-primary-dim shadow-[0_0_20px_rgba(164,225,68,0.2)]">
                  <span className="font-bold font-headline text-sm sm:text-base">4</span>
                </div>
                <span className="text-[9px] sm:text-[10px] mt-2 font-bold tracking-widest text-primary-dim">
                  CONFIRM
                </span>
              </div>
            </div>

            {/* Transaction Status Display */}
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-zinc-800 border-t-primary-dim animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl sm:text-4xl text-primary-dim">
                    sync
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight mb-1 sm:mb-2">
                  Wrapping...
                </h2>
                <p className="text-zinc-500 font-medium text-xs sm:text-base">
                  Processing institutional collateral on Ethereum Mainnet
                </p>
              </div>
            </div>

            {/* Detail Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-surface-container-low p-4 sm:p-6 rounded-lg">
                <label className="text-[9px] sm:text-[10px] font-bold text-zinc-500 tracking-[0.2em] mb-2 block">
                  CONVERTING
                </label>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs sm:text-sm text-white">
                      currency_exchange
                    </span>
                  </div>
                  <span className="font-headline font-bold text-base sm:text-xl text-white">
                    {amount || "0.00"} USDC
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 sm:p-6 rounded-lg">
                <label className="text-[9px] sm:text-[10px] font-bold text-zinc-500 tracking-[0.2em] mb-2 block">
                  ESTIMATED vUSDC
                </label>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs sm:text-sm text-primary">
                      layers
                    </span>
                  </div>
                  <span className="font-headline font-bold text-base sm:text-xl text-primary-dim">
                    {amount || "0.00"}
                  </span>
                </div>
              </div>
            </div>

            {/* Network Progress Tracker */}
            <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-lg border border-outline-variant/10 space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="material-symbols-outlined text-zinc-500 text-base sm:text-lg">
                    sensors
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-300">
                    Network Confirmations
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-primary-dim">
                  12 / 24
                </span>
              </div>
              <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-primary-dim shadow-[0_0_10px_rgba(164,225,68,0.5)]"></div>
              </div>
              <div className="flex justify-between text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-600">
                <span>TX: 0x4f...92a1</span>
                <span className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
                  <span>VIEW ON EXPLORER</span>
                  <span className="material-symbols-outlined text-[10px] sm:text-[12px]">
                    open_in_new
                  </span>
                </span>
              </div>
            </div>

            {/* Primary Action */}
            <div className="mt-8 sm:mt-10">
              <button className="w-full bg-primary text-on-primary rounded-full py-4 sm:py-5 font-bold font-headline text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 cursor-not-allowed opacity-80">
                <span className="material-symbols-outlined animate-spin text-lg sm:text-xl">
                  progress_activity
                </span>
                <span>Wrapping...</span>
              </button>
              <p className="text-center mt-3 sm:mt-4 text-[10px] sm:text-xs text-zinc-600">
                Please do not close this window or refresh the page.
              </p>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      )}

      {/* Footer */}
      <footer
        className={`w-full bg-[#0e0e0e] border-t border-zinc-800/20 transition-opacity duration-300 ${
          isWrapping ? "opacity-30" : ""
        }`}
      >
        <div className="w-full py-8 sm:py-12 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 animate-fade-in-up">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="font-headline font-bold text-zinc-200 text-base sm:text-xl mb-2">
              Velum Kinetic Institution
            </div>
            <p className="text-zinc-500 max-w-xs leading-relaxed text-xs sm:text-sm">
              The high-performance privacy layer for institutional digital asset
              management.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 animate-fade-in-up delay-100">
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300 text-xs sm:text-sm"
              href="#"
            >
              Security
            </a>
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300 text-xs sm:text-sm"
              href="#"
            >
              API Docs
            </a>
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300 text-xs sm:text-sm"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-zinc-500 hover:text-[#befd5d] transition-colors duration-300 text-xs sm:text-sm"
              href="#"
            >
              Governance
            </a>
          </div>
          <div className="text-zinc-600 text-[10px] sm:text-xs animate-fade-in-up delay-200">
            © 2026 Velum Kinetic Institution
          </div>
        </div>
      </footer>
    </div>
  );
}
