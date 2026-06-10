import { Ticket, Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 py-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Ticket className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              FixMyWorldCupTickets
            </h1>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              FWC2026 Diagnostic Tool
            </p>
          </div>
        </div>

        {/* Live System Status */}
        <div className="flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </div>
          <span className="text-xs font-semibold text-red-700">
            FIFA App: Transfer Delays Reported
          </span>
        </div>

      </div>
    </header>
  );
}