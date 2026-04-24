
import { useState } from 'react';
import type { CharacterCounterProps } from '../../types';
import type { TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 200,
  targetReadingTime
}) => {
  const [text, setText] = useState('');

  const calculateStats = (input: string): TextStats => {
    const words = input.trim().split(/\s+/).filter(Boolean);

    const wordCount = words.length;
    const characterCount = input.length;

    // avg reading speed ~200 words/min
    const readingTime = Math.ceil(wordCount / 200);

    return {
      characterCount,
      wordCount,
      readingTime
    };
  };

  const stats = calculateStats(text);

  return (
    <div className="max-w-xl mx-auto p-4">
      <TextInput onTextChange={setText} />

      <StatsDisplay stats={stats} />

      {/* Progress / Feedback */}
      <div className="mt-4">
        <p>
          Word Goal: {stats.wordCount} / {maxWords}
        </p>

        {stats.wordCount < minWords && (
          <p className="text-red-500">Minimum word count not reached</p>
        )}

        {stats.wordCount > maxWords && (
          <p className="text-red-500">Exceeded max word count</p>
        )}

        {targetReadingTime && (
          <p>
            Target Reading Time: {targetReadingTime} min
          </p>
        )}
      </div>
    </div>
  );
};