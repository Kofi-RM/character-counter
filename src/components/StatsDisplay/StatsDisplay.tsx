/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import type { StatsDisplayProps } from "../../types";
import { TextInput } from "../TextInput/TextInput";

export const StatsDisplay: React.FC<StatsDisplayProps> =  ({
stats,
showReadingTime = true
}) =>

   { 

    return (
        <><div className="w-full">
            <p>Characters: {stats.characterCount}</p>
            <p>Word Count: {stats.wordCount}</p>
            <p>Reading Time: {stats.readingTime}</p>
        </div></>
    )
}