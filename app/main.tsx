"use client";

import { Textarea } from "@/components/textarea";
import type { FC } from "react";
import { useForm } from "react-hook-form";

type Adjusted = {
  word: string;
  adjusted: string;
  count: number;
};

const adjust = (input: string): Adjusted[] => {
  const words = input.split("\n");
  const adjustedWords = words.map((datum) =>
    datum.replaceAll("　", " ").split(" ").sort().join(" ")
  );

  const res: Adjusted[] = adjustedWords.map((word, i) => ({
    word: words[i],
    adjusted: word,
    count: adjustedWords.filter((datum) => datum === word).length,
  }));

  return res;
};

export const Main: FC = () => {
  const form = useForm();

  const input = form.watch("input") as string;
  const adjusted = adjust(input || "");

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Textarea rows={40} {...form.register("input")} />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 text-left">
          <th>単語</th>
          <th>整形済み</th>
          <th>出現数</th>
        </div>
        {adjusted.map(({ word, adjusted, count }) => (
          <div key={word} className="grid grid-cols-3 gap-4">
            <td>{word}</td>
            <td>{adjusted}</td>
            <td>{count}</td>
          </div>
        ))}
      </div>
      <div>
        <Textarea
          rows={40}
          value={adjusted.map(({ count }) => count).join("\n")}
          readOnly
        />
      </div>
    </div>
  );
};
