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
        {/* Intro Text */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
            Rescue your World Cup tickets.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Stuck with a pending transfer? Tickets not showing up in the FWC2026
            app? Answer a few questions below to get the exact crowdsourced
            workaround to secure your entry.
          </p>
        </div>

        <LiveBulletin />
        {/* The Diagnostic Engine */}
        <Wizard />

        {/* Footer Notes */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Built for the community. Data sourced from verified fixes on Reddit.
          </p>
        </div>
      </main>
    </>
  );
}
