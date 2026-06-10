import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3 sm:px-6">
      <div className="max-w-3xl mx-auto flex gap-3">
        <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
        <div className="text-sm text-yellow-800 leading-relaxed">
          <strong>Community Notice:</strong> This is an unofficial, open-source diagnostic utility built by fans, for fans. We are <strong>not</strong> affiliated with FIFA, StubHub, Viagogo, or any official vendor. We <strong>never</strong> ask for, collect, or store your passwords, ticket PDFs, or personal data. Use this tool at your own discretion.
        </div>
      </div>
    </div>
  );
}