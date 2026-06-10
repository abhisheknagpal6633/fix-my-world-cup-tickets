import { Radio, Clock } from 'lucide-react';

export default function LiveBulletin() {
  return (
    <div className="bg-white border-l-4 border-blue-500 rounded-r-lg shadow-sm p-4 mb-8">
      <div className="flex items-center gap-2 mb-2">
        <Radio size={16} className="text-blue-600 animate-pulse" />
        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
          Live Community Bulletin
        </h3>
      </div>
      
      <div className="space-y-3">
        {/* Bulletin Item 1 */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
          <span className="flex items-center gap-1 text-gray-500 font-mono text-xs whitespace-nowrap shrink-0 sm:mt-0.5">
            <Clock size={12} /> 1 Hour Ago:
          </span>
          <span className="text-gray-700">
            <strong>Los Angeles Stadium:</strong> Offline scanners at Gate C. Switch your phone to airplane mode, open the ticket, and the dynamic QR code will still rotate locally.
          </span>
        </div>

        {/* Bulletin Item 2 */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
          <span className="flex items-center gap-1 text-gray-500 font-mono text-xs whitespace-nowrap shrink-0 sm:mt-0.5">
            <Clock size={12} /> 4 Hours Ago:
          </span>
          <span className="text-gray-700">
            StubHub transfers are currently experiencing a 45-minute delay from the time the seller hits Send to the email arriving. Do not panic if it isnt instant.
          </span>
        </div>
      </div>
    </div>
  );
}