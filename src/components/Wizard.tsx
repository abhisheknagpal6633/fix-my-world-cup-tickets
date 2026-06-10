'use client';

import { useState } from 'react';
import { diagnosticTree, DiagnosticNode } from '../data/diagnosticTree';
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';

export default function Wizard() {
  const [currentNodeId, setCurrentNodeId] = useState<string>('root');
  const [history, setHistory] = useState<string[]>([]);

  const currentNode: DiagnosticNode = diagnosticTree[currentNodeId];

  const handleOptionClick = (nextNodeId: string) => {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(nextNodeId);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const newHistory = [...history];
    const previousNodeId = newHistory.pop() as string;
    setHistory(newHistory);
    setCurrentNodeId(previousNodeId);
  };

  const handleRestart = () => {
    setHistory([]);
    setCurrentNodeId('root');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Wizard Header / Navigation */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        {history.length > 0 ? (
          <button 
            onClick={handleBack}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </button>
        ) : (
          <span className="text-sm font-medium text-gray-400">Step 1</span>
        )}
        
        {history.length > 0 && (
          <button 
            onClick={handleRestart}
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Restart
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {currentNode.title}
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {currentNode.description}
        </p>

        {/* Render Options if it's a Question Node */}
        {currentNode.type === 'question' && currentNode.options && (
          <div className="space-y-3">
            {currentNode.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.nextNodeId)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group"
              >
                <span className="font-medium text-gray-800 group-hover:text-blue-900">
                  {option.label}
                </span>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-blue-500 shrink-0 ml-4" />
              </button>
            ))}
          </div>
        )}

        {/* Render Steps & Cautions if it's a Solution Node */}
        {currentNode.type === 'solution' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {currentNode.steps && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  Step-by-Step Fix
                </h3>
                <ol className="list-decimal list-outside ml-5 space-y-3 text-green-800">
                  {currentNode.steps.map((step, index) => (
                    <li key={index} className="pl-1 leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {currentNode.cautions && (
              <div className="bg-red-50 border border-red-100 rounded-lg p-5">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="text-red-600" size={20} />
                  Crucial Warnings
                </h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  {currentNode.cautions.map((caution, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="font-bold shrink-0">•</span>
                      <span>{caution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}