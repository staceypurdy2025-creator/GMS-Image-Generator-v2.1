
import React from 'react';

const IconSparkles: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.84 2.84l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.84 2.84l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.84-2.84l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036a.75.75 0 00.568.568l1.036.258a.75.75 0 010 1.456l-1.036.258a.75.75 0 00-.568.568l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a.75.75 0 00-.568-.568l-1.036-.258a.75.75 0 010-1.456l1.036-.258a.75.75 0 00.568-.568l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.558l.52 1.82a.75.75 0 00.558.558l1.82.52a.75.75 0 010 1.424l-1.82.52a.75.75 0 00-.558.558l-.52 1.82a.75.75 0 01-1.424 0l-.52-1.82a.75.75 0 00-.558-.558l-1.82-.52a.75.75 0 010-1.424l1.82-.52a.75.75 0 00.558-.558l.52-1.82A.75.75 0 0116.5 15z" clipRule="evenodd" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-dark-card/50 backdrop-blur-sm shadow-md p-4 flex items-center justify-center border-b border-gray-700">
      <IconSparkles className="w-6 h-6 mr-3 text-brand-purple" />
      <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        AI Image Generator
      </h1>
    </header>
  );
};
