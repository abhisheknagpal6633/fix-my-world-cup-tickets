'use client';

import { Mail, ShieldCheck, RefreshCw, Smartphone } from 'lucide-react';

interface VisualMockupProps {
  type: 'proxy_email' | 'wallet_sync';
}

export default function VisualMockup({ type }: VisualMockupProps) {
  if (type === 'proxy_email') {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm max-w-md mx-auto my-4 font-mono text-xs">
        {/* Mock Marketplace Header */}
        <div className="bg-gray-900 text-white px-3 py-2 flex items-center justify-between">
          <span className="font-sans font-bold">Ticket Portal Dashboard</span>
          <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded font-sans">
            Order Confirmed
          </span>
        </div>
        
        {/* Mock Order Details */}
        <div className="p-4 space-y-3 bg-gray-50 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span>Event:</span>
            <span className="font-bold font-sans">FIFA World Cup 2026</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Quantity:</span>
            <span className="font-bold">2x Category 2 Tickets</span>
          </div>
          
          {/* Highlighted Proxy Area */}
          <div className="bg-blue-50 border border-blue-200 rounded p-3 text-gray-900 mt-2">
            <div className="flex items-center gap-1.5 text-blue-700 font-sans font-semibold mb-1 text-[11px]">
              <Mail size={14} />
              YOUR TRANSFER PROXY EMAIL:
            </div>
            <div className="bg-white p-2 rounded border border-blue-300 select-all font-bold text-center text-blue-900 text-sm tracking-tight break-all">
              abhishek.n.98_fwc26@stubhubproxy.com
            </div>
            <p className="text-[10px] text-blue-600 font-sans mt-1.5 leading-normal">
              ▲ Use this <strong>exact</strong> proxy address above to create your new FIFA Ticketing App account. Do not use your personal email.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'wallet_sync') {
    return (
      <div className="border-4 border-gray-800 rounded-[2.5rem] overflow-hidden bg-gray-950 w-64 h-96 mx-auto my-4 shadow-md relative flex flex-col font-sans select-none">
        {/* Phone Notch */}
        <div className="absolute top-0 inset-x-0 h-4 bg-gray-800 rounded-b-xl w-32 mx-auto z-20"></div>
        
        {/* Simulated Wallet Header */}
        <div className="pt-6 px-4 pb-2 bg-gradient-to-b from-blue-950 to-gray-950 text-white flex justify-between items-center border-b border-gray-800">
          <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
            <Smartphone size={10} className="text-blue-400" /> FWC Wallet
          </span>
          <ShieldCheck size={14} className="text-green-400" />
        </div>

        {/* Empty Wallet / Drag Down Area */}
        <div className="flex-1 p-4 flex flex-col items-center justify-center text-center text-gray-400 relative">
          
          {/* Animated/Visual Sync Indicator */}
          <div className="animate-bounce mb-2">
            <RefreshCw size={24} className="text-blue-500 opacity-80" />
          </div>
          
          <div className="w-full border border-dashed border-gray-800 rounded-xl py-6 px-2 bg-gray-900/50">
            <span className="text-xs font-semibold text-gray-300 block mb-1">
              No Active Tickets Found
            </span>
            <p className="text-[10px] text-gray-500 leading-normal px-2">
              Firmly touch the screen and <strong>swipe down</strong> to force a cold synchronization with the core ticketing distribution servers.
            </p>
          </div>
        </div>

        {/* Footer Navigation Overlay */}
        <div className="bg-gray-900 p-2 border-t border-gray-800 text-center text-[9px] text-gray-500">
          App Build v26.4.2 • NTP Time Synced
        </div>
      </div>
    );
  }

  return null;
}