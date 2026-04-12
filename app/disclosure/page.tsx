"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Disclosure() {
  const [walletAddress, setWalletAddress] = useState("");
  const [scope, setScope] = useState("Read Only: Balance");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authorization logic
    console.log("Authorizing:", { walletAddress, scope, selectedRole });
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar variant="app" />

      {/* Main Content */}
      <main className="flex-grow pt-24 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 animate-fade-in-up">
          <div className="max-w-2xl">
            <span className="text-primary font-label text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
              Privacy Governance
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-none text-on-background">
              Disclosure &amp; Access Control
            </h1>
            <p className="mt-4 sm:mt-6 text-on-surface-variant text-sm sm:text-lg leading-relaxed font-body">
              Manage the cryptographic boundaries of your institutional
              treasury. Define who can decrypt balances and strategy performance
              using Zero-Knowledge proofs.
            </p>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl border border-outline-variant/15 flex items-center gap-4 sm:gap-6 card-hover animate-fade-in-right delay-100">
            <div className="h-12 sm:h-16 w-12 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                lock_open
              </span>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                Current State
              </p>
              <p className="text-lg sm:text-xl font-bold text-on-background font-headline">
                Encrypted Session
              </p>
              <button className="mt-2 flex items-center gap-2 text-primary font-bold text-xs sm:text-sm group transition-all duration-300 hover:translate-x-1">
                Decrypt my view
                <span className="material-symbols-outlined text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Access Matrix Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Access Matrix Table */}
          <div className="lg:col-span-8 bg-surface-container rounded-xl p-6 sm:p-10 overflow-hidden relative card-hover animate-fade-in-up delay-200">
            <div className="flex justify-between items-center mb-8 sm:mb-10">
              <h2 className="font-headline text-xl sm:text-2xl font-bold">
                Access Matrix
              </h2>
              <span className="text-[10px] sm:text-xs font-label text-on-surface-variant bg-surface-container-high px-2 sm:px-3 py-1 rounded-full">
                Real-time Policy
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b border-outline-variant/15">
                    <th className="pb-4 sm:pb-6 font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant">
                      Resource
                    </th>
                    <th className="pb-4 sm:pb-6 font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant">
                      Me (Owner)
                    </th>
                    <th className="pb-4 sm:pb-6 font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant">
                      Auditor
                    </th>
                    <th className="pb-4 sm:pb-6 font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant">
                      Committee
                    </th>
                    <th className="pb-4 sm:pb-6 font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant">
                      Public
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  <tr>
                    <td className="py-6 sm:py-8">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface-variant text-base sm:text-lg">
                            account_balance_wallet
                          </span>
                        </div>
                        <span className="font-bold text-base sm:text-lg">
                          Balance
                        </span>
                      </div>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-secondary-container text-on-secondary px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        Can Decrypt
                      </span>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-secondary-container text-on-secondary px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        Can Decrypt
                      </span>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-surface-container-lowest text-outline px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        No Access
                      </span>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-surface-container-lowest text-outline px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        No Access
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 sm:py-8">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface-variant text-base sm:text-lg">
                            insights
                          </span>
                        </div>
                        <span className="font-bold text-base sm:text-lg">
                          Strategies
                        </span>
                      </div>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-secondary-container text-on-secondary px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        Can Decrypt
                      </span>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-surface-container-lowest text-outline px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        No Access
                      </span>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-secondary-container text-on-secondary px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        Can Decrypt
                      </span>
                    </td>
                    <td className="py-6 sm:py-8">
                      <span className="bg-surface-container-lowest text-outline px-2 sm:px-3 py-1 rounded-sm text-[9px] sm:text-xs font-bold uppercase tracking-tight">
                        No Access
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 animate-fade-in-right delay-300">
            {/* Grant Access Panel */}
            <div className="bg-surface-container-high rounded-xl p-6 sm:p-8 border border-primary/10 card-hover">
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                Grant Access Panel
              </h3>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleAuthorize}>
                <div>
                  <label className="block text-[10px] sm:text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                    Wallet address
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-md px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm focus:ring-1 focus:ring-primary placeholder:text-outline/50 text-white"
                    placeholder="0x..."
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                    Scope selector
                  </label>
                  <select
                    className="w-full bg-surface-container-lowest border-none rounded-md px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm focus:ring-1 focus:ring-primary appearance-none text-white"
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                  >
                    <option>Read Only: Balance</option>
                    <option>Read Only: All Data</option>
                    <option>Manager: Strategy Execution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                    Role label
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Auditor", "Partner", "Compliance"].map((role) => (
                      <button
                        key={role}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-[10px] sm:text-xs font-bold transition-colors ${
                          selectedRole === role
                            ? "bg-primary text-on-primary border-primary"
                            : "border-outline-variant/30 hover:bg-primary hover:text-on-primary"
                        }`}
                        type="button"
                        onClick={() => setSelectedRole(role)}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className="w-full py-3 sm:py-4 bg-primary text-on-primary rounded-full font-bold text-xs sm:text-sm mt-2 sm:mt-4 hover:shadow-[0_0_24px_rgba(178,240,81,0.3)] transition-all"
                  type="submit"
                >
                  Authorize Entity
                </button>
              </form>
            </div>

            {/* ZKP Proof Card */}
            <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 border border-outline-variant/15 card-hover animate-pulse-glow">
              <div className="flex items-start justify-between mb-4">
                <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-tertiary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary-fixed text-lg sm:text-xl">
                    verified_user
                  </span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant cursor-help text-base sm:text-lg">
                  info
                </span>
              </div>
              <h4 className="font-headline font-bold text-base sm:text-lg">
                ZKP Proof Active
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Access is managed via viewing keys. No private keys are ever
                shared with third parties.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Institutional Privacy */}
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant/15 flex flex-col items-center text-center group card-hover animate-fade-in-up delay-200">
            <div className="w-full h-32 sm:h-40 relative rounded-lg mb-4 sm:mb-6 overflow-hidden">
              <Image
                alt="Secure Encryption"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyFVybaTs6XCkk3Fsv8BUdlCS0EYIMokzZWlGW3rIhs0d_Am6ABLqCHnmgEraqoh5yLPLr5mS2PQWwdcJevGEbUO3GWZklE87QpcWa6cHbxx1dpKKrVz5t_DLVaTGXg21eR0-y4xE6Bb2fWe5MsPqWvDGR3rPpvE2wNy_g1_WzsICDQgrn2igwZqfF7-qx_tlDfYBhaNYp3ib4usSyLIbb2CgWKsMMHIxEhNV_nXgqZPYm9VQ_oQfV72Ys7LyPCE31fs2m80eDwLU"
              />
            </div>
            <h5 className="font-headline font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Institutional Privacy
            </h5>
            <p className="text-xs sm:text-sm text-on-surface-variant font-body">
              Compliant transparency that protects alpha and prevents
              front-running by concealing positions.
            </p>
          </div>

          {/* Auditor Onboarding */}
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant/15 flex flex-col items-center text-center group card-hover animate-fade-in-up delay-300">
            <div className="w-full h-32 sm:h-40 relative rounded-lg mb-4 sm:mb-6 overflow-hidden">
              <Image
                alt="Data Audit"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA5TS2h9g3ruefyg8akirbPRR-ly1T-mpsbnKS7cY0EBuj82FZmCwOlDpqfxdvACCGK1O-_QkyFTTEeVqhKmjZyflfRN3jjLr7dHzuIKqPkn0GYNTQxLtu4B2hbJp8TFK0LEFInflZ54DqkUedqSB6_HeL-88Njpqc5Bn-qAKDB6yNKvvAgKlu5TWav7wDQluXxV8nT5bOqn3TAvnEuY3jpoPUyksesHnm5sBPsOX8b4NT-38soP8fcekLSN1EgRotfpuC_iNcFh8"
              />
            </div>
            <h5 className="font-headline font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Auditor Onboarding
            </h5>
            <p className="text-xs sm:text-sm text-on-surface-variant font-body">
              Generate read-only viewing keys for regulatory requirements without
              losing custody control.
            </p>
          </div>

          {/* Multi-Sig Access */}
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant/15 flex flex-col items-center text-center group card-hover animate-fade-in-up delay-400">
            <div className="w-full h-32 sm:h-40 relative rounded-lg mb-4 sm:mb-6 overflow-hidden">
              <Image
                alt="Governance"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9TGH5Tlxc44wwzQ5bkXntuCLJV4N-lv8U-pyrQ1wHrFeQGC6haG31aVvN8fNC7PRnZWhchfGhR4uGebvsIA7go-CIEt-P5Szn7mvjAhFcBY1ugg1eeqSYtcQgpS3nZRfEXOKu06fqy-k7lnfBCpmdb9wypbJ9lpgl9saBW-LwZd4gsOCBskNJiQqG476CtmSr-xsI5ZYLiP0LzbuE7eWOGSVI5176UYzjxmrwJBLtlFaH_D8-fFyww_e9Qbj0k3dj4ILaILS5uqo"
              />
            </div>
            <h5 className="font-headline font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Multi-Sig Access
            </h5>
            <p className="text-xs sm:text-sm text-on-surface-variant font-body">
              Require consensus for sensitive data disclosure using threshold
              encryption schemes.
            </p>
          </div>
        </section>
      </main>

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
    </div>
  );
}
