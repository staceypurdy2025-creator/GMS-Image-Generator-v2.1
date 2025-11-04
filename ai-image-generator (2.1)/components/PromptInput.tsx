
import React from 'react';

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.544l4.252-1.215a.75.75 0 01.622.622l-1.215 4.252a.75.75 0 00.544.95l4.95 1.414a.75.75 0 00.95-.826l-2.289-8.01a.75.75 0 00-.95-.544l-7.032 2.01-2.01-7.032a.75.75 0 00-.544-.95z" />
    </svg>
);


interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-card/80 backdrop-blur-lg border-t border-gray-700 p-4">
      <div className="max-w-3xl mx-auto flex items-center space-x-3">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="A majestic lion wearing a crown in a futuristic city..."
          rows={1}
          className="flex-1 bg-dark-input rounded-lg p-3 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all duration-200"
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading || !prompt}
          className="p-3 rounded-full bg-brand-purple text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-brand-purple transition-all duration-200 shrink-0"
          aria-label="Generate image"
        >
            <SendIcon className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
};
