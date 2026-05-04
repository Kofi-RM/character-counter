
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
    
    let readingTimeSec = Math.floor(wordCount / 3);
    let readingTimeMin = 0;
    if (readingTimeSec > 59) { 
      readingTimeMin = Math.floor(readingTimeSec / 60);
      readingTimeSec = readingTimeSec - (readingTimeMin * 60)
    }
    return {
      characterCount,
      wordCount,
      readingTimeMin,
      readingTimeSec
    };
  };

  const stats = calculateStats(text);
  let validWordCount;
if (stats.wordCount > maxWords || stats.wordCount < minWords) {validWordCount = false;

} else {
  validWordCount = true;
}
  return (
    <div className="max-w-xl mx-auto p-4">
      <TextInput onTextChange={setText} />

      <StatsDisplay stats={stats} validWordCount = {validWordCount} />

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