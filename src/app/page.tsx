import Header from "../components/Header";
import Disclaimer from "../components/Disclaimer";
import Wizard from "../components/Wizard";
import LiveBulletin from "../components/LiveBulletin";

export default function Home() {
  return (
    <>
      <Header />
      <Disclaimer />

      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        {/* Professional Header Section */}
        <div className="mb-10 text-center">
          {/* Live System Status Badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-bold px-3 py-1.5 rounded-full border border-red-200 dark:border-red-900/50 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Match Day Ticket Alert
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl mb-4">
            Rescue your World Cup tickets.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Stuck with a pending transfer? Tickets not showing up in the FWC2026
            app? Answer a few questions below to get the exact crowdsourced
            workaround to secure your entry.
          </p>
        </div>

        {/* Live Updates Section */}
        <LiveBulletin />
        
        {/* The Diagnostic Engine Wrapper */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm transition-colors">
          <Wizard />
        </div>

        {/* High-Trust Footer Disclaimer */}
        <footer className="mt-16 pt-8 pb-4 text-center border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-500 max-w-lg mx-auto leading-relaxed">
            This is an independent, fan-to-fan troubleshooting utility. We are not affiliated with FIFA, StubHub, or Viagogo. No personal data or credentials are ever collected.
          </p>
        </footer>
      </main>
    </>
  );
}