/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import type { StatsDisplayProps } from "../../types";
import { TextInput } from "../TextInput/TextInput";

export const StatsDisplay: React.FC<StatsDisplayProps> =  ({
stats,
showReadingTime = true,
validWordCount = false
}) =>

   { 

    return (
        <><div className="w-full flex gap-4">
            <p>Characters: {stats.characterCount}</p>
            <p>Word Count:{validWordCount ? <span className="text-green-500"> {stats.wordCount}</span> : <span className="text-red-500"> {stats.wordCount}</span>}</p>
            <p>Reading Time: {stats.readingTimeMin != 0? stats.readingTimeMin: 0}:{stats.readingTimeSec != 0? String(stats.readingTimeSec).padStart(2,"0"): "00"}</p>
        </div></>
    )
}