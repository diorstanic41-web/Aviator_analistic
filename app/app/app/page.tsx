"use main";
import React from 'react';

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-red-500 tracking-wide">AVIATOR ANALYTICS AI</h1>
          <p className="text-xs text-slate-400">Algorithmes de prédiction en temps réel</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Feed Connecté
        </div>
      </header>

      {/* Main Panel */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Dernier Multiplicateur */}
        <div className="bg-slate-800/50 border border-slate-800 p-4 rounded-xl text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Dernier Impact</p>
          <p className="text-4xl font-black text-slate-100 mt-2">1.85x</p>
        </div>

        {/* Card 2: Estimation Prochain Crash */}
        <div className="bg-slate-800/50 border border-slate-800 p-4 rounded-xl text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Indice Probable</p>
          <p className="text-4xl font-black text-red-500 mt-2">2.10x</p>
        </div>

        {/* Card 3: Confiance */}
        <div className="bg-slate-800/50 border border-slate-800 p-4 rounded-xl text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Taux de Confiance</p>
          <p className="text-4xl font-black text-emerald-400 mt-2">84%</p>
        </div>
      </section>

      {/* Analytics Section Placeholder */}
      <section className="bg-slate-800/40 border border-slate-800 rounded-xl p-5 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">Moniteur de données</h2>
        <div className="h-32 bg-slate-900/60 rounded-lg flex items-center justify-center border border-slate-800/60">
          <p className="text-xs text-slate-500">Graphique et flux de données en attente d'initialisation...</p>
        </div>
      </section>

      {/* Action Button */}
      <div className="text-center">
        <button className="w-full py-3 bg-red-600 hover:bg-red-700 font-bold rounded-xl transition duration-200 text-sm tracking-wider uppercase">
          Lancer l'Analyse Prédictive
        </button>
      </div>
    </main>
  );
}
