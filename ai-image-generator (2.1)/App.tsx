import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageDisplay } from './components/ImageDisplay';
import { PromptInput } from './components/PromptInput';
import { generateImagesFromPrompt } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrls, setImageUrls] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrls(null);

    try {
      const urls = await generateImagesFromPrompt(prompt);
      setImageUrls(urls);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="flex flex-col h-screen w-screen bg-dark-bg text-gray-200 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-40">
        <ImageDisplay 
          imageUrls={imageUrls} 
          isLoading={isLoading} 
          error={error} 
          prompt={prompt}
        />
      </main>
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handleGenerateImage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
