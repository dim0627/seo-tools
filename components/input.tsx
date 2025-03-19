import type { FC } from "react";

type InputProps = React.JSX.IntrinsicElements["input"];
export const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="block w-full rounded-lg border-0 p-2.5 text-slate-900 ring-2 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-black"
    />
  );
};
