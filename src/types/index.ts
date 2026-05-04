export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
   readingTimeMin: number;
      readingTimeSec: number;
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  validWordCount?: boolean;
}

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}