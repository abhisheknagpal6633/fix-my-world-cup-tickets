'use client';

import { Coffee, Heart } from 'lucide-react';

export default function TipJar() {
  return (
    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-100 rounded-xl p-6 text-center shadow-sm">
      <div className="flex justify-center mb-3 text-indigo-600">
        <Heart size={32} className="animate-pulse" fill="currentColor" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        Did this save your match day?
      </h3>
      <p className="text-sm text-gray-600 mb-5 max-w-md mx-auto">
        This tool is run independently by fans. If we helped you avoid hours on hold or secured your entry into the stadium, consider buying the dev a coffee!
      </p>
      
      {/* Replace 'yourusername' with your actual BuyMeACoffee or Ko-fi username */}
      <a 
        href="https://www.buymeacoffee.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#FFDD00] hover:bg-[#FFD000] text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors border border-yellow-400 shadow-sm"
      >
        <Coffee size={20} />
        Buy me a coffee
      </a>
      
      <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-wider">
        Secured via Stripe / Apple Pay / Google Pay
      </p>
    </div>
  );
}