"use client";

import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import type { FC } from "react";
import { useForm } from "react-hook-form";

const combination = (input: string[], count: number): string[] => {
  if (count <= 0 || count > input.length) {
    return [];
  }

  const result: string[] = [];

  const generateCombinations = (
    current: string[],
    start: number,
    remaining: number
  ) => {
    if (remaining === 0) {
      result.push(current.join(", "));
      return;
    }

    for (let i = start; i <= input.length - remaining; i++) {
      generateCombinations([...current, input[i]], i + 1, remaining - 1);
    }
  };

  generateCombinations([], 0, count);
  return result;
};

export const Main: FC = () => {
  const form = useForm({
    defaultValues: {
      input: `a
b
c
d
e
f`,
      count: 2,
    },
  });

  const input = form.watch("input") as string;
  const adjusted = combination(input.split("\n"), form.watch("count"));

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <div className="flex flex-col gap-2">
          <Input
            type="number"
            {...form.register("count")}
            placeholder="組み合わせ数"
          />
        </div>
        <Textarea rows={40} {...form.register("input")} />
      </div>
      <div>
        <Textarea
          rows={40}
          value={adjusted.map((datum) => datum).join("\n")}
          readOnly
        />
      </div>
    </div>
  );
};
