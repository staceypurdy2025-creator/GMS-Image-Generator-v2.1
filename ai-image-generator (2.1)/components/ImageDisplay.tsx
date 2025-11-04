import React from 'react';

const Spinner: React.FC = () => (
  <div className="w-12 h-12 border-4 border-t-brand-purple border-gray-600 rounded-full animate-spinner-rotate"></div>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.905 3.079V2.75z" />
        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
    </svg>
);

interface ImageDisplayProps {
  imageUrls: string[] | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrls, isLoading, error, prompt }) => {

  const handleDownload = (imageUrl: string, index: number) => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    const fileName = prompt.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 40) || 'ai-generated-image';
    link.download = `${fileName}-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center h-full">
          <Spinner />
          <p className="mt-4 text-gray-400">Conjuring 4 masterpieces...</p>
          <p className="text-sm text-gray-500">This might take a moment.</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-400 bg-red-900/20 p-4 rounded-lg">
          <p className="font-semibold">Generation Failed</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      );
    }

    if (imageUrls && imageUrls.length > 0) {
      return (
        <div className="w-full max-w-3xl mx-auto grid grid-cols-2 gap-4">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative group w-full aspect-[9/16] bg-dark-input rounded-lg overflow-hidden shadow-lg">
              <img
                src={url}
                alt={`${prompt || "Generated AI image"} - Variation ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => handleDownload(url, index)}
                className="absolute bottom-3 right-3 bg-black/50 text-white p-3 rounded-full hover:bg-brand-purple/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brand-purple transition-all opacity-0 group-hover:opacity-100"
                aria-label={`Download image ${index + 1}`}
              >
                <DownloadIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="text-center text-gray-500 flex flex-col items-center justify-center h-full">
        <div className="w-24 h-24 mx-auto border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.158 0a.079.079 0 1 1-1.5 0 .079.079 0 0 1 1.5 0Z" />
            </svg>
        </div>
        <p className="mt-4">Your generated images will appear here.</p>
        <p className="text-sm text-gray-600">Enter a prompt below to see the magic.</p>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {renderContent()}
    </div>
  );
};
