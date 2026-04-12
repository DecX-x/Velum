"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Treasury() {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  return (
    <div className="min-h-screen page-transition">
      <Navbar variant="app" />

      {/* Main Content */}
      <main
        className={`max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-20 sm:pb-32 ${
          isDepositModalOpen ? "opacity-30 pointer-events-none" : ""
        }`}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 animate-fade-in-up">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="bg-secondary-container text-on-secondary px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                Manager
              </span>
              <span className="text-zinc-500 font-mono text-xs sm:text-sm tracking-tight">
                0x8F2e...A9C4
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-none">
              Institutional{" "}
              <span className="text-primary italic">Treasury</span>
            </h1>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button className="bg-surface-container-highest hover:bg-zinc-800 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base btn-hover animate-fade-in-right delay-100">
              <span className="material-symbols-outlined text-primary text-base sm:text-lg">
                visibility
              </span>
              Reveal My View
            </button>
            <button
              className="bg-primary text-on-primary px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 flex items-center gap-2 text-sm sm:text-base btn-hover animate-fade-in-right delay-200"
              onClick={() => setIsDepositModalOpen(true)}
            >
              <span className="material-symbols-outlined text-base sm:text-lg">
                add_circle
              </span>
              Deposit
            </button>
          </div>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Hidden Balance Card */}
          <div className="sm:col-span-2 bg-surface-container rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] relative overflow-hidden group card-hover animate-fade-in-up delay-100">
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <p className="text-zinc-500 font-medium text-xs sm:text-sm tracking-wide">
                  Treasury Balance
                </p>
                <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors text-lg sm:text-xl">
                  security
                </span>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                <div className="h-8 sm:h-10 w-32 sm:w-48 bg-surface-container-highest rounded-md animate-pulse"></div>
                <span className="text-zinc-600 font-mono text-xs sm:text-sm">
                  HIDDEN
                </span>
              </div>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-primary text-xs sm:text-sm font-bold cursor-pointer group-hover:translate-x-1 transition-transform">
              <span>Decrypt balance state</span>
              <span className="material-symbols-outlined text-xs sm:text-sm">
                arrow_forward
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Available to Allocate */}
          <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 flex flex-col justify-between card-hover animate-fade-in-up delay-200">
            <div>
              <p className="text-zinc-500 font-medium text-[10px] sm:text-sm tracking-wide mb-1 sm:mb-2">
                Available to Allocate
              </p>
              <h3 className="text-xl sm:text-3xl font-headline font-bold">
                4.2M{" "}
                <span className="text-zinc-600 text-base sm:text-lg">
                  USDC
                </span>
              </h3>
            </div>
            <div className="bg-secondary-container/20 border border-secondary-container/30 px-2 sm:px-3 py-1 rounded-full w-fit">
              <span className="text-secondary text-[9px] sm:text-[10px] font-bold uppercase">
                Liquid
              </span>
            </div>
          </div>

          {/* Locked Assets */}
          <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 flex flex-col justify-between card-hover animate-fade-in-up delay-300">
            <div>
              <p className="text-zinc-500 font-medium text-[10px] sm:text-sm tracking-wide mb-1 sm:mb-2">
                Locked / Timelock
              </p>
              <h3 className="text-xl sm:text-3xl font-headline font-bold">
                12.8M{" "}
                <span className="text-zinc-600 text-base sm:text-lg">
                  WETH
                </span>
              </h3>
            </div>
            <div className="text-zinc-500 text-[10px] sm:text-xs font-medium">
              Next Unlock: 14 Days
            </div>
          </div>
        </div>

        {/* Disclosure & Table Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Table Sidebar - Contextual Actions */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4 animate-fade-in-left delay-200">
            <div className="bg-surface-container p-4 sm:p-6 rounded-xl border border-zinc-800/20 card-hover">
              <h4 className="font-bold mb-3 sm:mb-4 text-[10px] sm:text-sm tracking-widest uppercase text-zinc-500">
                Disclosure Status
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-300">
                    Identity Shield
                  </span>
                  <span
                    className="text-primary material-symbols-outlined text-base sm:text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-300">
                    Value Obfuscation
                  </span>
                  <span
                    className="text-primary material-symbols-outlined text-base sm:text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-300">
                    Compliance Logic
                  </span>
                  <span className="text-zinc-600 material-symbols-outlined text-base sm:text-lg">
                    radio_button_unchecked
                  </span>
                </div>
              </div>
              <button className="w-full mt-4 sm:mt-6 py-2 sm:py-3 border border-outline-variant/30 rounded-lg text-xs sm:text-sm font-bold hover:bg-zinc-800 transition-colors">
                Manage Privacy
              </button>
            </div>
            <div className="rounded-xl overflow-hidden aspect-video relative group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc1KJFCJCMei-ZxyqWH_h9lkHWvdfZduS16S7CTnCMMuzywH6jWE5PR5nvb3u_F8I2ptRLfN4pm2yTEt2SgxDViqg3p_nuDr71ZGTIA49E0lZ87QatK1mSSYm_QmrG11SDfgA7LEzzMKQ_cVqnPwGVaqXfp6vo-Rg_i5BY8Nuw10T-jqzLzGzFyv6Waqwaj0y5F4apWP4XFotzCatIY5aodvuePdm2p6fsLVCjLbgd0u0IDJ9HiaTtmzlzP0POf7wuls8aOYpjgco"
                alt="Analytics visualization"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4 sm:p-6">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-2">
                  analytics
                </span>
                <p className="text-xs sm:text-sm font-bold">
                  Advanced Analytics
                </p>
                <p className="text-[9px] sm:text-[10px] text-zinc-400">
                  Restricted for Managers
                </p>
              </div>
            </div>
          </div>

          {/* Main Activity Table */}
          <div className="lg:col-span-9 bg-surface-container rounded-xl overflow-hidden card-hover animate-fade-in-right delay-300">
            <div className="p-4 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 border-b border-zinc-800/30">
              <h3 className="text-lg sm:text-xl font-headline font-bold">
                Recent Activity
              </h3>
              <div className="flex gap-2 sm:gap-4">
                <button className="text-[10px] sm:text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest">
                  All
                </button>
                <button className="text-[10px] sm:text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest">
                  Deposits
                </button>
                <button className="text-[10px] sm:text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest">
                  Withdrawals
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                    <th className="px-4 sm:px-8 py-4 sm:py-6">
                      Transaction ID
                    </th>
                    <th className="px-4 sm:px-8 py-4 sm:py-6">Type</th>
                    <th className="px-4 sm:px-8 py-4 sm:py-6">Asset</th>
                    <th className="px-4 sm:px-8 py-4 sm:py-6 text-right">
                      Amount
                    </th>
                    <th className="px-4 sm:px-8 py-4 sm:py-6 text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/30">
                  {/* Hidden Row */}
                  <tr className="hover:bg-zinc-800/20 transition-colors group">
                    <td className="px-4 sm:px-8 py-4 sm:py-6 font-mono text-[10px] sm:text-xs text-zinc-400">
                      0x...e420
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-sm font-medium">
                      Deposit
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-700"></div>
                        <span className="text-[10px] sm:text-sm italic text-zinc-500">
                          Decrypt to View
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-right">
                      <span className="bg-surface-container-highest px-2 sm:px-3 py-1 rounded text-zinc-600 text-[9px] sm:text-xs animate-pulse">
                        HIDDEN
                      </span>
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-right">
                      <span className="text-primary text-[10px] sm:text-xs font-bold">
                        Complete
                      </span>
                    </td>
                  </tr>
                  {/* Visible Row */}
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="px-4 sm:px-8 py-4 sm:py-6 font-mono text-[10px] sm:text-xs text-zinc-400">
                      0x...f102
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-sm font-medium">
                      Withdrawal
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary-container flex items-center justify-center">
                          <span className="text-[7px] sm:text-[8px] font-bold text-secondary">
                            US
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm">USDC</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-right font-headline font-bold text-sm sm:text-base">
                      250,000
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-right">
                      <span className="text-primary text-[10px] sm:text-xs font-bold">
                        Complete
                      </span>
                    </td>
                  </tr>
                  {/* Another Hidden Row */}
                  <tr className="hover:bg-zinc-800/20 transition-colors group">
                    <td className="px-4 sm:px-8 py-4 sm:py-6 font-mono text-[10px] sm:text-xs text-zinc-400">
                      0x...99b1
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-sm font-medium">
                      Deposit
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-700"></div>
                        <span className="text-[10px] sm:text-sm italic text-zinc-500">
                          Decrypt to View
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-right">
                      <span className="bg-surface-container-highest px-2 sm:px-3 py-1 rounded text-zinc-600 text-[9px] sm:text-xs animate-pulse">
                        HIDDEN
                      </span>
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 text-right">
                      <span className="text-zinc-500 text-[10px] sm:text-xs font-bold">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 sm:p-8 text-center border-t border-zinc-800/30">
              <button className="text-zinc-500 hover:text-primary font-bold text-xs sm:text-sm transition-colors">
                View All Archive Activity
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Deposit Modal Overlay */}
      {isDepositModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsDepositModalOpen(false)}
        >
          {/* Deposit Modal */}
          <div
            className="w-full max-w-xl bg-[#191919]/95 backdrop-blur-xl p-6 sm:p-10 rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-outline-variant/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6 sm:mb-8">
              <div>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Deposit Assets
                </h2>
                <p className="text-on-surface-variant text-xs sm:text-sm mt-1">
                  Institutional yield onboarding portal.
                </p>
              </div>
              <button
                className="material-symbols-outlined text-zinc-500 hover:text-white transition-colors"
                onClick={() => setIsDepositModalOpen(false)}
              >
                close
              </button>
            </div>

            <form className="space-y-4 sm:space-y-6">
              {/* Token Selector */}
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                  Select Asset
                </label>
                <div className="relative">
                  <button
                    className="w-full bg-surface-container-lowest h-14 sm:h-16 rounded-lg px-4 sm:px-6 flex items-center justify-between border border-transparent focus:border-primary transition-all group"
                    type="button"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                        <Image
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVjyOdHxe_AqyGn3lIn-qYV2hSbUSFthf5IyCEIMdqKeLuaL6M84UcAmbRbbEojBGsDsnKB1Mqz2LvB29puJVjF44ZA0vHtR6MJDwtdQjIJBY--qSbJeUT7n17Qkvr-8yGNXQEBXIimNEw0cA-b7x4UNs8hNVG6hq0u1__aKDXqM6piwCUzF3y19RyyzZJOjRvWa737ASDEjKQ6vdnq1z6v7MOtmO6ZNxjXk1gN-2ilfJ_9vlygufrCPUf9Mr0NAL0Wgm-pdMe5GA"
                          alt="USDC"
                          width={24}
                          height={24}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white leading-none text-sm sm:text-base">
                          USDC
                        </div>
                        <div className="text-[10px] sm:text-xs text-zinc-500">
                          USD Coin (ERC-20)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-[10px] sm:text-sm text-zinc-400">
                        Balance: 1.2M
                      </span>
                      <span className="material-symbols-outlined text-zinc-500 group-hover:text-primary text-lg sm:text-xl">
                        expand_more
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Encrypted Amount Input */}
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                  Deposit Amount
                </label>
                <div className="relative group">
                  <input
                    className="w-full bg-surface-container-lowest h-16 sm:h-20 rounded-lg px-4 sm:px-6 text-xl sm:text-3xl font-headline font-bold border-transparent focus:ring-0 focus:border-primary transition-all placeholder:text-zinc-800 text-white"
                    placeholder="0.00"
                    type="text"
                  />
                  <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button
                      className="px-2 sm:px-3 py-1 bg-surface-container-high rounded text-[9px] sm:text-[10px] font-bold text-primary-dim uppercase tracking-tighter hover:bg-zinc-800 transition-colors"
                      type="button"
                    >
                      Max
                    </button>
                    <span
                      className="material-symbols-outlined text-primary-dim text-base sm:text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      lock
                    </span>
                  </div>
                </div>
                <p className="text-[9px] sm:text-[10px] text-zinc-600 italic px-2">
                  Encryption active: Amount is obfuscated from public mempools.
                </p>
              </div>

              {/* Notes Field */}
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                  Institutional Notes
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest rounded-lg p-3 sm:p-4 text-xs sm:text-sm border-transparent focus:ring-0 focus:border-primary transition-all resize-none placeholder:text-zinc-700 text-white"
                  placeholder="Compliance tag or internal reference..."
                  rows={3}
                ></textarea>
              </div>

              {/* Action Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  className="w-full bg-primary h-12 sm:h-16 rounded-full font-headline text-base sm:text-lg font-bold text-on-primary hover:shadow-[0_0_40px_rgba(178,240,81,0.3)] transition-all flex items-center justify-center gap-2 sm:gap-3 active:scale-[0.98]"
                  type="button"
                >
                  Confirm Secure Deposit
                  <span className="material-symbols-outlined text-lg sm:text-xl">
                    arrow_forward
                  </span>
                </button>
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                      verified_user
                    </span>
                    2/3 Multi-sig
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                      bolt
                    </span>
                    Instant Confirmation
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className={`w-full bg-[#0e0e0e] border-t border-zinc-800/20 transition-opacity duration-300 ${
          isDepositModalOpen ? "opacity-30" : ""
        }`}
      >
        <div className="w-full py-8 sm:py-12 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 sm:gap-0 animate-fade-in-up">
          <div className="font-headline font-bold text-zinc-200 text-sm sm:text-base mb-4 sm:mb-0">
            Velum Kinetic Institution
          </div>
          <div className="flex gap-4 sm:gap-8 mb-4 sm:mb-0 animate-fade-in-up delay-100">
            <a
              className="text-zinc-500 text-xs sm:text-sm font-body hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              Security
            </a>
            <a
              className="text-zinc-500 text-xs sm:text-sm font-body hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              API Docs
            </a>
            <a
              className="text-zinc-500 text-xs sm:text-sm font-body hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-zinc-500 text-xs sm:text-sm font-body hover:text-[#befd5d] transition-colors duration-300"
              href="#"
            >
              Governance
            </a>
          </div>
          <div className="text-zinc-500 text-xs sm:text-sm font-body animate-fade-in-up delay-200">
            © 2026 Velum Kinetic Institution
          </div>
        </div>
      </footer>
    </div>
  );
}
