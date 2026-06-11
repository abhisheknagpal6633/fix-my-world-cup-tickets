import { Radio, AlertTriangle, Info } from 'lucide-react';

export default function LiveBulletin() {
  return (
    <div className="bg-white dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-500 rounded-r-lg shadow-sm p-4 mb-8">
      <div className="flex items-center gap-2 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">
        <Radio size={16} className="text-blue-600 dark:text-blue-400 animate-pulse" />
        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm uppercase tracking-wide">
          Live Community Bulletin
        </h3>
      </div>
      
      <div className="space-y-4">
        {/* Bulletin Item 1: LA Stadium (Relevant for June 12 USA Match) */}
        <div className="flex items-start gap-2.5 text-sm">
          <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-gray-900 dark:text-gray-100 mr-2">
              [ACTIVE] Los Angeles Stadium:
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              Offline scanners reported at Gate C. Switch your phone to airplane mode, open the ticket, and the dynamic QR code will still rotate locally.
            </span>
          </div>
        </div>

        {/* Bulletin Item 2: StubHub Global Delay */}
        <div className="flex items-start gap-2.5 text-sm">
          <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-gray-900 dark:text-gray-100 mr-2">
              [MONITORING] StubHub Transfers:
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              Transfers are currently experiencing a 45-minute delay from the time the seller hits "Send" to the proxy email arriving. Do not panic if it isn't instant.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}