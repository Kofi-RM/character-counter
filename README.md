npm install
npm run dev
to run


Character Counter App

This is a simple React + TypeScript project that tracks what you type and gives you live feedback like word count, character count, and reading time.

StatsDisplay and TextInput are child nodes while CharacterCount is the parent.

---

 What it does

- Counts characters as you type
- Counts words in real time
- Estimates reading time
- Checks if you're within a word limit
- Updates everything instantly while typing

---

 How it works

When you type into the input:

1. The text state updates
2. The component re-renders
3. Stats get recalculated from the current text
4. The UI updates immediately

No refresh needed — everything is live.

---

Reading time

Reading time is estimated using a simple average reading speed. 180 words per minute on average.

It’s split into:
- Minutes
- Seconds

Reflection Questions
1. How did you handle state updates when the text changed?

I used useState to store the text input. Every time the user types, I update the state using setText, which triggers a re-render. On each render, I recalculate the stats based on the current text instead of storing them separately. That way everything always stays in sync with what the user has typed.

2. What considerations did you make when calculating reading time?

For reading time, I used a simple average reading speed to estimate how long the text would take to read. I broke it down into total seconds and then converted it into minutes and remaining seconds so it looks cleaner in the UI. I also made sure values under a minute still display correctly without breaking the format.

3. How did you ensure the UI remained responsive during rapid text input?

I kept things simple by not overusing state. Instead of storing calculated values in state, I derived everything directly from the text value during render. This avoided unnecessary updates and kept the typing experience smooth, even when entering text quickly.

4. What challenges did you face when implementing the statistics calculations?

The main challenge was figuring out what should actually be stored in state vs what should just be calculated. I originally tried storing too many values in state, which made things more complicated than they needed to be. I also had to think carefully about how to properly convert seconds into a readable minute/second format without messing up edge cases.